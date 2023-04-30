import express from "express";
import User from "../../../models/User";
import {
	AdvertiserAccountType,
	EXTProfileImageShape,
	IUser,
} from "../../../types/guide";

import { Timeline } from "../../../types/guideClass";
import { Task, TaskRes } from "../../../types/task";
import { formatDate } from "../../../util/formatDate";
import { randInt, randStr } from "../../../util/randUtil";

interface Params {
	flow_name: "signup" | "login";
}

interface FlowTokenInfo {
	token: string;
	name?: string;
	username?: string;
	email?: string;
	password?: string;
	type?: "signup" | "login";
}

const flowTokens = [] as FlowTokenInfo[];

const router = express.Router();

router.post("/onboarding/task.json", async (req, res) => {
	const body = req.body as Task;
	if (!body.subtask_inputs) {
		switch ((req.query as unknown as Params).flow_name) {
			case "login": {
				const token = `g;${randInt(18)}:-${randInt(13)}:${randStr(24)}:0`;
				flowTokens.push({
					type: "login",
					token,
				});
				return res.status(200).send({
					flow_token: token,
					status: "success",
					subtasks: [
						{
							js_instrumentation: {
								next_link: {
									link_id: "next_link",
									link_type: "task",
								},
								timeout_ms: 2000,
								url: "https://twitter.com/i/js_inst?c_name=ui_metrics",
							},
							subtask_id: "LoginJsInstrumentationSubtask",
						},
					],
				});
			}
			case "signup": {
				// const userObject = {
				// 	id: 910990938813681664,
				// 	id_str: "910990938813681664",
				// 	name: "Bushra Shaikh",
				// 	screen_name: "Bushra1Shaikh",
				// 	location: "London, England",
				// 	description:
				// 		"Queen B Tweets \ud83c\uddec\ud83c\udde7\ud83c\uddf5\ud83c\uddf0 \u2022CEO\u2022 Social/Political Commentator @gmb @gbnews @jeremyvineon5 \u2022 Founder @runracismout \u2022\n\u270d\ud83c\udffd@indyvoices \u2022 \ud83d\udce7 info@bushrashaikh.com",
				// 	url: "https://t.co/qQNS78j9n4",
				// 	entities: {
				// 		url: {
				// 			urls: [
				// 				{
				// 					url: "https://t.co/qQNS78j9n4",
				// 					expanded_url:
				// 						"https://www.justgiving.com/page/bushra-shaikh-1680691652692?utm_source=whatsapp&utm_medium=one_page&",
				// 					display_url: "justgiving.com/page/bushra-sh\u2026",
				// 					indices: [0, 23],
				// 				},
				// 			],
				// 		},
				// 		description: {
				// 			urls: [],
				// 		},
				// 	},
				// 	protected: false,
				// 	followers_count: 14369,
				// 	fast_followers_count: 0,
				// 	normal_followers_count: 14369,
				// 	friends_count: 940,
				// 	listed_count: 66,
				// 	created_at: "Thu Sep 21 22:15:40 +0000 2017",
				// 	favourites_count: 12684,
				// 	utc_offset: true,
				// 	time_zone: true,
				// 	geo_enabled: true,
				// 	verified: false,
				// 	statuses_count: 10460,
				// 	media_count: 955,
				// 	lang: true,
				// 	contributors_enabled: false,
				// 	is_translator: false,
				// 	is_translation_enabled: false,
				// 	profile_background_color: "F5F8FA",
				// 	profile_background_image_url: true,
				// 	profile_background_image_url_https: true,
				// 	profile_background_tile: false,
				// 	profile_image_url:
				// 		"http://pbs.twimg.com/profile_images/1649964268215738369/X2PalgXf_normal.jpg",
				// 	profile_image_url_https:
				// 		"https://pbs.twimg.com/profile_images/1649964268215738369/X2PalgXf_normal.jpg",
				// 	profile_banner_url:
				// 		"https://pbs.twimg.com/profile_banners/910990938813681664/1681867520",
				// 	profile_link_color: "1DA1F2",
				// 	profile_sidebar_border_color: "C0DEED",
				// 	profile_sidebar_fill_color: "DDEEF6",
				// 	profile_text_color: "333333",
				// 	profile_use_background_image: true,
				// 	has_extended_profile: true,
				// 	default_profile: true,
				// 	default_profile_image: false,
				// 	pinned_tweet_ids: [1646519675369684992],
				// 	pinned_tweet_ids_str: ["1646519675369684992"],
				// 	has_custom_timelines: false,
				// 	can_dm: true,
				// 	following: true,
				// 	follow_request_sent: true,
				// 	notifications: true,
				// 	muting: true,
				// 	blocking: true,
				// 	blocked_by: true,
				// 	want_retweets: true,
				// 	advertiser_account_type: AdvertiserAccountType.None,
				// 	advertiser_account_service_levels: [],
				// 	business_profile_state: AdvertiserAccountType.None,
				// 	translator_type: AdvertiserAccountType.None,
				// 	withheld_in_countries: [],
				// 	followed_by: true,
				// 	ext_has_nft_avatar: false,
				// 	ext_is_blue_verified: false,
				// 	ext_profile_image_shape: EXTProfileImageShape.Circle,
				// 	ext: {
				// 		hasNftAvatar: {
				// 			r: {
				// 				ok: false,
				// 			},
				// 			ttl: -1,
				// 		},
				// 		highlightedLabel: {
				// 			r: {
				// 				ok: {},
				// 			},
				// 			ttl: -1,
				// 		},
				// 	},
				// 	require_some_consent: false,
				// } as IUser;
				// const user = new User();
				return res.status(200).send({
					flow_token: `g;${randInt(18)}:-${randInt(13)}:${randStr(24)}:0`,
					status: "success",
					subtasks: [
						{
							subtask_id: "SignupSSOSubtask",
							callbacks: [
								{
									trigger: "impression",
									endpoint:
										"callback.json?product=metric-tracking&identifier=generic-metric-tracking-cb&params=%7B%22data%22%3A%5B%7B%22dataset%22%3A%22signup_events%22%2C%22signup_event_data%22%3A%7B%22subtask_id%22%3A%22SignupSSOSubtask%22%2C%22flow_token%22%3A%22g%3B168285213701136618%3A-1682858004196%3AGVb9vaGJwZWYOKoQ9IvuhyoM%3A0%22%2C%22flow_name%22%3A%22signup%22%2C%22flow_start_location%22%3A%22unknown%22%2C%22signup_flow_name%22%3A%22signup%22%7D%7D%5D%7D",
								},
								{
									trigger: "impression",
									scribe_config: {
										page: "onboarding",
										section: "signup",
										component: "SignupSSOSubtask",
										action: "impression",
									},
								},
							],
							settings_list: {
								secondary_text: {
									text: "By using this backend, you agree to abide by the GPLv3 license that this project is under  (and that Elon is a horrible person 👍).",
									entities: [
										{
											from_index: 49,
											to_index: 63,
											navigation_link: {
												link_type: "chromeless_web_link",
												url: "https://www.gnu.org/licenses/gpl-3.0.en.html",
											},
										},
									],
								},
								settings: [
									{
										value_type: "separator",
										value_identifier: "separator",
										value_data: {
											separator: {
												// label: {
												// 	text: "or",
												// 	entities: [],
												// },
											},
										},
									},
									{
										value_type: "button",
										value_identifier: "signup",
										value_data: {
											button: {
												navigation_link: {
													link_type: "subtask",
													link_id: "signup",
													label: "Create account",
													subtask_id: "Signup",
												},
												style: "primary",
												preferred_size: "normal",
											},
										},
									},
								],
								detail_text: {
									text: "Have an account already? Log in",
									entities: [
										{
											from_index: 25,
											to_index: 31,
											navigation_link: {
												link_type: "web_link",
												link_id: "open_web_link",
												label: "login",
												url: "https://www.twitter.com/i/flow/login",
											},
										},
									],
								},
								style: "step",
								header: {
									primary_text: {
										text: "Join Blue OSS today",
										entities: [],
									},
								},
								navigation_style: "hide",
								horizontal_style: "compact",
							},
							subtask_back_navigation: "cancel_flow",
						},
						{
							subtask_id: "SignupSingleSignOnFailedNotification",
							callbacks: [
								{
									trigger: "impression",
									endpoint:
										"callback.json?product=metric-tracking&identifier=generic-metric-tracking-cb&params=%7B%22data%22%3A%5B%7B%22dataset%22%3A%22signup_events%22%2C%22signup_event_data%22%3A%7B%22subtask_id%22%3A%22SignupSingleSignOnFailedNotification%22%2C%22flow_token%22%3A%22g%3B168285213701136618%3A-1682858004196%3AGVb9vaGJwZWYOKoQ9IvuhyoM%3A0%22%2C%22flow_name%22%3A%22signup%22%2C%22flow_start_location%22%3A%22unknown%22%2C%22signup_flow_name%22%3A%22signup%22%7D%7D%5D%7D",
								},
								{
									trigger: "impression",
									scribe_config: {
										page: "onboarding",
										section: "signup",
										component: "SignupSingleSignOnFailedNotification",
										action: "impression",
									},
								},
							],
							in_app_notification: {
								message: {
									text: "Something went wrong. Please try again.",
									entities: [],
								},
								wait_time_ms: 1000,
								next_link: {
									link_type: "subtask",
									link_id: "next_link",
									label: "Next",
									subtask_id: "SignupSSOSubtask",
								},
							},
						},
						{
							subtask_id: "SignupGoogleSSOSubtask",
							callbacks: [
								{
									trigger: "impression",
									endpoint:
										"callback.json?product=metric-tracking&identifier=generic-metric-tracking-cb&params=%7B%22data%22%3A%5B%7B%22dataset%22%3A%22signup_events%22%2C%22signup_event_data%22%3A%7B%22subtask_id%22%3A%22SignupGoogleSSOSubtask%22%2C%22flow_token%22%3A%22g%3B168285213701136618%3A-1682858004196%3AGVb9vaGJwZWYOKoQ9IvuhyoM%3A0%22%2C%22flow_name%22%3A%22signup%22%2C%22flow_start_location%22%3A%22unknown%22%2C%22signup_flow_name%22%3A%22signup%22%7D%7D%5D%7D",
								},
								{
									trigger: "impression",
									scribe_config: {
										page: "onboarding",
										section: "signup",
										component: "SignupGoogleSSOSubtask",
										action: "impression",
									},
								},
							],
							single_sign_on: {
								provider: "google",
								scopes: ["openid", "email", "profile"],
								state: "f2ZA66o0I0P2PiZzaWyfxPaAo8I_pTl9HNALFkae0Sq",
								next_link: {
									link_type: "task",
									link_id: "next_link",
								},
								fail_link: {
									link_type: "subtask",
									link_id: "fail_link",
									subtask_id: "SignupSingleSignOnFailedNotification",
								},
								cancel_link: {
									link_type: "subtask",
									link_id: "cancel_link",
									subtask_id: "SignupSSOSubtask",
								},
							},
							subtask_back_navigation: "cancel_flow",
						},
						{
							subtask_id: "SignupAppleSSOSubtask",
							callbacks: [
								{
									trigger: "impression",
									endpoint:
										"callback.json?product=metric-tracking&identifier=generic-metric-tracking-cb&params=%7B%22data%22%3A%5B%7B%22dataset%22%3A%22signup_events%22%2C%22signup_event_data%22%3A%7B%22subtask_id%22%3A%22SignupAppleSSOSubtask%22%2C%22flow_token%22%3A%22g%3B168285213701136618%3A-1682858004196%3AGVb9vaGJwZWYOKoQ9IvuhyoM%3A0%22%2C%22flow_name%22%3A%22signup%22%2C%22flow_start_location%22%3A%22unknown%22%2C%22signup_flow_name%22%3A%22signup%22%7D%7D%5D%7D",
								},
								{
									trigger: "impression",
									scribe_config: {
										page: "onboarding",
										section: "signup",
										component: "SignupAppleSSOSubtask",
										action: "impression",
									},
								},
							],
							single_sign_on: {
								provider: "apple",
								scopes: ["email", "name"],
								state: "IYAMKyfW3T6x8Y90Kzg_1fYGtIo7xTuDWbWlK-mghEV",
								next_link: {
									link_type: "task",
									link_id: "next_link",
								},
								fail_link: {
									link_type: "subtask",
									link_id: "fail_link",
									subtask_id: "SignupSingleSignOnFailedNotification",
								},
								cancel_link: {
									link_type: "subtask",
									link_id: "cancel_link",
									subtask_id: "SignupSSOSubtask",
								},
							},
							subtask_back_navigation: "cancel_flow",
						},
						{
							subtask_id: "WelcomeFlowStartSsoOpenLinkToSignupGoogleSSOSubtask",
							callbacks: [
								{
									trigger: "impression",
									endpoint:
										"callback.json?product=metric-tracking&identifier=generic-metric-tracking-cb&params=%7B%22data%22%3A%5B%7B%22dataset%22%3A%22signup_events%22%2C%22signup_event_data%22%3A%7B%22subtask_id%22%3A%22WelcomeFlowStartSsoOpenLinkToSignupGoogleSSOSubtask%22%2C%22flow_token%22%3A%22g%3B168285213701136618%3A-1682858004196%3AGVb9vaGJwZWYOKoQ9IvuhyoM%3A0%22%2C%22flow_name%22%3A%22signup%22%2C%22flow_start_location%22%3A%22unknown%22%2C%22signup_flow_name%22%3A%22signup%22%7D%7D%5D%7D",
								},
								{
									trigger: "impression",
									scribe_config: {
										page: "onboarding",
										section: "signup",
										component:
											"WelcomeFlowStartSsoOpenLinkToSignupGoogleSSOSubtask",
										action: "impression",
									},
								},
							],
							open_link: {
								link: {
									link_type: "subtask",
									link_id: "welcome_flow_start_sso_to_google_sso_open_link",
									subtask_id: "SignupGoogleSSOSubtask",
								},
								onboarding_callback_path:
									"callback.json?product=metric-tracking&identifier=generic-metric-tracking-cb&params=%7B%22data%22%3A%5B%7B%22dataset%22%3A%22signup_events%22%2C%22signup_event_data%22%3A%7B%22subtask_id%22%3A%22WelcomeFlowStartSsoOpenLinkToSignupGoogleSSOSubtask%22%2C%22flow_token%22%3A%22g%3B168285213701136618%3A-1682858004196%3AGVb9vaGJwZWYOKoQ9IvuhyoM%3A0%22%2C%22flow_name%22%3A%22signup%22%2C%22flow_start_location%22%3A%22unknown%22%2C%22signup_flow_name%22%3A%22welcome%22%2C%22signup_event_type%22%3A%7B%22value%22%3A0%2C%22name%22%3A%22StartSignup%22%2C%22annotations%22%3A%7B%7D%7D%7D%7D%5D%7D",
							},
						},
						{
							subtask_id: "WelcomeFlowStartSsoOpenLinkToSignupAppleSSOSubtask",
							callbacks: [
								{
									trigger: "impression",
									endpoint:
										"callback.json?product=metric-tracking&identifier=generic-metric-tracking-cb&params=%7B%22data%22%3A%5B%7B%22dataset%22%3A%22signup_events%22%2C%22signup_event_data%22%3A%7B%22subtask_id%22%3A%22WelcomeFlowStartSsoOpenLinkToSignupAppleSSOSubtask%22%2C%22flow_token%22%3A%22g%3B168285213701136618%3A-1682858004196%3AGVb9vaGJwZWYOKoQ9IvuhyoM%3A0%22%2C%22flow_name%22%3A%22signup%22%2C%22flow_start_location%22%3A%22unknown%22%2C%22signup_flow_name%22%3A%22signup%22%7D%7D%5D%7D",
								},
								{
									trigger: "impression",
									scribe_config: {
										page: "onboarding",
										section: "signup",
										component:
											"WelcomeFlowStartSsoOpenLinkToSignupAppleSSOSubtask",
										action: "impression",
									},
								},
							],
							open_link: {
								link: {
									link_type: "subtask",
									link_id: "welcome_flow_start_sso_to_apple_id_open_link",
									subtask_id: "SignupAppleSSOSubtask",
								},
								onboarding_callback_path:
									"callback.json?product=metric-tracking&identifier=generic-metric-tracking-cb&params=%7B%22data%22%3A%5B%7B%22dataset%22%3A%22signup_events%22%2C%22signup_event_data%22%3A%7B%22subtask_id%22%3A%22WelcomeFlowStartSsoOpenLinkToSignupAppleSSOSubtask%22%2C%22flow_token%22%3A%22g%3B168285213701136618%3A-1682858004196%3AGVb9vaGJwZWYOKoQ9IvuhyoM%3A0%22%2C%22flow_name%22%3A%22signup%22%2C%22flow_start_location%22%3A%22unknown%22%2C%22signup_flow_name%22%3A%22welcome%22%2C%22signup_event_type%22%3A%7B%22value%22%3A0%2C%22name%22%3A%22StartSignup%22%2C%22annotations%22%3A%7B%7D%7D%7D%7D%5D%7D",
							},
						},
						{
							subtask_id: "Signup",
							callbacks: [
								{
									trigger: "impression",
									endpoint:
										"callback.json?product=metric-tracking&identifier=generic-metric-tracking-cb&params=%7B%22data%22%3A%5B%7B%22dataset%22%3A%22signup_events%22%2C%22signup_event_data%22%3A%7B%22subtask_id%22%3A%22Signup%22%2C%22flow_token%22%3A%22g%3B168285213701136618%3A-1682858004196%3AGVb9vaGJwZWYOKoQ9IvuhyoM%3A0%22%2C%22flow_name%22%3A%22signup%22%2C%22flow_start_location%22%3A%22unknown%22%2C%22signup_flow_name%22%3A%22signup%22%2C%22signup_event_type%22%3A%7B%22value%22%3A0%2C%22name%22%3A%22StartSignup%22%2C%22annotations%22%3A%7B%7D%7D%7D%7D%5D%7D",
								},
								{
									trigger: "impression",
									scribe_config: {
										page: "onboarding",
										section: "signup",
										component: "Signup",
										element: "StartSignup",
										action: "impression",
									},
								},
								{
									trigger: "impression",
									endpoint:
										"callback.json?product=metric-tracking&identifier=generic-metric-tracking-cb&params=%7B%22data%22%3A%5B%7B%22dataset%22%3A%22signup_events%22%2C%22signup_event_data%22%3A%7B%22subtask_id%22%3A%22Signup%22%2C%22flow_token%22%3A%22g%3B168285213701136618%3A-1682858004196%3AGVb9vaGJwZWYOKoQ9IvuhyoM%3A0%22%2C%22flow_name%22%3A%22signup%22%2C%22flow_start_location%22%3A%22unknown%22%2C%22signup_flow_name%22%3A%22signup%22%7D%7D%5D%7D",
								},
								{
									trigger: "impression",
									scribe_config: {
										page: "onboarding",
										section: "signup",
										component: "Signup",
										action: "impression",
									},
								},
							],
							progress_indication: {
								text: {
									text: "Step 1 of 5",
									entities: [],
								},
							},
							sign_up: {
								primary_text: "Create your account",
								name_hint: "Name",
								phone_hint: "Phone",
								email_hint: "Email",
								phone_email_hint: "Phone number or email address",
								birthday_hint: "Date of birth",
								birthday_explanation:
									"This will not be shown publicly. Confirm your own age, even if this account is for a business, a pet, or something else.",
								use_phone_text: "Use phone instead",
								use_email_text: "Use email instead",
								next_link: {
									link_type: "subtask",
									link_id: "next_link",
									label: "Next",
									subtask_id: "SignupSettingsListPhone",
								},
								js_instrumentation: {
									url: "https://twitter.com/i/js_inst?native=true",
								},
								ignore_birthday: false,
								use_device_prefill: false,
								email_next_link: {
									link_type: "subtask",
									link_id: "email_next_link",
									label: "Next",
									subtask_id: "SignupSettingsListEmail",
								},
								password_hint: "Password",
								birthday_type: "none",
								allowed_identifiers: "email_then_phone",
							},
							subtask_back_navigation: "cancel_flow",
						},
						{
							subtask_id: "SignupSettingsListEmail",
							callbacks: [
								{
									trigger: "impression",
									endpoint:
										"callback.json?product=metric-tracking&identifier=generic-metric-tracking-cb&params=%7B%22data%22%3A%5B%7B%22dataset%22%3A%22signup_events%22%2C%22signup_event_data%22%3A%7B%22subtask_id%22%3A%22SignupSettingsListEmail%22%2C%22flow_token%22%3A%22g%3B168285213701136618%3A-1682858004196%3AGVb9vaGJwZWYOKoQ9IvuhyoM%3A0%22%2C%22flow_name%22%3A%22signup%22%2C%22flow_start_location%22%3A%22unknown%22%2C%22signup_flow_name%22%3A%22signup%22%7D%7D%5D%7D",
								},
								{
									trigger: "impression",
									scribe_config: {
										page: "onboarding",
										section: "signup",
										component: "SignupSettingsListEmail",
										action: "impression",
									},
								},
							],
							progress_indication: {
								text: {
									text: "Step 2 of 5",
									entities: [],
								},
							},
							settings_list: {
								next_link: {
									link_type: "subtask",
									link_id: "next_link",
									label: "Next",
									subtask_id: "SignupReview",
								},
								primary_text: {
									text: "Customize your experience",
									entities: [],
								},
								settings: [
									{
										primary_text: {
											text: "Get more out of Twitter",
											entities: [],
										},
										value_type: "static_text",
									},
									{
										primary_text: {
											text: "Receive email about your Twitter activity and recommendations.",
											entities: [],
										},
										value_type: "boolean",
										value_identifier: "allow_emails_about_activity",
										value_data: {
											boolean_data: {
												initial_value: false,
											},
										},
									},
									{
										primary_text: {
											text: "Connect with people you know",
											entities: [],
										},
										value_type: "static_text",
									},
									{
										primary_text: {
											text: "Let others find your Twitter account by your email address.",
											entities: [],
										},
										value_type: "boolean",
										value_identifier: "find_by_email",
										value_data: {
											boolean_data: {
												initial_value: false,
											},
										},
									},
									{
										primary_text: {
											text: "Personalized ads",
											entities: [],
										},
										value_type: "static_text",
									},
									{
										primary_text: {
											text: "You will always see ads on Twitter based on your Twitter activity. When this setting is enabled, Twitter may further personalize ads from Twitter advertisers, on and off Twitter, by combining your Twitter activity with other online activity and information from our partners.",
											entities: [],
										},
										value_type: "boolean",
										value_identifier: "personalize_ads",
										value_data: {
											boolean_data: {
												initial_value: false,
											},
										},
									},
								],
								detail_text: {
									text: "By using this backend, you agree to abide by the GPLv3 license that this project is under  (and that Elon is a horrible person 👍).",
									entities: [
										{
											from_index: 49,
											to_index: 63,
											navigation_link: {
												link_type: "chromeless_web_link",
												url: "https://www.gnu.org/licenses/gpl-3.0.en.html",
											},
										},
									],
								},
							},
						},
						{
							subtask_id: "SignupSettingsListPhone",
							callbacks: [
								{
									trigger: "impression",
									endpoint:
										"callback.json?product=metric-tracking&identifier=generic-metric-tracking-cb&params=%7B%22data%22%3A%5B%7B%22dataset%22%3A%22signup_events%22%2C%22signup_event_data%22%3A%7B%22subtask_id%22%3A%22SignupSettingsListPhone%22%2C%22flow_token%22%3A%22g%3B168285213701136618%3A-1682858004196%3AGVb9vaGJwZWYOKoQ9IvuhyoM%3A0%22%2C%22flow_name%22%3A%22signup%22%2C%22flow_start_location%22%3A%22unknown%22%2C%22signup_flow_name%22%3A%22signup%22%7D%7D%5D%7D",
								},
								{
									trigger: "impression",
									scribe_config: {
										page: "onboarding",
										section: "signup",
										component: "SignupSettingsListPhone",
										action: "impression",
									},
								},
							],
							progress_indication: {
								text: {
									text: "Step 2 of 5",
									entities: [],
								},
							},
							settings_list: {
								next_link: {
									link_type: "subtask",
									link_id: "next_link",
									label: "Next",
									subtask_id: "SignupReview",
								},
								primary_text: {
									text: "Customize your experience",
									entities: [],
								},
								settings: [
									{
										primary_text: {
											text: "Connect with people you know",
											entities: [],
										},
										value_type: "static_text",
									},
									{
										primary_text: {
											text: "Let others find your Twitter account by your phone number.",
											entities: [],
										},
										value_type: "boolean",
										value_identifier: "find_by_phone",
										value_data: {
											boolean_data: {
												initial_value: false,
											},
										},
									},
									{
										primary_text: {
											text: "Personalized ads",
											entities: [],
										},
										value_type: "static_text",
									},
									{
										primary_text: {
											text: "You will always see ads on Twitter based on your Twitter activity. When this setting is enabled, Twitter may further personalize ads from Twitter advertisers, on and off Twitter, by combining your Twitter activity with other online activity and information from our partners.",
											entities: [],
										},
										value_type: "boolean",
										value_identifier: "personalize_ads",
										value_data: {
											boolean_data: {
												initial_value: false,
											},
										},
									},
								],
								detail_text: {
									text: "By using this backend, you agree to abide by the GPLv3 license that this project is under  (and that Elon is a horrible person 👍).",
									entities: [
										{
											from_index: 49,
											to_index: 63,
											navigation_link: {
												link_type: "chromeless_web_link",
												url: "https://www.gnu.org/licenses/gpl-3.0.en.html",
											},
										},
									],
								},
							},
						},
						{
							subtask_id: "SignupReview",
							callbacks: [
								{
									trigger: "impression",
									endpoint:
										"callback.json?product=metric-tracking&identifier=generic-metric-tracking-cb&params=%7B%22data%22%3A%5B%7B%22dataset%22%3A%22signup_events%22%2C%22signup_event_data%22%3A%7B%22subtask_id%22%3A%22SignupReview%22%2C%22flow_token%22%3A%22g%3B168285213701136618%3A-1682858004196%3AGVb9vaGJwZWYOKoQ9IvuhyoM%3A0%22%2C%22flow_name%22%3A%22signup%22%2C%22flow_start_location%22%3A%22unknown%22%2C%22signup_flow_name%22%3A%22signup%22%7D%7D%5D%7D",
								},
								{
									trigger: "impression",
									scribe_config: {
										page: "onboarding",
										section: "signup",
										component: "SignupReview",
										action: "impression",
									},
								},
							],
							progress_indication: {
								text: {
									text: "Step 3 of 5",
									entities: [],
								},
							},
							sign_up_review: {
								phone_next_link: {
									link_type: "subtask",
									link_id: "signup_with_phone_next_link",
									label: "Sign up",
									subtask_id: "ArkosePhone",
								},
								email_next_link: {
									link_type: "subtask",
									link_id: "signup_with_email_next_link",
									label: "Sign up",
									subtask_id: "ArkoseEmail",
								},
								name_edit_link: {
									link_type: "subtask",
									link_id: "name_edit_link",
									subtask_navigation_context: {
										action: "select_name",
									},
									subtask_id: "Signup",
								},
								phone_edit_link: {
									link_type: "subtask",
									link_id: "phone_edit_link",
									subtask_navigation_context: {
										action: "select_phone",
									},
									subtask_id: "Signup",
								},
								email_edit_link: {
									link_type: "subtask",
									link_id: "email_edit_link",
									subtask_navigation_context: {
										action: "select_email",
									},
									subtask_id: "Signup",
								},
								birthday_edit_link: {
									link_type: "subtask",
									link_id: "birthday_edit_link",
									subtask_navigation_context: {
										action: "select_birthday",
									},
									subtask_id: "Signup",
								},
								invalid_birthday_link: {
									link_type: "subtask",
									link_id: "invalid_birthday_link",
									label: "Invalid Birthday",
									suppress_client_events: true,
									subtask_id: "InvalidBirthdayAlert",
								},
								name: {
									subtask_data_reference: {
										key: "name",
										subtask_id: "Signup",
									},
								},
								phone_number: {
									subtask_data_reference: {
										key: "phone_number",
										subtask_id: "Signup",
									},
								},
								email: {
									subtask_data_reference: {
										key: "email",
										subtask_id: "Signup",
									},
								},
								birthday: {
									subtask_data_reference: {
										key: "birthday",
										subtask_id: "Signup",
									},
								},
								primary_text: "Create your account",
								birthday_requirement: {
									day: new Date().getDay(),
									month: new Date().getMonth(),
									year: new Date().getFullYear(),
								},
								detail_text: {
									text: "By using this backend, you agree to abide by the GPLv3 license that this project is under  (and that Elon is a horrible person 👍).",
									entities: [
										{
											from_index: 49,
											to_index: 63,
											navigation_link: {
												link_type: "chromeless_web_link",
												url: "https://www.gnu.org/licenses/gpl-3.0.en.html",
											},
										},
									],
								},
								birthday_type: "none",
								ignore_birthday: false,
								name_hint: "Name",
								phone_hint: "Phone",
								email_hint: "Email",
								birthday_hint: "Date of birth",
							},
						},
						{
							subtask_id: "ArkosePhone",
							callbacks: [
								{
									trigger: "impression",
									endpoint:
										"callback.json?product=metric-tracking&identifier=generic-metric-tracking-cb&params=%7B%22data%22%3A%5B%7B%22dataset%22%3A%22signup_events%22%2C%22signup_event_data%22%3A%7B%22subtask_id%22%3A%22ArkosePhone%22%2C%22flow_token%22%3A%22g%3B168285213701136618%3A-1682858004196%3AGVb9vaGJwZWYOKoQ9IvuhyoM%3A0%22%2C%22flow_name%22%3A%22signup%22%2C%22flow_start_location%22%3A%22unknown%22%2C%22signup_flow_name%22%3A%22signup%22%7D%7D%5D%7D",
								},
								{
									trigger: "impression",
									scribe_config: {
										page: "onboarding",
										section: "signup",
										component: "ArkosePhone",
										action: "impression",
									},
								},
							],
							subtask_back_navigation: "cancel_flow",
							web_modal: {
								url: "https://mobile.twitter.com/i/ocf_arkose_challenge?webKey=arkose_challenge_signup_web_prod&mobileKey=arkose_challenge_signup_mobile_prod&verifyOnChallengeCompleted=true&flowToken=g%3B168285213701136618%3A-1682858004196%3AGVb9vaGJwZWYOKoQ9IvuhyoM%3A0",
								style: "full_screen",
								next_link: {
									link_type: "subtask",
									link_id: "signup_with_phone_next_link",
									subtask_id: "PhoneVerificationAlert",
								},
								fail_link: {
									link_type: "abort",
									link_id: "cancel_link",
								},
							},
						},
						{
							subtask_id: "ArkoseEmail",
							callbacks: [
								{
									trigger: "impression",
									endpoint:
										"callback.json?product=metric-tracking&identifier=generic-metric-tracking-cb&params=%7B%22data%22%3A%5B%7B%22dataset%22%3A%22signup_events%22%2C%22signup_event_data%22%3A%7B%22subtask_id%22%3A%22ArkoseEmail%22%2C%22flow_token%22%3A%22g%3B168285213701136618%3A-1682858004196%3AGVb9vaGJwZWYOKoQ9IvuhyoM%3A0%22%2C%22flow_name%22%3A%22signup%22%2C%22flow_start_location%22%3A%22unknown%22%2C%22signup_flow_name%22%3A%22signup%22%7D%7D%5D%7D",
								},
								{
									trigger: "impression",
									scribe_config: {
										page: "onboarding",
										section: "signup",
										component: "ArkoseEmail",
										action: "impression",
									},
								},
							],
							subtask_back_navigation: "cancel_flow",
							web_modal: {
								url: "https://mobile.twitter.com/i/ocf_arkose_challenge?webKey=arkose_challenge_signup_web_prod&mobileKey=arkose_challenge_signup_mobile_prod",
								style: "full_screen",
								next_link: {
									link_type: "subtask",
									link_id: "signup_with_email_next_link",
									subtask_id: "EmailVerification",
								},
								fail_link: {
									link_type: "abort",
									link_id: "cancel_link",
								},
							},
						},
						{
							subtask_id: "PhoneVerificationAlert",
							alert_dialog: {
								next_link: {
									link_type: "subtask",
									link_id: "next_link",
									label: "OK",
									subtask_id: "PhoneVerification",
								},
								primary_text: {
									text: "Verify phone",
									entities: [],
								},
								secondary_text: {
									text: "We'll text your verification code to . Standard SMS fees may apply.",
									entities: [
										{
											from_index: 37,
											to_index: 37,
											subtask_data_reference: {
												key: "phone_number",
												subtask_id: "Signup",
											},
										},
									],
								},
								cancel_link: {
									link_type: "subtask",
									link_id: "cancel_link",
									label: "Edit",
									subtask_navigation_context: {
										action: "select_phone",
									},
									subtask_id: "Signup",
								},
							},
							callbacks: [
								{
									trigger: "impression",
									endpoint:
										"callback.json?product=metric-tracking&identifier=generic-metric-tracking-cb&params=%7B%22data%22%3A%5B%7B%22dataset%22%3A%22signup_events%22%2C%22signup_event_data%22%3A%7B%22subtask_id%22%3A%22PhoneVerificationAlert%22%2C%22flow_token%22%3A%22g%3B168285213701136618%3A-1682858004196%3AGVb9vaGJwZWYOKoQ9IvuhyoM%3A0%22%2C%22flow_name%22%3A%22signup%22%2C%22flow_start_location%22%3A%22unknown%22%2C%22signup_flow_name%22%3A%22signup%22%7D%7D%5D%7D",
								},
								{
									trigger: "impression",
									scribe_config: {
										page: "onboarding",
										section: "signup",
										component: "PhoneVerificationAlert",
										action: "impression",
									},
								},
							],
						},
						{
							subtask_id: "DidNotReceiveSMSDialog",
							callbacks: [
								{
									trigger: "impression",
									endpoint:
										"callback.json?product=metric-tracking&identifier=generic-metric-tracking-cb&params=%7B%22data%22%3A%5B%7B%22dataset%22%3A%22signup_events%22%2C%22signup_event_data%22%3A%7B%22subtask_id%22%3A%22DidNotReceiveSMSDialog%22%2C%22flow_token%22%3A%22g%3B168285213701136618%3A-1682858004196%3AGVb9vaGJwZWYOKoQ9IvuhyoM%3A0%22%2C%22flow_name%22%3A%22signup%22%2C%22flow_start_location%22%3A%22unknown%22%2C%22signup_flow_name%22%3A%22signup%22%7D%7D%5D%7D",
								},
								{
									trigger: "impression",
									scribe_config: {
										page: "onboarding",
										section: "signup",
										component: "DidNotReceiveSMSDialog",
										action: "impression",
									},
								},
							],
							menu_dialog: {
								primary_text: {
									text: "Didn’t receive SMS?",
									entities: [],
								},
								primary_action_links: [
									{
										link_type: "subtask",
										link_id: "sms_link",
										label: "Resend SMS",
										subtask_navigation_context: {
											action: "resend_sms",
										},
										subtask_id: "PhoneVerification",
									},
									{
										link_type: "subtask",
										link_id: "email_link",
										label: "Use email instead",
										subtask_navigation_context: {
											action: "select_email",
										},
										is_destructive: true,
										subtask_id: "Signup",
									},
								],
								cancel_link: {
									link_type: "subtask",
									link_id: "cancel_link",
									label: "Cancel",
									subtask_navigation_context: {
										action: "cancel_phone_dialog",
									},
									subtask_id: "PhoneVerification",
								},
								dismiss_link: {
									link_type: "subtask",
									link_id: "dismiss_link",
									subtask_navigation_context: {
										action: "dismiss_phone_dialog",
									},
									subtask_id: "PhoneVerification",
								},
							},
						},
						{
							subtask_id: "PhoneVerification",
							callbacks: [
								{
									trigger: "impression",
									endpoint:
										"callback.json?product=metric-tracking&identifier=generic-metric-tracking-cb&params=%7B%22data%22%3A%5B%7B%22dataset%22%3A%22signup_events%22%2C%22signup_event_data%22%3A%7B%22subtask_id%22%3A%22PhoneVerification%22%2C%22flow_token%22%3A%22g%3B168285213701136618%3A-1682858004196%3AGVb9vaGJwZWYOKoQ9IvuhyoM%3A0%22%2C%22flow_name%22%3A%22signup%22%2C%22flow_start_location%22%3A%22unknown%22%2C%22signup_flow_name%22%3A%22signup%22%7D%7D%5D%7D",
								},
								{
									trigger: "impression",
									scribe_config: {
										page: "onboarding",
										section: "signup",
										component: "PhoneVerification",
										action: "impression",
									},
								},
							],
							phone_verification: {
								primary_text: {
									text: "We sent you a code",
									entities: [],
								},
								secondary_text: {
									text: "Enter it below to verify .",
									entities: [
										{
											from_index: 25,
											to_index: 25,
											subtask_data_reference: {
												key: "phone_number",
												subtask_id: "Signup",
											},
										},
									],
								},
								detail_text: {
									text: "Didn't receive SMS?",
									entities: [
										{
											from_index: 0,
											to_index: 19,
											navigation_link: {
												link_type: "subtask",
												link_id: "resend_phone_verification_link",
												subtask_id: "DidNotReceiveSMSDialog",
											},
										},
									],
								},
								hint_text: "Verification code",
								phone_number: {
									subtask_data_reference: {
										key: "phone_number",
										subtask_id: "Signup",
									},
								},
								next_link: {
									link_type: "task",
									link_id: "next_link",
									label: "Next",
								},
								fail_link: {
									link_type: "subtask",
									link_id: "fail_link",
									subtask_navigation_context: {
										action: "select_email",
									},
									subtask_id: "SignupReview",
								},
								cancel_link: {
									link_type: "subtask",
									link_id: "cancel_link",
									label: "Use email instead",
									subtask_id: "Signup",
								},
								auto_verify_hint_text: "Waiting for SMS to arrive...",
								send_via_voice: false,
							},
							progress_indication: {
								text: {
									text: "Step 4 of 5",
									entities: [],
								},
							},
						},
						{
							subtask_id: "DidNotReceiveEmailDialog",
							callbacks: [
								{
									trigger: "impression",
									endpoint:
										"callback.json?product=metric-tracking&identifier=generic-metric-tracking-cb&params=%7B%22data%22%3A%5B%7B%22dataset%22%3A%22signup_events%22%2C%22signup_event_data%22%3A%7B%22subtask_id%22%3A%22DidNotReceiveEmailDialog%22%2C%22flow_token%22%3A%22g%3B168285213701136618%3A-1682858004196%3AGVb9vaGJwZWYOKoQ9IvuhyoM%3A0%22%2C%22flow_name%22%3A%22signup%22%2C%22flow_start_location%22%3A%22unknown%22%2C%22signup_flow_name%22%3A%22signup%22%7D%7D%5D%7D",
								},
								{
									trigger: "impression",
									scribe_config: {
										page: "onboarding",
										section: "signup",
										component: "DidNotReceiveEmailDialog",
										action: "impression",
									},
								},
							],
							menu_dialog: {
								primary_text: {
									text: "Didn’t receive email?",
									entities: [],
								},
								primary_action_links: [
									{
										link_type: "subtask",
										link_id: "email_link",
										label: "Resend email",
										subtask_navigation_context: {
											action: "resend_email",
										},
										subtask_id: "EmailVerification",
									},
									{
										link_type: "subtask",
										link_id: "phone_link",
										label: "Use phone instead",
										subtask_navigation_context: {
											action: "select_phone",
										},
										is_destructive: true,
										subtask_id: "Signup",
									},
								],
								cancel_link: {
									link_type: "subtask",
									link_id: "cancel_link",
									label: "Cancel",
									subtask_navigation_context: {
										action: "cancel_email_dialog",
									},
									subtask_id: "EmailVerification",
								},
								dismiss_link: {
									link_type: "subtask",
									link_id: "dismiss_link",
									subtask_navigation_context: {
										action: "dismiss_email_dialog",
									},
									subtask_id: "EmailVerification",
								},
							},
						},
						{
							subtask_id: "EmailVerification",
							callbacks: [
								{
									trigger: "impression",
									endpoint:
										"callback.json?product=metric-tracking&identifier=generic-metric-tracking-cb&params=%7B%22data%22%3A%5B%7B%22dataset%22%3A%22signup_events%22%2C%22signup_event_data%22%3A%7B%22subtask_id%22%3A%22EmailVerification%22%2C%22flow_token%22%3A%22g%3B168285213701136618%3A-1682858004196%3AGVb9vaGJwZWYOKoQ9IvuhyoM%3A0%22%2C%22flow_name%22%3A%22signup%22%2C%22flow_start_location%22%3A%22unknown%22%2C%22signup_flow_name%22%3A%22signup%22%7D%7D%5D%7D",
								},
								{
									trigger: "impression",
									scribe_config: {
										page: "onboarding",
										section: "signup",
										component: "EmailVerification",
										action: "impression",
									},
								},
							],
							email_verification: {
								primary_text: {
									text: "We sent you a code",
									entities: [],
								},
								secondary_text: {
									text: "Enter it below to verify .",
									entities: [
										{
											from_index: 25,
											to_index: 25,
											subtask_data_reference: {
												key: "email",
												subtask_id: "Signup",
											},
										},
									],
								},
								detail_text: {
									text: "Didn't receive email?",
									entities: [
										{
											from_index: 0,
											to_index: 21,
											navigation_link: {
												link_type: "subtask",
												link_id: "resend_email_verification_link",
												subtask_id: "DidNotReceiveEmailDialog",
											},
										},
									],
								},
								hint_text: "Verification code",
								email: {
									subtask_data_reference: {
										key: "email",
										subtask_id: "Signup",
									},
								},
								name: {
									subtask_data_reference: {
										key: "name",
										subtask_id: "Signup",
									},
								},
								next_link: {
									link_type: "task",
									link_id: "next_link",
									label: "Next",
								},
								fail_link: {
									link_type: "subtask",
									link_id: "fail_link",
									subtask_navigation_context: {
										action: "select_phone",
									},
									subtask_id: "SignupReview",
								},
								cancel_link: {
									link_type: "subtask",
									link_id: "cancel_link",
									label: "Use phone instead",
									subtask_id: "Signup",
								},
								verification_status_polling_enabled: false,
							},
							progress_indication: {
								text: {
									text: "Step 4 of 5",
									entities: [],
								},
							},
						},
						{
							subtask_id: "InvalidBirthdayAlert",
							alert_dialog_suppress_client_events: {
								next_link: {
									link_type: "subtask",
									link_id: "next_link",
									label: "Close",
									subtask_navigation_context: {
										action: "clear",
									},
									is_destructive: true,
									suppress_client_events: true,
									subtask_id: "Signup",
								},
								primary_text: {
									text: "Can't complete your signup right now.",
									entities: [],
								},
								dismiss_link: {
									link_type: "subtask",
									link_id: "dismiss_link",
									subtask_navigation_context: {
										action: "clear",
									},
									is_destructive: true,
									suppress_client_events: true,
									subtask_id: "Signup",
								},
							},
							callbacks: [
								{
									trigger: "impression",
									endpoint:
										"callback.json?product=metric-tracking&identifier=generic-metric-tracking-cb&params=%7B%22data%22%3A%5B%7B%22dataset%22%3A%22signup_events%22%2C%22signup_event_data%22%3A%7B%22subtask_id%22%3A%22InvalidBirthdayAlert%22%2C%22flow_token%22%3A%22g%3B168285213701136618%3A-1682858004196%3AGVb9vaGJwZWYOKoQ9IvuhyoM%3A0%22%2C%22flow_name%22%3A%22signup%22%2C%22flow_start_location%22%3A%22unknown%22%2C%22signup_flow_name%22%3A%22signup%22%7D%7D%5D%7D",
								},
								{
									trigger: "impression",
									scribe_config: {
										page: "onboarding",
										section: "signup",
										component: "InvalidBirthdayAlert",
										action: "impression",
									},
								},
							],
						},
					],
				});
			}
			default: {
			}
		}
		return res.status(400).send();
	}
	let response = {
		flow_token: body.flow_token,
		status: "success",
		subtasks: [],
	} as TaskRes;
	for (const subtask of body.subtask_inputs) {
		console.log(subtask.subtask_id);
		let subtaskResponse = { flow_token: body.flow_token, status: "success" };
		switch (subtask.subtask_id) {
			case "LoginJsInstrumentationSubtask": {
				if (subtask.enter_password) {
					const token = flowTokens.find((t) => t.token === body.flow_token);
					if (!token) return res.status(400).send();
					token.password = subtask.enter_password.password;
					const id = randInt(24);
					const user = new User({
						id,
						id_str: id.toString(),
						name: token.name,
						email: token.email,
						screen_name: token.username,
						password: token.password,
						location: null,
						description: null,
						url: null,
						entities: {
							description: {
								urls: [],
							},
						},
						protected: false,
						followers_count: 0,
						fast_followers_count: 0,
						normal_followers_count: 0,
						friends_count: 249,
						listed_count: 121127,
						created_at: formatDate(new Date()),
						favourites_count: 0,
						utc_offset: null,
						time_zone: null,
						geo_enabled: false,
						verified: false,
						statuses_count: 0,
						media_count: 0,
						lang: null,
						contributors_enabled: false,
						is_translator: false,
						is_translation_enabled: false,
						profile_background_color: "C0DEED",
						profile_background_image_url:
							"http://abs.twimg.com/images/themes/theme1/bg.png",
						profile_background_image_url_https:
							"https://abs.twimg.com/images/themes/theme1/bg.png",
						profile_background_tile: false,
						profile_image_url:
							"http://pbs.twimg.com/profile_images/1346170289642725376/QjeO2NSL_400x400.jpg",
						profile_image_url_https:
							"https://pbs.twimg.com/profile_images/1346170289642725376/QjeO2NSL_400x400.jpg",
						profile_banner_url: null,
						profile_link_color: "0084B4",
						profile_sidebar_border_color: "C0DEED",
						profile_sidebar_fill_color: "DDEEF6",
						profile_text_color: "333333",
						profile_use_background_image: true,
						has_extended_profile: true,
						default_profile: true,
						default_profile_image: true,
						pinned_tweet_ids: [],
						pinned_tweet_ids_str: [],
						has_custom_timelines: true,
						can_dm: null,
						following: null,
						follow_request_sent: null,
						notifications: null,
						muting: null,
						blocking: null,
						blocked_by: null,
						want_retweets: null,
						advertiser_account_type: "none",
						advertiser_account_service_levels: [],
						business_profile_state: "none",
						translator_type: "none",
						withheld_in_countries: [],
						followed_by: null,
						ext_has_nft_avatar: false,
						ext_profile_image_shape: "Circle",
						ext_is_blue_verified: false,
						ext: {
							hasNftAvatar: {
								r: {
									ok: false,
								},
								ttl: -1,
							},
							highlightedLabel: {
								r: {
									ok: {
										label: {
											description: "Twitter",
											badge: {
												url: "https://pbs.twimg.com/profile_images/1488548719062654976/u6qfBBkF_bigger.jpg",
											},
											url: {
												urlType: "DeepLink",
												url: "https://twitter.com/Twitter",
											},
											userLabelType: "BusinessLabel",
											userLabelDisplayType: "Badge",
										},
									},
								},
								ttl: -1,
							},
						},
						require_some_consent: false,
					});
					await user.save();
					return res.status(200).send({
						data: {
							user: {
								result: {
									user,
								},
							},
						},
					});
				} else {
					response.subtasks.push(
						{
							settings_list: {
								detail_text: {
									entities: [
										{
											from_index: 23,
											navigation_link: {
												link_id: "signup_deep_link",
												link_type: "deep_link_and_abort",
												url: "https://twitter.com/i/flow/signup",
											},
											to_index: 30,
										},
									],
									text: "Don't have an account? Sign up",
								},
								header: {
									primary_text: {
										entities: [],
										text: "Sign in to Blue OSS",
									},
								},
								horizontal_style: "compact",
								navigation_style: "hide",
								settings: [
									{
										value_data: {
											text_field: {
												content_type: "text",
												hint_text: "Phone, email, or username",
											},
										},
										value_identifier: "user_identifier",
										value_type: "text_field",
									},
									{
										value_data: {
											button: {
												navigation_link: {
													label: "Next",
													link_id: "next_link",
													link_type: "task",
												},
												preferred_size: "normal",
												style: "primary",
											},
										},
										value_identifier: "next_button",
										value_type: "button",
									},
									{
										value_data: {
											button: {
												navigation_link: {
													label: "Forgot password?",
													link_id: "forget_password",
													link_type: "subtask",
													subtask_id: "RedirectToPasswordReset",
												},
												preferred_size: "normal",
												style: "secondary",
											},
										},
										value_identifier: "forgot_password",
										value_type: "button",
									},
								],
								style: "step",
							},
							subtask_back_navigation: "cancel_flow",
							subtask_id: "LoginEnterUserIdentifierSSO",
						},
						{
							single_sign_on: {
								cancel_link: {
									link_id: "cancel_link",
									link_type: "subtask",
									subtask_id: "LoginEnterUserIdentifierSSO",
								},
								fail_link: {
									link_id: "fail_link",
									link_type: "subtask",
									subtask_id: "LoginEnterUserIdentifierSSO",
								},
								next_link: {
									link_id: "next_link",
									link_type: "task",
								},
								provider: "google",
								scopes: ["openid", "email", "profile"],
								state: "HyCVzrLKAWCKi9tKusmLc_nrzoPmtk7KYZmwgbtDauy",
							},
							subtask_back_navigation: "cancel_flow",
							subtask_id: "EnterIdGoogleSSOSubtask",
						},
						{
							single_sign_on: {
								cancel_link: {
									link_id: "cancel_link",
									link_type: "subtask",
									subtask_id: "LoginEnterUserIdentifierSSO",
								},
								fail_link: {
									link_id: "fail_link",
									link_type: "subtask",
									subtask_id: "LoginEnterUserIdentifierSSO",
								},
								next_link: {
									link_id: "next_link",
									link_type: "task",
								},
								provider: "apple",
								scopes: ["email", "name"],
								state: "p80pfOU8mmuF891X94HsPX46SvqyKJcI_JB5F9EIyEO",
							},
							subtask_back_navigation: "cancel_flow",
							subtask_id: "EnterIdAppleSSOSubtask",
						},
						{
							open_link: {
								link: {
									link_id: "password_reset_deep_link",
									link_type: "deep_link_and_abort",
									url: "https://twitter.com/i/flow/password_reset?input_flow_data=%7B%22requested_variant%22%3A%22eyJwbGF0Zm9ybSI6IlJ3ZWIifQ%3D%3D%22%7D",
								},
							},
							subtask_id: "RedirectToPasswordReset",
						}
					);
				}
				break;
			}
			case "LoginEnterUserIdentifierSSO": {
				const flow = flowTokens.find((t) => t.token === body.flow_token);
				if (!flow) return res.status(400).send();
				const username =
					body.subtask_inputs[0].settings_list!.setting_responses[0]
						.response_data.text_data.result;
				const userScreenName = await User.findOne({ screen_name: username });
				const userEmail = await User.findOne({
					email: username,
				});

				if (!userEmail && !userScreenName)
					return res.status(400).send({
						errors: [
							{ code: 399, message: "Sorry, we could not find your account." },
						],
					});
				userScreenName ? (flow.name = username) : (flow.email = username);
				response.subtasks.push(
					{
						enter_password: {
							footer: {
								footnote_text: {
									entities: [
										{
											from_index: 23,
											navigation_link: {
												link_id: "signup_deep_link",
												link_type: "deep_link_and_abort",
												url: "https://twitter.com/i/flow/signup",
											},
											to_index: 30,
										},
									],
									text: "Don't have an account? Sign up",
								},
								style: "fixed",
							},
							hint: "Password",
							next_link: {
								label: "Log in",
								link_id: "next_link",
								link_type: "task",
							},
							os_content_type: "password",
							password_field: {
								content_type: "password",
								detail_text: {
									entities: [
										{
											from_index: 0,
											navigation_link: {
												label: "Forgot password?",
												link_id: "forget_password",
												link_type: "subtask",
												subtask_id: "RedirectToPasswordReset",
											},
											to_index: 16,
										},
									],
									text: "Forgot password?\t",
								},
								hint_text: "Password",
							},
							primary_text: {
								entities: [],
								text: "Enter your password",
							},
							skip_password_validation: true,
							user_identifier_display_type: "username",
							username,
						},
						subtask_back_navigation: "cancel_flow",
						subtask_id: "LoginEnterPassword",
					},
					{
						open_link: {
							link: {
								link_id: "password_reset_deep_link",
								link_type: "deep_link_and_abort",
								url: "https://twitter.com/i/flow/password_reset?input_flow_data=%7B%22requested_variant%22%3A%22eyJ1c2VyX2lkZW50aWZpZXIiOiJtYWRzdGhlY2F0Z2lybCIsInBsYXRmb3JtIjoiUndlYiJ9%22%7D",
							},
						},
						subtask_id: "RedirectToPasswordReset",
					}
				);
				break;
			}
			case "Signup": {
				const username = randInt(12);
				flowTokens.push({
					token: body.flow_token,
					email: subtask.sign_up.email,
					name: subtask.sign_up.name,
					username: username.toString(),
					type: "signup",
				});
				response.subtasks.push({
					enter_password: {
						email: subtask.sign_up.email,
						hint: "Password",
						name: subtask.sign_up.name,
						next_link: {
							label: "Next",
							link_id: "next_link",
							link_type: "task",
						},
						primary_text: {
							entities: [],
							text: "You'll need a password",
						},
						secondary_text: {
							entities: [],
							text: "Make sure it's 8 characters or more.",
						},
						username: username.toString(),
					},
					progress_indication: {
						text: {
							entities: [],
							text: "Step 5 of 5",
						},
					},
					subtask_id: "LoginJsInstrumentationSubtask",
				});
				break;
			}

			case "LoginEnterPassword": {
				const flow = flowTokens.find((f) => f.token === body.flow_token);
				if (!flow)
					return res
						.status(400)
						.send({ success: false, err: "Invalid flow token" });
				flow.password = body.subtask_inputs[0].enter_password.password;
				const user = flow.email
					? await User.findOne({ email: flow.email }).select("+password")
					: await User.findOne({ name: flow.name }).select("+password");
				if (!user) return res.status(400).send();
				if (flow.password === user.password) {
					// res.cookie("twid", `u=${user.id}`);
					response.subtasks.push({
						check_logged_in_account: {
							false_link: {
								link_id: "AccountDuplicationCheck_false",
								link_type: "task",
							},
							true_link: {
								link_id: "AccountDuplicationCheck_true",
								link_type: "task",
							},
							user_id: "1483042300943122432",
						},
						subtask_id: "AccountDuplicationCheck",
					});
				}
			}
			case "AccountDuplicationCheck": {
				const flow = flowTokens.find((f) => f.token === body.flow_token);
				if (!flow)
					return res
						.status(400)
						.send({ success: false, err: "Invalid flow token" });
				const user = flow.email
					? await User.findOne({ email: flow.email }).select("+password")
					: await User.findOne({ name: flow.name }).select("+password");
				if (!user) return res.status(400).send();
				res.setHeader(
					"set-cookie",
					`twid="u=${user.id}"; Max-Age=34214400; Path=/; Domain=.twitter.com; Secure; SameSite=None`
				);
				response.subtasks.push(
					{
						open_account: {
							attribution_event: "login",
							next_link: {
								link_id: "next_link",
								link_type: "subtask",
								subtask_id: "SuccessExit",
							},
							user: {
								id: user.id,
								id_str: user.id.toString(),
								name: user.name,
								screen_name: user.screen_name,
							},
						},
						subtask_id: "LoginSuccessSubtask",
					},
					{
						open_link: {
							link: {
								link_id: "next_link",
								link_type: "subtask",
								subtask_id: "LoginOpenHomeTimeline",
							},
						},
						subtask_id: "SuccessExit",
					},
					{
						open_home_timeline: {
							next_link: {
								link_id: "next_link",
								link_type: "abort",
							},
						},
						subtask_id: "LoginOpenHomeTimeline",
					}
				);
			}
			default: {
				Object.assign(subtaskResponse, {
					flow_token: body.flow_token,
					status: "success",
					subtasks: [
						{
							message: "Blue OSS has yet to implement this subtask. Sorry.",
							js_instrumentation: {
								timeout_ms: 2000,
								url: "https://twitter.com/i/js_inst?c_name=ui_metrics",
							},
							subtask_id: "",
						},
					],
				});
			}
		}
	}
	return res.status(200).send(response);
});

// this needs to be here since we need access to flowTokens in future

router.post("/onboarding/begin_verification.json", (req, res) => {
	return res.status(204).send();
});

export default router;
