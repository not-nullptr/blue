import express from "express";

const router = express.Router();

router.use("/jot/client_event.json", (req, res) => {
	return res.status(200).send({ success: true });
});

export default router;
