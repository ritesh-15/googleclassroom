import { useDispatch } from "react-redux";
import {
  Register,
  setAvatar,
  setEmail,
  setName,
  setPassword,
} from "../../reducers/register/registerSlice";

const RegisterHelper = () => {
  const dispatch = useDispatch();

  const setStoreName = (name: string): void => {
    dispatch(
      setName({
        name,
      })
    );
  };
  const setStoreEmail = (email: string): void => {
    dispatch(
      setEmail({
        email,
      })
    );
  };
  const setStorePassword = (password: string): void => {
    dispatch(
      setPassword({
        password,
      })
    );
  };
  const setStoreAvatar = (avatar: string): void => {
    dispatch(
      setAvatar({
        avatar,
      })
    );
  };

  return { setStoreName, setStoreAvatar, setStoreEmail, setStorePassword };
};

export default RegisterHelper;
