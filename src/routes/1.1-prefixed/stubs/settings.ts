import express from "express";

const router = express.Router();

router.get("/users/settings.json", (req, res) => {
	return res.status(200).send([]);
});

router.get("/account/settings.json", (req, res) => {
	return res.status(200).send([]);
});

router.get("/help/settings.json", (req, res) => {
	return res.status(200).send([]);
});

export default router;
