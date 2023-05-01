import { rootPath } from "get-root-path";
import express from "express";
import sanitize from "sanitize-filename";
import * as fs from "fs";

interface IImgParams {
	fileName: string;
}

const router = express.Router();

router.get("/img/:filename", (req, res) => {
	if (!req.params.filename)
		return res.status(400).send({ msg: "Missing filename" });
	const path = `${rootPath}/img/${sanitize(req.params.filename)}`;
	if (!fs.existsSync(path))
		return res.status(400).send({ msg: "File not found" });
	return res.sendFile(path);
});

export default router;
