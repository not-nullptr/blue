import express from "express";
import User from "../../../models/User";

const router = express.Router();

interface IEmailParams {
	email: string;
}

interface IPhoneParams {
	raw_phone_number: string;
}

router.get("/i/api/i/users/email_available.json", async (req, res) => {
	const params = req.query as unknown as IEmailParams;
	const user = await User.findOne({
		email: params.email,
	});
	if (user)
		return res.status(200).send({
			msg: "Email has already been taken.",
			taken: true,
			valid: false,
		});
	else
		return res.status(200).send({
			msg: "Available!",
			taken: false,
			valid: true,
		});
});

router.get("/i/api/1.1/users/phone_number_available.json", (req, res) => {
	const params = req.query as unknown as IPhoneParams;
	return res.status(200).send({
		msg: "Sorry, Blue OSS doesn't currently support phone numbers.",
		taken: false,
		valid: false,
	});
});

export default router;
