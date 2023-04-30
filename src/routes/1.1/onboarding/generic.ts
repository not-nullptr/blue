import express from "express";

const router = express.Router();

router.use("/onboarding/callback.json", (req, res) => {
	return res.status(200).send({ status: "success" });
});

router.use("onboarding/sso_init.json", (req, res) => {
	return res.status(200).send({ status: "success" });
});

export default router;
