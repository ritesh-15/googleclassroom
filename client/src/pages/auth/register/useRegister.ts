import { ChangeEvent, MouseEvent, useState, useEffect } from "react";
import { useSelector } from "react-redux";
import newRegister from "../../../api/auth/register.api";
import { RootState } from "../../../app/store";
import MessageHelper from "../../../helpers/message/MessageHelper";
import RegisterHelper from "../../../helpers/register/RegisterHelper";
import UserHelper from "../../../helpers/user/UserHelper";
import ImageTypeValidation from "../../../validations/imageTypeValidation/ImageTypeValidation";

const useRegister = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [name, setName] = useState("");
  const [avatar, setAvatar] = useState("");
  const { changeMessage } = MessageHelper();
  const { validateImageType } = ImageTypeValidation();
  const { setStoreAvatar } = RegisterHelper();
  const { user } = useSelector((state: RootState) => state.register);
  const [loading, setLoading] = useState(false);
  const { changeUser } = UserHelper();
  const [unMounted, setUnMounted] = useState(false);

  useEffect(() => {
    return () => {
      setUnMounted(true);
    };
  }, []);

  const changeAvatar = (e: ChangeEvent<HTMLInputElement>): void => {
    const files = e.target.files;
    if (!files) return;

    const file = files[0];

    if (!file) return;

    if (!validateImageType(file.type)) {
      changeMessage(
        "Only png, jpeg and jpg formate are allowed having size less thant 8mb!",
        "warning"
      );
      setAvatar("");
      return;
    }

    const reader = new FileReader();

    reader.readAsDataURL(file);

    reader.onloadend = () => {
      const image = <string>reader.result;
      setStoreAvatar(image);
      setAvatar(image);
    };
  };

  const changeEmail = (e: ChangeEvent<HTMLInputElement>): void => {
    setEmail(e.target.value);
  };

  const changePassword = (e: ChangeEvent<HTMLInputElement>): void => {
    setPassword(e.target.value);
  };

  const changeConfPass = (e: ChangeEvent<HTMLInputElement>): void => {
    setConfirmPassword(e.target.value);
  };

  const changeName = (e: ChangeEvent<HTMLInputElement>): void => {
    setName(e.target.value);
  };

  const register = async (e: MouseEvent) => {
    e.preventDefault();

    setLoading(true);

    try {
      const { data } = await newRegister(user);
      if (!unMounted) {
        changeUser(data.user);
      }
      setLoading(false);
    } catch (err) {
      setLoading(false);
      changeMessage("Something went wrong, please try again later!", "error");
    }
  };

  return {
    variables: {
      email,
      password,
      name,
      confirmPassword,
      avatar,
      loading,
    },
    functions: {
      changeEmail,
      changePassword,
      changeName,
      register,
      changeConfPass,
      changeAvatar,
    },
  };
};

export default useRegister;
