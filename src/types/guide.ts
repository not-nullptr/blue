export interface GlobalObjects {
	tweets: { [key: string]: TweetValue };
	users: { [key: string]: IUser };
	moments: Broadcasts;
	cards: Broadcasts;
	places: Broadcasts;
	media: Broadcasts;
	broadcasts: Broadcasts;
	topics: Broadcasts;
	lists: Broadcasts;
}

export interface Broadcasts {}

export interface TweetValue {
	created_at: string;
	id: number;
	id_str: string;
	full_text: string;
	truncated: boolean;
	display_text_range: number[];
	entities: TweetEntities;
	extended_entities?: ExtendedEntities;
	source: string;
	in_reply_to_status_id: unknown;
	in_reply_to_status_id_str: unknown;
	in_reply_to_user_id: unknown;
	in_reply_to_user_id_str: unknown;
	in_reply_to_screen_name: unknown;
	user_id: number;
	user_id_str: string;
	geo: unknown;
	coordinates: unknown;
	place: unknown;
	contributors: unknown;
	is_quote_status: boolean;
	retweet_count: number;
	favorite_count: number;
	reply_count: number;
	quote_count: number;
	conversation_id: number;
	conversation_id_str: string;
	favorited: boolean;
	retweeted: boolean;
	possibly_sensitive?: boolean;
	possibly_sensitive_editable?: boolean;
	lang: string;
	supplemental_language: unknown;
	ext_views: EXTViews;
	ext: TweetEXT;
	self_thread?: SelfThread;
	quoted_status_id?: number;
	quoted_status_id_str?: string;
	quoted_status_permalink?: QuotedStatusPermalink;
}

export interface TweetEntities {
	hashtags: any[];
	symbols: any[];
	user_mentions: any[];
	urls: URLElement[];
	media?: EntitiesMedia[];
}

export interface EntitiesMedia {
	id: number;
	id_str: string;
	indices: number[];
	media_url: string;
	media_url_https: string;
	url: string;
	display_url: string;
	expanded_url: string;
	type: Type | string;
	original_info: OriginalInfo;
	sizes: Sizes;
	source_status_id?: number;
	source_status_id_str?: string;
	source_user_id?: number;
	source_user_id_str?: string;
}

export interface OriginalInfo {
	width: number;
	height: number;
	focus_rects?: FocusRect[];
}

export interface FocusRect {
	x: number;
	y: number;
	h: number;
	w: number;
}

export interface Sizes {
	thumb: Large;
	small: Large;
	large: Large;
	medium: Large;
}

export interface Large {
	w: number;
	h: number;
	resize: Resize | string;
}

export enum Resize {
	Crop = "crop",
	Fit = "fit",
}

export enum Type {
	Photo = "photo",
	Video = "video",
}

export interface URLElement {
	url: string;
	expanded_url: string;
	display_url: string;
	indices: number[];
}

export interface TweetEXT {
	unmentionInfo: UnmentionInfo;
	editControl: EditControl;
}

export interface EditControl {
	r: EditControlR;
	ttl: number;
}

export interface EditControlR {
	ok: PurpleOk;
}

export interface PurpleOk {
	initial: Initial;
}

export interface Initial {
	editTweetIds: string[];
	editableUntilMsecs: string;
	editsRemaining: string;
	isEditEligible: boolean;
}

export interface UnmentionInfo {
	r: UnmentionInfoR;
	ttl: number;
}

export interface UnmentionInfoR {
	ok: Broadcasts;
}

export interface EXTViews {
	state: State | string;
	count: string;
}

export enum State {
	EnabledWithCount = "EnabledWithCount",
}

export interface ExtendedEntities {
	media: ExtendedEntitiesMedia[];
}

export interface ExtendedEntitiesMedia {
	id: number;
	id_str: string;
	indices: number[];
	media_url: string;
	media_url_https: string;
	url: string;
	display_url: string;
	expanded_url: string;
	type: Type | string;
	original_info: OriginalInfo;
	sizes: Sizes;
	source_status_id?: number;
	source_status_id_str?: string;
	source_user_id?: number;
	source_user_id_str?: string;
	video_info?: VideoInfo;
	media_key: string;
	ext_sensitive_media_warning: unknown;
	ext_media_availability: EXTMediaAvailability;
	ext_alt_text: unknown | string;
	ext_media_color: EXTMediaColor;
	ext: MediaEXT;
	additional_media_info?: AdditionalMediaInfo;
}

export interface AdditionalMediaInfo {
	title?: string;
	description?: string;
	embeddable?: boolean;
	monetizable: boolean;
	source_user?: IUser;
}

export enum AdvertiserAccountType {
	None = "none",
}

export interface SourceUserEntities {
	url?: Description;
	description: Description;
}

export interface Description {
	urls: URLElement[];
}

export interface SourceUserEXT {
	highlightedLabel: HighlightedLabel;
	hasNftAvatar: HasNftAvatar;
}

export interface HasNftAvatar {
	r: HasNftAvatarR;
	ttl: number;
}

export interface HasNftAvatarR {
	ok: boolean;
}

export interface HighlightedLabel {
	r: PurpleR;
	ttl: number;
}

export interface PurpleR {
	ok: FluffyOk;
}

export interface FluffyOk {
	label?: Label;
}

export interface Label {
	description: string;
	badge: Badge;
	url: LabelURL;
	userLabelType: string;
	userLabelDisplayType: string;
}

export interface Badge {
	url: string;
}

export interface LabelURL {
	urlType: string;
	url: string;
}

export enum EXTProfileImageShape {
	Circle = "Circle",
	Square = "Square",
}

export interface MediaEXT {
	mediaStats: MediaStats;
}

export interface MediaStats {
	r: RRClass | REnum;
	ttl: number;
}

export interface RRClass {
	ok: TentacledOk;
}

export interface TentacledOk {
	viewCount: string;
}

export enum REnum {
	Missing = "Missing",
}

export interface EXTMediaAvailability {
	status: Status | string;
}

export enum Status {
	Available = "available",
}

export interface EXTMediaColor {
	palette: Palette[];
}

export interface Palette {
	rgb: RGB;
	percentage: number;
}

export interface RGB {
	red: number;
	green: number;
	blue: number;
}

export interface VideoInfo {
	aspect_ratio: number[];
	duration_millis: number;
	variants: Variant[];
}

export interface Variant {
	bitrate?: number;
	content_type: string;
	url: string;
}

export interface QuotedStatusPermalink {
	url: string;
	expanded: string;
	display: string;
}

export interface SelfThread {
	id: number;
	id_str: string;
}

export interface IUser {
	id?: number;
	id_str?: string;
	name: string;
	screen_name: string;
	location: string;
	description: string;
	url: unknown | string;
	entities: SourceUserEntities;
	protected: boolean;
	followers_count: number;
	fast_followers_count: number;
	normal_followers_count: number;
	friends_count: number;
	listed_count: number;
	created_at: string;
	favourites_count: number;
	utc_offset: unknown;
	time_zone: unknown;
	geo_enabled: boolean;
	verified: boolean;
	statuses_count: number;
	media_count: number;
	lang: unknown;
	contributors_enabled: boolean;
	is_translator: boolean;
	is_translation_enabled: boolean;
	profile_background_color: string;
	profile_background_image_url: unknown | string;
	profile_background_image_url_https: unknown | string;
	profile_background_tile: boolean;
	profile_image_url: string;
	profile_image_url_https: string;
	profile_banner_url?: string;
	profile_link_color: string;
	profile_sidebar_border_color: string;
	profile_sidebar_fill_color: string;
	profile_text_color: string;
	profile_use_background_image: boolean;
	has_extended_profile: boolean;
	default_profile: boolean;
	default_profile_image: boolean;
	pinned_tweet_ids: number[];
	pinned_tweet_ids_str: string[];
	has_custom_timelines: boolean;
	can_dm: boolean | null;
	following: boolean | null;
	follow_request_sent: boolean | null;
	notifications: boolean | null;
	muting: boolean | null;
	blocking: boolean | null;
	blocked_by: boolean | null;
	want_retweets: boolean | null;
	advertiser_account_type: AdvertiserAccountType | string;
	advertiser_account_service_levels: any[];
	business_profile_state: AdvertiserAccountType | string;
	translator_type: AdvertiserAccountType | string;
	withheld_in_countries: any[];
	followed_by: unknown;
	ext_is_blue_verified: boolean;
	ext_has_nft_avatar: boolean;
	ext_profile_image_shape: EXTProfileImageShape | string;
	ext: UserEXT;
	require_some_consent: boolean;
	ext_verified_type?: string;
}

export interface UserEXT {
	hasNftAvatar: HasNftAvatar;
	highlightedLabel: UnmentionInfo;
}

export interface TimelineClass {
	id: string;
	instructions: Instruction[];
	responseObjects: ResponseObjects;
}

export interface Instruction {
	clearCache?: Broadcasts;
	addEntries?: AddEntries;
}

export interface AddEntries {
	entries: Entry[];
}

export interface Entry {
	entryId: string;
	sortIndex: string;
	content: EntryContent;
}

export interface EntryContent {
	operation?: Operation;
	item?: Item;
}

export interface Item {
	content: ItemContent;
	clientEventInfo: ClientEventInfo;
}

export interface ClientEventInfo {
	component: Component;
	element: Element;
	details: Details;
}

export enum Component {
	ContentRecommenderExploreTweets = "content_recommender_explore_tweets",
	TripGeoDomainTweets = "trip_geo_domain_tweets",
}

export interface Details {
	timelinesDetails: TimelinesDetails;
}

export interface TimelinesDetails {
	controllerData: ControllerData;
}

export enum ControllerData {
	DAACDAAODAABCGABvpjoeEdLu5SAAAAA = "DAACDAAODAABCgABvpjoeEdLu5sAAAAA",
}

export enum Element {
	Tweet = "tweet",
}

export interface ItemContent {
	tweet: ContentTweet;
}

export interface ContentTweet {
	id: string;
	displayType: DisplayType | string;
}

export enum DisplayType {
	Tweet = "Tweet",
}

export interface Operation {
	cursor: Cursor;
}

export interface Cursor {
	value: string;
	cursorType: string;
}

export interface ResponseObjects {
	feedbackActions: { [key: string]: FeedbackAction };
}

export interface FeedbackAction {
	feedbackType: FeedbackType;
	prompt: string;
	confirmation: string;
	feedbackUrl?: string;
	hasUndoAction: boolean;
	confirmationDisplayType: ConfirmationDisplayType;
	icon?: string;
}

export enum ConfirmationDisplayType {
	BottomSheet = "BottomSheet",
	Inline = "Inline",
}

export enum FeedbackType {
	Dismiss = "Dismiss",
	SeeFewer = "SeeFewer",
	SeeMore = "SeeMore",
}
