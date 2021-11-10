import React, { Fragment } from "react";
import { Switch, Route, withRouter } from "react-router-dom";
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
import AuthenticatedRoute from "../routes/AuthenticatedRoute";
import ForgotPassword from "../screens/ForgotPassword";
import ResetPassword from "../screens/ResetPassword";
import NewRule from "../screens/NewRule";
import { Elements } from "@stripe/react-stripe-js";
import { loadStripe } from "@stripe/stripe-js";
import Payment from "../screens/Payment";

import Blog from "../screens/Blog";
import BlogDetail from "../screens/BlogDetail";
import TermConditions from "../screens/TermConditions";
import Faq from "../screens/Faq";
import PrivacyPolicy from "../screens/PrivacyPolicy";

const stripePromise = loadStripe("pk_test_TYooMQauvdEDq54NiTphI7jx");

const Routes = withRouter(({ location }) => {
  console.log(location)
  return (
    <Elements stripe={stripePromise}>
      <Fragment>
        {location.pathname == "/setting-dsh" ||
        location.pathname == "/rule-dsh" ||
        location.pathname == "/rule" ||
        location.pathname == "/exchange-dsh" ? null : (
          <Header />
        )}
        <Switch>
          <Route exact path="/" component={AutomatedTrading} />
          <Route path="/signup" component={Signup} />
          <Route path="/signin" component={Signin} />
          <AuthenticatedRoute
            path="/setting-dsh"
            component={SettingDashboard}
          />
          <AuthenticatedRoute path="/rule-dsh" component={RulesDashboard} />
          <AuthenticatedRoute path="/rule" component={NewRule} />
          <AuthenticatedRoute
            path="/exchange-dsh"
            component={ExchangeDashboard}
          />
          <Route path="/pricing" component={Pricing} />
          <Route path="/knowledge" component={Knowledge} />
          <Route path="/enth" component={Enthuasists} />
          <Route path="/categories" component={Categories} />
          <Route path="/forgotpassword" component={ForgotPassword} />
          <Route path="/resetpassword" component={ResetPassword} />
          <Route path="/invest" component={Invest} />
          <Route path="/pay" component={Payment} />
          <Route path="/blog" component={Blog} />
          <Route path="/blogdetail" component={BlogDetail} />
          <Route path="/term" component={TermConditions}></Route>
          <Route path="/faq" component={Faq}></Route>
          <Route path="/privacypolicy" component={PrivacyPolicy}></Route>
        </Switch>
        {location.pathname == "/setting-dsh" ||
        location.pathname == "/rule-dsh" ||
        location.pathname == "/rule" ||
        location.pathname == "/exchange-dsh" ? null : (
          <Footer />
        )}
      </Fragment>
    </Elements>
  );
});

export default Routes;
