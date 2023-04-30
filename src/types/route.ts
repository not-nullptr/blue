import { Request, Response, Router } from "express";

export interface IRouteFile {
	default: Router;
}
