import express from "express";
import { verify } from "jsonwebtoken";
import { requireAuth } from "../../middleware/auth";
import Tweet from "../../models/Tweet";
import User from "../../models/User";
import {
	ICreateTweetBody,
	IGenericFeatures,
	IJwtDecoded,
} from "../../types/graphql";
import { IUser } from "../../types/guide";
import { formatDate } from "../../util/formatDate";
import { log } from "../../util/logging";
import { randInt } from "../../util/randUtil";
import { IUserMention } from "./user";
import { addNotification } from "../../util/notifications";

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

export async function CreateTweet(req: express.Request, res: express.Response) {
	const unauthorized = await requireAuth(req, res);
	if (unauthorized) return;
	const body = req.body as ICreateTweetBody;
	const id = (
		verify(req.cookies["jwt"], process.env.JWT_SECRET!) as IJwtDecoded
	).id as number;
	const user = await User.findOne({ id });
	if (!user) return res.status(400).send({ msg: "User not found" });
	const user_mentions = [] as IUserMention[];
	const matches = body.variables.tweet_text.matchAll(/@(\S+)/gm);
	for (const match of matches) {
		const withTag = match[0];
		const withoutTag = match[1];
		const user = await User.findOne({ screen_name: withoutTag });
		user_mentions.push({
			id_str: user?.id_string,
			name: user?.name,
			screen_name: user?.screen_name,
			indices: [match.index, withTag.length + (match.index || 0)],
		});
	}
	const tweetId = randInt(12);
	const tweetData = {
		edit_perspective: {
			favorited: false,
			retweeted: false,
		},
		is_translatable: false,
		legacy: {
			bookmark_count: 0,
			bookmarked: false,
			conversation_id_str: tweetId.toString(),
			created_at: formatDate(new Date()),
			display_text_range: [0, body.variables.tweet_text.length],
			entities: {
				hashtags: [],
				symbols: [],
				urls: [],
				user_mentions,
			},
			favorite_count: 0,
			favorited: false,
			full_text: body.variables.tweet_text,
			id: tweetId,
			id_str: tweetId.toString(),
			is_quote_status: false,
			lang: "en",
			quote_count: 0,
			reply_count: 0,
			retweet_count: 0,
			retweeted: false,
			user_id_str: user.id_string,
		},
		source:
			'<a href="https://mobile.twitter.com" rel="nofollow">Blue Web App</a>',
		unmention_data: {},
		unmention_info: {},
		views: {
			state: "Enabled",
		},
	};
	const tweet = new Tweet({
		bookmark_count: tweetData.legacy.bookmark_count,
		bookmarked: tweetData.legacy.bookmarked,
		conversation_id_str: tweetData.legacy.conversation_id_str,
		created_at: tweetData.legacy.created_at,
		display_text_range: tweetData.legacy.display_text_range,
		entities: {
			hashtags: tweetData.legacy.entities.hashtags,
			symbols: tweetData.legacy.entities.symbols,
			urls: tweetData.legacy.entities.urls,
			user_mentions,
		},
		favorite_count: tweetData.legacy.favorite_count,
		favorited: tweetData.legacy.favorited,
		full_text: tweetData.legacy.full_text,
		id_str: tweetData.legacy.id_str,
		is_quote_status: tweetData.legacy.is_quote_status,
		lang: tweetData.legacy.lang,
		quote_count: tweetData.legacy.quote_count,
		reply_count: tweetData.legacy.reply_count,
		retweet_count: tweetData.legacy.retweet_count,
		retweeted: tweetData.legacy.retweeted,
		user_id_str: tweetData.legacy.user_id_str,
	});
	await tweet.save();
	user.posted_tweet_ids.push(tweetId.toString());
	await user.save();
	log(`${user.name} (@${user.screen_name}) just posted a tweet:`);
	log(`"${tweet.full_text}"`);
	addNotification("You just posted a tweet!", "internal", user.id_string!);
	return res.status(200).send({
		// data: {
		// 	create_tweet: {
		// 		tweet_results: {
		// 			result: {
		// 				core: {
		// 					user_results: {
		// 						result: {
		// 							__typename: "User",
		// 							affiliates_highlighted_label:
		// 								user.ext?.highlightedLabel?.r?.ok,
		// 							business_account: {},
		// 							id: user._id,
		// 							is_blue_verified: user.ext_is_blue_verified,
		// 							legacy: {
		// 								created_at: user.created_at,
		// 								default_profile: user.default_profile,
		// 								default_profile_image: user.default_profile_image,
		// 								description: user.description,
		// 								entities: user.entities,
		// 								fast_followers_count: user.fast_followers_count,
		// 								favourites_count: user.favourites_count,
		// 								followers_count: user.followers_count,
		// 								friends_count: user.friends_count,
		// 								has_custom_timelines: user.has_custom_timelines,
		// 								is_translator: user.is_translator,
		// 								listed_count: user.listed_count,
		// 								location: user.location,
		// 								media_count: user.media_count,
		// 								name: user.name,
		// 								normal_followers_count: user.normal_followers_count,
		// 								pinned_tweet_ids_str: user.pinned_tweet_ids_str,
		// 								possibly_sensitive: false,
		// 								profile_image_url_https: user.profile_image_url_https,
		// 								profile_interstitial_type: "",
		// 								screen_name: user.screen_name,
		// 								statuses_count: user.statuses_count,
		// 								translator_type: user.translator_type,
		// 								verified: user.verified,
		// 								withheld_in_countries: user.withheld_in_countries,
		// 							},
		// 							profile_image_shape: user.ext_profile_image_shape,
		// 							rest_id: user.id,
		// 						},
		// 					},
		// 				},
		// 				...tweetData,
		// 			},
		// 		},
		// 	},
		// },
		data: {
			create_tweet: {
				tweet_results: {
					result: {
						core: {
							user_results: {
								result: {
									__typename: "User",
									affiliates_highlighted_label:
										user.ext?.highlightedLabel?.r?.ok,
									business_account: {},
									id: user._id,
									is_blue_verified: user.ext_is_blue_verified,
									legacy: {
										created_at: user.created_at,
										default_profile: user.default_profile,
										default_profile_image: user.default_profile_image,
										description: user.description,
										entities: user.entities,
										fast_followers_count: user.fast_followers_count,
										favourites_count: user.favourites_count,
										followers_count: user.followers_count,
										friends_count: user.friends_count,
										has_custom_timelines: user.has_custom_timelines,
										is_translator: user.is_translator,
										listed_count: user.listed_count,
										location: user.location,
										media_count: user.media_count,
										name: user.name,
										normal_followers_count: user.normal_followers_count,
										pinned_tweet_ids_str: user.pinned_tweet_ids_str,
										possibly_sensitive: false,
										profile_image_url_https: user.profile_image_url_https,
										profile_interstitial_type: "",
										screen_name: user.screen_name,
										statuses_count: user.statuses_count,
										translator_type: user.translator_type,
										verified: user.verified,
										withheld_in_countries: user.withheld_in_countries,
									},
									profile_image_shape: user.ext_profile_image_shape,
									rest_id: user.id,
								},
							},
						},
						edit_control: {
							edit_tweet_ids: [tweetId.toString()],
							editable_until_msecs: "1682984834000",
							edits_remaining: "5",
							is_edit_eligible: true,
						},
						edit_perspective: {
							favorited: false,
							retweeted: false,
						},
						is_translatable: false,
						legacy: {
							bookmark_count: 0,
							bookmarked: false,
							conversation_id_str: tweetId.toString(),
							created_at: formatDate(new Date()),
							display_text_range: [0, 68],
							entities: {
								hashtags: [],
								symbols: [],
								urls: [],
								user_mentions: (
									tweet.entities!.user_mentions as Array<Array<IUserMention>>
								).map((mention) => mention[0]),
							},
							favorite_count: 0,
							favorited: false,
							full_text: body.variables.tweet_text,
							id_str: tweetId.toString(),
							is_quote_status: false,
							lang: "en",
							quote_count: 0,
							reply_count: 0,
							retweet_count: 0,
							retweeted: false,
							user_id_str: user.id_string,
						},
						rest_id: tweetId.toString(),
						source:
							'<a href="https://github.com/" rel="nofollow">Blue Web App</a>',
						unmention_data: {},
						unmention_info: {},
						views: {
							state: "Disabled",
						},
					},
				},
			},
		},
	});
}
