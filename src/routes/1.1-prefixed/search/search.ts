import express from "express";
import User from "../../../models/User";

interface ITypeAheadParams {
	q: string;
}

const router = express.Router();

router.get("/search/typeahead.json", async (req, res) => {
	const params = req.query as unknown as ITypeAheadParams;
	const query = new RegExp(".*" + params.q + ".*");
	const users = await User.find({ screen_name: query })
		.limit(10)
		.select("-password")
		.select("-email");
	return res.status(200).send({
		num_results: users.length,
		users,
		topics: [],
		events: [],
		lists: [],
		ordered_sections: [],
		oneclick: [],
		hashtags: [],
		completed_in: 0.0,
		query: params.q,
	});
});

export default router;
