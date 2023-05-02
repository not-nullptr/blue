import express from "express";

const router = express.Router();

router.use("/account/logout.json", async (req, res) => {
	res.cookie("twt_id", `u=0`, {
		maxAge: 0,
		path: "/",
		domain: ".twitter.com",
		secure: true,
		httpOnly: true,
		sameSite: "none",
	});
	res.cookie("jwt", "my name is walter hartwell white", {
		maxAge: 0,
		path: "/",
		domain: ".twitter.com",
		secure: true,
		httpOnly: true,
		sameSite: "none",
	});
	res.cookie("kdt", "Xpmxhsj8sdhEL8p8qxEX18feiKNkzBy8hKhQv2OI", {
		maxAge: 0,
		path: "/",
		domain: ".twitter.com",
		secure: true,
		httpOnly: true,
		sameSite: "none",
	});
	res.cookie("att", "", {
		maxAge: 0,
		path: "/",
		domain: ".twitter.com",
		secure: true,
		httpOnly: true,
		sameSite: "none",
	});
	return res.status(200).send({ status: "ok" });
});

export default router;
