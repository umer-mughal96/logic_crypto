import React from "react";
import Carousel from "../components/Carousel";
// import Stripe from "../components/Stripe/Stripe";

const Pricing = () => {
  return (
    <div>
   
      <div className="container-fluid">
        <div className="row pricing">
          <div className="col-md-12 pricing-text">
            <h2>Pricing</h2>
            {/* <Stripe /> */}
            <p>
              With Coinrule you can easily develop your own trading strategies
              and set them up to run automatically on your favourite exchange.
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
                <li>7 Template Strategies</li>
                <li>1 Connected Exchange</li>
                <li>Up to $3k Monthly Trade Volume</li>
              </ul>
              <div className="text-center">
                <a href="" className="btn">
                  Choose
                </a>
              </div>
            </div>
          </div>
          <div className="col-md-4 col-xl-3 col-lg-4 col-sm-6 mb-3">
            <div className="hobbyist-plan">
              <h5>
                Hobbyist
                <br />
                $29<span>.99/mo</span>
              </h5>
              <ul>
                <li>7 Live Rules</li>
                <li>7 Demo Rules</li>
                <li>40 Template Strategies</li>
                <li>2 Connected Exchanges</li>
                <li>Up to $100k Monthly</li>
                <li>Trade Volume</li>
                <li>Leverage Strategies</li>
                <li>Live Telegram + Text Notifications</li>
                <li>Free Access to Trader</li>
                <li>Community</li>
                <li>Advanced Indicators and Operators</li>
              </ul>
              <div className="text-center">
                <a href="" className="btn">
                  Choose
                </a>
              </div>
            </div>
          </div>
          <div className="col-md-4 col-xl-3 col-lg-4 col-sm-6 mb-3">
            <div className="hobbyist-plan trader-plan">
              <h5>
                Trader Plan
                <br />
                $59<span>.99/mo</span>
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
                <li>Advanced Indicators and Operators</li>
              </ul>
              <div className="text-center">
                <a href="" className="btn">
                  Choose
                </a>
              </div>
            </div>
          </div>
          <div className="col-md-4 col-xl-3 col-lg-4 col-sm-6 mb-3">
            <div className="hobbyist-plan pro-plan">
              <h5>
                Pro Plan
                <br />
                $449<span>.99/mo</span>
              </h5>
              <ul>
                <li>15 Live Rules</li>
                <li>15 Demo Rules</li>
                <li>Unlimited Template Strategies</li>
                <li>Unlimited Exchanges</li>
                <li>Up to $5M Monthly Trade Volume</li>
                <li>Leverage Strategies</li>
                <li>Live Telegram + Text Notifications</li>
                <li>Free Access to Trader</li>
                <li>Community</li>
                <li>One-to-one Training Sessions</li>
                <li>Ultra-Fast Executions</li>
                <li>Dedicated Server</li>
                <li>Advanced Indicators and Operators</li>
              </ul>
              <div className="text-center">
                <a href="" className="btn">
                  Choose
                </a>
              </div>
            </div>
          </div>
          <div className="col-md-12">
            <div className="payments">
              <h2>Crypto Payments Accepted</h2>
              <p>
                We are committed both to crypto traders and the wider Blockchain
                community as we believe in the possibilities that the technology
                brings for a greater decentralization of wealth and power, a
                more open internet, and much more beyond.
              </p>
            </div>
          </div>
        </div>
      </div>
      <div className="container-fluid est-cost">
        <div className="row est-cost">
          <div className="col-md-12 mb-4">
            <h2>Estimate Your Cost</h2>
          </div>
          <div className="col-md-7">
            <form action="">
              <div className="row">
                <div className="col-8">
                  <h6>How Much Do You Trade Monthly?</h6>
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
              <a href="" className="btn">
                Start for free
              </a>
            </div>
          </div>
        </div>
      </div>
      <div className="container-fluid">
        <div className="row">
          <div className="col-md-12 p-0 enthusiasts mt-5">
          <Carousel/>
            {/* <div className="loop owl-carousel owl-theme">
              <div className="item">
                <div className="team-box enthusiasts">
                  <div className="team-image enthusiasts">
                    <img src="files/images/automated/theater.jpg" alt="" />
                  </div>
                  <div className="team-details enthusiasts">
                    <h6>Gabriele Musella</h6>
                    <p>CEO, Product</p>
                    <a href="#" className="facebook">
                      <i className="fab fa-facebook-square"></i>
                    </a>
                    <a href="#" className="twitter">
                      <i className="fab fa-twitter-square"></i>
                    </a>
                    <p>
                      By adding liquidity to previously illiquid asset classNamees
                      such as early-stage tech companies, but also to sectors
                      such as supply-chains, real estate and many more,
                      cryptocurrency trading has enabled an immense process of
                      wealth creation. While speculation might occasionally be
                      seen critically, it’s role in asset price discovery is
                      critical for any market and ultimately
                    </p>
                  </div>
                </div>
              </div>
              <div className="item">
                <div className="team-box enthusiasts">
                  <div className="team-image enthusiasts">
                    <img src="files/images/automated/theater.jpg" alt="" />
                  </div>
                  <div className="team-details enthusiasts">
                    <h6>Gabriele Musella</h6>
                    <p>CEO, Product</p>
                    <a href="#" className="facebook">
                      <i className="fab fa-facebook-square"></i>
                    </a>
                    <a href="#" className="twitter">
                      <i className="fab fa-twitter-square"></i>
                    </a>
                    <p>
                      By adding liquidity to previously illiquid asset classNamees
                      such as early-stage tech companies, but also to sectors
                      such as supply-chains, real estate and many more,
                      cryptocurrency trading has enabled an immense process of
                      wealth creation. While speculation might occasionally be
                      seen critically, it’s role in asset price discovery is
                      critical for any market and ultimately
                    </p>
                  </div>
                </div>
              </div>
              <div className="item">
                <div className="team-box enthusiasts">
                  <div className="team-image enthusiasts">
                    <img src="files/images/automated/theater.jpg" alt="" />
                  </div>
                  <div className="team-details enthusiasts">
                    <h6>Gabriele Musella</h6>
                    <p>CEO, Product</p>
                    <a href="#" className="facebook">
                      <i className="fab fa-facebook-square"></i>
                    </a>
                    <a href="#" className="twitter">
                      <i className="fab fa-twitter-square"></i>
                    </a>
                    <p>
                      By adding liquidity to previously illiquid asset classNamees
                      such as early-stage tech companies, but also to sectors
                      such as supply-chains, real estate and many more,
                      cryptocurrency trading has enabled an immense process of
                      wealth creation. While speculation might occasionally be
                      seen critically, it’s role in asset price discovery is
                      critical for any market and ultimately
                    </p>
                  </div>
                </div>
              </div>
              <div className="item">
                <div className="team-box enthusiasts">
                  <div className="team-image enthusiasts">
                    <img src="files/images/automated/theater.jpg" alt="" />
                  </div>
                  <div className="team-details enthusiasts">
                    <h6>Gabriele Musella</h6>
                    <p>CEO, Product</p>
                    <a href="#" className="facebook">
                      <i className="fab fa-facebook-square"></i>
                    </a>
                    <a href="#" className="twitter">
                      <i className="fab fa-twitter-square"></i>
                    </a>
                    <p>
                      By adding liquidity to previously illiquid asset classNamees
                      such as early-stage tech companies, but also to sectors
                      such as supply-chains, real estate and many more,
                      cryptocurrency trading has enabled an immense process of
                      wealth creation. While speculation might occasionally be
                      seen critically, it’s role in asset price discovery is
                      critical for any market and ultimately
                    </p>
                  </div>
                </div>
              </div>
            </div> */}
          </div>
        </div>
      </div>
      <div className="container-fluid">
        <div className="row choose">
          <div className="col-md-12">
            <div className="choose-heading">
              <h2>
                Choose Among 150+ Rules
                <br />
                or Build Your Own
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
      <div className="container-fluid">
        <div className="row">
          <div className="col-12 update-form mt-4">
            <h1>Getting Started Is Easy!</h1>
            <p>Sign Up Today or Simply Get Market Updates In Your Inbox</p>
            <form
              action=""
              method="GET"
              id="update-form"
              style={{position: "relative"}}
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
