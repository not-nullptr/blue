import express from "express";

const router = express.Router();

router.post("/branch/init.json", (req, res) => {
	return res.status(200).send({
		is_loading_enabled: false,
		is_tracking_enabled: false,
	});
});

export default router;
