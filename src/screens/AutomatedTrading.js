import React from "react";
import { useDispatch } from "react-redux";
import { getNomics } from "../actions/auth/auth";
import VolumeSlider from "../components/RangeSlider/RangeSlider";

const AutomatedTrading = () => {


  return (
    <div>
      <div className="container-fluid crypto-container">
        <div className="row banner">
          <div className="col-md-6">
            <div className="banner-text">
            
              <h1>Automated Trading Made Easy</h1>
              <p>
                Coinrule empowers traders to compete with professional
                algorithmic traders and hedge funds. No coding required.
              </p>
              <a  className="btn">
                Start for free
              </a>
            </div>
          </div>
          <div className="col-md-6">
            <div className="banner-image">
              <img src="files/images/automated/banner-image.jpg" alt="" />
            </div>
          </div>
        </div>
        <div className="row">
          <div className="col-md-12 p-0">
            <div className="members">
              <a >
                <img
                  src="files/images/automated/Clutch-Citibank@2x.png"
                  alt=""
                />
              </a>
              <a >
                <img
                  src="files/images/automated/Clutch-Colorcon@2x.png"
                  alt=""
                />
              </a>
              <a >
                <img
                  src="files/images/automated/Clutch-eShipper@2x.png"
                  alt=""
                />
              </a>
              <a >
                <img src="files/images/automated/Clutch-NBCU@2x.png" alt="" />
              </a>
            </div>
          </div>
        </div>
        <div className="row military-row">
          <div className="col-md-4">
            <div className="Military-work">
              <div className="work-icon">
                <i className="fad fa-briefcase mr-2"></i>
              </div>
              <div className="work-desc">
                <p>Works with the top 10+</p>
                <h4>Popular Exchanges</h4>
              </div>
            </div>
          </div>
          <div className="col-md-4">
            <div className="Military-work">
              <div className="work-icon">
                <i className="fad fa-badge-check mr-2"></i>
              </div>
              <div className="work-desc">
                <p>Military-grade</p>
                <h4>Security & Encryption</h4>
              </div>
            </div>
          </div>
          <div className="col-md-4">
            <div className="Military-work">
              <div className="work-image">
                <img
                  className="pr-2"
                  src="files/images/automated/Ellipse 15.png"
                  alt=""
                />
              </div>
              <div className="work-desc">
                <p>
                  "Coinrule stands out, intuitive and simple to set up"
                  <br />
                  <span>Jordan</span>
                </p>
                <i className="fas fa-star"></i>
                <i className="fas fa-star"></i>
                <i className="fas fa-star"></i>
                <i className="fas fa-star"></i>
                <i className="fas fa-star"></i>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="container">
        <div className="row automated">
          <div className="col-md-6">
            <div className="automated-image">
              <img src="files/images/automated/banner-image.jpg" alt="" />
            </div>
          </div>
          <div className="col-md-6">
            <div className="banner-text">
              <h1>Create Automated Trading Rules, 24/7</h1>
              <p>
                Set custom automated trades and never miss a rally or get caught
                in a dip. Coinrule obsessively seeks out effective market
                indicators to enable smart allocation of funds while putting you
                in control of your trading machine.
              </p>
              <a  className="btn">
                Start for free
              </a>
            </div>
          </div>
        </div>
      </div>
      <div className="container-fluid crypto-container analytics">
        <div className="col-md-12">
          <div className="row chart-filters">
            <div className="col-md-12">
              <div className="chart-section">
                <h2>Test Rule Performance on Historical Data</h2>
              </div>
            </div>
            <div className="col-md-3">
              <select className="custom-select" id="chartdrop">
                <option selected>Buy The Dip In Bull Market</option>
                <option value="1">Buy The Dip Multi-Level</option>
                <option value="2">Ride The Trend</option>
                <option value="3">Maximized Crossing Moving Averages</option>
                <option value="4">Low Volatility Buy And Sell</option>
              </select>
            </div>
            <div className="col-md-3">
              <div className="form-group range-filter">
                <h6>Initial Amount</h6>
                {/* <input
                  type="range"
                  value="0"
                  max="100"
                  oninput="num.value = this.value"
                />
                <output id="num">0</output> */}
                <VolumeSlider orientation="vertical" />
                
              </div>
            </div>
            <div className="col-md-3">
              <div className="form-group range-filters">
                <h6>Length of investment</h6>
                {/* <input
                  type="range"
                  value="0"
                  max="1000"
                  oninput="nums.value = this.value"
                />
                <output id="nums">0</output> */}
                <VolumeSlider  />
              </div>
            </div>
            <div className="col-md-3">
              <div className="total-cost text-right">
                <h2>$4.00</h2>
              </div>
            </div>
          </div>
        </div>
        <div className="col-md-12">
          <div className="wrapper">
            <canvas id="canvas"></canvas>
            <div className="note">
              Made with{" "}
              <a
                href="https://www.chartjs.org"
                target="_blank"
                rel="external noopener"
              >
                Chart.js
              </a>{" "}
              by{" "}
              <a
                href="https://hofmannsven.com"
                target="_blank"
                rel="external noopener"
              >
                Sven Hofmann
              </a>
              .
            </div>
          </div>
        </div>
        <div className="col-md-12">
          <div className="chart-section">
            <h2>Test your Strategy today</h2>
            <a  className="btn">
              Start Test
            </a>
          </div>
        </div>
      </div>
      <div className="container-fluid crypto-container">
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
            <a  className="btn mt-3">
              Start for free
            </a>
          </div>
        </div>
      </div>
      <div className="container">
        <div className="row secure">
          <div className="col-md-6">
            <div className="banner-text">
              <h1>Securely Trade Across Exchanges</h1>
              <p>
                Coinrule is a beginner-friendly and safe platform to send
                automated trading instructions to your favorite exchanges,
                including Binance, Coinbase Pro, Kraken, etc. We don't ask for
                private keys or withdrawal rights.
              </p>
              <a  className="btn">
                Start for free
              </a>
            </div>
          </div>
          <div className="col-md-6">
            <div className="automated-image">
              <img src="files/images/automated/Group 15.png" alt="" />
            </div>
          </div>
        </div>
      </div>
      <div className="container-fluid crypto-container">
        <div className="row">
          <div className="col-12 update-form">
            <h1>Getting Started Is Easy!</h1>
            <p>Sign Up Today or Simply Get Market Updates In Your Inbox</p>
            <form
              action=""
              method="GET"
              id="update-form"
              style={{position : 'relative'}}
            >
              <input
                className="form-control my-0 py-1 amber-border"
                type="email"
                placeholder="Email Address"
                name="keyword"
                value=""
              />
              <a  className="btn">
                Get updates
              </a>
            </form>
          </div>
        </div>
      </div>
      <div className="container-fluid crypto-container est-cost">
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
              <a  className="btn">
                Start for free
              </a>
            </div>
          </div>
        </div>
      </div>
      <div className="container-fluid crypto-container">
        <div className="row team">
          <div className="col-md-12">
            <h2>Meet the Founding Team</h2>
          </div>
          <div className="col-md-4">
            <div className="team-box">
              <div className="team-image">
                <img src="files/images/automated/theater.jpg" alt="" />
              </div>
              <div className="team-details">
                <h6>Gabriele Musella</h6>
                <p>CEO, Product</p>
                <a href="#" className="facebook">
                  <i className="fab fa-facebook-square"></i>
                </a>
                <a href="#" className="twitter">
                  <i className="fab fa-twitter-square"></i>
                </a>
              </div>
            </div>
          </div>
          <div className="col-md-4">
            <div className="team-box">
              <div className="team-image">
                <img src="files/images/automated/theater.jpg" alt="" />
              </div>
              <div className="team-details">
                <h6>Gabriele Musella</h6>
                <p>CEO, Product</p>
                <a href="#" className="facebook">
                  <i className="fab fa-facebook-square"></i>
                </a>
                <a href="#" className="twitter">
                  <i className="fab fa-twitter-square"></i>
                </a>
              </div>
            </div>
          </div>
          <div className="col-md-4">
            <div className="team-box">
              <div className="team-image">
                <img src="files/images/automated/theater.jpg" alt="" />
              </div>
              <div className="team-details">
                <h6>Gabriele Musella</h6>
                <p>CEO, Product</p>
                <a href="#" className="facebook">
                  <i className="fab fa-facebook-square"></i>
                </a>
                <a href="#" className="twitter">
                  <i className="fab fa-twitter-square"></i>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="container-fluid crypto-container">
        <div className="row">
          <div className="col-md-12 text-center support mt-3">
            <h2>Supported Exchanges</h2>
            <p>We integrate with 10+ of the most popular exchanges including</p>
          </div>
          <div className="col-md-12">
            <div className="row member-second">
              <div className="col-6 col-md-3 col-sm-4">
                <a >
                  <img
                    src="files/images/automated/Clutch-Citibank@2x.png"
                    alt=""
                  />
                </a>
              </div>
              <div className="col-6 col-md-3 col-sm-4">
                <a >
                  <img
                    src="files/images/automated/Clutch-Colorcon@2x.png"
                    alt=""
                  />
                </a>
              </div>
              <div className="col-6 col-md-3 col-sm-4">
                <a >
                  <img
                    src="files/images/automated/Clutch-eShipper@2x.png"
                    alt=""
                  />
                </a>
              </div>
              <div className="col-6 col-md-3 col-sm-4">
                <a >
                  <img src="files/images/automated/Clutch-NBCU@2x.png" alt="" />
                </a>
              </div>
              <div className="col-6 col-md-3 col-sm-4">
                <a >
                  <img
                    src="files/images/automated/Clutch-Citibank@2x.png"
                    alt=""
                  />
                </a>
              </div>
              <div className="col-6 col-md-3 col-sm-4">
                <a >
                  <img
                    src="files/images/automated/Clutch-Colorcon@2x.png"
                    alt=""
                  />
                </a>
              </div>
              <div className="col-6 col-md-3 col-sm-4">
                <a >
                  <img
                    src="files/images/automated/Clutch-eShipper@2x.png"
                    alt=""
                  />
                </a>
              </div>
              <div className="col-6 col-md-3 col-sm-4">
                <a >
                  <img src="files/images/automated/Clutch-NBCU@2x.png" alt="" />
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="container-fluid crypto-container">
        <div className="row">
          <div className="col-12 update-form">
            <h1>Getting Started Is Easy!</h1>
            <p>Sign Up Today or Simply Get Market Updates In Your Inbox</p>
            <form
              action=""
              method="GET"
              id="update-form"
              style={{position : 'relative'}}
            >
              <input
                className="form-control my-0 py-1 amber-border"
                type="email"
                placeholder="Email Address"
                name="keyword"
                value=""
              />
              <a  className="btn">
                Get updates
              </a>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AutomatedTrading;
