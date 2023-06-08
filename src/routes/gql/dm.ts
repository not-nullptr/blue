import express from "express";

export function DMPinnedInboxQuery(
	req: express.Request,
	res: express.Response
) {
	return res.status(200).send({
		data: { labeled_conversation_slice: { items: [], slice_info: {} } },
	});
}
