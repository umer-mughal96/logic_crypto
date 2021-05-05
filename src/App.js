import { Fragment } from "react";
import axios from "axios";
import Routes from "./utils/routes";


const App = () => {
  axios.defaults.baseURL = "http://localhost:3001/logiccrypto/api/v1";
  return (
    <Fragment>
    <Routes/>
    </Fragment>
  );
};

export default App;
