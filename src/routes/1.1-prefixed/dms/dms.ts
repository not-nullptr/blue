import express from "express";

const router = express.Router();

router.get("/dm/inbox_initial_state.json", async (req, res) => {
	return res.status(200).send({
		inbox_initial_state: {
			last_seen_event_id: "1666210735926435866",
			trusted_last_seen_event_id: "1666210735926435866",
			untrusted_last_seen_event_id: "0",
			entries: [
				{
					message: {
						id: "1662005580842582021",
						time: "1685087983740",
						affects_sort: true,
						request_id: "1685087983522",
						conversation_id: "1160760001939550208-1483042300943122432",
						message_data: {
							id: "1662005580842582021",
							time: "1685087983000",
							recipient_id: "1483042300943122432",
							sender_id: "1160760001939550208",
							text: "hello",
						},
					},
				},
			],
			users: {
				"3701867534401305": {
					id: 3701867534401305,
					id_str: "3701867534401305",
					name: "Twitter",
					screen_name: "Twitter",
					profile_image_url: "",
					profile_image_url_https: "",
					following: true,
					follow_request_sent: false,
					description: null,
					entities: { description: { urls: [] } },
					verified: false,
					is_blue_verified: false,
					protected: false,
					blocking: false,
					can_media_tag: true,
					created_at: "Mon Aug 12 03:48:45 +0000 2019",
					friends_count: 329,
					followers_count: 31,
					ext_has_nft_avatar: false,
				},
			},
			conversations: {
				"1338626424870039552-1483042300943122432": {
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
				},
			},
		},
	});
});

export default router;
