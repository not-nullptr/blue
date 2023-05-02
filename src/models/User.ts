import mongoose from "mongoose";

const user = new mongoose.Schema({
	name: {
		type: "String",
	},
	id: {
		type: "Number",
	},
	id_string: {
		type: "String",
	},
	email: {
		type: "String",
	},
	password: {
		type: "String",
	},
	screen_name: {
		type: "String",
	},
	location: {
		type: "String",
	},
	description: {
		type: "String",
	},
	url: {
		type: "String",
	},
	verified_type: {
		type: "String",
	},
	entities: {
		url: {
			urls: {
				type: ["Mixed"],
			},
		},
		description: {
			urls: {
				type: "Array",
			},
		},
	},
	protected: {
		type: "Boolean",
	},
	followers_count: {
		type: "Number",
	},
	fast_followers_count: {
		type: "Number",
	},
	normal_followers_count: {
		type: "Number",
	},
	friends_count: {
		type: "Number",
	},
	listed_count: {
		type: "Number",
	},
	created_at: {
		type: "String",
	},
	favourites_count: {
		type: "Number",
	},
	utc_offset: {
		type: "Mixed",
	},
	time_zone: {
		type: "Mixed",
	},
	geo_enabled: {
		type: "Boolean",
	},
	verified: {
		type: "Boolean",
	},
	statuses_count: {
		type: "Number",
	},
	media_count: {
		type: "Number",
	},
	lang: {
		type: "Mixed",
	},
	contributors_enabled: {
		type: "Boolean",
	},
	is_translator: {
		type: "Boolean",
	},
	is_translation_enabled: {
		type: "Boolean",
	},
	profile_background_color: {
		type: "String",
	},
	profile_background_image_url: {
		type: "String",
	},
	profile_background_image_url_https: {
		type: "String",
	},
	profile_background_tile: {
		type: "Boolean",
	},
	profile_image_url: {
		type: "String",
	},
	profile_image_url_https: {
		type: "String",
	},
	profile_banner_url: {
		type: "String",
	},
	profile_link_color: {
		type: "String",
	},
	profile_sidebar_border_color: {
		type: "String",
	},
	profile_sidebar_fill_color: {
		type: "String",
	},
	profile_text_color: {
		type: "String",
	},
	profile_use_background_image: {
		type: "Boolean",
	},
	has_extended_profile: {
		type: "Boolean",
	},
	default_profile: {
		type: "Boolean",
	},
	default_profile_image: {
		type: "Boolean",
	},
	pinned_tweet_ids: {
		type: ["Number"],
	},
	pinned_tweet_ids_str: {
		type: ["String"],
	},
	posted_tweet_ids: {
		type: ["String"],
	},
	has_custom_timelines: {
		type: "Boolean",
	},
	can_dm: {
		type: "Mixed",
	},
	following: {
		type: "Mixed",
	},
	follow_request_sent: {
		type: "Mixed",
	},
	notifications: {
		type: "Mixed",
	},
	muting: {
		type: "Mixed",
	},
	blocking: {
		type: "Mixed",
	},
	blocked_by: {
		type: "Mixed",
	},
	want_retweets: {
		type: "Mixed",
	},
	advertiser_account_type: {
		type: "String",
	},
	advertiser_account_service_levels: {
		type: "Array",
	},
	business_profile_state: {
		type: "String",
	},
	translator_type: {
		type: "String",
	},
	withheld_in_countries: {
		type: "Array",
	},
	followed_by: {
		type: "Mixed",
	},
	ext_is_blue_verified: {
		type: "Boolean",
	},
	ext_profile_image_shape: {
		type: "String",
	},
	ext_has_nft_avatar: {
		type: "Boolean",
	},
	ext: {
		highlightedLabel: {
			r: {
				ok: {},
			},
			ttl: {
				type: "Number",
			},
		},
		hasNftAvatar: {
			r: {
				ok: {
					type: "Boolean",
				},
			},
			ttl: {
				type: "Number",
			},
		},
	},
	require_some_consent: {
		type: "Boolean",
	},
});

const User = mongoose.model("User", user);

export default User;
