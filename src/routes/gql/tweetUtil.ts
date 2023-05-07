import express from "express";
import { verify } from "jsonwebtoken";
import { requireAuth } from "../../middleware/auth";
import Tweet from "../../models/Tweet";
import User from "../../models/User";
import { IGenericFeatures, IJwtDecoded } from "../../types/graphql";
import { IUser } from "../../types/guide";
import { IUserMention } from "./userUtils";

interface IUserTweetsVariables {
	userId: string;
	count: number;
	includePromotedContent: boolean;
	withQuickPromoteEligibilityTweetFields: boolean;
	withVoice: boolean;
	withV2Timeline: boolean;
}

interface IFavouriteTweetVariables {
	tweet_id: string;
}

export async function UserTweets(req: express.Request, res: express.Response) {
	const loggedInUser = req.cookies["jwt"]
		? await User.findOne({
				id_string: (
					verify(req.cookies["jwt"], process.env.JWT_SECRET!) as IJwtDecoded
				).id,
		  })
		: undefined;
	const features = JSON.parse(
		req.query.features!.toString()
	) as IGenericFeatures;
	const variables = JSON.parse(
		req.query.variables!.toString()
	) as IUserTweetsVariables;
	if (!features || !variables)
		return res.status(400).send({ msg: "Missing parameters" });
	const user = await User.findOne({ id: variables.userId });
	if (!user) return res.status(400).send({ msg: "User not found" });
	const userTweets = [];
	const postedTweets = Array.from(user.posted_tweet_ids);
	for (const id of postedTweets) {
		const tweet = await Tweet.findOne({ id_str: id });
		userTweets.push({
			is_translatable: false,
			legacy: tweet
				? Object.assign(tweet, {
						favorited: loggedInUser
							? loggedInUser.liked_tweet_ids.includes(tweet.id_str || "")
							: false,
				  })
				: tweet,
			source: tweet?.source,
			unmention_data: {},
			unmention_info: {},
			views: {
				state: "Enabled",
			},
		});
	}
	return res.status(200).send({
		data: {
			user: {
				result: {
					__typename: "User",
					timeline_v2: {
						timeline: {
							instructions: [
								{
									type: "TimelineClearCache",
								},
								{
									entries: [
										...userTweets.map((tweet, index) => {
											if (!tweet.legacy) return;
											return {
												content: {
													__typename: "TimelineTimelineItem",
													entryType: "TimelineTimelineItem",
													itemContent: {
														__typename: "TimelineTweet",
														itemType: "TimelineTweet",
														tweetDisplayType: "Tweet",
														tweet_results: {
															result: {
																__typename: "Tweet",
																core: {
																	user_results: {
																		result: {
																			__typename: "User",
																			affiliates_highlighted_label:
																				user.ext?.highlightedLabel?.r?.ok,
																			business_account: {},
																			id: user._id,
																			is_blue_verified:
																				user.ext_is_blue_verified,
																			legacy: {
																				...(user as any)._doc,
																			},
																			profile_image_shape:
																				user.ext_profile_image_shape,
																			rest_id: user.id,
																		},
																	},
																},
																edit_perspective: {
																	favorited: false,
																	retweeted: false,
																},
																is_translatable: false,
																legacy: tweet.legacy,
																quick_promote_eligibility: {
																	eligibility: "IneligibleNotProfessional",
																},
																rest_id: Number(tweet.legacy.id_str),
																source: tweet.source,
																unmention_data: {},
																views: tweet.views,
															},
														},
													},
												},
												entryId: `tweet-${tweet.legacy.id_str}`,
												sortIndex: index.toString(),
											};
										}),
									],
									type: "TimelineAddEntries",
								},
							],
							responseObjects: {
								feedbackActions: [
									{
										key: "589986573",
										value: {
											feedbackType: "Dismiss",
											feedbackUrl:
												"/1.1/onboarding/fatigue.json?flow_name=signup-persistent-nux&fatigue_group_name=PersistentNuxFatigueGroup&action_name=dismiss&scribe_name=dismiss&display_location=profile_best&served_time_secs=1682985304&injection_type=tile_carousel",
											hasUndoAction: false,
											prompt: "See less often",
										},
									},
								],
								immediateReactions: [],
							},
						},
					},
				},
			},
		},
	});
}

export async function HomeTimeline(
	req: express.Request,
	res: express.Response
) {
	const unauthorized = await requireAuth(req, res);
	if (unauthorized) return;
	const userId = req.cookies["jwt"]
		? ((verify(req.cookies["jwt"], process.env.JWT_SECRET!) as IJwtDecoded)
				.id as number)
		: undefined;
	const loggedInUser = await User.findOne({
		id_string: userId,
	});
	if (!loggedInUser) return res.status(400).send({ msg: "Not authenticated" });
	const userTweets = [];
	const postedTweets = await Tweet.find().limit(50);
	for (const tweet of postedTweets) {
		const user = await User.findOne({ id_string: tweet.user_id_str });
		if (!user) return res.status(400).send({ msg: "User not found" });
		userTweets.push({
			is_translatable: false,
			legacy: Object.assign(tweet, {
				favorited: loggedInUser.liked_tweet_ids.includes(tweet.id_str || ""),
			}),
			unmention_data: {},
			unmention_info: {},
			views: tweet.ext_views,
			user: user,
		});
	}
	return res.status(200).send({
		data: {
			home: {
				home_timeline_urt: {
					instructions: [
						{
							entries: [
								...userTweets.map((tweet, index) => {
									if (!tweet.legacy) return;
									return {
										content: {
											__typename: "TimelineTimelineItem",
											entryType: "TimelineTimelineItem",
											itemContent: {
												__typename: "TimelineTweet",
												itemType: "TimelineTweet",
												tweetDisplayType: "Tweet",
												tweet_results: {
													result: {
														__typename: "Tweet",
														core: {
															user_results: {
																result: {
																	__typename: "User",
																	affiliates_highlighted_label:
																		tweet.user.ext?.highlightedLabel?.r?.ok,
																	business_account: {},
																	id: tweet.user._id,
																	is_blue_verified:
																		tweet.user.ext_is_blue_verified,
																	legacy: {
																		...(tweet.user as any)._doc,
																		entities: {
																			user_mentions: (
																				tweet.legacy.entities
																					?.user_mentions as IUserMention[]
																			).map((mention) => {
																				return {
																					a: true,
																				};
																			}),
																		},
																	},
																	profile_image_shape:
																		tweet.user.ext_profile_image_shape,
																	rest_id: tweet.user.id,
																},
															},
														},
														edit_perspective: {
															favorited: false,
															retweeted: false,
														},
														is_translatable: false,
														legacy: tweet.legacy,
														quick_promote_eligibility: {
															eligibility: "IneligibleNotProfessional",
														},
														rest_id: Number(tweet.legacy.id_str),
														source: tweet.legacy.source,
														unmention_data: {},
														views: tweet.views,
													},
												},
											},
										},
										entryId: `tweet-${tweet.legacy.id_str}`,
										sortIndex: index.toString(),
									};
								}),
							],
							type: "TimelineAddEntries",
						},
					],
					responseObjects: {
						feedbackActions: [
							{
								key: "589986573",
								value: {
									feedbackType: "Dismiss",
									feedbackUrl:
										"/1.1/onboarding/fatigue.json?flow_name=signup-persistent-nux&fatigue_group_name=PersistentNuxFatigueGroup&action_name=dismiss&scribe_name=dismiss&display_location=profile_best&served_time_secs=1682985304&injection_type=tile_carousel",
									hasUndoAction: false,
									prompt: "See less often",
								},
							},
						],
						immediateReactions: [],
					},
				},
			},
		},
	});
}

export async function FavoriteTweet(
	req: express.Request,
	res: express.Response
) {
	const unauthorized = await requireAuth(req, res);
	if (unauthorized) return;
	const user = await User.findOne({
		id_string: (
			verify(req.cookies["jwt"], process.env.JWT_SECRET!) as IJwtDecoded
		).id.toString(),
	});
	if (!user) return res.status(400).send({ msg: "Not authenticated" });
	const variables = req.body.variables as IFavouriteTweetVariables;
	const tweet = await Tweet.findOne({ id_str: variables.tweet_id });
	if (!tweet) return res.status(400).send({ msg: "Tweet not found" });
	if (!user.liked_tweet_ids.includes(variables.tweet_id)) {
		user.liked_tweet_ids.push(variables.tweet_id);
		tweet.favorite_count! += 1;
		await user.save();
		await tweet.save();
	} else {
		return res.status(400).send({ data: { favourte_tweet: "NOT DONE" } });
	}
	return res.status(200).send({ data: { favorite_tweet: "Done" } });
}

export async function UnfavoriteTweet(
	req: express.Request,
	res: express.Response
) {
	const unauthorized = await requireAuth(req, res);
	if (unauthorized) return;
	const user = await User.findOne({
		id_string: (
			verify(req.cookies["jwt"], process.env.JWT_SECRET!) as IJwtDecoded
		).id.toString(),
	});
	if (!user) return res.status(400).send({ msg: "Not authenticated" });
	const variables = req.body.variables as IFavouriteTweetVariables;
	const tweet = await Tweet.findOne({ id_str: variables.tweet_id });
	if (!tweet) return res.status(400).send({ msg: "Tweet not found" });
	if (user.liked_tweet_ids.includes(variables.tweet_id)) {
		user.liked_tweet_ids = user.liked_tweet_ids.filter(
			(id) => id !== variables.tweet_id
		);
		tweet.favorite_count! -= 1;
		await user.save();
		await tweet.save();
	} else {
		return res.status(400).send({ data: { unfavorite_tweet: "NOT DONE" } });
	}
	return res.status(200).send({ data: { unfavorite_tweet: "Done" } });
}
