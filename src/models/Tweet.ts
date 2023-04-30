import mongoose from "mongoose";

const tweet = new mongoose.Schema({
	created_at: {
		type: "Date",
	},
	id: {
		type: "Number",
	},
	id_str: {
		type: "String",
	},
	full_text: {
		type: "String",
	},
	truncated: {
		type: "Boolean",
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
		user_mentions: {
			type: "Array",
		},
		urls: {
			type: "Array",
		},
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
	user_id_str: {
		type: "String",
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
	is_quote_status: {
		type: "Boolean",
	},
	retweet_count: {
		type: "Number",
	},
	favorite_count: {
		type: "Number",
	},
	reply_count: {
		type: "Number",
	},
	quote_count: {
		type: "Number",
	},
	conversation_id: {
		type: "Number",
	},
	conversation_id_str: {
		type: "String",
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
	favorited: {
		type: "Boolean",
	},
	retweeted: {
		type: "Boolean",
	},
	lang: {
		type: "String",
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
