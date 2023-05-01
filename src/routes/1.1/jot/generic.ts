import express from "express";

const router = express.Router();

router.use("/jot/*", (req, res) => {
	return res.status(200).send({ success: true });
});

// router.use("/jot/ces/p2", (req, res) => {
// 	return res.status(200).send({ success: true });
// });

// router.post("/jot/error_log.json", (req, res) => {
// 	return res.status(200)
// })

export default router;
