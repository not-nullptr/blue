import Notification from "../models/Notification";
import User from "../models/User";
import { randStr } from "./randUtil";

/**
 * Adds a notification to a given user
 * @param {string} text The message. `%1` is automatically replaced with the username of the recipient.
 * @param {string} recipient The user ID to add the notification to
 * @param {"like" | "reply" | "retweet" | "internal"=} type The type of notification. Internal has the Twitter icon, and disallows `sender`.
 */
export async function addNotification(
	text: string,
	type: "internal",
	recipient: string
): Promise<void>;
/**
 * Adds a notification to a given user
 * @param {string} text The message. `%1` is automatically replaced with the username of the sender.
 * @param {string} recipient The user ID to add the notification to
 * @param {"like" | "reply" | "retweet" | "internal"=} type The type of notification. Internal has the Twitter icon, and disallows `sender`.
 * @param {string} sender The user who added the notification
 */
export async function addNotification(
	text: string,
	type: "like" | "reply" | "retweet",
	recipient: string,
	sender: string,
	tweet: string
): Promise<void>;
/**
 * Adds a notification to a given user
 * @param {string=} text The message. `%1` is automatically replaced with the username.
 * @param {string=} recipient The user ID to add the notification to
 * @param {"like" | "reply" | "retweet" | "internal"=} type The type of notification. Internal has the Twitter icon, and disallows `sender`.
 * @param {string=} sender The user who added the notification
 */
export async function addNotification(
	text: string,
	type: "like" | "reply" | "retweet" | "internal",
	recipient: string,
	sender?: string,
	tweet?: string
) {
	const id = randStr(64);
	if (sender) {
		// user-based
		const icon = (() => {
			if (type === "like") return "heart_icon";
			if (type === "reply") return "reply_icon";
			if (type === "retweet") return "reweet_icon";
			else return "bird_icon";
		})();
		const recipientUser = await User.findOne({ id_string: recipient });
		if (!recipientUser) throw new Error(`Recipient not found`);
		const senderUser = await User.findOne({ id_string: sender });
		if (!senderUser) throw new Error(`Sender not found`);
		const noti = new Notification({
			id,
			message: {
				text: text.replaceAll("%1", senderUser.name!),
				rtl: false,
				entities: [
					{
						fromIndex: 0,
						toIndex: senderUser.name!.length,
						ref: {
							user: {
								id: sender,
							},
						},
					},
				],
			},
			icon: {
				id: icon,
			},
			timestampMs: Date.now(),
			template: {
				aggregateUserActionsV1: {
					targetObjects: [
						{
							tweet: {
								id: tweet,
							},
						},
					],
					fromUsers: [
						{
							user: {
								id: sender,
							},
						},
					],
				},
			},
		});
		recipientUser.notification_ids.push(id);
		await noti.save();
		await recipientUser.save();
		return;
	} else {
		// sent from admin
		const recipientUser = await User.findOne({ id_string: recipient });
		if (!recipientUser) throw new Error(`Recipient not found`);
		recipientUser.notification_ids.push(id);

		const noti = new Notification({
			id,
			message: {
				text: text.replaceAll("%1", recipientUser.name!),
				rtl: false,
				entities: [
					{
						fromIndex: 0,
						toIndex: recipientUser.name!.length,
						ref: {
							user: {
								id: recipient,
							},
						},
					},
				],
			},
			icon: {
				id: "bird_icon",
			},
			timestampMs: Date.now(),
		});
		await noti.save();
		await recipientUser.save();
		return;
	}
}
