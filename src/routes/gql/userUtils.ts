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
import { log } from "../../util/logging";
import { randInt } from "../../util/randUtil";

export interface IUserMention {
	id_str?: string;
	name?: string;
	screen_name?: string;
	indices?: [number?, number?];
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

export async function UserByScreenName(
	req: express.Request,
	res: express.Response
) {
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
}

export async function UserByRestId(
	req: express.Request,
	res: express.Response
) {
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
}

export async function ProfileSpotlightsQuery(
	req: express.Request,
	res: express.Response
) {
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

export async function AuthenticatedUserTFLists(
	req: express.Request,
	res: express.Response
) {
	return res.status(200).send({
		data: {
			authenticated_user_trusted_friends_lists: [
				{
					id: "VHJ1c3RlZEZyaWVuZHNMaXN0OjE2NTMwNTQ0MjUzNzg4MjgyODg=",
					rest_id: "1653054425378828288",
					name: "Twitter Circle",
					member_count: 0,
				},
			],
		},
	});
}
