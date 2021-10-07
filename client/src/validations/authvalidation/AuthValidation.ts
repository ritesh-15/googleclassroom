const AuthValidation = () => {
  const emailValidation = (email: string): boolean => {
    const regx = /^([_\-\.0-9a-zA-Z]+)@([_\-\.0-9a-zA-Z]+)\.([a-zA-Z]){2,7}$/;

    return regx.test(email);
  };

  const stringValidation = (val: string): boolean => {
    const regx = /^[a-zA-Z ]{2,}$/;
    return regx.test(val);
  };

  const passwordValidation = (password: string): boolean => {
    const regx = /^([a-zA-Z0-9\/@.$^.*%(#)]){6,}$/;
    return regx.test(password);
  };

  return { emailValidation, stringValidation, passwordValidation };
};

export default AuthValidation;
