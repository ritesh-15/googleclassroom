import { ChangeEvent, MouseEvent, useEffect, useState } from "react";
import login from "../../../api/auth/login.api";
import MessageHelper from "../../../helpers/message/MessageHelper";
import UserHelper from "../../../helpers/user/UserHelper";
import AuthValidation from "../../../validations/authvalidation/AuthValidation";

const useLogin = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const { emailValidation } = AuthValidation();
  const { changeMessage } = MessageHelper();
  const { changeUser } = UserHelper();
  const [loading, setLoading] = useState(false);
  const [unMounted, setUnMounted] = useState(false);

  useEffect(() => {
    return () => {
      setUnMounted(true);
    };
  }, []);

  const changeEmail = (e: ChangeEvent<HTMLInputElement>): void => {
    setEmail(e.target.value);
  };

  const changePassword = (e: ChangeEvent<HTMLInputElement>): void => {
    setPassword(e.target.value);
  };

  const signIn = async (e: MouseEvent): Promise<void> => {
    e.preventDefault();

    if (!emailValidation(email)) {
      changeMessage(
        "Invalide email address please enter correct email address!",
        "error"
      );
      return;
    }

    setLoading(true);

    try {
      const { data } = await login({ email, password });
      if (!unMounted) {
        changeUser(data.user);
      }
      setLoading(false);
    } catch (err) {
      setLoading(false);
      changeMessage(
        "Wrong credentials ! please enter correct credentials",
        "error"
      );
    }
  };

  return {
    variables: {
      email,
      loading,
      password,
    },
    functions: {
      changeEmail,
      changePassword,
      signIn,
    },
  };
};

export default useLogin;
