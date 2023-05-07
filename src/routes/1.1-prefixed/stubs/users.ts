import express from "express";

const router = express.Router();

router.get("/users/recommendations.json", (req, res) => {
	return res.status(200).send([]);
});

export default router;
