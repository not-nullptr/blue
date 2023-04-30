import express from "express";

const router = express.Router();

router.use("/jot/ces/p2", (req, res) => {
	return res.status(200).send({ success: true });
});

export default router;
