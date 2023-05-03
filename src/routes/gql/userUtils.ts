import express from "express";
import { verify } from "jsonwebtoken";
import { requireAuth } from "../../middleware/auth";
import Tweet from "../../models/Tweet";
import User from "../../models/User";
import {
	IGenericFeatures,
	IUserByScreenNameVariables,
	IUserByRestIdVariables,
	IJwtDecoded,
	IProfileSpotlightsQueryVariables,
	ICreateTweetBody,
} from "../../types/graphql";
import { formatDate } from "../../util/formatDate";
import { randInt } from "../../util/randUtil";

const router = express.Router();

interface IUserMention {
	id_str: string;
	name: string;
	screen_name: string;
	indices: [number, number];
}

// router.get("/P7qs2Sf7vu1LDKbzDW9FSA/UserMedia", async (req, res) => {
// 	const features = JSON.parse(
// 		req.query.features!.toString()
// 	) as IGenericFeatures;
// 	const variables = JSON.parse(
// 		req.query.variables!.toString()
// 	) as IUserByRestIdVariables;
// 	if (!features || !variables)
// 		return res.status(400).send({ msg: "Missing parameters" });
// 	const id_string = variables.userId;
// 	if (!id_string || id_string === "undefined")
// 		return res.status(400).send({ msg: "Error occurred extracting twid" });
// 	const user = await User.findOne({
// 		id_string,
// 	});
// 	if (!user) return res.status(200).send({ data: {} });
// 	return res.status(200).send({
// 		data: {
// 			user: {
// 				result: {
// 					__typename: "User",
// 					id: user._id,
// 					rest_id: user.id,
// 					affiliates_highlighted_label: {
// 						label: {
// 							url: {
// 								url: "https://twitter.com/notnullptr",
// 								urlType: "DeepLink",
// 							},
// 							badge: {
// 								url: "https://api.twitter.com/img/nullptr.jpg",
// 							},
// 							description: "nullptr",
// 							userLabelType: "BusinessLabel",
// 							userLabelDisplayType: "Badge",
// 						},
// 					},
// 					is_blue_verified: true,
// 					profile_image_shape: "Circle",
// 					legacy: user,
// 					business_account: {},
// 				},
// 			},
// 		},
// 	});
// });

router.get("/sLVLhk0bGj3MVFEKTdax1w/UserByScreenName", async (req, res) => {
	const features = JSON.parse(
		req.query.features!.toString()
	) as IGenericFeatures;
	const variables = JSON.parse(
		req.query.variables!.toString()
	) as IUserByScreenNameVariables;
	if (!features || !variables)
		return res.status(400).send({ msg: "Missing parameters" });
	const screenName = variables.screen_name;
	if (!screenName || screenName === "undefined")
		return res.status(400).send({ msg: "Error occurred extracting twid" });
	const user = await User.findOne({
		screen_name: {
			$regex: new RegExp(screenName, "i"),
		},
	});
	if (!user) return res.status(200).send({ data: {} });
	return res.status(200).send({
		data: {
			user: {
				result: {
					__typename: "User",
					affiliates_highlighted_label: user.ext?.highlightedLabel?.r?.ok,
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
						verified_type: user.verified_type || "None",
						withheld_in_countries: user.withheld_in_countries,
					},
					profile_image_shape: user.ext_profile_image_shape,
					rest_id: user.id,
				},
			},
		},
	});
});

router.get("/GazOglcBvgLigl3ywt6b3Q/UserByRestId", async (req, res) => {
	const features = JSON.parse(
		req.query.features!.toString()
	) as IGenericFeatures;
	const variables = JSON.parse(
		req.query.variables!.toString()
	) as IUserByRestIdVariables;
	if (!features || !variables)
		return res.status(400).send({ msg: "Missing parameters" });
	const id_string = variables.userId;
	if (!id_string || id_string === "undefined")
		return res.status(400).send({ msg: "Error occurred extracting twid" });
	const user = await User.findOne({
		id_string: {
			$regex: new RegExp(id_string, "i"),
		},
	});
	if (!user) return res.status(200).send({ data: {} });
	return res.status(200).send({
		data: {
			user: {
				result: {
					__typename: "User",
					affiliates_highlighted_label: user.ext?.highlightedLabel?.r?.ok,
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
	});
});

router.get(
	"/9zwVLJ48lmVUk8u_Gh9DmA/ProfileSpotlightsQuery",
	async (req, res) => {
		const variables = JSON.parse(
			req.query.variables!.toString()
		) as IProfileSpotlightsQueryVariables;
		if (!variables) return res.status(400).send({ msg: "Missing parameters" });
		const screenName = variables.screen_name;
		if (!screenName || screenName === "undefined")
			return res.status(400).send({ msg: "Error occurred extracting twid" });
		const user = await User.findOne({
			screen_name: screenName,
		});
		if (!user) return res.status(400).send({ msg: "User not found" });
		// if (user.id !== jwtParams.id)
		// 	return res.status(401).send({ msg: "Unauthorized" });
		return res.status(200).send({
			data: {
				user_result_by_screen_name: {
					result: {
						__typename: "User",
						id: user._id,
						legacy: {
							blocked_by: false,
							blocking: false,
							followed_by: false,
							following: false,
							name: user.name,
							protected: false,
							screen_name: user.screen_name,
						},
						profilemodules: {
							v1: [],
						},
						rest_id: user._id,
					},
				},
			},
		});
	}
);

router.post("/1RyAhNwby-gzGCRVsMxKbQ/CreateTweet", async (req, res) => {
	const body = req.body as ICreateTweetBody;
	const id = (
		verify(req.cookies["jwt"], process.env.JWT_SECRET!) as IJwtDecoded
	).id as number;
	const user = await User.findOne({ id });
	if (!user) return res.status(400).send({ msg: "User not found" });
	const tags = [] as IUserMention[];
	const matches = body.variables.tweet_text.matchAll(/@(\S+)/gm);
	for (const match of matches) {
		const withTag = match[0];
		const withoutTag = match[1];
		const user = await User.findOne({ screen_name: withoutTag });
		if (!user) break;
		tags.push({
			id_str: user.id_string,
			name: user.name,
			screen_name: user.screen_name,
			indices: [],
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
			display_text_range: [0, 88],
			entities: {
				hashtags: [],
				symbols: [],
				urls: [],
				user_mentions: [],
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
			user_mentions: tweetData.legacy.entities.user_mentions,
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
								user_mentions: [],
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
});

router.use("/1RyAhNwby-gzGCRVsMxKbQ/CreateTweet", requireAuth);

router.get("/QjN8ZdavFDqxUjNn3r9cig/AuthenticatedUserTFLists", (req, res) => {
	return res.status(200).send({
		data: {
			authenticated_user_trusted_friends_lists: [
				{
					id: "VHJ1c3RlZEZyaWVuZHNMaXN0OjE1NjU3MzI2MzAwNTc4NjkzMTM=",
					member_count: 0,
					name: "Twitter Circle",
					rest_id: "1565732630057869313",
				},
			],
		},
	});
});

export default router;
