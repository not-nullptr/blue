import express, { Router } from "express";
import { log, warn } from "../../util/logging";
import { searchDirForTsFiles } from "../../util/routeUtil";

const router = express.Router();

router.use("*", async (req, res) => {
	const query = req.originalUrl.split("/").at(-1)!.split("?")[0];
	log(`GraphQL query sent to ${query}!`);
	const files = searchDirForTsFiles("src/routes/gql");
	for (const pathUnmodified of files) {
		const path = pathUnmodified.replace("src/routes/gql", ".");
		if (pathUnmodified === "src/routes/gql/graphQlHandler.ts") continue;
		const functions = await import(path);
		const funcs = Object.values(functions) as ((
			req: express.Request,
			res: express.Response
		) => any)[];
		for (const fn of funcs) {
			if (fn.name === query) {
				await fn(req, res);
				return;
			}
		}
	}
	warn(`GraphQL query sent to ${query} failed!`);
});

export default router;
