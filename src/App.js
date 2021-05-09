import { Fragment } from "react";
import axios from "axios";
import Routes from "./utils/routes";
import { BrowserRouter as Router } from "react-router-dom";
import { useSelector } from "react-redux";
import { setAuthToken } from "./utils/setAuthToken";

const App = () => {
  // axios.defaults.baseURL = "http://localhost:3001/logiccrypto/api/v1";
  axios.defaults.baseURL = "https://logiccryptobackened.herokuapp.com/logiccrypto/api/v1";
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
