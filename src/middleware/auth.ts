import { Request, Response, NextFunction } from "express";
import { verify } from "jsonwebtoken";
import User from "../models/User";
import { IJwtDecoded } from "../types/graphql";

export async function requireAuth(req: Request, res: Response): Promise<any> {
	if (!req.cookies["jwt"])
		return res
			.status(401)
			.send({ msg: "No auth token (are you missing your jwt cookie?)" });
	try {
		const jwtParams = verify(
			req.cookies["jwt"] as string,
			process.env.JWT_SECRET!
		) as IJwtDecoded;
		const user = await User.findOne({ id: jwtParams.id });
		if (!user)
			return res
				.status(401)
				.send({ msg: "Auth token invalid (does your account exist?)" });
	} catch (e) {
		return res.status(401).send({ msg: "Failed to verify your JWT." });
	}
}
