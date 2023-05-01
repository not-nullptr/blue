import express from "express";
import User from "../../models/User";

interface IUserByScreenNameVariables {
	screen_name: string;
	withSafetyModeUserFields: boolean;
}

interface IGenericFeatures {
	blue_business_profile_image_shape_enabled: boolean;
	responsive_web_graphql_exclude_directive_enabled: boolean;
	verified_phone_label_enabled: boolean;
	responsive_web_graphql_skip_user_profile_image_extensions_enabled: boolean;
	responsive_web_graphql_timeline_navigation_enabled: boolean;
}

interface IUserByRestIdVariables {
	userId: string;
	withSafetyModeUserFields: boolean;
}

const router = express.Router();

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
		screen_name: screenName,
	});
	if (!user) return res.status(200).send({ data: {} });
	res.setHeader("Perf", "7626143928");
	res.setHeader("Vary", "Origin");
	res.setHeader("Pragma", "no-cache");
	res.setHeader("Server", "tsa_f");
	res.setHeader("Expires", "Tue, 31 Mar 1981 05:00:00 GMT");
	res.setHeader(
		"Cache-Control",
		"no-cache, no-store, must-revalidate, pre-check=0, post-check=0"
	);
	res.setHeader("X-Frame-Options", "SAMEORIGIN");
	res.setHeader("X-Transaction-Id", "b5b701c86774e78f");
	res.setHeader("X-XSS-Protection", "0");
	res.setHeader("X-Rate-Limit-Limit", "500");
	res.setHeader("X-Rate-Limit-Reset", "1682943740");
	res.setHeader("X-Tfe-Preserve-Body", "true");
	res.setHeader("X-Content-Type-Options", "nosniff");
	res.setHeader("X-Rate-Limit-Remaining", "499");
	res.setHeader("X-Twitter-Response-Tags", "BouncerCompliant");
	res.setHeader("Strict-Transport-Security", "max-age=631138519");
	res.setHeader("X-Response-Time", "160");
	res.setHeader(
		"X-Connection-Hash",
		"e777f90e24be135cee22574aa1e055936f151966f6fe4aa23fba8ac7018ef814"
	);
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
						verified_type: user.verified_type || "Government",
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
		id_string,
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

export default router;
