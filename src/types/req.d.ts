import { Request } from "express";
import { IUser } from "./guide";

interface IAuthRequest extends Request {
	user: IUser;
}
