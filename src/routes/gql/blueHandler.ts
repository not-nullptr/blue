import express from "express";

const router = express.Router();

router.get("/B7I5HPN6jm5Mgv9N8fgFPg/TwitterBlueSignUpV2Query", (req, res) => {
	return res.status(200).send({
		data: {
			blue_marketing_page_config: {
				products: [
					{
						product_category: "BlueVerified",
						title: "Blue",
						feature_buckets: {
							buckets: [
								{
									title: "Prioritized rankings in conversations and search",
									learn_more_text: "",
									learn_more_description: "",
									learn_more_title: "",
									features: [],
								},
								{
									title:
										"See approximately twice as many Tweets between ads in your For You and Following timelines.",
									learn_more_text: "",
									learn_more_description: "",
									learn_more_title: "",
									features: [],
								},
								{
									title: "Add bold and italic text in your Tweets",
									learn_more_text: "",
									learn_more_description: "",
									learn_more_title: "",
									features: [],
								},
								{
									title: "Post longer videos and 1080p video uploads",
									learn_more_text: "",
									learn_more_description: "",
									learn_more_title: "",
									features: [],
								},
								{
									title:
										"All the existing Blue features, including Edit Tweet, Bookmark Folders and early access to new features",
									learn_more_text: "Learn more",
									learn_more_description:
										"Twitter Blue subscribers get early access to new features like these through Twitter Blue Labs.",
									learn_more_title: "Get early access",
									features: [
										{
											title: "Longer Tweets",
											description:
												"Create Tweets, replies and Quotes up to 10,000 characters long.",
											icon: "Feather",
										},
										{
											title: "Edit Tweet",
											description:
												"Edit a Tweet up to 5 times within 30 minutes.",
											icon: "WriteStroke",
										},
										{
											title: "NFT Profile Pictures",
											description:
												"Show your personal flair and set your profile picture to an NFT you own.",
											icon: "AccountNft",
										},
									],
								},
							],
						},
					},
				],
				card: {
					title:
						"Blue subscribers with a verified phone number will get a blue checkmark once approved.",
					description: "",
					image_url:
						"https://abs.twimg.com/responsive-web/client-web/verification-card-v2@3x.8ebee01a.png",
					badge: { text: "" },
				},
				feature_buckets: {
					title: "",
					buckets: [
						{
							image_url:
								"https://abs.twimg.com/responsive-web/client-web/purple-present@3x.5f4d564a.png",
							title: "All the existing Blue features",
							description:
								"Edit Tweet, 1080p video uploads, Reader, custom navigation, Bookmark Folders, Top Articles and more.",
							learn_more_text: "",
							learn_more_title: "",
							learn_more_description: "",
							features: [],
						},
						{
							badge: "NEW",
							image_url:
								"https://abs.twimg.com/responsive-web/client-web/upranked-replies-feature@3x.68f97c89.png",
							title: "Prioritized rankings in conversations and search",
							description:
								"Tweets from Twitter Blue subscribers will be prioritized in replies, mentions, and search — helping to fight scams and spam.",
							learn_more_text: "",
							learn_more_title: "",
							learn_more_description: "",
							features: [],
						},
						{
							badge: "NEW",
							image_url:
								"https://abs.twimg.com/responsive-web/client-web/less-ads-feature@3x.98d5a999.png",
							title:
								"See approximately twice as many Tweets between ads in your For You and Following timelines.",
							description:
								"See approximately twice as many Tweets between ads in your For You and Following timelines.",
							learn_more_text: "",
							learn_more_title: "",
							learn_more_description: "",
							features: [],
						},
						{
							badge: "NEW",
							image_url:
								"https://abs.twimg.com/responsive-web/client-web/longer-video-feature-v3@3x.6c6c531a.png",
							title: "Post longer videos and 1080p video uploads",
							description:
								"You’ll finally be able to post longer videos to Twitter.",
							learn_more_text: "",
							learn_more_title: "",
							learn_more_description: "",
							features: [],
						},
						{
							image_url:
								"https://abs.twimg.com/responsive-web/client-web/early-access-feature@3x.9d1ba0a9.png",
							title:
								"All the existing Blue features, including Edit Tweet, Bookmark Folders and early access to new features",
							description:
								"Get early access to select new features with Twitter Blue Labs.",
							learn_more_text: "Learn more",
							learn_more_title: "Get early access",
							learn_more_description:
								"Twitter Blue subscribers get early access to new features like these through Twitter Blue Labs.",
							features: [
								{
									icon: "Feather",
									title: "Longer Tweets",
									description:
										"Create Tweets, replies and Quotes up to 10,000 characters long.",
								},
								{
									icon: "WriteStroke",
									title: "Edit Tweet",
									description: "Edit a Tweet up to 5 times within 30 minutes.",
								},
								{
									icon: "AccountNft",
									title: "NFT Profile Pictures",
									description:
										"Show your personal flair and set your profile picture to an NFT you own.",
								},
							],
						},
					],
				},
				subscribe_button: {
					detail_text: "Limited time offer: {{PRICE}}/{{PERIOD}}",
					disclaimer_text:
						"By subscribing, you agree to our @#!. Subscriptions auto-renew until canceled, as described in the Terms. Cancel anytime. A verified phone number is required to subscribe. If you've subscribed on another platform, manage your subscription through that platform.",
					disclaimer_url: "https://legal.twitter.com/purchaser-terms",
					disclaimer_url_text: "Purchaser Terms of Service",
				},
			},
		},
	});
});

router.get("/BAMss4qXZvxtUJdCn__AnA/useRelayDelegateDataQuery", (req, res) => {
	return res.status(200).send({ data: { viewer: {} } });
});

export default router;
