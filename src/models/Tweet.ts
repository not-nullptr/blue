import mongoose from "mongoose";

const tweet = new mongoose.Schema({
	bookmark_count: {
		type: "Number",
	},
	bookmarked: {
		type: "Boolean",
	},
	conversation_id_str: {
		type: "String",
	},
	created_at: {
		type: "String",
	},
	display_text_range: {
		type: ["Number"],
	},
	entities: {
		hashtags: {
			type: "Array",
		},
		symbols: {
			type: "Array",
		},
		urls: {
			type: "Array",
		},
		user_mentions: {
			type: "Array",
		},
	},
	favorite_count: {
		type: "Number",
	},
	favorited: {
		type: "Boolean",
	},
	full_text: {
		type: "String",
	},
	id_str: {
		type: "String",
	},
	is_quote_status: {
		type: "Boolean",
	},
	lang: {
		type: "String",
	},
	quote_count: {
		type: "Number",
	},
	reply_count: {
		type: "Number",
	},
	retweet_count: {
		type: "Number",
	},
	retweeted: {
		type: "Boolean",
	},
	user_id_str: {
		type: "String",
	},
	id: {
		type: "Number",
	},
	truncated: {
		type: "Boolean",
	},
	source: {
		type: "String",
	},
	in_reply_to_status_id: {
		type: "Mixed",
	},
	in_reply_to_status_id_str: {
		type: "Mixed",
	},
	in_reply_to_user_id: {
		type: "Mixed",
	},
	in_reply_to_user_id_str: {
		type: "Mixed",
	},
	in_reply_to_screen_name: {
		type: "Mixed",
	},
	user_id: {
		type: "Number",
	},
	geo: {
		type: "Mixed",
	},
	coordinates: {
		type: "Mixed",
	},
	place: {
		type: "Mixed",
	},
	contributors: {
		type: "Mixed",
	},
	conversation_id: {
		type: "Number",
	},
	conversation_control: {
		policy: {
			type: "String",
		},
		conversation_owner: {
			screen_name: {
				type: "String",
			},
		},
	},
	supplemental_language: {
		type: "Mixed",
	},
	self_thread: {
		id: {
			type: "Number",
		},
		id_str: {
			type: "String",
		},
	},
	ext_views: {
		state: {
			type: "String",
		},
		count: {
			type: "String",
		},
	},
	ext: {
		editControl: {
			r: {
				ok: {
					initial: {
						editTweetIds: {
							type: ["String"],
						},
						editableUntilMsecs: {
							type: "String",
						},
						editsRemaining: {
							type: "Date",
						},
						isEditEligible: {
							type: "Boolean",
						},
					},
				},
			},
			ttl: {
				type: "Number",
			},
		},
		unmentionInfo: {
			r: {
				ok: {},
			},
			ttl: {
				type: "Number",
			},
		},
	},
});

const Tweet = mongoose.model("Tweet", tweet);

export default Tweet;
