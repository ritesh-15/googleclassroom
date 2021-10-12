import { FC } from "react";
import "./App.css";
import Header from "./components/header/Header";
import Home from "./pages/home/Home";
import { BrowserRouter as Router, Switch } from "react-router-dom";
import ViewClass from "./pages/class/ViewClass";
import Protected from "./routes/Protected";
import LoginRoute from "./routes/LoginRoute";
import Login from "./pages/auth/login/Login";
import Register from "./pages/auth/register/Register";
import Toast from "./components/toast/Toast";
import useRefresh from "./hooks/useRefresh";
import Loading from "./components/loading/Loading";
import Classwork from "./pages/classwork/Classwork";
import Peoples from "./pages/peoples/Peoples";
import ViewMaterial from "./pages/viewmaterial/ViewMaterial";

const App: FC = () => {
  const loading = useRefresh();

  return loading ? (
    <Loading />
  ) : (
    <div className="app">
      <Router>
        <Toast />
        <Switch>
          <Protected path="/" exact>
            <Header />
            <Home />
          </Protected>

          <Protected path="/v/c/:id" exact>
            <Header />
            <ViewClass />
          </Protected>

          <Protected path="/v/c/w/:id">
            <Header />
            <Classwork />
          </Protected>

          <Protected path="/v/c/p/:id">
            <Header />
            <Peoples />
          </Protected>

          <Protected path="/m/:id">
            <Header />
            <ViewMaterial />
          </Protected>

          <LoginRoute path="/login">
            <Login />
          </LoginRoute>

          <LoginRoute path="/register">
            <Register />
          </LoginRoute>
        </Switch>
      </Router>
    </div>
  );
};

export default App;
