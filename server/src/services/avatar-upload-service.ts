import Jimp from "jimp";
import crypto from "crypto";
import path from "path";

const uploadAvatar = async (
  avatar: string,
  size: number
): Promise<string | null> => {
  const buffer = Buffer.from(
    avatar.replace(/^data.image\/(png|jpeg|jpg);base64,/, ""),
    "base64"
  );

  const imgPath = `${crypto.randomBytes(32).toString("hex")}.png`;

  try {
    const jimResp = await Jimp.read(buffer);
    jimResp.resize(size, Jimp.AUTO).write(path.resolve(`./storage/${imgPath}`));
    return imgPath;
  } catch (err) {
    return null;
  }
};

export default uploadAvatar;
