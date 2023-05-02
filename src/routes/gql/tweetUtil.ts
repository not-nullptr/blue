import express from "express";
import Tweet from "../../models/Tweet";
import User from "../../models/User";
import { IGenericFeatures } from "../../types/graphql";

interface IUserTweetsVariables {
	userId: string;
	count: number;
	includePromotedContent: boolean;
	withQuickPromoteEligibilityTweetFields: boolean;
	withVoice: boolean;
	withV2Timeline: boolean;
}

const router = express.Router();

router.get("/CdG2Vuc1v6F5JyEngGpxVw/UserTweets", async (req, res) => {
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
			legacy: tweet,
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
																				created_at: user.created_at,
																				default_profile: user.default_profile,
																				default_profile_image:
																					user.default_profile_image,
																				description: user.description,
																				entities: user.entities,
																				fast_followers_count:
																					user.fast_followers_count,
																				favourites_count: user.favourites_count,
																				followers_count: user.followers_count,
																				friends_count: user.friends_count,
																				has_custom_timelines:
																					user.has_custom_timelines,
																				is_translator: user.is_translator,
																				listed_count: user.listed_count,
																				location: user.location,
																				media_count: user.media_count,
																				name: user.name,
																				normal_followers_count:
																					user.normal_followers_count,
																				pinned_tweet_ids_str:
																					user.pinned_tweet_ids_str,
																				possibly_sensitive: false,
																				profile_image_url_https:
																					user.profile_image_url_https,
																				profile_interstitial_type: "",
																				screen_name: user.screen_name,
																				statuses_count: user.statuses_count,
																				translator_type: user.translator_type,
																				verified: user.verified,
																				withheld_in_countries:
																					user.withheld_in_countries,
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
});

router.post("/7JUXeanO9cYvjKvaPe7EMg/HomeTimeline", async (req, res) => {
	const userTweets = [];
	const postedTweets = await Tweet.find().limit(50);
	for (const tweet of postedTweets) {
		const user = await User.findOne({ id_string: tweet.user_id_str });
		if (!user) return res.status(400).send({ msg: "User not found" });
		userTweets.push({
			is_translatable: false,
			legacy: tweet,
			source: tweet?.source,
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
																		created_at: tweet.user.created_at,
																		default_profile: tweet.user.default_profile,
																		default_profile_image:
																			tweet.user.default_profile_image,
																		description: tweet.user.description,
																		entities: tweet.user.entities,
																		fast_followers_count:
																			tweet.user.fast_followers_count,
																		favourites_count:
																			tweet.user.favourites_count,
																		followers_count: tweet.user.followers_count,
																		friends_count: tweet.user.friends_count,
																		has_custom_timelines:
																			tweet.user.has_custom_timelines,
																		is_translator: tweet.user.is_translator,
																		listed_count: tweet.user.listed_count,
																		location: tweet.user.location,
																		media_count: tweet.user.media_count,
																		name: tweet.user.name,
																		normal_followers_count:
																			tweet.user.normal_followers_count,
																		pinned_tweet_ids_str:
																			tweet.user.pinned_tweet_ids_str,
																		possibly_sensitive: false,
																		profile_image_url_https:
																			tweet.user.profile_image_url_https,
																		profile_interstitial_type: "",
																		screen_name: tweet.user.screen_name,
																		statuses_count: tweet.user.statuses_count,
																		translator_type: tweet.user.translator_type,
																		verified: tweet.user.verified,
																		withheld_in_countries:
																			tweet.user.withheld_in_countries,
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
});

export default router;
