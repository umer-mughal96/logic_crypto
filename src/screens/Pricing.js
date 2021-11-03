import React from "react";
import Carousel from "../components/Carousel";
// import Stripe from "../components/Stripe/Stripe";
import { Link } from "react-router-dom";
import { paymentDetails } from "../actions/stripe/stripe";
import { useDispatch } from "react-redux";

const Pricing = ({ history }) => {
  const dispatch = useDispatch();

  const choosePaymenthandler = (packageName, packaPrice) => {
    dispatch(paymentDetails(packageName, packaPrice, history));
  };
  return (
    <div>
      <div className="container-fluid crypto-container">
        <div className="row pricing">
          <div className="col-md-12 pricing-text">
            <h2>Pricing</h2>
            {/* <Stripe /> */}
            <p>
              You can develop your trading strategies and these can run
              automatically on your desired exchange. You can start with a{" "}
              <Link to="/signup">Free Account</Link> Today
            </p>
          </div>
          <div className="col-md-4 col-xl-3 col-lg-4 col-sm-6 mb-3">
            <div className="hobbyist-plan starter-plan">
              <h5>
                Starter
                <br />
                $Free
              </h5>
              <ul>
                <li>2 Live Rules</li>
                <li>2 Demo Rules</li>
                <li>7 Templates Strategies</li>
                <li>1 Connected Exchange</li>
                <li>Up to 3k Monthly Trade Volume</li>
              </ul>
              <div className="text-center">
                <button className="btn">Default</button>
              </div>
            </div>
          </div>
          <div className="col-md-4 col-xl-3 col-lg-4 col-sm-6 mb-3">
            <div className="hobbyist-plan">
              <h5>
                Hobbyist
                <br />
                $14<span>.99/mo</span>
              </h5>
              <ul>
                <li>7 Live Rules</li>
                <li>7 Demo Rules</li>
                <li>40 Template Strategies</li>
                <li>2 Connected Exchanges</li>
                <li>Up to 100k Monthly Trade volume</li>
                <li>Trade Volume</li>
                <li>Leverage Strategies</li>
                <li>Live Telegram + Text Notifications</li>
                <li>Free Access to Trader</li>
                <li>Advanced Indicators and Operators</li>
                <li>Live Support</li>
              </ul>
              <div className="text-center">
                <button
                  className="btn"
                  onClick={() => choosePaymenthandler("Hobbyist", 14)}
                >
                  Choose
                </button>
              </div>
            </div>
          </div>
          <div className="col-md-4 col-xl-3 col-lg-4 col-sm-6 mb-3">
            <div className="hobbyist-plan trader-plan">
              <h5>
                Trader
                <br />
                $24<span>.99/mo</span>
              </h5>
              <ul>
                <li>15 Live Rules</li>
                <li>15 Demo Rules</li>
                <li>Unlimited Template Strategies</li>
                <li>3 Connected Exchanges</li>
                <li>Up to $1M Monthly Trade Volume</li>
                <li>Leverage Strategies</li>
                <li>Live Telegram + Text Notifications</li>
                <li>Free Access to Trader</li>
                <li>Community</li>
                <li>One-to-one Training Sessions</li>
                <li>Live Support</li>
                <li>Advanced Indicators and Operators</li>
              </ul>
              <div className="text-center">
                <button
                  className="btn"
                  onClick={() => choosePaymenthandler("Trader", 24)}
                >
                  Choose
                </button>
              </div>
            </div>
          </div>
          <div className="col-md-4 col-xl-3 col-lg-4 col-sm-6 mb-3">
            <div className="hobbyist-plan pro-plan">
              <h5>
                Pro
                <br />
                $299<span>.99/mo</span>
              </h5>
              <ul>
                <li>50 Live Rules</li>
                <li>50 Demo Rules</li>
                <li>Unlimited Template Strategies</li>
                <li>Unlimited Exchanges</li>
                <li>Up to $5M Monthly Trade Volume</li>
                <li>Leverage Strategies</li>
                <li>Live Telegram + Text Notifications</li>
                <li>Free Access to Trader</li>
                <li>Community</li>
                <li>One-to-one Training Sessions</li>
                <li>Ultra-Fast Executions</li>
                <li>Prioritised Access and Execution</li>
                <li>Dedicated Server</li>
                <li>Advanced Indicators and Operators</li>
              </ul>
              <div className="text-center">
                <button
                  className="btn"
                  onClick={() => choosePaymenthandler("Pro", 299)}
                >
                  Choose
                </button>
              </div>
            </div>
          </div>
          <div className="col-md-12">
            <div className="payments">
              <h2>Crypto Payments Accepted</h2>
              <p>
                We believe in the possibilities that technology brings for
                greater decentralization of power and wealth, more open
                internet, and much more. So, we are committed both to the
                Blockchain community and crypto traders.
              </p>
            </div>
          </div>
        </div>
      </div>
      <div className="container-fluid crypto-container est-cost">
        <div className="row est-cost">
          <div className="col-md-12 mb-4">
            <h2>Evaluate Your Cost</h2>
          </div>
          <div className="col-md-7">
            <form action="">
              <div className="row">
                <div className="col-8">
                  <h6>How much do you trade in every month?</h6>
                </div>
                <div className="col-4 text-right">
                  <h2>$630</h2>
                </div>
              </div>
              <input type="range" min="0" max="4" step="0.5" />
              <h6 className="mt-5">
                Save <span>$6</span>/month
              </h6>
              <p>Compared to a 1% fee on other trading tools</p>
            </form>
          </div>
          <div className="col-md-5">
            <div className="est-cost-box">
              <p>Best Plan for you</p>
              <h3>Trader $59.99</h3>
              <p>Cost only</p>
              <h3>0.05% of trade volume</h3>
              <Link to="/pay" className="btn">
                Start for free
              </Link>
            </div>
          </div>
        </div>
      </div>
      <div className="container-fluid crypto-container">
        <div className="row">
          <div className="col-md-12 p-0 enthusiasts mt-5">
            <Carousel />
          </div>
        </div>
      </div>
      <div className="container-fluid crypto-container">
        <div className="row choose">
          <div className="col-md-12">
            <div className="choose-heading">
              <h2>
                Select From 150+ Strategies
                {/* <br />
                or Build Your Own */}
              </h2>
            </div>
          </div>
          <div className="col-md-3">
            <img src="files/images/automated/Group 30.png" alt="" />
          </div>
          <div className="col-md-3">
            <img src="files/images/automated/Group 30.png" alt="" />
          </div>
          <div className="col-md-3">
            <img src="files/images/automated/Group 30.png" alt="" />
          </div>
          <div className="col-md-3">
            <img src="files/images/automated/Group 30.png" alt="" />
          </div>
          <div className="col-md-12">
            <a href="" className="btn mt-3">
              Start for free
            </a>
          </div>
        </div>
      </div>
      <div className="container-fluid crypto-container">
        <div className="row">
          <div className="col-12 update-form mt-4">
            <h1>Get New Strategies Weekly</h1>
            <p>Get updates without searching in your inbox every week</p>
            <form
              action=""
              method="GET"
              id="update-form"
              style={{ position: "relative" }}
            >
              <input
                className="form-control my-0 py-1 amber-border"
                type="email"
                placeholder="Email Address"
                name="keyword"
                value=""
              />
              <a href="" className="btn">
                Get updates
              </a>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Pricing;
