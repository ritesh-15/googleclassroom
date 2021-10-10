const VerifyClassCode = () => {
  const verifyCode = (code: string): boolean => {
    const regx = /^([a-z0-9]){10}$/;

    return regx.test(code);
  };

  return { verifyCode };
};

export default VerifyClassCode;
