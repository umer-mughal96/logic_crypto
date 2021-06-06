import { Fragment, useEffect } from "react";
import axios from "axios";
import Routes from "./utils/routes";
import { BrowserRouter as Router } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { setAuthToken } from "./utils/setAuthToken";
import { io } from "socket.io-client";

const App = () => {
  const { user } = useSelector((x) => x.Auth);
  const dispatch = useDispatch();

  useEffect(() => {
    if (user) {
      const socket = io(process.env.REACT_APP_BACKEND_SERVER);
      socket.on("userConnected", (dataFromServer) => {
        socket.emit("userInfo", { data: user });
      });
    }
  }, [user]);

  axios.defaults.baseURL = process.env.REACT_APP_BACKEND_SERVER;
  const { token } = useSelector((state) => state.Auth);
  setAuthToken(token);
  return (
    <Fragment>
      <Router>
        <Routes />
      </Router>
    </Fragment>
  );
};

export default App;
