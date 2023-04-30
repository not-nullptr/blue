import express, { Request, Response } from "express";
import dotenv from "dotenv";
import { searchDirForTsFiles } from "./util/routeUtil";
import * as fs from "fs";
import { IRouteFile } from "./types/route";
import http from "http";
import https from "https";
import cors from "cors";
import mongoose from "mongoose";
import * as mockttp from "mockttp";

dotenv.config();

const app = express();

mongoose.connect("mongodb://127.0.0.1:27017/blue");

app.use(express.json());
app.use(
	cors({
		credentials: true,
		origin: function (origin, callback) {
			if (!origin) return callback(null, true);
			return callback(null, true);
		},
	})
);

const routes11 = searchDirForTsFiles("src/routes/1.1");
const routes2 = searchDirForTsFiles("src/routes/2");
const routesOther = searchDirForTsFiles("src/routes/other");

routes11.forEach(async (routePath) => {
	const router = ((await import(routePath.replace("src/", "./"))) as IRouteFile)
		.default;
	app.use("/1.1", router);
});

routes2.forEach(async (routePath) => {
	const router = ((await import(routePath.replace("src/", "./"))) as IRouteFile)
		.default;
	app.use("/i/api/2", router);
});

routesOther.forEach(async (routePath) => {
	const router = ((await import(routePath.replace("src/", "./"))) as IRouteFile)
		.default;
	app.use(router);
});

// app.use((req, res, next) => {
// 	return res.status(200).send({ status: "success" });
// });

// setTimeout(() => {
// 	console.log(app._router);
// }, 1000);

const options = {
	key: fs.readFileSync("certs/testCA.key", "utf8"),
	cert: fs.readFileSync("certs/testCA.pem", "utf8"),
};

const httpsServer = https.createServer(options, app);

httpsServer.listen(process.env.PORT, () => {
	console.log(`Blue is listening on ${process.env.PORT}`);
});

(async () => {
	const server = mockttp.getLocal({
		https: {
			keyPath: "certs/testCA.key",
			certPath: "certs/testCA.pem",
		},
	});
	server
		.forAnyRequest()
		.forHostname("twitter.com")
		.matching((req) => {
			const condition = req.path.startsWith("/i/api");
			return condition;
		})
		.thenForwardTo("https://localhost", { ignoreHostHttpsErrors: true });
	server
		.forAnyRequest()
		.forHostname("api.twitter.com")
		.matching((req) => {
			const condition = req.path.startsWith("/1.1");
			return condition;
		})
		.thenForwardTo("https://localhost", { ignoreHostHttpsErrors: true });
	server
		.forAnyRequest()
		.forHostname("client-api.arkoselabs.com")
		.matching((req) => {
			const condition =
				(req.path.startsWith("/fc") || req.path.startsWith("/rtig")) &&
				!req.path.includes("api") &&
				!req.path.includes("assets") &&
				// !req.path.includes("gt2") &&
				!req.path.includes("cdn");
			return condition;
		})
		.thenForwardTo("https://localhost", { ignoreHostHttpsErrors: true });
	server.forUnmatchedRequest().thenPassThrough();
	await server.start();
	console.log(`Blue proxy is running on port ${server.port}`);
})();
