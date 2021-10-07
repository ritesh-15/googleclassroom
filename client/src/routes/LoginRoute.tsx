import { FC } from "react";
import { Route, Redirect } from "react-router-dom";
import UserHelper from "../helpers/user/UserHelper";

interface props {
  children: any;
  path: string;
  exact?: boolean;
}

const LoginRoute: FC<props> = ({ path, exact, children }) => {
  const { user } = UserHelper();
  return (
    <Route
      path={path}
      exact={exact}
      render={() => (user ? <Redirect to="/" /> : children)}
    />
  );
};

export default LoginRoute;
