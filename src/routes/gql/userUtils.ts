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
	return res.status(200).send({
		data: {
			user: {
				result: {
					__typename: "User",
					id: user._id,
					rest_id: user.id,
					affiliates_highlighted_label: {
						label: {
							url: {
								url: "https://twitter.com/Twitter",
								urlType: "DeepLink",
							},
							badge: {
								url: "https://pbs.twimg.com/profile_images/1488548719062654976/u6qfBBkF_bigger.jpg",
							},
							description: "Twitter",
							userLabelType: "BusinessLabel",
							userLabelDisplayType: "Badge",
						},
					},
					is_blue_verified: true,
					profile_image_shape: "Circle",
					legacy: user,
					business_account: {},
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
					id: user._id,
					rest_id: user.id,
					affiliates_highlighted_label: {
						label: {
							url: {
								url: "https://twitter.com/Twitter",
								urlType: "DeepLink",
							},
							badge: {
								url: "https://pbs.twimg.com/profile_images/1488548719062654976/u6qfBBkF_bigger.jpg",
							},
							description: "Twitter",
							userLabelType: "BusinessLabel",
							userLabelDisplayType: "Badge",
						},
					},
					is_blue_verified: true,
					profile_image_shape: "Circle",
					legacy: user,
					business_account: {},
				},
			},
		},
	});
});

export default router;
