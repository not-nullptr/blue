import mongoose from "mongoose";

const notification = new mongoose.Schema({
	id: String,
	timestampMs: String,
	icon: {
		id: String,
	},
	message: {
		text: String,
		// entities: [
		// 	{
		// 		fromIndex: 0,
		// 		toIndex: 6,
		// 		ref: {
		// 			user: {
		// 				id: "1483042300943122432",
		// 			},
		// 		},
		// 	},
		// ],
		entities: [],
		rtl: Boolean,
	},
	template: {
		aggregateUserActionsV1: {
			targetObjects: [
				{
					tweet: {
						id: String,
					},
				},
			],
			fromUsers: [
				{
					user: {
						id: String,
					},
				},
			],
		},
	},
});

const Notification = mongoose.model("Notification", notification);

export default Notification;
