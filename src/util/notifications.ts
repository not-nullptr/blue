import Notification from "../models/Notification";
import User from "../models/User";
import { randStr } from "./randUtil";

/**
 * Adds a notification to a given user
 * @param recipient The user to add the notification to
 * @param sender The user who added the notification
 * @param message The message. `%1` is automatically replaced with the username.
 * @param type The type of notification. Internal has the Twitter icon, and disallows `sender`.
 */
export async function addNotification(
	text: string,
	type: "internal",
	recipient: string
): Promise<void>;
export async function addNotification(
	text: string,
	type: "like" | "reply" | "retweet",
	recipient: string,
	sender: string
): Promise<void>;
export async function addNotification(
	text: string,
	type: "like" | "reply" | "retweet" | "internal",
	recipient: string,
	sender?: string
) {
	const id = randStr(64);
	const icon = (() => {
		if (type === "like") return "heart_icon";
		if (type === "reply") return "reply_icon";
		if (type === "retweet") return "reweet_icon";
	})();
	if (sender) {
		// user-based
		throw new Error(`unimplemented`);
	} else {
		// sent from admin
		const recipientUser = await User.findOne({ id_string: recipient });
		if (!recipientUser) throw new Error(`Recipient not found`);
		recipientUser.notification_ids.push(id);
		const noti = new Notification({
			id,
			message: {
				text,
				rtl: false,
			},
			icon: {
				id: "twitter_icon",
			},
			timestampMs: Date.now(),
		});
		await noti.save();
		await recipientUser.save();
	}
}
