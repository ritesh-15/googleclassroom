import Form from "../../../components/form/Form";
import useRegister from "./useRegister";
import { Link } from "react-router-dom";
import Details from "./steps/Details";
import Password from "./steps/Password";
import SetAvatar from "./steps/SetAvatar";
import { FC, useState, MouseEvent } from "react";

const steps = [Details, Password, SetAvatar];

const Register: FC = () => {
  const [step, setStep] = useState(0);

  const next = () => {
    setStep(step + 1);
  };

  const Component = steps[step];

  return (
    <Form>
      <form>
        <Component next={next} />
        {step !== 2 && (
          <p>
            Already have account ? <Link to="/login">Sign In</Link>
          </p>
        )}
      </form>
    </Form>
  );
};

export default Register;
