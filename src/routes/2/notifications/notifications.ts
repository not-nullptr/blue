import express from "express";
import User from "../../../models/User";

const router = express.Router();

router.get("/notifications/all.json", async (req, res) => {
	return res.status(200).send({
		globalObjects: {
			notifications: {
				FJTTHX6XwAAAAAABiJONct1wJenoJ7xypmc: {
					id: "FJTTHX6XwAAAAAABiJONct1wJenoJ7xypmc",
					timestampMs: "0",
					icon: { id: "bird_icon" },
					message: {
						text: "Blue OSS doesn't support notifications right now. Click here to check the GitHub page.",
						entities: [],
						rtl: false,
					},
					template: {
						aggregateUserActionsV1: { targetObjects: [], fromUsers: [] },
					},
				},
			},
		},
		timeline: {
			id: "FJTTHX6XwAAAAAABiJONct1wJek",
			instructions: [
				{
					addEntries: {
						entries: [
							{
								entryId: "notification-FJTTHX6XwAAAAAABiJONct1wJenoJ7xypmc",
								sortIndex: "1682892524091",
								content: {
									item: {
										content: {
											notification: {
												id: "FJTTHX6XwAAAAAABiJONct1wJenoJ7xypmc",
												url: {
													urlType: "ExternalUrl",
													url: "https://github.com/not-nullptr/blue",
												},
											},
										},
										clientEventInfo: {
											component: "urt",
											element: "generic_login_notification",
											details: {
												notificationDetails: {
													impressionId: "f1d0344dafd82575fee2ca3636e98fb2",
													metadata:
														"CwABAAAAMzRiMmEwYjY4MzRiMDRmM2YuNGNhZjdmYmJlNjU2MjE5NTw6NGIyYTBiNjgzNGIwNGYzZgsAAgAAACNGSlRUSFg2WHdBQUFBQUFCaUpPTmN0MXdKZW1nbklXRXBtYwsAAwAAABBsb2dpbl9udGFiX25vdGlmCgAEAAAAAAAAAAELAAYAAAAaZ2VuZXJpY19sb2dpbl9ub3RpZmljYXRpb24PAAcLAAAAAQAAAB0xNDgzMDQyMzAwOTQzMTIyNDMyLTYyNjg4Njg5NAA",
												},
											},
										},
									},
								},
							},
						],
					},
				},
				{ clearEntriesUnreadState: {} },
				{
					markEntriesUnreadGreaterThanSortIndex: { sortIndex: "1683059608017" },
				},
			],
		},
	});
});

export default router;
