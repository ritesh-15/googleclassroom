import { FC } from "react";
import "./App.css";
import Header from "./components/header/Header";
import Home from "./pages/home/Home";
import {
  BrowserRouter as Router,
  Route,
  Redirect,
  Switch,
} from "react-router-dom";
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
import { useEffect } from "react";
import { io } from "socket.io-client";
import SocketHelper from "./helpers/socket/SocketHelper";

const App: FC = () => {
  const loading = useRefresh();
  const { changeSocket } = SocketHelper();

  useEffect(() => {
    const socket = io("http://localhost:9000");
    changeSocket(socket);
  }, []);

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
