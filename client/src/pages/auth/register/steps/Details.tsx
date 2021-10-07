import { FC, MouseEvent, useState } from "react";
import { checkUser } from "../../../../api/auth/register.api";
import Input from "../../../../components/input/Input";
import MessageHelper from "../../../../helpers/message/MessageHelper";
import RegisterHelper from "../../../../helpers/register/RegisterHelper";
import Button from "../../../../styles/button/Button.styled";
import AuthValidation from "../../../../validations/authvalidation/AuthValidation";
import useRegister from "../useRegister";

const Details: FC<{ next(): void }> = ({ next }) => {
  const { variables, functions } = useRegister();
  const { emailValidation, stringValidation } = AuthValidation();
  const { changeMessage } = MessageHelper();
  const { setStoreName, setStoreEmail } = RegisterHelper();
  const [loading, setLoading] = useState(false);

  const validate = async (e: MouseEvent) => {
    e.preventDefault();

    if (!stringValidation(variables.name)) {
      changeMessage(
        "Name cannot contains numbers only letters are allowd !",
        "error"
      );
      return;
    }

    if (!emailValidation(variables.email)) {
      changeMessage(
        "Invalid email address please enter correct email address !",
        "error"
      );
      return;
    }

    setLoading(true);

    try {
      const { data } = await checkUser(variables.email);
      console.log(data);
      setLoading(false);
    } catch (err) {
      setLoading(false);
      changeMessage(
        "This email address is already taken by somebody please enter another email address !",
        "error"
      );
      return;
    }

    setStoreEmail(variables.email);
    setStoreName(variables.name);

    next();
  };

  return (
    <>
      <Input
        value={variables.name}
        onChange={functions.changeName}
        title="Name"
      />
      <Input
        value={variables.email}
        onChange={functions.changeEmail}
        title="Email"
      />
      <Button
        disabled={!variables.name || !variables.email || loading ? true : false}
        width="150px"
        onClick={(e) => validate(e)}
      >
        {loading ? "Verifying..." : "Next"}
      </Button>
    </>
  );
};

export default Details;
