import { Fragment } from 'react';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Footer from './components/Footer';
import Header from './components/Header';
import AutomatedTrading from './screens/AutomatedTrading';
import Enthuasists from './screens/Enthuasists';
import ExchangeDashboard from './screens/ExchangeDashboard';
import Knowledge from './screens/Knowledge';
import Landing from './screens/Landing';
import Pricing from './screens/Pricing';
import RulesDashboard from './screens/RulesDashboard';
import SettingDashboard from './screens/SettingDashboard';
import Signin from './screens/Signin';
import Signup from './screens/Signup';
import axios from 'axios'





const App = () => {

  axios.defaults.baseURL = "http://localhost:3001/logiccrypto/api/v1";
  return (
    <Fragment>
      <Router>
        <Header/>
        <Switch>
          <Route exact path='/' component={Signin} />
          <Route path='/signup' component={Signup} />
          <Route path='/signin' component={Signin} />
          <Route path='/setting-dsh' component={SettingDashboard} />
          <Route path='/rule-dsh' component={RulesDashboard} />
          <Route path='/exchange-dsh' component={ExchangeDashboard} />
          <Route path='/pricing' component={Pricing} />
          <Route path='/knowledge' component={Knowledge} />
          <Route path='/enth' component={Enthuasists} />
          <Route path='/autotrade' component={AutomatedTrading} />
        </Switch>
        <Footer/>
      </Router>
    </Fragment>
  )
};

export default App;
