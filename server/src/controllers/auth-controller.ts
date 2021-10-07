import { Request, Response } from "express";
import { JwtPayload } from "jsonwebtoken";
import tokenService from "../database/token-service";
import userService from "../database/user-service";
import UserDto from "../dtos/user-dto";
import { comparePass, hashPass } from "../helpers/password/password";
import UserInterface from "../interfaces/user/user-interface";
import uploadAvatar from "../services/avatar-upload-service";

class AuthController {
  async register(req: Request, res: Response) {
    const { email, name, password, avatar }: UserInterface = req.body;

    if (!email || !name || !password || !avatar)
      return res.status(400).json({ error: true, message: "Bad request!" });

    const hashedPass = await hashPass(password);

    const imagePath = await uploadAvatar(avatar);

    if (!imagePath)
      return res
        .status(500)
        .json({ error: true, message: "Something went wrong!" });

    const data = {
      name,
      email,
      password: hashedPass,
      avatar: `http://localhost:9000/storage/${imagePath}`,
    };

    let user;

    try {
      user = await userService.createUser(data);
    } catch (err) {
      return res.status(500).json({ error: true, message: "Db error" });
    }

    if (!user)
      return res
        .status(400)
        .json({ error: true, message: "Something went wrong" });

    const { accessToken, refreshToken } = tokenService.genrateTokens({
      _id: user._id,
    });

    await tokenService.storeRefreshToken({
      token: refreshToken,
      userId: user._id,
    });

    res.cookie("accessToken", accessToken, {
      httpOnly: true,
      maxAge: 1000 * 60 * 60 * 24,
    });

    res.cookie("refreshToken", refreshToken, {
      httpOnly: true,
      maxAge: 1000 * 60 * 60 * 24,
    });

    const createdUser = new UserDto(user);
    return res.json({ user: createdUser, auth: true });
  }

  async login(req: Request, res: Response) {
    const { email, password } = req.body;

    if (!email || !password)
      return res.status(400).json({ error: true, message: "Bad request!" });

    let user;

    try {
      user = await userService.findUser({ email });
    } catch (err) {
      return res.status(500).json({ message: "DB error" });
    }

    if (!user)
      return res.status(404).json({ error: true, message: "No user found!" });

    const auth = await comparePass(password, user.password);

    if (!auth)
      return res
        .status(403)
        .json({ message: "Email or password do not match!" });

    const { accessToken, refreshToken } = tokenService.genrateTokens({
      _id: user._id,
    });

    await tokenService.storeRefreshToken({
      token: refreshToken,
      userId: user._id,
    });

    res.cookie("accessToken", accessToken, {
      httpOnly: true,
      maxAge: 1000 * 60 * 60 * 24,
    });

    res.cookie("refreshToken", refreshToken, {
      httpOnly: true,
      maxAge: 1000 * 60 * 60 * 24,
    });

    const createdUser = new UserDto(user);
    return res.json({ user: createdUser, auth: true });
  }

  async checkUser(req: Request, res: Response) {
    const { email } = req.params;

    if (!email) return res.status(400).json({ message: "Bad request!" });

    let user;

    try {
      user = await userService.findUser({ email });
    } catch (err) {
      return res.status(500).json({ message: "Db error" });
    }

    if (!user) return res.json({ user: null, found: false });

    return res.status(400).json({ user: true, found: true });
  }

  async refresh(req: Request, res: Response) {
    const { refreshToken: rToken } = req.cookies;

    if (!rToken) return res.status(404).json({ message: "Bad request!" });

    // Find token in database

    let userId;

    try {
      const token = await tokenService.findRefreshToken({ token: rToken });

      if (!token) return res.status(404).json({ message: "No token found!" });

      userId = token.userId;
    } catch (err) {
      return res.status(500);
    }

    // Verify toke using jwt
    // if verified then procced further if not then send status 401

    try {
      await tokenService.verifyRerfreshToken(rToken);
    } catch (err) {
      return res.status(401).json({ message: "Invalide token!" });
    }

    // verify user with token _id

    let user;

    try {
      user = await userService.findUser({ _id: userId });
    } catch (err) {
      return res.status(500).json({ message: "Db error!" });
    }

    // if user verified then proccedd else send 404

    if (!user) return res.status(404).json({ message: "No user found!" });

    // generate new tokens

    const { accessToken, refreshToken } = tokenService.genrateTokens({
      _id: user._id,
    });

    // update token in the database

    try {
      await tokenService.updateRToken(refreshToken, user._id);
    } catch (err) {
      return res.status(500).json({ message: "Db error!" });
    }

    // set new token in the cookie

    res.cookie("accessToken", accessToken, {
      httpOnly: true,
      maxAge: 1000 * 60 * 60 * 24,
    });

    res.cookie("refreshToken", refreshToken, {
      httpOnly: true,
      maxAge: 1000 * 60 * 60 * 24,
    });

    // send the responce

    const createdUser = new UserDto(user);
    return res.json({ user: createdUser, auth: true });
  }

  async logOut(req: Request, res: Response) {
    // check the use in the middleware

    const { user } = req.body;

    // delete the user in tokens database

    try {
      await tokenService.deleteRToken(user._id);
    } catch (error) {
      return res.status(500).json({ message: "Db error!" });
    }

    // clear the responce cookies

    res.clearCookie("accessToken");
    res.clearCookie("refreshToken");

    // send the responce

    res.json({ user: null, auth: true });
  }
}

export default new AuthController();
