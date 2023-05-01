import express from "express";
import rootPath from "get-root-path";

const router = express.Router();

router.get("/profile_images/*", (req, res) => {
	const [image] = req.url.split("/").slice(-1);
	return res.sendFile(`${rootPath}/img/${image}`);
});

export default router;
