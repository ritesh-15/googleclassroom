import bcrypt from "bcrypt";

const hashPass = async (password: string): Promise<string> => {
  const hashedPass = await bcrypt.hash(password, 10);

  return hashedPass;
};

const comparePass = async (
  password: string,
  hashedPass: string
): Promise<boolean> => {
  try {
    const auth = await bcrypt.compare(password, hashedPass);
    if (auth) return true;
    return false;
  } catch (err) {
    return false;
  }
};

export { hashPass, comparePass };
