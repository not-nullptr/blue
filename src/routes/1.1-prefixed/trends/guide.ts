import express from "express";
import { Timeline } from "../../../types/guideClass";

const router = express.Router();

router.get("/guide.json", (req, res) => {
	const { ...response } = new Timeline({});
	// return res.status(200).send({
	// 	globalObjects: {
	// 		tweets: {
	// 			"1652077563651698689": {
	// 				created_at: "Fri Apr 28 22:29:19 +0000 2023",
	// 				id: 1652077563651698689,
	// 				id_str: "1652077563651698689",
	// 				full_text: "On @billmaher show tonight",
	// 				truncated: false,
	// 				display_text_range: [0, 26],
	// 				entities: {
	// 					hashtags: [],
	// 					symbols: [],
	// 					user_mentions: [
	// 						{
	// 							screen_name: "billmaher",
	// 							name: "Bill Maher",
	// 							id: 19697415,
	// 							id_str: "19697415",
	// 							indices: [3, 13],
	// 						},
	// 					],
	// 					urls: [],
	// 				},
	// 				source:
	// 					'\u003ca href="http://twitter.com/download/iphone" rel="nofollow"\u003eTwitter for iPhone\u003c/a\u003e',
	// 				in_reply_to_status_id: null,
	// 				in_reply_to_status_id_str: null,
	// 				in_reply_to_user_id: null,
	// 				in_reply_to_user_id_str: null,
	// 				in_reply_to_screen_name: null,
	// 				user_id: 44196397,
	// 				user_id_str: "44196397",
	// 				geo: null,
	// 				coordinates: null,
	// 				place: null,
	// 				contributors: null,
	// 				is_quote_status: false,
	// 				retweet_count: 5860,
	// 				favorite_count: 84421,
	// 				reply_count: 5065,
	// 				quote_count: 0,
	// 				conversation_id: 1652077563651698689,
	// 				conversation_id_str: "1652077563651698689",
	// 				favorited: false,
	// 				retweeted: false,
	// 				lang: "en",
	// 				supplemental_language: null,
	// 				ext_views: {
	// 					state: "EnabledWithCount",
	// 					count: "9895293",
	// 				},
	// 				ext: {
	// 					editControl: {
	// 						r: {
	// 							ok: {
	// 								initial: {
	// 									editTweetIds: ["1652077563651698689"],
	// 									editableUntilMsecs: "1682722759000",
	// 									editsRemaining: "5",
	// 									isEditEligible: true,
	// 								},
	// 							},
	// 						},
	// 						ttl: -1,
	// 					},
	// 					unmentionInfo: {
	// 						r: {
	// 							ok: {},
	// 						},
	// 						ttl: -1,
	// 					},
	// 				},
	// 			},
	// 		},
	// 		users: {
	// 			"44196397": {
	// 				id: 44196397,
	// 				id_str: "44196397",
	// 				name: "Elon Musk",
	// 				screen_name: "elonmusk",
	// 				location: "Tr\u00f8llheim",
	// 				description: "nothing",
	// 				url: null,
	// 				entities: {
	// 					description: {
	// 						urls: [],
	// 					},
	// 				},
	// 				protected: false,
	// 				followers_count: 137293601,
	// 				fast_followers_count: 0,
	// 				normal_followers_count: 137293601,
	// 				friends_count: 249,
	// 				listed_count: 121127,
	// 				created_at: "Tue Jun 02 20:12:29 +0000 2009",
	// 				favourites_count: 22163,
	// 				utc_offset: null,
	// 				time_zone: null,
	// 				geo_enabled: false,
	// 				verified: false,
	// 				statuses_count: 25241,
	// 				media_count: 1520,
	// 				lang: null,
	// 				contributors_enabled: false,
	// 				is_translator: false,
	// 				is_translation_enabled: false,
	// 				profile_background_color: "C0DEED",
	// 				profile_background_image_url:
	// 					"http://abs.twimg.com/images/themes/theme1/bg.png",
	// 				profile_background_image_url_https:
	// 					"https://abs.twimg.com/images/themes/theme1/bg.png",
	// 				profile_background_tile: false,
	// 				profile_image_url:
	// 					"http://pbs.twimg.com/profile_images/1590968738358079488/IY9Gx6Ok_normal.jpg",
	// 				profile_image_url_https:
	// 					"https://pbs.twimg.com/profile_images/1590968738358079488/IY9Gx6Ok_normal.jpg",
	// 				profile_banner_url:
	// 					"https://pbs.twimg.com/profile_banners/44196397/1576183471",
	// 				profile_link_color: "0084B4",
	// 				profile_sidebar_border_color: "C0DEED",
	// 				profile_sidebar_fill_color: "DDEEF6",
	// 				profile_text_color: "333333",
	// 				profile_use_background_image: true,
	// 				has_extended_profile: true,
	// 				default_profile: false,
	// 				default_profile_image: false,
	// 				pinned_tweet_ids: [],
	// 				pinned_tweet_ids_str: [],
	// 				has_custom_timelines: true,
	// 				can_dm: null,
	// 				following: null,
	// 				follow_request_sent: null,
	// 				notifications: null,
	// 				muting: null,
	// 				blocking: null,
	// 				blocked_by: null,
	// 				want_retweets: null,
	// 				advertiser_account_type: "none",
	// 				advertiser_account_service_levels: [],
	// 				business_profile_state: "none",
	// 				translator_type: "none",
	// 				withheld_in_countries: [],
	// 				followed_by: null,
	// 				ext_has_nft_avatar: false,
	// 				ext_profile_image_shape: "Circle",
	// 				ext_is_blue_verified: true,
	// 				ext: {
	// 					hasNftAvatar: {
	// 						r: {
	// 							ok: false,
	// 						},
	// 						ttl: -1,
	// 					},
	// 					highlightedLabel: {
	// 						r: {
	// 							ok: {
	// 								label: {
	// 									description: "Twitter",
	// 									badge: {
	// 										url: "https://pbs.twimg.com/profile_images/1488548719062654976/u6qfBBkF_bigger.jpg",
	// 									},
	// 									url: {
	// 										urlType: "DeepLink",
	// 										url: "https://twitter.com/Twitter",
	// 									},
	// 									userLabelType: "BusinessLabel",
	// 									userLabelDisplayType: "Badge",
	// 								},
	// 							},
	// 						},
	// 						ttl: -1,
	// 					},
	// 				},
	// 				require_some_consent: false,
	// 			},
	// 		},
	// 		moments: {},
	// 		cards: {},
	// 		places: {},
	// 		media: {},
	// 		broadcasts: {},
	// 		topics: {},
	// 		lists: {},
	// 	},
	// 	timeline: {
	// 		id: "guide-events_tab-page-283-1652275109299355648",
	// 		instructions: [
	// 			{
	// 				clearCache: {},
	// 			},
	// 			{
	// 				addEntries: {
	// 					entries: [
	// 						{
	// 							entryId: "cursor:1000000000",
	// 							sortIndex: "1000000000",
	// 							content: {
	// 								operation: {
	// 									cursor: {
	// 										value:
	// 											"CwABAAAALWd1aWRlLWV2ZW50c190YWItcGFnZS0yODMtMTY1MjI3NTEwOTI5OTM1NTY0OAgAAwAAAAAIAAIAAAABCAAEO5rKAAA=",
	// 										cursorType: "Top",
	// 									},
	// 								},
	// 							},
	// 						},
	// 						{
	// 							entryId: "tweet-1652051725740650501",
	// 							sortIndex: "999999999",
	// 							content: {
	// 								item: {
	// 									content: {
	// 										tweet: {
	// 											id: "1652051725740650501",
	// 											displayType: "Tweet",
	// 										},
	// 									},
	// 									clientEventInfo: {
	// 										component: "content_recommender_explore_tweets",
	// 										element: "tweet",
	// 										details: {
	// 											timelinesDetails: {
	// 												controllerData: "DAACDAAODAABCgABgjvWN0kn/gIAAAAA",
	// 											},
	// 										},
	// 									},
	// 								},
	// 							},
	// 						},
	// 						{
	// 							entryId: "tweet-1652098207130820611",
	// 							sortIndex: "999999998",
	// 							content: {
	// 								item: {
	// 									content: {
	// 										tweet: {
	// 											id: "1652098207130820611",
	// 											displayType: "Tweet",
	// 										},
	// 									},
	// 									clientEventInfo: {
	// 										component: "trip_geo_domain_tweets",
	// 										element: "tweet",
	// 										details: {
	// 											timelinesDetails: {
	// 												controllerData: "DAACDAAODAABCgABgjvWN0kn/gIAAAAA",
	// 											},
	// 										},
	// 									},
	// 								},
	// 							},
	// 						},
	// 						{
	// 							entryId: "tweet-1652214615676444672",
	// 							sortIndex: "999999997",
	// 							content: {
	// 								item: {
	// 									content: {
	// 										tweet: {
	// 											id: "1652214615676444672",
	// 											displayType: "Tweet",
	// 										},
	// 									},
	// 									clientEventInfo: {
	// 										component: "trip_geo_domain_tweets",
	// 										element: "tweet",
	// 										details: {
	// 											timelinesDetails: {
	// 												controllerData: "DAACDAAODAABCgABgjvWN0kn/gIAAAAA",
	// 											},
	// 										},
	// 									},
	// 								},
	// 							},
	// 						},
	// 						{
	// 							entryId: "tweet-1652011978292969472",
	// 							sortIndex: "999999996",
	// 							content: {
	// 								item: {
	// 									content: {
	// 										tweet: {
	// 											id: "1652011978292969472",
	// 											displayType: "Tweet",
	// 										},
	// 									},
	// 									clientEventInfo: {
	// 										component: "trip_geo_domain_tweets",
	// 										element: "tweet",
	// 										details: {
	// 											timelinesDetails: {
	// 												controllerData: "DAACDAAODAABCgABgjvWN0kn/gIAAAAA",
	// 											},
	// 										},
	// 									},
	// 								},
	// 							},
	// 						},
	// 						{
	// 							entryId: "tweet-1652041043519348745",
	// 							sortIndex: "999999995",
	// 							content: {
	// 								item: {
	// 									content: {
	// 										tweet: {
	// 											id: "1652041043519348745",
	// 											displayType: "Tweet",
	// 										},
	// 									},
	// 									clientEventInfo: {
	// 										component: "trip_geo_domain_tweets",
	// 										element: "tweet",
	// 										details: {
	// 											timelinesDetails: {
	// 												controllerData: "DAACDAAODAABCgABgjvWN0kn/gIAAAAA",
	// 											},
	// 										},
	// 									},
	// 								},
	// 							},
	// 						},
	// 						{
	// 							entryId: "tweet-1652048376882405377",
	// 							sortIndex: "999999994",
	// 							content: {
	// 								item: {
	// 									content: {
	// 										tweet: {
	// 											id: "1652048376882405377",
	// 											displayType: "Tweet",
	// 										},
	// 									},
	// 									clientEventInfo: {
	// 										component: "trip_geo_domain_tweets",
	// 										element: "tweet",
	// 										details: {
	// 											timelinesDetails: {
	// 												controllerData: "DAACDAAODAABCgABgjvWN0kn/gIAAAAA",
	// 											},
	// 										},
	// 									},
	// 								},
	// 							},
	// 						},
	// 						{
	// 							entryId: "tweet-1652081118802329600",
	// 							sortIndex: "999999993",
	// 							content: {
	// 								item: {
	// 									content: {
	// 										tweet: {
	// 											id: "1652081118802329600",
	// 											displayType: "Tweet",
	// 										},
	// 									},
	// 									clientEventInfo: {
	// 										component: "trip_geo_domain_tweets",
	// 										element: "tweet",
	// 										details: {
	// 											timelinesDetails: {
	// 												controllerData: "DAACDAAODAABCgABgjvWN0kn/gIAAAAA",
	// 											},
	// 										},
	// 									},
	// 								},
	// 							},
	// 						},
	// 						{
	// 							entryId: "tweet-1652077855977897985",
	// 							sortIndex: "999999992",
	// 							content: {
	// 								item: {
	// 									content: {
	// 										tweet: {
	// 											id: "1652077855977897985",
	// 											displayType: "Tweet",
	// 										},
	// 									},
	// 									clientEventInfo: {
	// 										component: "trip_geo_domain_tweets",
	// 										element: "tweet",
	// 										details: {
	// 											timelinesDetails: {
	// 												controllerData: "DAACDAAODAABCgABgjvWN0kn/gIAAAAA",
	// 											},
	// 										},
	// 									},
	// 								},
	// 							},
	// 						},
	// 						{
	// 							entryId: "tweet-1652266888670355457",
	// 							sortIndex: "999999991",
	// 							content: {
	// 								item: {
	// 									content: {
	// 										tweet: {
	// 											id: "1652266888670355457",
	// 											displayType: "Tweet",
	// 										},
	// 									},
	// 									clientEventInfo: {
	// 										component: "trip_geo_domain_tweets",
	// 										element: "tweet",
	// 										details: {
	// 											timelinesDetails: {
	// 												controllerData: "DAACDAAODAABCgABgjvWN0kn/gIAAAAA",
	// 											},
	// 										},
	// 									},
	// 								},
	// 							},
	// 						},
	// 						{
	// 							entryId: "tweet-1652117745687752716",
	// 							sortIndex: "999999990",
	// 							content: {
	// 								item: {
	// 									content: {
	// 										tweet: {
	// 											id: "1652117745687752716",
	// 											displayType: "Tweet",
	// 										},
	// 									},
	// 									clientEventInfo: {
	// 										component: "trip_geo_domain_tweets",
	// 										element: "tweet",
	// 										details: {
	// 											timelinesDetails: {
	// 												controllerData: "DAACDAAODAABCgABgjvWN0kn/gIAAAAA",
	// 											},
	// 										},
	// 									},
	// 								},
	// 							},
	// 						},
	// 						{
	// 							entryId: "tweet-1652254769518465024",
	// 							sortIndex: "999999989",
	// 							content: {
	// 								item: {
	// 									content: {
	// 										tweet: {
	// 											id: "1652254769518465024",
	// 											displayType: "Tweet",
	// 										},
	// 									},
	// 									clientEventInfo: {
	// 										component: "trip_geo_domain_tweets",
	// 										element: "tweet",
	// 										details: {
	// 											timelinesDetails: {
	// 												controllerData: "DAACDAAODAABCgABgjvWN0kn/gIAAAAA",
	// 											},
	// 										},
	// 									},
	// 								},
	// 							},
	// 						},
	// 						{
	// 							entryId: "tweet-1652080087926288384",
	// 							sortIndex: "999999988",
	// 							content: {
	// 								item: {
	// 									content: {
	// 										tweet: {
	// 											id: "1652080087926288384",
	// 											displayType: "Tweet",
	// 										},
	// 									},
	// 									clientEventInfo: {
	// 										component: "trip_geo_domain_tweets",
	// 										element: "tweet",
	// 										details: {
	// 											timelinesDetails: {
	// 												controllerData: "DAACDAAODAABCgABgjvWN0kn/gIAAAAA",
	// 											},
	// 										},
	// 									},
	// 								},
	// 							},
	// 						},
	// 						{
	// 							entryId: "tweet-1652077563651698689",
	// 							sortIndex: "999999987",
	// 							content: {
	// 								item: {
	// 									content: {
	// 										tweet: {
	// 											id: "1652077563651698689",
	// 											displayType: "Tweet",
	// 										},
	// 									},
	// 									clientEventInfo: {
	// 										component: "trip_geo_domain_tweets",
	// 										element: "tweet",
	// 										details: {
	// 											timelinesDetails: {
	// 												controllerData: "DAACDAAODAABCgABgjvWN0kn/gIAAAAA",
	// 											},
	// 										},
	// 									},
	// 								},
	// 							},
	// 						},
	// 						{
	// 							entryId: "tweet-1652087469167493120",
	// 							sortIndex: "999999986",
	// 							content: {
	// 								item: {
	// 									content: {
	// 										tweet: {
	// 											id: "1652087469167493120",
	// 											displayType: "Tweet",
	// 										},
	// 									},
	// 									clientEventInfo: {
	// 										component: "content_recommender_explore_tweets",
	// 										element: "tweet",
	// 										details: {
	// 											timelinesDetails: {
	// 												controllerData: "DAACDAAODAABCgABgjvWN0kn/gIAAAAA",
	// 											},
	// 										},
	// 									},
	// 								},
	// 							},
	// 						},
	// 						{
	// 							entryId: "tweet-1652000709813080065",
	// 							sortIndex: "999999985",
	// 							content: {
	// 								item: {
	// 									content: {
	// 										tweet: {
	// 											id: "1652000709813080065",
	// 											displayType: "Tweet",
	// 										},
	// 									},
	// 									clientEventInfo: {
	// 										component: "trip_geo_domain_tweets",
	// 										element: "tweet",
	// 										details: {
	// 											timelinesDetails: {
	// 												controllerData: "DAACDAAODAABCgABgjvWN0kn/gIAAAAA",
	// 											},
	// 										},
	// 									},
	// 								},
	// 							},
	// 						},
	// 						{
	// 							entryId: "tweet-1652098204232732672",
	// 							sortIndex: "999999984",
	// 							content: {
	// 								item: {
	// 									content: {
	// 										tweet: {
	// 											id: "1652098204232732672",
	// 											displayType: "Tweet",
	// 										},
	// 									},
	// 									clientEventInfo: {
	// 										component: "trip_geo_domain_tweets",
	// 										element: "tweet",
	// 										details: {
	// 											timelinesDetails: {
	// 												controllerData: "DAACDAAODAABCgABgjvWN0kn/gIAAAAA",
	// 											},
	// 										},
	// 									},
	// 								},
	// 							},
	// 						},
	// 						{
	// 							entryId: "tweet-1651972286738575364",
	// 							sortIndex: "999999983",
	// 							content: {
	// 								item: {
	// 									content: {
	// 										tweet: {
	// 											id: "1651972286738575364",
	// 											displayType: "Tweet",
	// 										},
	// 									},
	// 									clientEventInfo: {
	// 										component: "trip_geo_domain_tweets",
	// 										element: "tweet",
	// 										details: {
	// 											timelinesDetails: {
	// 												controllerData: "DAACDAAODAABCgABgjvWN0kn/gIAAAAA",
	// 											},
	// 										},
	// 									},
	// 								},
	// 							},
	// 						},
	// 						{
	// 							entryId: "tweet-1651969705735868416",
	// 							sortIndex: "999999982",
	// 							content: {
	// 								item: {
	// 									content: {
	// 										tweet: {
	// 											id: "1651969705735868416",
	// 											displayType: "Tweet",
	// 										},
	// 									},
	// 									clientEventInfo: {
	// 										component: "content_recommender_explore_tweets",
	// 										element: "tweet",
	// 										details: {
	// 											timelinesDetails: {
	// 												controllerData: "DAACDAAODAABCgABgjvWN0kn/gIAAAAA",
	// 											},
	// 										},
	// 									},
	// 								},
	// 							},
	// 						},
	// 						{
	// 							entryId: "tweet-1652040280609288193",
	// 							sortIndex: "999999981",
	// 							content: {
	// 								item: {
	// 									content: {
	// 										tweet: {
	// 											id: "1652040280609288193",
	// 											displayType: "Tweet",
	// 										},
	// 									},
	// 									clientEventInfo: {
	// 										component: "trip_geo_domain_tweets",
	// 										element: "tweet",
	// 										details: {
	// 											timelinesDetails: {
	// 												controllerData: "DAACDAAODAABCgABgjvWN0kn/gIAAAAA",
	// 											},
	// 										},
	// 									},
	// 								},
	// 							},
	// 						},
	// 						{
	// 							entryId: "tweet-1652035403908521986",
	// 							sortIndex: "999999980",
	// 							content: {
	// 								item: {
	// 									content: {
	// 										tweet: {
	// 											id: "1652035403908521986",
	// 											displayType: "Tweet",
	// 										},
	// 									},
	// 									clientEventInfo: {
	// 										component: "trip_geo_domain_tweets",
	// 										element: "tweet",
	// 										details: {
	// 											timelinesDetails: {
	// 												controllerData: "DAACDAAODAABCgABgjvWN0kn/gIAAAAA",
	// 											},
	// 										},
	// 									},
	// 								},
	// 							},
	// 						},
	// 						{
	// 							entryId: "cursor:999999979",
	// 							sortIndex: "999999979",
	// 							content: {
	// 								operation: {
	// 									cursor: {
	// 										value:
	// 											"CwABAAAALWd1aWRlLWV2ZW50c190YWItcGFnZS0yODMtMTY1MjI3NTEwOTI5OTM1NTY0OAgAAwAAABQIAAIAAAACCAAEO5rJ6wA=",
	// 										cursorType: "Bottom",
	// 									},
	// 								},
	// 							},
	// 						},
	// 					],
	// 				},
	// 			},
	// 		],
	// 		responseObjects: {
	// 			feedbackActions: {
	// 				trend_irrelevant_content_feedback_key: {
	// 					feedbackType: "SeeFewer",
	// 					prompt: "The associated content is not relevant",
	// 					confirmation: "Thanks. Refresh this page to update these trends.",
	// 					feedbackUrl:
	// 						"/2/guide/insert_feedback/trend_irrelevant_content_feedback_key.json",
	// 					hasUndoAction: false,
	// 					confirmationDisplayType: "BottomSheet",
	// 				},
	// 				spotlight_dismiss_feedback_key: {
	// 					feedbackType: "Dismiss",
	// 					prompt: "Don't want to see this ad",
	// 					confirmation: "Thanks. Refresh this page to update these trends.",
	// 					hasUndoAction: false,
	// 					confirmationDisplayType: "BottomSheet",
	// 				},
	// 				trend_abusive_feedback_key: {
	// 					feedbackType: "SeeFewer",
	// 					prompt: "This trend is abusive or harmful",
	// 					confirmation: "Thanks. Refresh this page to update these trends.",
	// 					feedbackUrl:
	// 						"/2/guide/insert_feedback/trend_abusive_feedback_key.json",
	// 					hasUndoAction: false,
	// 					confirmationDisplayType: "Inline",
	// 				},
	// 				guide_not_interested_feedback_key: {
	// 					feedbackType: "SeeFewer",
	// 					prompt: "Hide",
	// 					confirmation: "Thank you, we will show you less of this",
	// 					feedbackUrl: "/2/guide/dont_like_this/feedback.json",
	// 					hasUndoAction: true,
	// 					confirmationDisplayType: "Inline",
	// 					icon: "NO",
	// 				},
	// 				guide_see_more_feedback_key: {
	// 					feedbackType: "SeeMore",
	// 					prompt: "Show more often",
	// 					confirmation: "Thank you, we will show you more of this",
	// 					feedbackUrl: "/2/guide/show_more/feedback.json",
	// 					hasUndoAction: true,
	// 					confirmationDisplayType: "BottomSheet",
	// 				},
	// 				trend_spam_feedback_key: {
	// 					feedbackType: "SeeFewer",
	// 					prompt: "This trend is spam",
	// 					confirmation: "Thanks. Refresh this page to update these trends.",
	// 					feedbackUrl:
	// 						"/2/guide/insert_feedback/trend_spam_feedback_key.json",
	// 					hasUndoAction: false,
	// 					confirmationDisplayType: "Inline",
	// 				},
	// 				trend_low_quality_feedback_key: {
	// 					feedbackType: "SeeFewer",
	// 					prompt: "This trend is low quality",
	// 					confirmation: "Thanks. Refresh this page to update these trends.",
	// 					feedbackUrl:
	// 						"/2/guide/insert_feedback/trend_low_quality_feedback_key.json",
	// 					hasUndoAction: false,
	// 					confirmationDisplayType: "Inline",
	// 				},
	// 				guide_see_less_feedback_key: {
	// 					feedbackType: "SeeFewer",
	// 					prompt: "Show less often",
	// 					confirmation: "Thank you, we will show you less of this",
	// 					feedbackUrl: "/2/guide/dont_like_this/feedback.json",
	// 					hasUndoAction: true,
	// 					confirmationDisplayType: "Inline",
	// 				},
	// 				trend_not_interested_in_this_feedback_key: {
	// 					feedbackType: "SeeFewer",
	// 					prompt: "Not interested in this",
	// 					confirmation: "Thanks. Refresh this page to update these trends.",
	// 					feedbackUrl:
	// 						"/2/guide/insert_feedback/trend_not_interested_in_this_feedback_key.json",
	// 					hasUndoAction: false,
	// 					confirmationDisplayType: "Inline",
	// 				},
	// 				trend_abusive_or_harmful_feedback_key: {
	// 					feedbackType: "SeeFewer",
	// 					prompt: "This trend is harmful or spammy",
	// 					confirmation: "Thanks. Refresh this page to update these trends.",
	// 					feedbackUrl:
	// 						"/2/guide/insert_feedback/trend_abusive_or_harmful_feedback_key.json",
	// 					hasUndoAction: false,
	// 					confirmationDisplayType: "BottomSheet",
	// 				},
	// 				guide_hide_topic_key: {
	// 					feedbackType: "SeeFewer",
	// 					prompt: "Unfollow topic",
	// 					confirmation: "Thank you, we will show you less of this",
	// 					feedbackUrl: "/2/guide/feedback/hide_topic.json",
	// 					hasUndoAction: true,
	// 					confirmationDisplayType: "Inline",
	// 					icon: "TOPIC_CLOSE",
	// 				},
	// 				trend_duplicate_feedback_key: {
	// 					feedbackType: "SeeFewer",
	// 					prompt: "This trend is a duplicate",
	// 					confirmation: "Thanks. Refresh this page to update these trends.",
	// 					feedbackUrl:
	// 						"/2/guide/insert_feedback/trend_duplicate_feedback_key.json",
	// 					hasUndoAction: false,
	// 					confirmationDisplayType: "Inline",
	// 				},
	// 			},
	// 		},
	// 	},
	// });
	return res.status(200).send({
		globalObjects: {
			broadcasts: {},
			cards: {},
			lists: {},
			media: {
				"1557801000177508352": {
					id: 1557801000177508352,
					id_str: "1557801000177508352",
					media_key: "30_1557801000177508352",
					media_url:
						"https://pbs.twimg.com/semantic_core_img/1557801000177508352/FJ_dWr_K?format=jpg&name=orig",
					original_info: {
						height: 390,
						width: 690,
					},
					type: "photo",
					url: "https://pbs.twimg.com/semantic_core_img/1557801000177508352/FJ_dWr_K?format=jpg&name=orig",
				},
			},
			moments: {},
			places: {},
			topics: {},
			tweets: {},
			users: {},
		},
		timeline: {
			id: "guide-168290849188296172-main-page-154-1652875681308213248",
			instructions: [
				{
					clearCache: {},
				},
				{
					addEntries: {
						entries: [
							{
								content: {
									operation: {
										cursor: {
											cursorType: "Top",
											value: "DefaultTopCursorValue",
										},
									},
								},
								entryId: "cursor:2",
								sortIndex: "3",
							},
							{
								content: {
									timelineModule: {
										clientEventInfo: {
											component: "unified_events",
											details: {
												guideDetails: {
													identifier:
														"DAABDAABCwABAAAALEd1aWRlLTBkNDA4NzEzLTI5MmItNGFiNy1iN2E2LWMwODVhZTQ1NDk4NS0xCwACAAAALEd1aWRlLTBkNDA4NzEzLTI5MmItNGFiNy1iN2E2LWMwODVhZTQ1NDk4NS0xAAAPAAIMAAAAAQwAAQsAAQAAACxHdWlkZS0wZDQwODcxMy0yOTJiLTRhYjctYjdhNi1jMDg1YWU0NTQ5ODUtMQsAAgAAACxHdWlkZS0wZDQwODcxMy0yOTJiLTRhYjctYjdhNi1jMDg1YWU0NTQ5ODUtMQAAAA==",
												},
											},
										},
										displayType: "Vertical",
										footer: {
											displayType: "Classic",
											landingUrl: {
												url: "https://twitter.com/explore/tabs/for-you",
												urlType: "ExternalUrl",
											},
											text: "Show more",
											url: "https://twitter.com/explore/tabs/for-you",
										},
										header: {
											displayType: "Classic",
											text: "What’s happening",
										},
										items: [
											{
												entryId: "event-1636161168719880192",
												item: {
													clientEventInfo: {
														component: "unified_events",
														details: {
															guideDetails: {
																identifier:
																	"DAABDAABCwABAAAAFXVuaWZpZWRfZXZlbnRzX21vZHVsZQsAAgAAAA51bmlmaWVkX2V2ZW50cwAADwACDAAAAAEMAAELAAEAAAAVdW5pZmllZF9ldmVudHNfbW9kdWxlCwACAAAADnVuaWZpZWRfZXZlbnRzAAAA",
																token:
																	"CwABAAAAJDBkNDA4NzEzLTI5MmItNGFiNy1iN2E2LWMwODVhZTQ1NDk4NQsAAgAAABMxNjM2MTYxMTY4NzE5ODgwMTkyBgADAAAKAAQW7xu+shZgAgsABQAAAB1FdmVudEludGVyZXN0Q2FuZGlkYXRlQnVpbGRlcgoABha0z+oI1iAAAA==",
																transparentGuideDetails: {
																	eventMetadata: {
																		eventId: "1636161168719880192",
																		impressionId:
																			"0d408713-292b-4ab7-b7a6-c085ae454985",
																		position: 0,
																		sourceId: "1652570094113808386",
																		sourceName: "EventInterestCandidateBuilder",
																	},
																},
															},
														},
														element: "event",
													},
													content: {
														eventSummary: {
															displayType: "Cell",
															id: "1636161168719880192",
															image: {
																height: 390,
																url: "https://pbs.twimg.com/semantic_core_img/1557801000177508352/FJ_dWr_K?format=jpg&name=orig",
																width: 690,
															},
															media: {
																mediaEntity: {
																	image: {
																		height: 390,
																		url: "https://pbs.twimg.com/semantic_core_img/1557801000177508352/FJ_dWr_K?format=jpg&name=orig",
																		width: 690,
																	},
																},
																mediaKey: {
																	category: 30,
																	id: "1557801000177508352",
																},
															},
															supportingText: "Premier League",
															timeString: "Yesterday",
															title: "Liverpool FC vs Tottenham Hotspur",
															url: {
																url: "https://twitter.com/i/events/1636161168719880192",
																urlType: "ExternalUrl",
															},
														},
													},
												},
											},
											{
												entryId: "trends-TikTok",
												item: {
													clientEventInfo: {
														component: "unified_events",
														details: {
															guideDetails: {
																identifier:
																	"DAABDAABCwABAAAAFXVuaWZpZWRfZXZlbnRzX21vZHVsZQsAAgAAAAZ0cmVuZHMAAA8AAgwAAAABDAABCwABAAAAFXVuaWZpZWRfZXZlbnRzX21vZHVsZQsAAgAAAAZ0cmVuZHMAAAA=",
																token:
																	"CwABAAAAJDBkNDA4NzEzLTI5MmItNGFiNy1iN2E2LWMwODVhZTQ1NDk4NQsAAgAAADM6bG9jYXRpb25fcmVxdWVzdDplbnRpdHlfdHJlbmQ6dGF4aV9jb3VudHJ5X3NvdXJjZToGAAMAAQsABAAAAAZUaWtUb2sPAAwKAAAAAAIADQAA",
																transparentGuideDetails: {
																	trendMetadata: {
																		associatedCuratedTweetIds: [],
																		containsCuratedTitle: false,
																		impressionId:
																			"0d408713-292b-4ab7-b7a6-c085ae454985",
																		impressionToken:
																			":location_request:entity_trend:taxi_country_source:",
																		position: 1,
																		trendName: "TikTok",
																	},
																},
															},
														},
														element: "trend",
													},
													content: {
														trend: {
															associatedCardUrls: [],
															name: "TikTok",
															trendMetadata: {
																domainContext: "Trending in United Kingdom",
																metaDescription: "772K Tweets",
																url: {
																	url: "twitter://search/?query=TikTok&src=trend_click&pc=true&vertical=trends",
																	urlType: "DeepLink",
																	urtEndpointOptions: {
																		requestParams: {
																			cd: "HBgGVGlrVG9rGCQwZDQwODcxMy0yOTJiLTRhYjctYjdhNi1jMDg1YWU0NTQ5ODUAAA==",
																		},
																	},
																},
															},
															url: {
																url: "twitter://search/?query=TikTok&src=trend_click&pc=true&vertical=trends",
																urlType: "DeepLink",
																urtEndpointOptions: {
																	requestParams: {
																		cd: "HBgGVGlrVG9rGCQwZDQwODcxMy0yOTJiLTRhYjctYjdhNi1jMDg1YWU0NTQ5ODUAAA==",
																	},
																},
															},
														},
													},
													feedbackInfo: {
														clientEventInfo: {
															action: "click",
															component: "trends",
															element: "feedback",
														},
														feedbackKeys: [
															"trend_not_interested_in_this_feedback_key",
															"trend_abusive_or_harmful_feedback_key",
														],
														feedbackMetadata:
															"DwABCwAAAAEAAAAGVGlrVG9rCgADZBa4US/r78kGAAQAAQ8ABQsAAAAACAAGAAAAAQA=",
													},
												},
											},
											{
												entryId: "trends-Russia",
												item: {
													clientEventInfo: {
														component: "unified_events",
														details: {
															guideDetails: {
																identifier:
																	"DAABDAABCwABAAAAFXVuaWZpZWRfZXZlbnRzX21vZHVsZQsAAgAAAAZ0cmVuZHMAAA8AAgwAAAABDAABCwABAAAAFXVuaWZpZWRfZXZlbnRzX21vZHVsZQsAAgAAAAZ0cmVuZHMAAAA=",
																token:
																	"CwABAAAAJDBkNDA4NzEzLTI5MmItNGFiNy1iN2E2LWMwODVhZTQ1NDk4NQsAAgAAADM6bG9jYXRpb25fcmVxdWVzdDplbnRpdHlfdHJlbmQ6dGF4aV9jb3VudHJ5X3NvdXJjZToGAAMAAgsABAAAAAZSdXNzaWEPAAkKAAAAAQvERVqEFcABCgAKC8RFWoQVwAEPAAwKAAAAAAIADQAA",
																transparentGuideDetails: {
																	trendMetadata: {
																		associatedCuratedTweetIds: [],
																		containsCuratedTitle: false,
																		displayedTopicId: "847878884917886977",
																		impressionId:
																			"0d408713-292b-4ab7-b7a6-c085ae454985",
																		impressionToken:
																			":location_request:entity_trend:taxi_country_source:",
																		position: 2,
																		topicIds: ["847878884917886977"],
																		trendName: "Russia",
																	},
																},
															},
														},
														element: "trend",
													},
													content: {
														trend: {
															associatedCardUrls: [],
															name: "Russia",
															trendMetadata: {
																domainContext: "Politics · Trending",
																metaDescription: "266K Tweets",
																url: {
																	url: "twitter://search/?query=Russia&src=trend_click&pc=true&vertical=trends",
																	urlType: "DeepLink",
																	urtEndpointOptions: {
																		requestParams: {
																			cd: "HBgGUnVzc2lhGCQwZDQwODcxMy0yOTJiLTRhYjctYjdhNi1jMDg1YWU0NTQ5ODUAAA==",
																		},
																	},
																},
															},
															url: {
																url: "twitter://search/?query=Russia&src=trend_click&pc=true&vertical=trends",
																urlType: "DeepLink",
																urtEndpointOptions: {
																	requestParams: {
																		cd: "HBgGUnVzc2lhGCQwZDQwODcxMy0yOTJiLTRhYjctYjdhNi1jMDg1YWU0NTQ5ODUAAA==",
																	},
																},
															},
														},
													},
													feedbackInfo: {
														clientEventInfo: {
															action: "click",
															component: "trends",
															element: "feedback",
														},
														feedbackKeys: [
															"trend_not_interested_in_this_feedback_key",
															"trend_abusive_or_harmful_feedback_key",
														],
														feedbackMetadata:
															"DwABCwAAAAEAAAAGUnVzc2lhCgADZBa4US/r78kGAAQAAg8ABQsAAAAACAAGAAAAAQA=",
													},
												},
											},
											{
												entryId: "trends-MOTD2",
												item: {
													clientEventInfo: {
														component: "unified_events",
														details: {
															guideDetails: {
																identifier:
																	"DAABDAABCwABAAAAFXVuaWZpZWRfZXZlbnRzX21vZHVsZQsAAgAAAAZ0cmVuZHMAAA8AAgwAAAABDAABCwABAAAAFXVuaWZpZWRfZXZlbnRzX21vZHVsZQsAAgAAAAZ0cmVuZHMAAAA=",
																token:
																	"CwABAAAAJDBkNDA4NzEzLTI5MmItNGFiNy1iN2E2LWMwODVhZTQ1NDk4NQsAAgAAADM6bG9jYXRpb25fcmVxdWVzdDplbnRpdHlfdHJlbmQ6dGF4aV9jb3VudHJ5X3NvdXJjZToGAAMAAwsABAAAAAVNT1REMg8ADAoAAAAAAgANAAA=",
																transparentGuideDetails: {
																	trendMetadata: {
																		associatedCuratedTweetIds: [],
																		containsCuratedTitle: false,
																		impressionId:
																			"0d408713-292b-4ab7-b7a6-c085ae454985",
																		impressionToken:
																			":location_request:entity_trend:taxi_country_source:",
																		position: 3,
																		trendName: "MOTD2",
																	},
																},
															},
														},
														element: "trend",
													},
													content: {
														trend: {
															associatedCardUrls: [],
															name: "MOTD2",
															trendMetadata: {
																domainContext: "Trending in United Kingdom",
																url: {
																	url: "twitter://search/?query=MOTD2&src=trend_click&pc=true&vertical=trends",
																	urlType: "DeepLink",
																	urtEndpointOptions: {
																		requestParams: {
																			cd: "HBgFTU9URDIYJDBkNDA4NzEzLTI5MmItNGFiNy1iN2E2LWMwODVhZTQ1NDk4NQAA",
																		},
																	},
																},
															},
															url: {
																url: "twitter://search/?query=MOTD2&src=trend_click&pc=true&vertical=trends",
																urlType: "DeepLink",
																urtEndpointOptions: {
																	requestParams: {
																		cd: "HBgFTU9URDIYJDBkNDA4NzEzLTI5MmItNGFiNy1iN2E2LWMwODVhZTQ1NDk4NQAA",
																	},
																},
															},
														},
													},
													feedbackInfo: {
														clientEventInfo: {
															action: "click",
															component: "trends",
															element: "feedback",
														},
														feedbackKeys: [
															"trend_not_interested_in_this_feedback_key",
															"trend_abusive_or_harmful_feedback_key",
														],
														feedbackMetadata:
															"DwABCwAAAAEAAAAFTU9URDIKAANkFrhRL+vvyQYABAADDwAFCwAAAAAIAAYAAAABAA==",
													},
												},
											},
											{
												entryId: "trends-Star+Wars",
												item: {
													clientEventInfo: {
														component: "unified_events",
														details: {
															guideDetails: {
																identifier:
																	"DAABDAABCwABAAAAFXVuaWZpZWRfZXZlbnRzX21vZHVsZQsAAgAAAAZ0cmVuZHMAAA8AAgwAAAABDAABCwABAAAAFXVuaWZpZWRfZXZlbnRzX21vZHVsZQsAAgAAAAZ0cmVuZHMAAAA=",
																token:
																	"CwABAAAAJDBkNDA4NzEzLTI5MmItNGFiNy1iN2E2LWMwODVhZTQ1NDk4NQsAAgAAADM6bG9jYXRpb25fcmVxdWVzdDplbnRpdHlfdHJlbmQ6dGF4aV9jb3VudHJ5X3NvdXJjZToGAAMABAsABAAAAAlTdGFyIFdhcnMPAAkKAAAAAQumqRHLVOAACgAKC6apEctU4AAPAAwKAAAAAAIADQAA",
																transparentGuideDetails: {
																	trendMetadata: {
																		associatedCuratedTweetIds: [],
																		containsCuratedTitle: false,
																		displayedTopicId: "839544274442051584",
																		impressionId:
																			"0d408713-292b-4ab7-b7a6-c085ae454985",
																		impressionToken:
																			":location_request:entity_trend:taxi_country_source:",
																		position: 4,
																		topicIds: ["839544274442051584"],
																		trendName: "Star Wars",
																	},
																},
															},
														},
														element: "trend",
													},
													content: {
														trend: {
															associatedCardUrls: [],
															name: "Star Wars",
															trendMetadata: {
																domainContext: "Entertainment · Trending",
																metaDescription: "44.3K Tweets",
																url: {
																	url: "twitter://search/?query=%22Star+Wars%22&src=trend_click&pc=true&vertical=trends",
																	urlType: "DeepLink",
																	urtEndpointOptions: {
																		requestParams: {
																			cd: "HBgJU3RhciBXYXJzGCQwZDQwODcxMy0yOTJiLTRhYjctYjdhNi1jMDg1YWU0NTQ5ODUAAA==",
																		},
																	},
																},
															},
															url: {
																url: "twitter://search/?query=%22Star+Wars%22&src=trend_click&pc=true&vertical=trends",
																urlType: "DeepLink",
																urtEndpointOptions: {
																	requestParams: {
																		cd: "HBgJU3RhciBXYXJzGCQwZDQwODcxMy0yOTJiLTRhYjctYjdhNi1jMDg1YWU0NTQ5ODUAAA==",
																	},
																},
															},
														},
													},
													feedbackInfo: {
														clientEventInfo: {
															action: "click",
															component: "trends",
															element: "feedback",
														},
														feedbackKeys: [
															"trend_not_interested_in_this_feedback_key",
															"trend_abusive_or_harmful_feedback_key",
														],
														feedbackMetadata:
															"DwABCwAAAAEAAAAJU3RhciBXYXJzCgADZBa4US/r78kGAAQABA8ABQsAAAAACAAGAAAAAQA=",
													},
												},
											},
										],
									},
								},
								entryId: "Guide-0d408713-292b-4ab7-b7a6-c085ae454985-1",
								sortIndex: "2",
							},
							{
								content: {
									operation: {
										cursor: {
											cursorType: "Bottom",
											value: "DefaultBottomCursorValue",
										},
									},
								},
								entryId: "cursor:1",
								sortIndex: "1",
							},
						],
					},
				},
				{
					terminateTimeline: {
						direction: "Bottom",
					},
				},
			],
			responseObjects: {
				feedbackActions: {
					guide_hide_topic_key: {
						confirmation: "Thank you, we will show you less of this",
						confirmationDisplayType: "Inline",
						feedbackType: "SeeFewer",
						feedbackUrl: "/2/guide/feedback/hide_topic.json",
						hasUndoAction: true,
						icon: "TOPIC_CLOSE",
						prompt: "Unfollow topic",
					},
					guide_not_interested_feedback_key: {
						confirmation: "Thank you, we will show you less of this",
						confirmationDisplayType: "Inline",
						feedbackType: "SeeFewer",
						feedbackUrl: "/2/guide/dont_like_this/feedback.json",
						hasUndoAction: true,
						icon: "NO",
						prompt: "Hide",
					},
					guide_see_less_feedback_key: {
						confirmation: "Thank you, we will show you less of this",
						confirmationDisplayType: "Inline",
						feedbackType: "SeeFewer",
						feedbackUrl: "/2/guide/dont_like_this/feedback.json",
						hasUndoAction: true,
						prompt: "Show less often",
					},
					guide_see_more_feedback_key: {
						confirmation: "Thank you, we will show you more of this",
						confirmationDisplayType: "BottomSheet",
						feedbackType: "SeeMore",
						feedbackUrl: "/2/guide/show_more/feedback.json",
						hasUndoAction: true,
						prompt: "Show more often",
					},
					spotlight_dismiss_feedback_key: {
						confirmation: "Thanks. Refresh this page to update these trends.",
						confirmationDisplayType: "BottomSheet",
						feedbackType: "Dismiss",
						hasUndoAction: false,
						prompt: "Don't want to see this ad",
					},
					trend_abusive_feedback_key: {
						confirmation: "Thanks. Refresh this page to update these trends.",
						confirmationDisplayType: "Inline",
						feedbackType: "SeeFewer",
						feedbackUrl:
							"/2/guide/insert_feedback/trend_abusive_feedback_key.json",
						hasUndoAction: false,
						prompt: "This trend is abusive or harmful",
					},
					trend_abusive_or_harmful_feedback_key: {
						confirmation: "Thanks. Refresh this page to update these trends.",
						confirmationDisplayType: "BottomSheet",
						feedbackType: "SeeFewer",
						feedbackUrl:
							"/2/guide/insert_feedback/trend_abusive_or_harmful_feedback_key.json",
						hasUndoAction: false,
						prompt: "This trend is harmful or spammy",
					},
					trend_duplicate_feedback_key: {
						confirmation: "Thanks. Refresh this page to update these trends.",
						confirmationDisplayType: "Inline",
						feedbackType: "SeeFewer",
						feedbackUrl:
							"/2/guide/insert_feedback/trend_duplicate_feedback_key.json",
						hasUndoAction: false,
						prompt: "This trend is a duplicate",
					},
					trend_irrelevant_content_feedback_key: {
						confirmation: "Thanks. Refresh this page to update these trends.",
						confirmationDisplayType: "BottomSheet",
						feedbackType: "SeeFewer",
						feedbackUrl:
							"/2/guide/insert_feedback/trend_irrelevant_content_feedback_key.json",
						hasUndoAction: false,
						prompt: "The associated content is not relevant",
					},
					trend_low_quality_feedback_key: {
						confirmation: "Thanks. Refresh this page to update these trends.",
						confirmationDisplayType: "Inline",
						feedbackType: "SeeFewer",
						feedbackUrl:
							"/2/guide/insert_feedback/trend_low_quality_feedback_key.json",
						hasUndoAction: false,
						prompt: "This trend is low quality",
					},
					trend_not_interested_in_this_feedback_key: {
						confirmation: "Thanks. Refresh this page to update these trends.",
						confirmationDisplayType: "Inline",
						feedbackType: "SeeFewer",
						feedbackUrl:
							"/2/guide/insert_feedback/trend_not_interested_in_this_feedback_key.json",
						hasUndoAction: false,
						prompt: "Not interested in this",
					},
					trend_spam_feedback_key: {
						confirmation: "Thanks. Refresh this page to update these trends.",
						confirmationDisplayType: "Inline",
						feedbackType: "SeeFewer",
						feedbackUrl:
							"/2/guide/insert_feedback/trend_spam_feedback_key.json",
						hasUndoAction: false,
						prompt: "This trend is spam",
					},
				},
			},
		},
	});
});

export default router;

/*
{
  "id": 287333780,
  "id_str": "287333780",
  "name": "real user",
  "screen_name": "elonmusk",
  "location": "NYC",
  "description": "\"You Will Find Your People\" out now!!📚✨Author of \"How To Be Alone\"📘The Onion. Tinder Live. \"I Thought It Was Just Me\" podcast. Musician @itwasromance",
  "url": "https://t.co/qDSfAc207A",
  "entities": {
    "url": {
      "urls": [
        {
          "url": "https://t.co/qDSfAc207A",
          "expanded_url": "https://linktr.ee/hellolanemoore",
          "display_url": "linktr.ee/hellolanemoore",
          "indices": [
            0,
            23
          ]
        }
      ]
    },
    "description": {
      "urls": []
    }
  },
  "protected": false,
  "followers_count": 73061,
  "fast_followers_count": 0,
  "normal_followers_count": 73061,
  "friends_count": 6586,
  "listed_count": 652,
  "created_at": "Sun Apr 24 19:51:11 +0000 2011",
  "favourites_count": 48013,
  "utc_offset": null,
  "time_zone": null,
  "geo_enabled": true,
  "verified": false,
  "statuses_count": 5092,
  "media_count": 941,
  "lang": null,
  "contributors_enabled": false,
  "is_translator": false,
  "is_translation_enabled": false,
  "profile_background_color": "131516",
  "profile_background_image_url": "http://abs.twimg.com/images/themes/theme14/bg.gif",
  "profile_background_image_url_https": "https://abs.twimg.com/images/themes/theme14/bg.gif",
  "profile_background_tile": true,
  "profile_image_url": "",
  "profile_image_url_https": "",
  "profile_banner_url": "https://pbs.twimg.com/profile_banners/287333780/1670952217",
  "profile_link_color": "0AADAD",
  "profile_sidebar_border_color": "FFFFFF",
  "profile_sidebar_fill_color": "EFEFEF",
  "profile_text_color": "333333",
  "profile_use_background_image": true,
  "has_extended_profile": true,
  "default_profile": false,
  "default_profile_image": true,
  "pinned_tweet_ids": [
    1597245073057775600
  ],
  "pinned_tweet_ids_str": [
    "1597245073057775616"
  ],
  "has_custom_timelines": false,
  "can_dm": null,
  "following": null,
  "follow_request_sent": null,
  "notifications": null,
  "muting": null,
  "blocking": null,
  "blocked_by": null,
  "want_retweets": null,
  "advertiser_account_type": "none",
  "advertiser_account_service_levels": [],
  "business_profile_state": "none",
  "translator_type": "none",
  "withheld_in_countries": [],
  "followed_by": null,
  "ext_is_blue_verified": false,
  "ext_profile_image_shape": "Circle",
  "ext_has_nft_avatar": false,
  "ext": {
    "highlightedLabel": {
      "r": {
        "ok": {}
      },
      "ttl": -1
    },
    "hasNftAvatar": {
      "r": {
        "ok": false
      },
      "ttl": -1
    }
  },
  "require_some_consent": false
}
*/
