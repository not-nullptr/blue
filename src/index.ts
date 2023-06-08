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
import cookieParser from "cookie-parser";
import type { ErrorRequestHandler } from "express";
import { log } from "./util/logging";
import { CallbackResponseMessageResult } from "mockttp/dist/rules/requests/request-handler-definitions";

dotenv.config();

const app = express();

mongoose.connect("mongodb://127.0.0.1:27017/blue");

app.use(express.json());
app.use(cookieParser());
app.use(
	cors({
		credentials: true,
		origin: function (origin, callback) {
			if (!origin) return callback(null, true);
			return callback(null, true);
		},
	})
);

async function mountRoute(routePath: string, root: string) {
	const router = ((await import(routePath.replace("src/", "./"))) as IRouteFile)
		.default;
	app.use(root, router);
}

app.use((req, res, next) => {
	if (req.path.includes("error_log.json")) next();
	// log(
	// 	`${req.path} | ${req.cookies.jwt ? `Logged in?` : `Logged out?`}`
	// );
	next();
});

const routes11 = searchDirForTsFiles("src/routes/1.1");
const routes11Prefixed = searchDirForTsFiles("src/routes/1.1-prefixed");
const routes2 = searchDirForTsFiles("src/routes/2");
const routesOther = searchDirForTsFiles("src/routes/other");
const twimg = searchDirForTsFiles("src/routes/twimg");

routes11.forEach(async (routePath) => {
	await mountRoute(routePath, "/1.1");
});

routes11Prefixed.forEach(async (routePath) => {
	await mountRoute(routePath, "/i/api/1.1");
});

routes2.forEach(async (routePath) => {
	await mountRoute(routePath, "/i/api/2");
});

mountRoute("src/routes/gql/graphQlHandler.ts", "/i/api/graphql");

routesOther.forEach(async (routePath) => {
	await mountRoute(routePath, "/");
});

twimg.forEach(async (routePath) => {
	await mountRoute(routePath, "/");
});

const errorHandler: ErrorRequestHandler = (err, req, res, next) => {
	log(err.stack);
	return res.status(500).send({
		msg:
			"An error occured within the server. Open an issue with the information below on the GitHub, including what you did leading up to this error.\n" +
			err.stack,
	});
};

app.use(errorHandler);

const options = {
	key: fs.readFileSync("certs/testCA.key", "utf8"),
	cert: fs.readFileSync("certs/testCA.pem", "utf8"),
};

const httpsServer = https.createServer(options, app);

httpsServer.listen(process.env.PORT, () => {
	log(`Blue is listening on port ${process.env.PORT}.`);
});

(async () => {
	app.use("/", ((await import("./routes/state/state")) as IRouteFile).default);
	const server = mockttp.getLocal({
		https: {
			keyPath: "certs/testCA.key",
			certPath: "certs/testCA.pem",
		},
	});
	server
		.forAnyRequest()
		.forHostname("twitter.com")
		.thenForwardTo("https://localhost", {
			ignoreHostHttpsErrors: true,
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
			const condition =
				req.path.startsWith("/1.1") ||
				req.path.startsWith("/img") ||
				req.path.startsWith("/graphql");
			return condition;
		})
		.thenForwardTo("https://localhost", { ignoreHostHttpsErrors: true });
	server
		.forAnyRequest()
		.forHostname("abs.twimg.com")
		.matching((req) => {
			return req.path.startsWith("/images/themes");
		})
		.thenForwardTo("https://localhost", { ignoreHostHttpsErrors: true });
	server
		.forAnyRequest()
		.forHostname("pbs.twimg.com")
		.matching((req) => {
			return true;
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
	log(`Blue proxy is listening on port ${server.port}.`);
})();
