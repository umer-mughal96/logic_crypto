
import React, { Fragment } from 'react'
import {
  BrowserRouter as Router,
  Switch,
  Route,
  withRouter,
} from "react-router-dom";
import Footer from "../components/Footer";
import Header from "../components/Header";
import AutomatedTrading from "../screens/AutomatedTrading";
import Enthuasists from "../screens/Enthuasists";
import ExchangeDashboard from "../screens/ExchangeDashboard";
import Knowledge from "../screens/Knowledge";
import Pricing from "../screens/Pricing";
import RulesDashboard from "../screens/RulesDashboard";
import SettingDashboard from "../screens/SettingDashboard";
import Signin from "../screens/Signin";
import Signup from "../screens/Signup";
import Categories from "../screens/Categories";
import Invest from "../screens/Invest";
import AuthenticatedRoute from '../routes/AuthenticatedRoute';

const Routes = () => {
  return (
    <Fragment>
        <Router>
        <Header />
        <Switch>
          <Route exact path="/" component={AutomatedTrading} />
          <Route path="/signup" component={Signup} />
          <Route path="/signin" component={Signin} />
          <AuthenticatedRoute path="/setting-dsh" component={SettingDashboard} />
          <AuthenticatedRoute path="/rule-dsh" component={RulesDashboard} />
          <AuthenticatedRoute path="/exchange-dsh" component={ExchangeDashboard} />
          <Route path="/pricing" component={Pricing} />
          <Route path="/knowledge" component={Knowledge} />
          <Route path="/enth" component={Enthuasists} />
          <Route path="/categories" component={Categories} />
          <Route path="/invest" component={Invest} />
        </Switch>
        <Footer />
      </Router>
    </Fragment>
  )
}

export default Routes

