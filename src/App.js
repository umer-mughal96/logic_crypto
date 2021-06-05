import { Fragment, useEffect } from "react";
import axios from "axios";
import Routes from "./utils/routes";
import { BrowserRouter as Router } from "react-router-dom";
import { useSelector , useDispatch} from "react-redux";
import { setAuthToken } from "./utils/setAuthToken";
import { io } from "socket.io-client";

const App = () => {
  // axios.defaults.baseURL = "http://localhost:3001/logiccrypto/api/v1";

  const { user } = useSelector((x) => x.Auth);
  const dispatch = useDispatch()

  useEffect(() => {
    if (user) {
      const socket = io("http://localhost:3001");
      socket.on("userConnected", (dataFromServer) => {
        socket.emit("userInfo", { data: user });
        socket.on('activeUsers' , connectedUsers => {
        console.log("🚀 ~ file: App.js ~ line 21 ~ socket.on ~ connectedUsers", connectedUsers)
        // dispatch()
          
        })
      });
    }
  }, [user]);



  axios.defaults.baseURL =
    "https://logiccryptobackened.herokuapp.com/logiccrypto/api/v1";
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
