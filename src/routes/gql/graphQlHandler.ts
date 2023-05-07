import express, { Router } from "express";
import { log, warn } from "../../util/logging";
import { searchDirForTsFiles } from "../../util/routeUtil";

const router = express.Router();

const files = searchDirForTsFiles("src/routes/gql");
const funcs = [] as ((req: express.Request, res: express.Response) => any)[];
(async () => {
	for (const pathUnmodified of files) {
		const path = pathUnmodified.replace("src/routes/gql", ".");
		if (pathUnmodified === "src/routes/gql/graphQlHandler.ts") continue;
		funcs.push(...(Object.values(await import(path)) as any));
	}
	log(
		`The following GraphQL routes successfully initialized: ${funcs
			.map((fn) => fn.name)
			.join(", ")}`
	);
})();

router.use("*", async (req, res) => {
	const query = req.originalUrl.split("/").at(-1)!.split("?")[0];
	log(`GraphQL query sent to ${query}!`);
	for (const pathUnmodified of files) {
		if (pathUnmodified === "src/routes/gql/graphQlHandler.ts") continue;
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
