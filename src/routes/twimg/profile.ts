import express from "express";
import rootPath from "get-root-path";
import { error } from "../../util/logging";

const router = express.Router();

router.get("/profile_images/*", (req, res) => {
	const [image] = req.url.split("/").slice(-1);
	return res.sendFile(`${rootPath}/img/${image}`, (e) => {
		error(e || "An unknown error relating to Twimg stub occurred");
	});
});

router.get("/images/*", (req, res) => {
	const [image] = req.url.split("/").slice(-1);
	return res.sendFile(`${rootPath}/img/${image}`, (e) => {
		error(e || "An unknown error relating to Twimg stub occurred");
	});
});

export default router;
