import { randInt } from "./randUtil";

const a = {
	conversation_id: "1338626424870039552-1483042300943122432",
	type: "ONE_TO_ONE",
	sort_event_id: "1639434080478699524",
	sort_timestamp: "1679706518655",
	participants: [
		{
			user_id: "3701867534401305",
			last_read_event_id: "1639434080478699524",
		},
		{
			user_id: "484648334416",
			last_read_event_id: "1639434080478699524",
		},
	],
	nsfw: false,
	notifications_disabled: false,
	mention_notifications_disabled: false,
	last_read_event_id: "1639434080478699524",
	read_only: false,
	trusted: true,
	muted: false,
	status: "AT_END",
	min_entry_id: "1639433688151732230",
	max_entry_id: "1639434080478699524",
};

export function generateConversationId() {
	return `${randInt(19)}-${randInt(19)}`;
}
