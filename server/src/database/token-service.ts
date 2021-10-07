import jwt from "jsonwebtoken";
import Token from "../models/token-modal";

class TokenService {
  genrateTokens(data: any) {
    const accessToken = jwt.sign(data, <string>process.env.ACCESS_SECRET, {
      expiresIn: "15min",
    });

    const refreshToken = jwt.sign(data, <string>process.env.REFRESH_SECRET);

    return { accessToken, refreshToken };
  }

  async storeRefreshToken(data: any) {
    return await Token.create(data);
  }

  async findRefreshToken(query: any) {
    return await Token.findOne(query);
  }

  async verifyRerfreshToken(token: string) {
    // verify the refresh token
    return await jwt.verify(token, <string>process.env.REFRESH_SECRET);
  }

  async updateRToken(token: string, userId: string) {
    // Update the refresh token in the database

    return await Token.updateOne({ userId }, { token });
  }

  async verifyAToken(token: string) {
    // verify the access token
    return await jwt.verify(token, <string>process.env.ACCESS_SECRET);
  }

  async deleteRToken(userId: string) {
    return await Token.deleteMany({ userId });
  }
}

export default new TokenService();
