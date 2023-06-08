import mongoose from "mongoose";

const message = new mongoose.Schema({
	id: String,
	time: String,
	affects_sort: Boolean,
	request_id: String,
	conversation_id: String,
	message_data: {
		id: String,
		time: String,
		recipient_id: String,
		sender_id: String,
		text: String,
	},
});

const Message = mongoose.model("Message", message);

export default Message;
