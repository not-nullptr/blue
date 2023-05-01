import express from "express";

const router = express.Router();

router.get("/CdG2Vuc1v6F5JyEngGpxVw/UserTweets", (req, res) => {
	return res.status(200).send({
		data: {
			user: {
				result: {
					__typename: "User",
					timeline_v2: {
						timeline: {
							instructions: [
								{
									type: "TimelineClearCache",
								},
							],
							responseObjects: {
								feedbackActions: [],
								immediateReactions: [],
							},
						},
					},
				},
			},
		},
	});
});

export default router;
