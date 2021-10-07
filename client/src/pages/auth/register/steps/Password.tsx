import { FC, MouseEvent } from "react";
import Input from "../../../../components/input/Input";
import MessageHelper from "../../../../helpers/message/MessageHelper";
import RegisterHelper from "../../../../helpers/register/RegisterHelper";
import Button from "../../../../styles/button/Button.styled";
import AuthValidation from "../../../../validations/authvalidation/AuthValidation";
import useRegister from "../useRegister";

const Password: FC<{ next(): void }> = ({ next }) => {
  const { variables, functions } = useRegister();
  const { passwordValidation } = AuthValidation();
  const { changeMessage } = MessageHelper();
  const { setStorePassword } = RegisterHelper();

  const validate = (e: MouseEvent) => {
    e.preventDefault();

    if (!passwordValidation(variables.password)) {
      changeMessage(
        "Password must contain uppercase letters,numbers and special characters having length greater thant 6!",
        "warning"
      );
      return;
    }

    if (variables.password !== variables.confirmPassword) {
      changeMessage("Password and confirm password must match!", "warning");
      return;
    }

    setStorePassword(variables.password);

    next();
  };

  return (
    <>
      <Input
        value={variables.password}
        onChange={functions.changePassword}
        title="Password"
        type="password"
      />
      <Input
        value={variables.confirmPassword}
        onChange={functions.changeConfPass}
        title="Confirm password"
        type="password"
      />
      <Button
        disabled={
          !variables.password || !variables.confirmPassword ? true : false
        }
        onClick={validate}
        width="150px"
      >
        Next
      </Button>
    </>
  );
};

export default Password;
