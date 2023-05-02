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
																		has_graduated_access: false,
																		id: "VXNlcjoxNjUyMzU4MTcyNDk1OTk4OTgw",
																		is_blue_verified: false,
																		legacy: {
																			can_dm: true,
																			can_media_tag: false,
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
																			needs_phone_verification: false,
																			normal_followers_count: 0,
																			pinned_tweet_ids_str: [],
																			possibly_sensitive: false,
																			profile_image_url_https:
																				"https://pbs.twimg.com/profile_images/1652358255136350209/a_Ib9CsR_normal.jpg",
																			profile_interstitial_type: "",
																			screen_name: "notnullptr",
																			statuses_count: 2,
																			translator_type: "none",
																			verified: false,
																			want_retweets: false,
																			withheld_in_countries: [],
																		},
																		profile_image_shape: "Circle",
																		rest_id: "1652358172495998980",
																	},
																},
															},
															edit_control: {
																edit_tweet_ids: ["1653054519138287619"],
																editable_until_msecs: "1682955684000",
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
																conversation_id_str: "1653054519138287619",
																created_at: "Mon May 01 15:11:24 +0000 2023",
																display_text_range: [0, 88],
																entities: {
																	hashtags: [],
																	symbols: [],
																	urls: [],
																	user_mentions: [],
																},
																favorite_count: 0,
																favorited: false,
																full_text:
																	"i'm only tweeting this to get the return value of /1RyAhNwby-gzGCRVsMxKbQ/CreateTweet :p",
																id_str: "1653054519138287619",
																is_quote_status: false,
																lang: "en",
																quote_count: 0,
																reply_count: 0,
																retweet_count: 0,
																retweeted: false,
																user_id_str: "1652358172495998980",
															},
															quick_promote_eligibility: {
																eligibility: "IneligibleNotProfessional",
															},
															rest_id: "1653054519138287619",
															source:
																'<a href="https://mobile.twitter.com" rel="nofollow">Twitter Web App</a>',
															unmention_data: {},
															views: {
																count: "1",
																state: "EnabledWithCount",
															},
														},
													},
												},
											},
											entryId: "tweet-1653054519138287619",
											sortIndex: "1653054519138287619",
										},
										{
											content: {
												__typename: "TimelineTimelineModule",
												clientEventInfo: {
													component: "suggest_who_to_follow",
													details: {
														timelinesDetails: {
															injectionType: "WhoToFollow",
														},
													},
												},
												displayType: "Vertical",
												entryType: "TimelineTimelineModule",
												footer: {
													displayType: "Classic",
													landingUrl: {
														url: "twitter://connect_people?user_id=1652358172495998980&display_location=profile_wtf_showmore",
														urlType: "DeepLink",
													},
													text: "Show more",
												},
												header: {
													displayType: "Classic",
													sticky: true,
													text: "Who to follow",
												},
												items: [
													{
														entryId:
															"whoToFollow-1653054519138287618-user-34743251",
														item: {
															clientEventInfo: {
																component: "suggest_who_to_follow",
																details: {
																	timelinesDetails: {
																		injectionType: "WhoToFollow",
																		sourceData:
																			"DAABCgAB3nXtE9MHGhUKAAIAAAAAAAAAAAAIAAIAAANLCAADAAAAAgA=",
																	},
																},
																element: "user",
															},
															itemContent: {
																__typename: "TimelineUser",
																itemType: "TimelineUser",
																userDisplayType: "User",
																user_results: {
																	result: {
																		__typename: "User",
																		affiliates_highlighted_label: {},
																		has_graduated_access: true,
																		id: "VXNlcjozNDc0MzI1MQ==",
																		is_blue_verified: true,
																		legacy: {
																			can_dm: false,
																			can_media_tag: true,
																			created_at:
																				"Thu Apr 23 21:53:30 +0000 2009",
																			default_profile: false,
																			default_profile_image: false,
																			description:
																				"SpaceX designs, manufactures and launches the world’s most advanced rockets and spacecraft",
																			entities: {
																				description: {
																					urls: [],
																				},
																				url: {
																					urls: [
																						{
																							display_url: "spacex.com",
																							expanded_url: "http://spacex.com",
																							indices: [0, 23],
																							url: "https://t.co/VOJ6qEctND",
																						},
																					],
																				},
																			},
																			fast_followers_count: 0,
																			favourites_count: 412,
																			followers_count: 29349961,
																			friends_count: 100,
																			has_custom_timelines: true,
																			is_translator: false,
																			listed_count: 40120,
																			location: "Earth",
																			media_count: 2332,
																			name: "SpaceX",
																			normal_followers_count: 29349961,
																			pinned_tweet_ids_str: [
																				"1649089801797378048",
																			],
																			possibly_sensitive: false,
																			profile_banner_url:
																				"https://pbs.twimg.com/profile_banners/34743251/1681251194",
																			profile_image_url_https:
																				"https://pbs.twimg.com/profile_images/1082744382585856001/rH_k3PtQ_normal.jpg",
																			profile_interstitial_type: "",
																			screen_name: "SpaceX",
																			statuses_count: 6895,
																			translator_type: "none",
																			url: "https://t.co/VOJ6qEctND",
																			verified: false,
																			verified_type: "Business",
																			want_retweets: false,
																			withheld_in_countries: [],
																		},
																		profile_image_shape: "Square",
																		rest_id: "34743251",
																	},
																},
															},
														},
													},
													{
														entryId:
															"whoToFollow-1653054519138287618-user-44196397",
														item: {
															clientEventInfo: {
																component: "suggest_who_to_follow",
																details: {
																	timelinesDetails: {
																		injectionType: "WhoToFollow",
																		sourceData:
																			"DAABCgAB3nXtE9MHGhUKAAIAAAAAAAAAAAAIAAIAAANKCAADAAAAAgA=",
																	},
																},
																element: "user",
															},
															itemContent: {
																__typename: "TimelineUser",
																itemType: "TimelineUser",
																userDisplayType: "User",
																user_results: {
																	result: {
																		__typename: "User",
																		affiliates_highlighted_label: {
																			label: {
																				badge: {
																					url: "https://pbs.twimg.com/profile_images/1488548719062654976/u6qfBBkF_bigger.jpg",
																				},
																				description: "Twitter",
																				url: {
																					url: "https://twitter.com/Twitter",
																					urlType: "DeepLink",
																				},
																				userLabelDisplayType: "Badge",
																				userLabelType: "BusinessLabel",
																			},
																		},
																		has_graduated_access: true,
																		id: "VXNlcjo0NDE5NjM5Nw==",
																		is_blue_verified: true,
																		legacy: {
																			can_dm: false,
																			can_media_tag: false,
																			created_at:
																				"Tue Jun 02 20:12:29 +0000 2009",
																			default_profile: false,
																			default_profile_image: false,
																			description: "nothing",
																			entities: {
																				description: {
																					urls: [],
																				},
																			},
																			fast_followers_count: 0,
																			favourites_count: 22334,
																			followers_count: 137688294,
																			friends_count: 260,
																			has_custom_timelines: true,
																			is_translator: false,
																			listed_count: 121280,
																			location: "Trøllheim",
																			media_count: 1525,
																			name: "Elon Musk",
																			normal_followers_count: 137688294,
																			pinned_tweet_ids_str: [
																				"1652849795336159233",
																			],
																			possibly_sensitive: false,
																			profile_banner_url:
																				"https://pbs.twimg.com/profile_banners/44196397/1576183471",
																			profile_image_url_https:
																				"https://pbs.twimg.com/profile_images/1590968738358079488/IY9Gx6Ok_normal.jpg",
																			profile_interstitial_type: "",
																			screen_name: "elonmusk",
																			statuses_count: 25302,
																			translator_type: "none",
																			verified: false,
																			want_retweets: false,
																			withheld_in_countries: [],
																		},
																		profile_image_shape: "Circle",
																		rest_id: "44196397",
																		super_follow_eligible: true,
																	},
																},
															},
														},
													},
													{
														entryId:
															"whoToFollow-1653054519138287618-user-11348282",
														item: {
															clientEventInfo: {
																component: "suggest_who_to_follow",
																details: {
																	timelinesDetails: {
																		injectionType: "WhoToFollow",
																		sourceData:
																			"DAABCgAB3nXtE9MHGhUKAAIAAAAAAAAAAAAIAAIAAANLCAADAAAAAgA=",
																	},
																},
																element: "user",
															},
															itemContent: {
																__typename: "TimelineUser",
																itemType: "TimelineUser",
																userDisplayType: "User",
																user_results: {
																	result: {
																		__typename: "User",
																		affiliates_highlighted_label: {},
																		has_graduated_access: true,
																		id: "VXNlcjoxMTM0ODI4Mg==",
																		is_blue_verified: true,
																		legacy: {
																			can_dm: false,
																			can_media_tag: true,
																			created_at:
																				"Wed Dec 19 20:20:32 +0000 2007",
																			default_profile: false,
																			default_profile_image: false,
																			description:
																				"There's space for everybody. ✨\n\nVerification: https://t.co/8nok3NP4PW",
																			entities: {
																				description: {
																					urls: [
																						{
																							display_url:
																								"nasa.gov/socialmedia",
																							expanded_url:
																								"http://nasa.gov/socialmedia",
																							indices: [46, 69],
																							url: "https://t.co/8nok3NP4PW",
																						},
																					],
																				},
																				url: {
																					urls: [
																						{
																							display_url: "nasa.gov",
																							expanded_url:
																								"http://www.nasa.gov/",
																							indices: [0, 23],
																							url: "https://t.co/9NkQJKAnuU",
																						},
																					],
																				},
																			},
																			fast_followers_count: 0,
																			favourites_count: 15130,
																			followers_count: 72950851,
																			friends_count: 178,
																			has_custom_timelines: true,
																			is_translator: false,
																			listed_count: 100799,
																			location: "Pale Blue Dot",
																			media_count: 26012,
																			name: "NASA",
																			normal_followers_count: 72950851,
																			pinned_tweet_ids_str: [],
																			possibly_sensitive: false,
																			profile_banner_url:
																				"https://pbs.twimg.com/profile_banners/11348282/1679344008",
																			profile_image_url_https:
																				"https://pbs.twimg.com/profile_images/1321163587679784960/0ZxKlEKB_normal.jpg",
																			profile_interstitial_type: "",
																			screen_name: "NASA",
																			statuses_count: 69941,
																			translator_type: "regular",
																			url: "https://t.co/9NkQJKAnuU",
																			verified: false,
																			verified_type: "Government",
																			want_retweets: false,
																			withheld_in_countries: [],
																		},
																		profile_image_shape: "Square",
																		rest_id: "11348282",
																	},
																},
															},
														},
													},
												],
											},
											entryId: "whoToFollow-1653054519138287618",
											sortIndex: "1653054519138287618",
										},
										{
											content: {
												__typename: "TimelineTimelineCursor",
												cursorType: "Top",
												entryType: "TimelineTimelineCursor",
												value: "HCaAgIC05dyh8S0AAA==",
											},
											entryId: "cursor-top-1653176700147597313",
											sortIndex: "1653176700147597313",
										},
										{
											content: {
												__typename: "TimelineTimelineCursor",
												cursorType: "Bottom",
												entryType: "TimelineTimelineCursor",
												stopOnEmptyResponse: true,
												value: "HBaEgLz59ZTq8C0AAA==",
											},
											entryId: "cursor-bottom-1653054519138287617",
											sortIndex: "1653054519138287617",
										},
									],
									type: "TimelineAddEntries",
								},
								{
									entry: {
										content: {
											__typename: "TimelineTimelineModule",
											clientEventInfo: {
												component: "tile_carousel",
												details: {
													timelinesDetails: {},
												},
												element: "signup-persistent-nux",
											},
											displayType: "Carousel",
											entryType: "TimelineTimelineModule",
											feedbackInfo: {
												feedbackKeys: ["-888447172"],
												feedbackMetadata: "SQwA",
											},
											header: {
												displayType: "Classic",
												text: "Let’s get you set up",
											},
											items: [
												{
													entryId: "tile-1859856840",
													item: {
														clientEventInfo: {
															component: "tile",
															details: {
																timelinesDetails: {},
															},
															element: "find_accounts",
														},
														itemContent: {
															__typename: "TimelineTile",
															content: {
																contentType: "TimelineTileContentStandard",
																title: "Follow 5 accounts",
															},
															image: {
																height: 386,
																url: "https://ton.twimg.com/onboarding/persistent_nux/follow_2x.png",
																width: 682,
															},
															itemType: "TimelineTile",
															url: {
																url: "twitter://connect_people",
																urlType: "DeepLink",
															},
														},
													},
												},
												{
													entryId: "tile--1765793607",
													item: {
														clientEventInfo: {
															component: "tile",
															details: {
																timelinesDetails: {},
															},
															element: "setup_profile",
														},
														itemContent: {
															__typename: "TimelineTile",
															content: {
																badge: {
																	backgroundColorName: "MediumGreen",
																	text: "DONE",
																	textColorName: "White",
																},
																contentType: "TimelineTileContentStandard",
																title: "Complete your profile",
															},
															image: {
																height: 386,
																url: "https://ton.twimg.com/onboarding/persistent_nux/profile_2x.png",
																width: 682,
															},
															itemType: "TimelineTile",
															url: {
																url: "https://twitter.com/i/flow/setup_profile",
																urlType: "ExternalUrl",
															},
														},
													},
												},
												{
													entryId: "tile-1886768689",
													item: {
														clientEventInfo: {
															component: "tile",
															details: {
																timelinesDetails: {},
															},
															element: "follow_topic",
														},
														itemContent: {
															__typename: "TimelineTile",
															content: {
																badge: {
																	backgroundColorName: "MediumGreen",
																	text: "DONE",
																	textColorName: "White",
																},
																contentType: "TimelineTileContentStandard",
																title: "Follow 3 Topics",
															},
															image: {
																height: 386,
																url: "https://ton.twimg.com/onboarding/persistent_nux/topics_2x.png",
																width: 682,
															},
															itemType: "TimelineTile",
															url: {
																url: "twitter://topics/picker/home",
																urlType: "DeepLink",
															},
														},
													},
												},
												{
													entryId: "tile-1441987421",
													item: {
														clientEventInfo: {
															component: "tile",
															details: {
																timelinesDetails: {},
															},
															element: "notifications",
														},
														itemContent: {
															__typename: "TimelineTile",
															content: {
																badge: {
																	backgroundColorName: "MediumGreen",
																	text: "DONE",
																	textColorName: "White",
																},
																contentType: "TimelineTileContentStandard",
																title: "Turn on notifications",
															},
															image: {
																height: 386,
																url: "https://ton.twimg.com/onboarding/persistent_nux/notifs_2x.png",
																width: 682,
															},
															itemType: "TimelineTile",
															url: {
																url: "https://twitter.com/settings/notifications",
																urlType: "ExternalUrl",
															},
														},
													},
												},
												{
													entryId: "tile--109189234",
													item: {
														clientEventInfo: {
															component: "tile",
															details: {
																timelinesDetails: {},
															},
															element: "help_center",
														},
														itemContent: {
															__typename: "TimelineTile",
															content: {
																contentType: "TimelineTileContentCallToAction",
																text: "Learn more",
															},
															itemType: "TimelineTile",
															url: {
																url: "https://help.twitter.com",
																urlType: "ExternalUrl",
															},
														},
													},
												},
											],
										},
										entryId: "banner--1845307388",
										sortIndex: "1653176700147597312",
									},
									type: "TimelinePinEntry",
								},
							],
							responseObjects: {
								feedbackActions: [
									{
										key: "-888447172",
										value: {
											feedbackType: "Dismiss",
											feedbackUrl:
												"/1.1/onboarding/fatigue.json?flow_name=signup-persistent-nux&fatigue_group_name=PersistentNuxFatigueGroup&action_name=dismiss&scribe_name=dismiss&display_location=profile_best&served_time_secs=1682983014&injection_type=tile_carousel",
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

export default router;
