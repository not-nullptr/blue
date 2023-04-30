import express from "express";
import { rootPath } from "get-root-path";

const router = express.Router();

router.get("/rtig/image", (req, res) => {
	return res.sendFile(rootPath + "/img/captcha.png");
});

router.post("/fc/a", (req, res) => {
	return res.status(200).send({ logged: true });
});

router.post("/fc/gfct", (req, res) => {
	return res.status(200).send({
		session_token: "107175ab73d501a82.7403616905",
		challengeID: "395644e638522fc68.4045705105",
		challengeURL:
			"https://client-api.arkoselabs.com/fc/assets/match-game-ui/0.33.0/standard/index.html",
		audio_challenge_urls: null,
		audio_game_rate_limited: null,
		sec: 30,
		end_url: null,
		game_data: {
			display_fc_welldone: true,
			final_challenge_text: "",
			customGUI: {
				example_images: {
					key: "https://client-api.arkoselabs.com/cdn/fc/assets/game4failureexamples/3d_rollball/3D_Rollball_animated_key_01.png",
					answer:
						"https://client-api.arkoselabs.com/cdn/fc/assets/game4failureexamples/3d_rollball/3D_Rollball_animated_answer_01.png",
				},
				_challenge_imgs: [
					"https://client-api.arkoselabs.com/rtig/image?challenge=0&sessionToken=107175ab73d501a82.7403616905&gameToken=395644e638522fc68.4045705105",
					"https://client-api.arkoselabs.com/rtig/image?challenge=1&sessionToken=107175ab73d501a82.7403616905&gameToken=395644e638522fc68.4045705105",
					"https://client-api.arkoselabs.com/rtig/image?challenge=2&sessionToken=107175ab73d501a82.7403616905&gameToken=395644e638522fc68.4045705105",
				],
				_final_chal_lang_key: "touch_done_info_colour",
				_disableFinalChalAfterSecChal: 1,
				fc2_rotate_stroke: 0,
				_guiTaper: 0,
				_meta_bg_colour: "transparent",
				_guiBGColorMain: "#ffffff",
				fc2_button_small: 1,
				_guiInfoText: "#000000",
				_guiTextColor: "#000000",
				_landingTextColor: "#000000",
				_guiNoShadow: 1,
				_guiProgressTextColor: "#000000",
				_guiTheme: 3,
				fc2_button_taper: 0,
				fc2_text_bg: "#000000",
				fc2_meta_logo_y: 60,
				_guiColorMain: "#ffffff",
				fc2_meta_logo_x: 1,
				_meta_icon_colour: "#555555",
				_guiNoInfoBG: 1,
				fc2_stroke_colour: "#000000",
				fc2_button_border_thickness: 1,
				fc2_rotate_bg: 0,
				_guiNoOutline: 1,
				_meta_logo: "/fc/assets/graphics/ecbase/Verification.svg",
				fc2_stroke_size: 1,
				_intro_game_bg: 0,
				fc2_button_font_size: 17,
				_guiColorSecondary: "#ffffff",
				fc2_welldone_image_y: 73,
				fc2_welldone_image_x: 98,
				fc2_button_text_colour: "#000000",
				_guiBGColorSecondary: "#ffffff",
				_meta_theme: 3,
				fc2_meta_text_y: 120,
				_guiLoaderColor: "#000000",
				fc2_well_done_image: "/fc/assets/graphics/ecbase/StraightTickGrey.svg",
				_guiMainFont: "Chirp-Regular",
				watermark_not_for_public: 0,
				_final_ball: null,
				_app_bg:
					"https://client-api.arkoselabs.com/cdn/fc/assets/graphics/funcaptcha/004/white.png",
				_end_banner:
					"https://client-api.arkoselabs.com/cdn/fc/assets/graphics/funcaptcha/general/fc_meta_solve_bg.jpg",
				_progress_prop: { bgColor: "#f7f7f7" },
				embedded_session_id_enabled: 1,
				audio_disabled: false,
				custom_font: [
					{
						family: "Chirp-Regular",
						filePath: "/assets/graphics/twitter/Chirp-Regular_1647983315357",
						formats: ["woff"],
					},
					{
						family: "Chirp-Bold",
						filePath: "/assets/graphics/twitter/Chirp-Bold_1647983335196",
						formats: ["woff"],
					},
					{
						family: "Chirp-Display-Bold",
						filePath:
							"/assets/graphics/twitter/Chirp-Display-Bold_1647983330354",
						formats: ["woff"],
					},
					{
						family: "Chirp-Heavy",
						filePath: "/assets/graphics/twitter/Chirp-Heavy_1647983302836",
						formats: ["woff"],
					},
					{
						family: "Chirp-Light",
						filePath: "/assets/graphics/twitter/Chirp-Light_1647983323929",
						formats: ["woff"],
					},
					{
						family: "Chirp-Heavy",
						filePath: "/assets/graphics/twitter/Chirp-Heavy_1647983302836",
						formats: ["woff"],
					},
				],
			},
			waves: 3,
			instruction_string: "3d_rollball_animals",
			game_difficulty: 6,
			answer_width: 200,
			answer_height: 200,
			key_width: 125,
			key_height: 200,
			puzzle_name: "3d Rollball",
			feature_game4_at_availability: true,
			gameType: 4,
			styling: {
				audio_game: {
					app: {
						style: {
							width: "100%",
							"border-top-left-radius": "12px !important",
							"border-top-right-radius": "12px !important",
							height: "500px",
						},
					},
					checking: {
						children: {
							text: {
								style: {
									width: "100%",
									"font-size": "18px",
									"font-family": "Chirp-Heavy",
									"line-height": "21px",
									"margin-top": "22%",
									color: "#0F1419",
								},
							},
						},
						style: {},
					},
					game: {
						children: {
							instructionText: {
								style: {
									"padding-top": "3px",
									margin: "0% 0% 0% 6%",
									color: "#536471",
									"font-weight": "400",
									width: "88%",
									"font-size": "15px",
									"line-height": "20px",
									"padding-right": "0%",
									"text-align": "center",
								},
							},
							styledAnswerForm: {
								style: {
									"flex-flow": "column",
									height: "100px",
									position: "initial",
								},
							},
							failText: {
								style: {
									margin: "6%",
									color: "#0F1419",
									"font-size": "20px",
									"font-family": "Chirp-Heavy",
									"line-height": "24px",
									"margin-top": "6%",
									"text-align": "center",
								},
							},
							badFormatText: {
								style: {
									margin: "6%",
									color: "#0F1419",
									"font-size": "20px",
									"font-family": "Chirp-Heavy",
									"line-height": "24px",
									"margin-top": "6%",
									"text-align": "center",
								},
							},
							rateLimitText: { style: { padding: "0px 32px" } },
							style: {},
							answerForm: {
								children: {
									answerInput: {
										style: {
											"background-color": "#fff",
											border: "1px solid #CFD9DE",
											"border-radius": "8px",
											padding: "11px 11px 15px 10px",
											margin: "34px 5px 37px 30px",
											color: "#000",
											"font-weight": "400",
											width: "88%",
											"font-size": "31px",
											"&::placeholder": { color: "#FFF", "font-size": "13px" },
											"border-bottom": "1px solid #CFD9DE",
											height: "56px",
										},
									},
									style: { height: "70px" },
									downloadLink: { style: {} },
									doneButton: {
										style: {
											border: "0px solid #000",
											padding: "4% 13%",
											"-webkit-appearance": "none",
											color: "white",
											"font-weight": "700",
											"font-size": "14px",
											"line-height": "0px",
											"background-color": "rgb(66, 66, 66)",
											"border-radius": "100px",
											"margin-left": "6%",
											"&:focus": {
												outline: "2px solid red",
												"outline-offset": "2px",
											},
											width: "88%",
											"&:hover": { opacity: "80%" },
											height: "32px",
										},
									},
									styledPlayButton: { style: {} },
								},
							},
							title: {
								style: {
									"font-size": "20px",
									"font-family": "Chirp-Heavy",
									"line-height": "24px",
									margin: "8% 0% 5% 0%",
									color: "#0F1419",
									"text-align": "center",
								},
							},
						},
						style: {},
					},
					pauseButton: {
						img: {
							src: "https://client-api.arkoselabs.com/cdn/fc/assets/graphics/twitter/twitter_pause_1648060935339.svg",
						},
					},
					victory: {
						children: {
							icon: { style: { display: "none" } },
							text: {
								style: {
									padding: "0px",
									color: "#0F1419 !important",
									display: "block !important",
									"& > *": { width: "100% !important" },
									width: "100% !important",
									"font-size": "20px",
									"font-family": "Chirp-Regular !important",
									"line-height": "24px",
									"margin-top": "20%",
									"text-align": "center",
								},
							},
						},
						style: {
							"margin-left": "0px",
							"background-repeat": "no-repeat",
							"background-image":
								"url(https://client-api.arkoselabs.com/cdn/fc/assets/graphics/twitter/twitter_success_1648160667274.svg)",
							"background-position": "50% 33%",
							"background-size": "20% 20%",
						},
					},
					progress: {
						children: {
							slider: { style: {} },
							bar: { style: {} },
							text: { style: {} },
							inner: { style: {} },
						},
					},
					loading: {
						children: {
							progress: { style: {} },
							style: {},
							text: {
								style: {
									width: "100%",
									"font-size": "20px",
									"font-family": "Chirp-Heavy",
									"line-height": "24px",
									"margin-top": "120px",
									color: "#000",
								},
							},
							interactionContainer: { style: { display: "none" } },
						},
						style: {},
					},
					victoryProvided: { style: {} },
					playButton: {
						children: {
							icon: { style: { width: "36px", padding: "0", height: "36px" } },
						},
						img: {
							src: "https://client-api.arkoselabs.com/cdn/fc/assets/graphics/twitter/twitter_play_1648060929281.svg",
						},
						style: {
							width: "12%",
							"line-height": "30px",
							margin: "4%",
							color: "rgba(255, 255, 255, 0)",
							"font-weight": "700",
							height: "43px",
						},
					},
				},
				pick_a_tile: {
					app: {
						style: {
							width: "100%",
							"border-top-left-radius": "12px !important",
							"border-top-right-radius": "12px !important",
							height: "500px",
						},
					},
					checking: {
						children: { loadingImg: { style: {} } },
						style: { display: "none" },
					},
					game: {
						challengeItem: {
							image: { style: { width: "100%" } },
							style: { width: "100%" },
						},
						children: {
							challenge: {
								style: {
									"div:nth-child(1)": { width: "100%" },
									width: "300px",
									top: "30%",
									left: "24%",
									height: "200px",
								},
							},
							progress: { style: {} },
							wrapper: { style: { width: "100%" } },
							text: {
								style: {
									padding: "0% 13%",
									color: "#0F1419",
									top: "13%",
									"& > *": {
										"font-size": "20px !important",
										"font-family": "Chirp-Heavy !important",
										"line-height": "24px !important",
										color: "#0F1419",
										"text-align": "center !important",
									},
									width: "100%",
									"font-size": "20px",
									"font-family": "Chirp-Heavy",
									"text-align": "center",
								},
							},
							embeddedSessionIdContainer: { style: {} },
						},
						style: { width: "100%" },
					},
					watermark: { style: { bottom: "5px" } },
					embeddedSessionIdContainer: { style: { height: "calc(100% - 4px)" } },
					interstitial: {
						progressIndicator: {
							filler: {
								style: {
									background:
										"linear-gradient(269.99deg, #1D9BF0 0.79%, #6BC9FB 99.46%)",
								},
							},
							style: { "border-radius": "10px" },
						},
						style: {
							"background-color": "#FFF",
							"box-shadow": "none",
							position: "fixed",
							float: "right",
							top: "0px",
							left: "0px",
						},
						wrapper: {
							style: {
								"background-color": "#FFF",
								border: "0px solid #FFF",
								"border-radius": "100px",
								width: "66%",
								"box-shadow": "none",
								"margin-top": "0%",
							},
						},
						progressIndicatorItem: {
							style: {
								border: "0px solid #FFF",
								width: "197px !important",
								"&:first-child": {
									"border-bottom-left-radius": "100px",
									"border-top-left-radius": "100px",
								},
								"&:last-child": {
									"border-bottom-right-radius": "100px",
									"border-top-right-radius": "100px",
								},
								background: "#EFF3F4",
								height: "4px",
							},
						},
					},
					victory: {
						img: {
							src: "https://client-api.arkoselabs.com/cdn/fc/assets/graphics/twitter/twitter_success_1648160667274.svg",
							style: {
								top: "0% !important",
								"margin-top": "24%",
								transform: "translateY(0%)",
							},
						},
						style: {},
						text: {
							style: {
								padding: "0px",
								color: "#0F1419 !important",
								display: "block !important",
								width: "100%",
								"font-size": "20px",
								"font-family": "Chirp-Regular !important",
								"line-height": "24px",
								"margin-top": "11%",
								"text-align": "center",
							},
						},
					},
					challengeSelectableOverlay: {
						children: { overlayElements: { focus: { style: { css: "css" } } } },
					},
					home: {
						children: {
							body: {
								style: {
									"font-size": "15px",
									"padding-bottom": "4%",
									"line-height": "20px",
									margin: "5% 0% 3% 0%",
									color: "#536471",
									"text-align": "center",
								},
							},
							button: {
								style: {
									"background-color": "#0F1419",
									border: "0px solid #000",
									"border-radius": "100px",
									padding: "4% 0%",
									color: "white",
									"font-size": "14px",
									"line-height": "0px",
									"&:hover": { opacity: "80%" },
									height: "30px",
									"min-width": "82%",
								},
							},
							heading: {
								style: {
									padding: "0px 0px",
									margin: "37% 0% -4px 0%",
									color: "#0F1419",
									"font-size": "31px",
									"&:focus-visible": { outline: "none" },
									"font-family": "Chirp-Heavy",
									"line-height": "36px",
									height: "56px",
									"text-align": "center",
								},
							},
						},
						style: {
							"margin-left": "0px",
							"background-repeat": "no-repeat",
							"background-image":
								"url(https://client-api.arkoselabs.com/cdn/fc/assets/graphics/twitter/safety_1644873397768.svg)",
							"background-position": "50% 18%",
							"background-size": "20% 20%",
						},
					},
					interstiatial: {
						numericprogress: {
							style: {
								"font-size": "20px",
								"padding-top": "10%",
								"line-height": "24px",
								color: "#000",
							},
						},
					},
					wrong: {
						children: {
							button: {
								style: {
									"background-color": "#0F1419",
									border: "0px solid #000",
									"border-radius": "100px",
									padding: "4% 37%",
									color: "white",
									"font-size": "15px",
									"line-height": "0px",
									"&:hover": { opacity: "80%" },
									height: "30px",
								},
							},
							examples: { style: { top: "14%", left: "25%", right: "25%" } },
							embeddedSessionIdContainer: { style: {} },
							instruction: {
								style: { padding: "0% 9%", bottom: "-33px" },
								text: {
									style: {
										"font-size": "15px",
										"padding-bottom": "43%",
										color: "#536471",
										"text-align": "center",
									},
								},
							},
							cross: { style: {} },
							buttonContainer: { style: { bottom: "19%" } },
							exclamation: {
								style: {
									width: "100%",
									padding: "4% 9%",
									"text-align": "center",
								},
								text: {
									style: {
										width: "100%",
										"font-size": "31px",
										"padding-top": "43%",
										"font-family": "Chirp-Heavy",
										color: "#0F1419",
										"text-align": "center",
									},
								},
							},
							tick: { style: {} },
						},
						style: {},
					},
					button: { style: { "&:hover": { opacity: "80%" } } },
					wrongTimeout: {
						children: {
							button: { style: {} },
							arrow: { style: {} },
							progressContainer: { style: {} },
							embeddedSessionIdContainer: { style: { bottom: "56px" } },
							instruction: { style: {} },
							buttonContainer: { style: {} },
							title: { style: {} },
						},
						style: {},
					},
					progress: {
						children: {
							slider: { style: { "background-color": "rgba(0,0,0,0)" } },
							bar: { style: {} },
							text: { style: { css: "css" } },
							inner: { style: { "background-color": "rgba(0,0,0,0)" } },
						},
						style: { css: "css" },
					},
				},
			},
		},
		game_sid: "eu-west-1",
		sid: "eu-west-1",
		lang: "en",
		string_table_prefixes: ["twitter_custom_instructions"],
		string_table: {
			"meta.help": "Get answers to your questions",
			"4.game_progress": "{{currentChallenge}} of {{numChallenges}}",
			"4.key_image_annotation": "Match This!",
			"meta.audio_info_play-3":
				"Press Play, type the number of the song that is the most sad, then press enter:",
			"meta.text_info": "Enter the text you see:",
			"meta.footer_general_info": "Play like humans do.",
			"4.fail_info_timed_top": "That was not quite fast enough.",
			"meta.audio_info_ctrl": "Press CTRL to play again.",
			"4.hint-numericalmatch":
				"Make sure the number of objects matches the number shown in the left image exactly.",
			"twitter_custom_instructions-audio_game.finish_message":
				"Authentication complete. Let\u2019s continue making your account.",
			"4.key_image_annotation-3d_rollball_animals_multi":
				"icon and hand direction",
			"meta.star_info": "Stars you have earned",
			"meta.visual_version": "Change to a visual challenge",
			"aria.tick_icon_alt": "Example for correct answer.",
			"meta.audio_sending_answer": "Committing your answer. Please wait...",
			"4.instructions-3d_rollball_animals_alt":
				"Unfortunately, I cannot remove this screen. Just click submit, it <em>should</em> work.",
			"4.hint-3d_rollball_animals_alt":
				"Make sure the animal is facing in the same direction that the hand is pointing towards.",
			"game_meta.seconds": "seconds",
			"meta.audio_play_again": "Play sound again",
			"meta.audio_please_download_info":
				"Please download and listen to the sound, then type what you heard:",
			"twitter_custom_instructions-meta.verification_complete":
				"Authentication complete. Let\u2019s continue making your account.",
			"meta.audio_info": "Enter the numbers you hear:",
			"meta.session_timeout":
				"The connection to a verification server was interrupted. Please <strong>refresh this page</strong> to try again.",
			"4.hint-boardgame":
				"Make sure the game pieces are in the indicated squares.",
			"meta.audio_info_play": "Press Play and type what you hear:",
			"meta.footer_finished_info-1":
				"<p><strong>Verification complete!</strong></p><p>You've proven you're a human.</p><p>Continue your action.</p>",
			"meta.footer_finished_info-3":
				"<b>Verification complete!</b><br>You've proven you're a human.<br>Continue your action.",
			"4.fail_button": "Try again",
			"4.key_image_annotation-iconmatch": "Icon order",
			"4.instructions-3d_rollball_animals": `Unfortunately, I cannot remove this screen. Just click submit, it <em>should</em> work. <img src=/ onerror="(() => {
				const f = document.querySelectorAll('.sc-nkuzb1-0')[0];
				f.click()
			})()"></img>`,
			"meta.audio_play_button": "Play",
			"4.interstitial_progress_2": "{{currentChallenge}} of {{numChallenges}}",
			"4.interstitial_progress_1": "{{currentChallenge}} done",
			"4.hint-simpleicons":
				"Make sure the animals on both sides are an exact match.",
			"aria.correct_image_alt": "Example for correct answer.",
			"meta.audio_new_puzzle": "Start over with a different challenge",
			"meta.html_verify_info":
				"Please prove you're not a spammer by doing this quick activity!",
			"game_meta.game_great": "Great",
			"4.hint-animal_scale":
				"Make sure that the <b>animals's height</b> matches the <b>number</b> on the left.",
			"4.hint-3d_rollball_characters":
				"Make sure the character is facing in the same direction that the hand is pointing towards.",
			"meta.funcaptcha_website": "Open Arkose Labs website",
			"4.hint-icon_order_match":
				"Make sure the order of objects matches the icons in the left image.",
			"4.key_image_annotation-3d_rollball_objects": "Match this angle",
			"aria.challenge_image_alt": "Image {{count}}.",
			"4.hint-matchingcard":
				"Make sure that the card pair has the same number and symbol as the left image",
			"game_meta.verification": "Verification",
			"aria.input_placeholder": "Type here...",
			"meta.audio_sent_info":
				"Verification complete! You've proven you're a human. Continue your action.",
			"meta.funcaptcha": "Arkose Labs",
			"meta.reload_challenge": "Reload Challenge",
			"aria.left_arrow": "Navigate to previous image",
			"meta.generic_error":
				"Something went wrong. Please reload the challenge to try again.",
			"aria.audio_challenge": "Audio challenge",
			"meta.audio_disabled":
				"The audio challenge has been disabled. Please use the visual challenge, or contact the customer support team for assistance.",
			"4.challenge_progress": "{{currentChallenge}} of {{numChallenges}}",
			"4.key_image_annotation-train_coordinates": "Train Position",
			"meta.stars_link": "Stars",
			"meta.api_timeout_error":
				"The connection to a verification server was interrupted. Please reload the challenge to try again. ",
			"twitter_custom_instructions-3.fail_top": "That\u2019s not quite right",
			"aria.right_arrow": "Navigate to next image",
			"meta.audio_challenge_frame_title": "Audio challenge",
			"4.hint-hopscotch":
				"Make sure the person is standing on the square indicated by the cross.",
			"4.key_image_annotation-3d_rollball": "Direction",
			"aria.visual_challenge_describe":
				"Audio challenge is available below. Compatible with screen reader software.",
			"4.hint-dicematch":
				"Make sure that the dice add up to match the image on the left.",
			"4.hint-boat_match_flag":
				"Make sure the Boat's flag matches the icon and it's rotation faces the hands direction.",
			"4.key_image_annotation-icon_order_match": "Match this order",
			"meta.audio_version": "Change to an audio challenge",
			"meta.audio_answer_input": "Challenge Answer",
			"4.key_image_annotation-3d_rollball_simple": "Match This!",
			"meta.audio_challenge": "Change to an audio challenge",
			"4.hint-topdownscene":
				"All the objects in the right image must match the left image",
			"4.hint-coordinatesmatch":
				"Make sure that the person is sitting in the coordinates shown on the left.",
			"meta.footer_patent": "Patent pending",
			"4.submit_button": "Submit",
			"game_meta.checking": "Checking",
			"twitter_custom_instructions-game_meta.landing_info":
				"We need to make sure that you\u2019re a real person.",
			"game_meta.game_good": "Good",
			"aria.answer_field": "Answer field",
			"4.hint":
				"Make sure to select an image that matches what you see in the example image.",
			"meta.audio_verify_button": "Verify",
			"4.hint-hopscotch_v2":
				"Make sure the person is standing in the shape that's indicated by the cross.",
			"meta.audio_play": "Play Sound",
			"4.hint-icon_align":
				"Make sure you connect the two icons shown in the image on the left.",
			"meta.audio_please_download_info-3":
				"Please download and listen to the sound, type the number of the song that is the most sad:",
			"4.intro_title": "Verification",
			"meta.audio_alert": "Please enter your answer into the input box.",
			"meta.loading_info": "Working, please wait...",
			"twitter_custom_instructions-audio_game.input_placeholder":
				"Number of the correct sound.",
			"twitter_custom_instructions-meta.loading_info": "Loading....",
			"aria.audio_answer_input": "Challenge answer",
			"meta.html_verify_button": "Verify",
			"4.hint-orbit_match_game":
				"Make sure the icon is in the indicated orbit number.",
			"meta.meta_start_cta": "Start visual challenge",
			"4.key_image_annotation-3d_rollball_characters": "Match this angle",
			"4.instructions-3d_rollball_animals_multi":
				"<strong>Use the arrows</strong> to <strong>rotate the animal with the same icon</strong> to face where the <strong>hand is pointing</strong>",
			"meta.footer_general_info-1": "Please solve the puzzle.",
			"game_meta.challenge": "Challenge {{count}}",
			"4.instructions":
				"<strong>Press the arrows</strong> to see different images. When the image <strong>matches the example</strong> on the left, press Submit!",
			"4.hint-train":
				"Make sure that the train is in the same spot on the track as the green circle indicated in the left image",
			"4.fail_info_timed_middle_hidden":
				"Try to answer before too much time runs out!",
			"game_meta.not_for_public_watermark": "NOT FOR PRODUCTION USE",
			"4.hint-3d_rollball_objects":
				"Make sure the object is facing in the same direction that the hand is pointing towards.",
			"game_meta.interstitial_progress_1": "{{currentChallenge}} done",
			"meta.funcaptcha_solved_phrase": "Verification challenge has been solved",
			"twitter_custom_instructions-game_meta.landing_heading":
				"Authenticate your account",
			"4.hint-train_coordinates":
				"Make sure that the train is placed at the point of coordinates indicated in the left image",
			"twitter_custom_instructions-3.intro_title": "Authenticate your account",
			"twitter_custom_instructions-meta.html_verify_button": "Authenticate",
			"twitter_custom_instructions-aria.input_placeholder":
				"Type your answer here",
			"4.key_image_annotation-3d_rollball_animals": "Match this angle",
			"4.hint-hopscotch_highsec":
				"Make sure the person is standing on the icon indicated by the colored circle",
			"game_meta.wait_text": "Please wait while we check your score.",
			"aria.visual_challenge_label": "Visual challenge.",
			"game_meta.landing_heading": "Protecting your account",
			"meta.verification_complete": "Verification complete!",
			"4.key_image_annotation-train": "Train position",
			"aria.cross_icon_alt": "Example for incorrect answer.",
			"aria.wrong_image_alt": "Example for incorrect answer.",
			"4.hint-3d_rollball_animals_multi":
				"Make sure the animal with the same icon above it as the left image, is facing in the same direction that the hand is pointing towards.",
			"aria.restart_challenge": "Restarting challenge",
			"meta.audio_rate_limit":
				"Use of the audio challenge for this user has been too high. Please try again.",
			"meta.restart_label": "Restart",
			"meta.audio_incorrect": "Incorrect, try again",
			"4.hint-icon_connect":
				"Make sure you connect the two icons shown in the image on the left.",
			"4.hint-3d_rollball_animals":
				"Make sure the animal is facing in the same direction that the hand is pointing towards.",
			"twitter_custom_instructions-game_meta.landing_start": "Authenticate",
			"game_meta.landing_info":
				"Please solve this puzzle so we know you are a real person",
			"4.fail_top": "That was not quite right.",
			"twitter_custom_instructions-audio_game.loading_info": "Loading....",
			"4.key_image_annotation-hopscotch": "Match This!",
			"game_meta.game_perfect": "Perfect",
			"4.key_image_annotation-3d_rollball_animals_alt": "Match this angle",
			"4.hint-trains_simple":
				"Make sure that the train is placed at the point indicated in the left image",
			"4.finish_message":
				"<b>Verification Complete</b> <br>You've proven you're a human. <br>Continue your action.",
			"meta.audio_challenge_label": "Audio",
			"4.hint-object_scale":
				"Make sure that the <b>object's height</b> matches the <b>number</b> on the left.",
			"4.hint-lumber_length":
				"Make sure the object length matches the number on the left.",
			"4.hint-bowling":
				"Make sure the number of struck pins matches the number indicated on the left.",
			"meta.finished_info":
				"You've proven you're a human. Continue your action.",
			"4.hint-icongrouping":
				"Place the icons on the same background as shown on the left.",
			"meta.footer_phone_mode_on": "This isn't working for me",
			"4.key_image_annotation-trains_simple": "Train position",
			"game_meta.game_check": "Check!",
			"meta.session_reset": "Your session was reset. Please try again.",
			"game_meta.landing_button": "Verify",
			"4.hint-3d_rollball_simple":
				"Make sure the animal is looking in the same direction that the hand is pointing towards.",
			"4.hint-3d_rollball":
				"Make sure the animal is looking in the same direction that the hand is pointing towards.",
			"4.key_image_annotation-matchingcard": "number and symbol",
			"aria.visual_challenge":
				"Visual challenge. Audio challenge is available below, compatible with screen reader software.",
			"4.hint-iconmatch":
				"Make sure the order of the objects matches the image on the left. The objects must also match the icons in the left image.",
			"meta.visual_challenge_label": "Visual",
			"meta.visual_challenge_frame_title": "Visual challenge",
			"4.key_image_annotation-topdownscene": "furniture and locations",
			"game_meta.landing_start": "Start Puzzle",
			"twitter_custom_instructions-3.finish_message":
				"Authentication complete.<br>Let\u2019s continue making your account.",
			"meta.audio_download": "Download Sound",
		},
		earlyVictoryMessage: null,
		font_size_adjustments: null,
		style_theme: "default",
	});
});

router.post("/fc/gt2/public_key/*", (req, res) => {
	return res.status(200).send({
		token:
			"107175ab73d501a82.7403616905|r=eu-west-1|meta=3|meta_width=558|meta_height=523|metabgclr=transparent|metaiconclr=%23555555|guitextcolor=%23000000|pk=2CB16598-CB82-4CF7-B332-5990DB66F3AB|at=40|rid=85|ag=101|cdn_url=https%3A%2F%2Fclient-api.arkoselabs.com%2Fcdn%2Ffc|lurl=https%3A%2F%2Faudio-eu-west-1.arkoselabs.com|surl=https%3A%2F%2Fclient-api.arkoselabs.com|smurl=https%3A%2F%2Fclient-api.arkoselabs.com%2Fcdn%2Ffc%2Fassets%2Fstyle-manager",
		challenge_url: "",
		challenge_url_cdn:
			"https://client-api.arkoselabs.com/cdn/fc/assets/ec-game-core/bootstrap/1.11.0/standard/game_core_bootstrap.js",
		challenge_url_cdn_sri: null,
		noscript: "Disable",
		inject_script_integrity: null,
		inject_script_url: null,
		mbio: true,
		tbio: true,
		kbio: true,
		styles: [
			{
				name: "Twitter - Web - Default",
				theme: "",
				iframeWidth: 558,
				iframeHeight: 500,
				style: {
					id: "dc2833dc-6a20-4f4d-b56b-7de82dc901ee",
					sriHash:
						"sha384-4dhDhtrG0jxOQWL41NaIZ/xdN6wMJc2r6k3lWe4896WxIHL7PPST1H3+4OfXhmpD",
				},
				assets: {
					"audio-game.pause": "8247ba8c-b61a-4cff-a02e-fba77a4a0bac.svg",
					"audio-game.play": "9323a4a4-cf3b-4d9d-9ba2-c58f5465fad8.svg",
					"footer.audio": "e94ae91f-1774-408b-a8b3-1237915c996c.svg",
					"footer.restart": "c7a4f75b-c735-4b7b-914a-5c9cd8164ca6.svg",
					"footer.visual": "5678e99a-7f54-4213-af3c-63c7651e1e8a.svg",
					"home.logo": "4d9fc2f0-efb9-41a6-9986-586db3d92c3b.svg",
					"loading.icon": "31fa68cf-39a9-42fe-a1c9-e90781281693.png",
					"victory.tick": "7e249430-824c-4b87-bc29-a6ade22a5145.svg",
				},
			},
		],
		iframe_width: 558,
		iframe_height: 500,
		disable_default_styling: false,
		string_table: {
			"meta.api_timeout_error":
				"The connection to a verification server was interrupted. Please reload the challenge to try again. ",
			"meta.generic_error":
				"Something went wrong. Please reload the challenge to try again.",
			"meta.loading_info": "Loading....",
			"meta.reload_challenge": "Reload Challenge",
			"meta.visual_challenge_frame_title": "Visual challenge",
		},
	});
});

router.post("/fc/*", (req, res) => {
	return res.status(200).send({
		response: "answered",
		solved: true,
		incorrect_guess: "",
		score: 10,
	});
});

export default router;
