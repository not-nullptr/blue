import mongoose from "mongoose";
import Message from "./Message";

const conversation = new mongoose.Schema({
	id: String,
	message_ids: [String],
	conversation_id: String,
	type: String,
	sort_event_id: String,
	sort_timestamp: String,
	participants: [
		{
			user_id: String,
			last_read_event_id: String,
		},
	],
	nsfw: Boolean,
	notifications_disabled: Boolean,
	mention_notifications_disabled: Boolean,
	last_read_event_id: String,
	read_only: Boolean,
	trusted: Boolean,
	muted: Boolean,
	status: String,
	min_entry_id: String,
	max_entry_id: String,
});

const Conversation = mongoose.model("Conversation", conversation);

export default Conversation;
