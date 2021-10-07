import Input from "../../../components/input/Input";
import useLogin from "./useLogin";
import Button from "../../../styles/button/Button.styled";
import Form from "../../../components/form/Form";
import { Link } from "react-router-dom";

const Login = () => {
  const { variables, functions } = useLogin();
  return (
    <Form>
      <form>
        <Input
          value={variables.email}
          onChange={functions.changeEmail}
          title="Email"
        />
        <Input
          value={variables.password}
          onChange={functions.changePassword}
          title="Password"
          type="password"
        />
        <Button
          disabled={
            !variables.email || !variables.password || variables.loading
          }
          onClick={functions.signIn}
          width="150px"
        >
          {variables.loading ? "Loging in..." : "Sign In"}
        </Button>
        <p>
          Do not have account ? <Link to="/register">Sign up</Link>
        </p>
      </form>
    </Form>
  );
};

export default Login;
