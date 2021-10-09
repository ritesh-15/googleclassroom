const VerifyClassCode = () => {
  const verifyCode = (code: string): boolean => {
    const regx = /^([0-9a-z]){10}$/;

    return regx.test(code);
  };

  return { verifyCode };
};

export default VerifyClassCode;
