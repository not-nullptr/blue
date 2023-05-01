import express from "express";

const router = express.Router();

router.get("/CdG2Vuc1v6F5JyEngGpxVw/UserTweets", (req, res) => {
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
							],
							responseObjects: {
								feedbackActions: [],
								immediateReactions: [],
							},
						},
					},
				},
			},
		},
	});
});

router.get("/P7qs2Sf7vu1LDKbzDW9FSA/UserMedia", (req, res) => {
	return res.status(200).send({
		data: {
			user: {
				result: {
					__typename: "User",
					timeline_v2: {
						timeline: {
							instructions: [
								{
									entries: [
										{
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
																		affiliates_highlighted_label: {},
																		id: "VXNlcjoxNjUyMzU4MTcyNDk1OTk4OTgw",
																		is_blue_verified: false,
																		legacy: {
																			created_at:
																				"Sat Apr 29 17:04:26 +0000 2023",
																			default_profile: true,
																			default_profile_image: false,
																			description: "",
																			entities: {
																				description: {
																					urls: [],
																				},
																			},
																			fast_followers_count: 0,
																			favourites_count: 0,
																			followers_count: 0,
																			friends_count: 1,
																			has_custom_timelines: false,
																			is_translator: false,
																			listed_count: 0,
																			location: "",
																			media_count: 1,
																			name: "notnullptr",
																			normal_followers_count: 0,
																			pinned_tweet_ids_str: [],
																			possibly_sensitive: false,
																			profile_image_url_https:
																				"https://pbs.twimg.com/profile_images/1652358255136350209/a_Ib9CsR_normal.jpg",
																			profile_interstitial_type: "",
																			screen_name: "notnullptr",
																			statuses_count: 1,
																			translator_type: "none",
																			verified: false,
																			withheld_in_countries: [],
																		},
																		profile_image_shape: "Circle",
																		rest_id: "1652358172495998980",
																	},
																},
															},
															edit_control: {
																edit_tweet_ids: ["1652421410189352961"],
																editable_until_msecs: "1682804739000",
																edits_remaining: "5",
																is_edit_eligible: false,
															},
															is_translatable: false,
															legacy: {
																bookmark_count: 0,
																bookmarked: false,
																conversation_id_str: "1652335652187553794",
																created_at: "Sat Apr 29 21:15:39 +0000 2023",
																display_text_range: [10, 54],
																entities: {
																	hashtags: [],
																	media: [
																		{
																			display_url: "pic.twitter.com/TE6k0HHDit",
																			expanded_url:
																				"https://twitter.com/notnullptr/status/1652421410189352961/photo/1",
																			features: {
																				large: {
																					faces: [],
																				},
																				medium: {
																					faces: [],
																				},
																				orig: {
																					faces: [],
																				},
																				small: {
																					faces: [],
																				},
																			},
																			id_str: "1652421363410321411",
																			indices: [55, 78],
																			media_url_https:
																				"https://pbs.twimg.com/media/Fu6UeaFWwAMr-Hs.png",
																			original_info: {
																				focus_rects: [
																					{
																						h: 394,
																						w: 703,
																						x: 0,
																						y: 71,
																					},
																					{
																						h: 703,
																						w: 703,
																						x: 0,
																						y: 0,
																					},
																					{
																						h: 801,
																						w: 703,
																						x: 0,
																						y: 0,
																					},
																					{
																						h: 828,
																						w: 414,
																						x: 103,
																						y: 0,
																					},
																					{
																						h: 828,
																						w: 703,
																						x: 0,
																						y: 0,
																					},
																				],
																				height: 828,
																				width: 703,
																			},
																			sizes: {
																				large: {
																					h: 828,
																					resize: "fit",
																					w: 703,
																				},
																				medium: {
																					h: 828,
																					resize: "fit",
																					w: 703,
																				},
																				small: {
																					h: 680,
																					resize: "fit",
																					w: 577,
																				},
																				thumb: {
																					h: 150,
																					resize: "crop",
																					w: 150,
																				},
																			},
																			type: "photo",
																			url: "https://t.co/TE6k0HHDit",
																		},
																	],
																	symbols: [],
																	urls: [],
																	user_mentions: [
																		{
																			id_str: "44196397",
																			indices: [0, 9],
																			name: "Elon Musk",
																			screen_name: "elonmusk",
																		},
																	],
																},
																extended_entities: {
																	media: [
																		{
																			display_url: "pic.twitter.com/TE6k0HHDit",
																			expanded_url:
																				"https://twitter.com/notnullptr/status/1652421410189352961/photo/1",
																			ext_media_availability: {
																				status: "Available",
																			},
																			features: {
																				large: {
																					faces: [],
																				},
																				medium: {
																					faces: [],
																				},
																				orig: {
																					faces: [],
																				},
																				small: {
																					faces: [],
																				},
																			},
																			id_str: "1652421363410321411",
																			indices: [55, 78],
																			media_key: "3_1652421363410321411",
																			media_url_https:
																				"https://pbs.twimg.com/media/Fu6UeaFWwAMr-Hs.png",
																			original_info: {
																				focus_rects: [
																					{
																						h: 394,
																						w: 703,
																						x: 0,
																						y: 71,
																					},
																					{
																						h: 703,
																						w: 703,
																						x: 0,
																						y: 0,
																					},
																					{
																						h: 801,
																						w: 703,
																						x: 0,
																						y: 0,
																					},
																					{
																						h: 828,
																						w: 414,
																						x: 103,
																						y: 0,
																					},
																					{
																						h: 828,
																						w: 703,
																						x: 0,
																						y: 0,
																					},
																				],
																				height: 828,
																				width: 703,
																			},
																			sizes: {
																				large: {
																					h: 828,
																					resize: "fit",
																					w: 703,
																				},
																				medium: {
																					h: 828,
																					resize: "fit",
																					w: 703,
																				},
																				small: {
																					h: 680,
																					resize: "fit",
																					w: 577,
																				},
																				thumb: {
																					h: 150,
																					resize: "crop",
																					w: 150,
																				},
																			},
																			type: "photo",
																			url: "https://t.co/TE6k0HHDit",
																		},
																	],
																},
																favorite_count: 0,
																favorited: false,
																full_text:
																	"@elonmusk blue-oss is simply the superior platform imo https://t.co/TE6k0HHDit",
																id_str: "1652421410189352961",
																in_reply_to_screen_name: "elonmusk",
																in_reply_to_status_id_str:
																	"1652335652187553794",
																in_reply_to_user_id_str: "44196397",
																is_quote_status: false,
																lang: "en",
																possibly_sensitive: false,
																possibly_sensitive_editable: true,
																quote_count: 0,
																reply_count: 0,
																retweet_count: 0,
																retweeted: false,
																user_id_str: "1652358172495998980",
															},
															rest_id: "1652421410189352961",
															source:
																'<a href="https://mobile.twitter.com" rel="nofollow">Twitter Web App</a>',
															unmention_data: {},
															views: {
																state: "Enabled",
															},
														},
													},
												},
											},
											entryId: "tweet-1652421410189352961",
											sortIndex: "1652875683010969600",
										},
										{
											content: {
												__typename: "TimelineTimelineCursor",
												cursorType: "Top",
												entryType: "TimelineTimelineCursor",
												value: "DAABCgABFvAxrSfAJxEKAAIW7pSEhZYgAQgAAwAAAAEAAA",
											},
											entryId: "cursor-top-1652875683010969601",
											sortIndex: "1652875683010969601",
										},
										{
											content: {
												__typename: "TimelineTimelineCursor",
												cursorType: "Bottom",
												entryType: "TimelineTimelineCursor",
												value: "DAABCgABFvAxrSe___0KAAIW7pSEhZYgAQgAAwAAAAIAAA",
											},
											entryId: "cursor-bottom-1652875683010969599",
											sortIndex: "1652875683010969599",
										},
									],
									type: "TimelineAddEntries",
								},
							],
							metadata: {
								scribeConfig: {
									page: "media",
								},
							},
						},
					},
				},
			},
		},
	});
});

export default router;
