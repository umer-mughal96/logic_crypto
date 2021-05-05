import { Fragment } from "react";
import axios from "axios";
import Routes from "./utils/routes";
import { BrowserRouter as Router } from "react-router-dom";

const App = () => {
  axios.defaults.baseURL = "http://localhost:3001/logiccrypto/api/v1";
  return (
    <Fragment>
      <Router>
        <Routes />
      </Router>
    </Fragment>
  );
};

export default App;
