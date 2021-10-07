// create the function
// check the access token
// if access token not found the send status 404
// if found then verify the access token
// if acces token is invalide the send status 401
// Any other error also send status 401
// set the user in the request body

import { NextFunction, Request, Response } from "express";
import tokenService from "../database/token-service";

const userMiddleware = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  const { accessToken } = req.cookies;

  try {
    // check token
    if (!accessToken) throw new Error();

    // verify token
    const token = <string>await tokenService.verifyAToken(accessToken);

    // if token not verified then throw error
    if (!token) throw new Error();

    const user = token;

    // set the user to request body
    req.body.user = user;

    // calling next function
    next();
  } catch (error) {
    return res.status(401).json({ auth: false, message: "Invalide token!" });
  }
};

export default userMiddleware;
