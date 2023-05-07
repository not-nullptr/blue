import express from "express";
import User from "../../models/User";

export async function Viewer(req: express.Request, res: express.Response) {
	if (!req.cookies.twt_id)
		return res.status(400).send({ msg: "No twid detected" });
	const id = (req.cookies.twt_id as string).split("=")[1] as string;
	if (!id || id === "undefined")
		return res.status(400).send({ msg: "Error occurred extracting twid" });
	const user = await User.findOne({
		id,
	});

	if (!user) return res.status(400).send({ msg: "User not found" });
	return res.status(200).send({
		data: {
			is_super_follow_subscriber: false,
			viewer: {
				create_community_action_result: {
					__typename: "CommunityCreateActionUnavailable",
					message: "Action is not available",
					reason: "Unavailable",
				},
				educationFlags: [
					{
						flag: "AltTextEducation",
						timestamp: 1666377026799,
					},
					{
						flag: "ChangeConversationControlsEducation",
						timestamp: 1677318869102,
					},
					{
						flag: "CommunitiesEducationComposerControls",
						timestamp: 1662134726025,
					},
					{
						flag: "BirdwatchRatingFormDataPrivacyNotice",
						timestamp: 1674458804696,
					},
					{
						flag: "PersistentConversationControlsEducation",
						timestamp: 1667330271495,
					},
					{
						flag: "VerifiedAvatarEducation",
						timestamp: 1668110749446,
					},
					{
						flag: "PinnedConversationsEducation",
						timestamp: 1663689642332,
					},
					{
						flag: "TrustedFriendsEducationFlag",
						timestamp: 1662134726021,
					},
				],
				has_community_memberships: false,
				is_active_creator: false,
				is_tfe_restricted_session: false,
				super_followers_count: 0,
				user_features: [
					{
						enabled: false,
						feature: "mediatool_studio_library",
					},
				],
				user_results: {
					result: {
						__typename: "User",
						affiliates_highlighted_label: {},
						has_graduated_access: true,
						id: user._id,
						is_blue_verified: false,
						is_profile_translatable: false,
						// legacy: {
						// 	can_dm: true,
						// 	can_media_tag: true,
						// 	created_at: "Mon Jan 17 11:43:44 +0000 2022",
						// 	default_profile: true,
						// 	default_profile_image: false,
						// 	description:
						// 		"chronically online twitter looks fun, wish i was there :/",
						// 	entities: {
						// 		description: {
						// 			urls: [],
						// 		},
						// 	},
						// 	fast_followers_count: 0,
						// 	favourites_count: 876,
						// 	followers_count: 22,
						// 	friends_count: 135,
						// 	has_custom_timelines: true,
						// 	is_translator: false,
						// 	listed_count: 1,
						// 	location: "right behind you spy tf2 HAHAH",
						// 	media_count: 35,
						// 	name: "madsᐸ3",
						// 	needs_phone_verification: false,
						// 	normal_followers_count: 22,
						// 	pinned_tweet_ids_str: [],
						// 	possibly_sensitive: false,
						// 	profile_image_url_https:
						// 		"https://pbs.twimg.com/profile_images/1562613150863736832/3TrYlu0f_normal.jpg",
						// 	profile_interstitial_type: "",
						// 	screen_name: "madsthecatgirl",
						// 	statuses_count: 415,
						// 	translator_type: "none",
						// 	verified: false,
						// 	want_retweets: false,
						// 	withheld_in_countries: [],
						// },
						legacy: {
							...(user as any)._doc,
						},
						legacy_extended_profile: {
							birthdate: {
								day: 7,
								month: 1,
								visibility: "Self",
								year: 1999,
								year_visibility: "Self",
							},
						},
						profile_image_shape: "Circle",
						rest_id: user.id,
						super_follows_application_status: "NotStarted",
					},
				},
			},
		},
	});
}
