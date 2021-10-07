const generateClassCode = (length: number): string => {
  const string = "0123456789abcdefghijklmnopqrstuvwxyz";

  let result: string = "";

  for (let i = 0; i < length; i++) {
    result += string.charAt(Math.floor(Math.random() * string.length + 1));
  }

  return result;
};

export default generateClassCode;
