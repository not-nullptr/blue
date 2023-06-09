export interface ICreateTweetBody {
	variables: Variables;
	features: Features;
	queryId: string;
}

export interface Features {
	tweetypie_unmention_optimization_enabled: boolean;
	vibe_api_enabled: boolean;
	responsive_web_edit_tweet_api_enabled: boolean;
	graphql_is_translatable_rweb_tweet_is_translatable_enabled: boolean;
	view_counts_everywhere_api_enabled: boolean;
	longform_notetweets_consumption_enabled: boolean;
	tweet_awards_web_tipping_enabled: boolean;
	interactive_text_enabled: boolean;
	responsive_web_text_conversations_enabled: boolean;
	longform_notetweets_rich_text_read_enabled: boolean;
	blue_business_profile_image_shape_enabled: boolean;
	responsive_web_graphql_exclude_directive_enabled: boolean;
	verified_phone_label_enabled: boolean;
	freedom_of_speech_not_reach_fetch_enabled: boolean;
	standardized_nudges_misinfo: boolean;
	tweet_with_visibility_results_prefer_gql_limited_actions_policy_enabled: boolean;
	responsive_web_graphql_skip_user_profile_image_extensions_enabled: boolean;
	responsive_web_graphql_timeline_navigation_enabled: boolean;
	responsive_web_enhance_cards_enabled: boolean;
}

export interface Variables {
	tweet_text: string;
	dark_request: boolean;
	media: Media;
	semantic_annotation_ids: any[];
}

export interface Media {
	media_entities: any[];
	possibly_sensitive: boolean;
}

export interface IJwtDecoded {
	id: number;
}

export interface IUserByScreenNameVariables {
	screen_name: string;
	withSafetyModeUserFields: boolean;
}

export interface IProfileSpotlightsQueryVariables {
	screen_name: string;
}

export interface IGenericFeatures {
	blue_business_profile_image_shape_enabled: boolean;
	responsive_web_graphql_exclude_directive_enabled: boolean;
	verified_phone_label_enabled: boolean;
	responsive_web_graphql_skip_user_profile_image_extensions_enabled: boolean;
	responsive_web_graphql_timeline_navigation_enabled: boolean;
}

export interface IUserByRestIdVariables {
	userId: string;
	withSafetyModeUserFields: boolean;
}
