import express from "express";
import User from "../../../models/User";
import { decode } from "jsonwebtoken";
import Notification from "../../../models/Notification";

const router = express.Router();

router.get("/notifications/all.json", async (req, res) => {
	const jwt = req.cookies.jwt as string | undefined;
	if (!jwt) return res.status(400).send({ msg: "Not authorized" });
	const user = await User.findOne({
		id_string: (decode(jwt) as { id: string }).id,
	});
	if (!user) return res.status(500).send({ msg: "User not found" });

	const notifications = await Promise.all(
		user.notification_ids.map(async (id) => {
			const noti = await Notification.findOne({ id });
			if (!noti) {
				throw new Error("Notification not found");
			}
			return noti!;
		})
	);
	const previousSortIndex = user.notification_sort_index;
	user.notification_sort_index = Date.now().toString();
	await user.save();
	return res.status(200).send({
		globalObjects: {
			users: {
				// "1652358172495998980": {
				// 	id: 1652358172495998980,
				// 	id_str: "1652358172495998980",
				// 	name: "notnullptr",
				// 	screen_name: "notnullptr",
				// 	location: null,
				// 	description: null,
				// 	url: null,
				// 	entities: {
				// 		description: {
				// 			urls: [],
				// 		},
				// 	},
				// 	protected: false,
				// 	followers_count: 0,
				// 	friends_count: 1,
				// 	listed_count: 0,
				// 	created_at: "Sat Apr 29 17:04:26 +0000 2023",
				// 	favourites_count: 2,
				// 	utc_offset: null,
				// 	time_zone: null,
				// 	geo_enabled: false,
				// 	verified: false,
				// 	statuses_count: 5,
				// 	lang: null,
				// 	contributors_enabled: false,
				// 	is_translator: false,
				// 	is_translation_enabled: false,
				// 	profile_background_color: "F5F8FA",
				// 	profile_background_image_url: null,
				// 	profile_background_image_url_https: null,
				// 	profile_background_tile: false,
				// 	profile_image_url:
				// 		"http://pbs.twimg.com/profile_images/1652358255136350209/a_Ib9CsR_normal.jpg",
				// 	profile_image_url_https:
				// 		"https://pbs.twimg.com/profile_images/1652358255136350209/a_Ib9CsR_normal.jpg",
				// 	profile_link_color: "1DA1F2",
				// 	profile_sidebar_border_color: "C0DEED",
				// 	profile_sidebar_fill_color: "DDEEF6",
				// 	profile_text_color: "333333",
				// 	profile_use_background_image: true,
				// 	default_profile: true,
				// 	default_profile_image: false,
				// 	following: null,
				// 	follow_request_sent: null,
				// 	notifications: null,
				// 	blocking: null,
				// 	translator_type: "none",
				// 	withheld_in_countries: [],
				// 	ext_is_blue_verified: false,
				// },
				// "1483042300943122432": {
				// 	id: 1483042300943122432,
				// 	id_str: "1483042300943122432",
				// 	name: "mads\u14383",
				// 	screen_name: "madsthecatgirl",
				// 	location: "right behind you spy tf2 HAHAH",
				// 	description:
				// 		"chronically online twitter looks fun, wish i was there :/",
				// 	url: null,
				// 	entities: {
				// 		description: {
				// 			urls: [],
				// 		},
				// 	},
				// 	protected: false,
				// 	followers_count: 30,
				// 	friends_count: 176,
				// 	listed_count: 1,
				// 	created_at: "Mon Jan 17 11:43:44 +0000 2022",
				// 	favourites_count: 1164,
				// 	utc_offset: null,
				// 	time_zone: null,
				// 	geo_enabled: false,
				// 	verified: false,
				// 	statuses_count: 611,
				// 	lang: null,
				// 	contributors_enabled: false,
				// 	is_translator: false,
				// 	is_translation_enabled: false,
				// 	profile_background_color: "F5F8FA",
				// 	profile_background_image_url: null,
				// 	profile_background_image_url_https: null,
				// 	profile_background_tile: false,
				// 	profile_image_url:
				// 		"http://pbs.twimg.com/profile_images/1562613150863736832/3TrYlu0f_normal.jpg",
				// 	profile_image_url_https:
				// 		"https://pbs.twimg.com/profile_images/1562613150863736832/3TrYlu0f_normal.jpg",
				// 	profile_link_color: "1DA1F2",
				// 	profile_sidebar_border_color: "C0DEED",
				// 	profile_sidebar_fill_color: "DDEEF6",
				// 	profile_text_color: "333333",
				// 	profile_use_background_image: true,
				// 	default_profile: true,
				// 	default_profile_image: false,
				// 	following: false,
				// 	follow_request_sent: null,
				// 	notifications: null,
				// 	blocking: false,
				// 	blocked_by: false,
				// 	want_retweets: false,
				// 	profile_interstitial_type: "",
				// 	translator_type: "none",
				// 	withheld_in_countries: [],
				// 	followed_by: false,
				// 	ext_is_blue_verified: false,
				// 	ext_highlighted_label: {},
				// },
			},
			tweets: {
				// "1653176782265237505": {
				// 	created_at: "Mon May 01 23:17:14 +0000 2023",
				// 	id: 1653176782265237505,
				// 	id_str: "1653176782265237505",
				// 	full_text:
				// 		"/1RyAhNwby-gzGCRVsMxKbQ/CreateTweet return value pls? thanks twitter",
				// 	truncated: false,
				// 	display_text_range: [0, 68],
				// 	entities: {
				// 		hashtags: [],
				// 		symbols: [],
				// 		user_mentions: [],
				// 		urls: [],
				// 	},
				// 	source:
				// 		'\u003ca href="https://mobile.twitter.com" rel="nofollow"\u003eTwitter Web App\u003c/a\u003e',
				// 	in_reply_to_status_id: null,
				// 	in_reply_to_status_id_str: null,
				// 	in_reply_to_user_id: null,
				// 	in_reply_to_user_id_str: null,
				// 	in_reply_to_screen_name: null,
				// 	user_id: 1652358172495998980,
				// 	user_id_str: "1652358172495998980",
				// 	geo: null,
				// 	coordinates: null,
				// 	place: null,
				// 	contributors: null,
				// 	is_quote_status: false,
				// 	retweet_count: 0,
				// 	favorite_count: 1,
				// 	reply_count: 0,
				// 	quote_count: 0,
				// 	conversation_id: 1653176782265237505,
				// 	conversation_id_str: "1653176782265237505",
				// 	conversation_muted: false,
				// 	favorited: false,
				// 	retweeted: false,
				// 	lang: "en",
				// 	ext: {
				// 		superFollowMetadata: {
				// 			r: {
				// 				ok: {},
				// 			},
				// 			ttl: -1,
				// 		},
				// 	},
				// },
			},
			notifications: notifications.reduce((result, obj) => {
				const { id, ...rest } = obj; // Extract the name property and the rest of the object properties
				(result as any)[id as any] = { id, ...(rest as any)._doc }; // Assign the name as a key and create a new object with the name and the rest of the properties
				return result;
			}, {}),
		},
		timeline: {
			id: "Fu5bANlWcAQAAAABSQ3bEZt9Egk",
			instructions: [
				{
					addEntries: {
						entries: [
							{
								entryId: "cursor-top-1686235898801",
								sortIndex: "1686235898801",
								content: {
									operation: {
										cursor: {
											value:
												"DAABDAABCgABFu5bANlWcAQIAAIAAAABCAADSQ3bEQgABJt9EgkACwACAAAAC0FZaWJmZU93N0g4AAA",
											cursorType: "Top",
										},
									},
								},
							},
							...notifications.map((notification) => {
								return {
									entryId: `notification-${notification.id}`,
									sortIndex: notification.timestampMs,
									content: {
										item: {
											content: {
												notification: {
													id: notification.id,
													url: {
														urlType: "ExternalUrl",
														url: "https://twitter.com/Twitter/1234567890123456",
													},
												},
											},
											clientEventInfo: {
												component: "urt",
												element: "users_liked_your_tweet",
												details: {
													notificationDetails: {
														impressionId: "e8609d2322c03cb5a009ae20b7ff16ed",
														metadata:
															"CwABAAAAMzk5YzgzMzNiMzJjZjMxYmMuZGQzN2JjZDg4NDg3ZjUzMzw6OTljODMzM2IzMmNmMzFiYwsAAgAAACNGdTViQU5sV2NBUUFBQUFCU1EzYkVadDlFZ21zYWFKOGdEcwsAAwAAAB4xNjUyMzU4MTcyNDk1OTk4OTgwLS01ODUyMzE0ODgKAAQAAAAAAAAAAQ8ABQoAAAABFvFDhknXwAELAAYAAAAWdXNlcnNfbGlrZWRfeW91cl90d2VldA8ABwsAAAABAAAAHjE2NTIzNTgxNzI0OTU5OTg5ODAtLTU4NTIzMTQ4OAA",
													},
												},
											},
										},
									},
								};
							}),
							{
								entryId: "cursor-bottom-1686235898799",
								sortIndex: "1686235898799",
								content: {
									operation: {
										cursor: {
											value:
												"DAACDAABCgABFu5bANlWcAQIAAIAAAABCAADSQ3bEQgABJt9EgkACwACAAAAC0FZaWJmZU93N0g4AAA",
											cursorType: "Bottom",
										},
									},
								},
							},
						],
					},
				},
				{
					clearEntriesUnreadState: {},
				},
				{
					markEntriesUnreadGreaterThanSortIndex: {
						sortIndex: previousSortIndex,
					},
				},
			],
		},
	});
	// return res.status(200).send({
	// 	globalObjects: {
	// 		notifications: {
	// 			FJTTHX6XwAAAAAABiJONct1wJenoJ7xypmc: {
	// 				id: "FJTTHX6XwAAAAAABiJONct1wJenoJ7xypmc",
	// 				timestampMs: "0",
	// 				icon: { id: "bird_icon" },
	// 				message: {
	// 					text: "Blue OSS doesn't support notifications right now. Click here to check the GitHub page.",
	// 					entities: [],
	// 					rtl: false,
	// 				},
	// 				template: {
	// 					aggregateUserActionsV1: { targetObjects: [], fromUsers: [] },
	// 				},
	// 			},
	// 		},
	// 	},
	// 	timeline: {
	// 		id: "FJTTHX6XwAAAAAABiJONct1wJek",
	// 		instructions: [
	// 			{
	// 				addEntries: {
	// 					entries: [
	// 						{
	// 							entryId: "notification-FJTTHX6XwAAAAAABiJONct1wJenoJ7xypmc",
	// 							sortIndex: "1682892524091",
	// 							content: {
	// 								item: {
	// 									content: {
	// 										notification: {
	// 											id: "FJTTHX6XwAAAAAABiJONct1wJenoJ7xypmc",
	// 											url: {
	// 												urlType: "ExternalUrl",
	// 												url: "https://github.com/not-nullptr/blue",
	// 											},
	// 										},
	// 									},
	// 									clientEventInfo: {
	// 										component: "urt",
	// 										element: "generic_login_notification",
	// 										details: {
	// 											notificationDetails: {
	// 												impressionId: "f1d0344dafd82575fee2ca3636e98fb2",
	// 												metadata:
	// 													"CwABAAAAMzRiMmEwYjY4MzRiMDRmM2YuNGNhZjdmYmJlNjU2MjE5NTw6NGIyYTBiNjgzNGIwNGYzZgsAAgAAACNGSlRUSFg2WHdBQUFBQUFCaUpPTmN0MXdKZW1nbklXRXBtYwsAAwAAABBsb2dpbl9udGFiX25vdGlmCgAEAAAAAAAAAAELAAYAAAAaZ2VuZXJpY19sb2dpbl9ub3RpZmljYXRpb24PAAcLAAAAAQAAAB0xNDgzMDQyMzAwOTQzMTIyNDMyLTYyNjg4Njg5NAA",
	// 											},
	// 										},
	// 									},
	// 								},
	// 							},
	// 						},
	// 					],
	// 				},
	// 			},
	// 			{ clearEntriesUnreadState: {} },
	// 			{
	// 				markEntriesUnreadGreaterThanSortIndex: { sortIndex: "1683059608017" },
	// 			},
	// 		],
	// 	},
	// });
});

export default router;
