import React from "react";
import Carousel from "../components/Carousel";
import Sidebar from "../components/Sidebar";

const SettingDashboard = () => {
  return (
    <div className="container-fluid">
      <div className="row">
        <div className="col-md-12 p-0">
          <div className="s-layout">
            <Sidebar />
            <main className="s-layout__content">
              <div className="container-fluid">
                <div className="row exchange">
                  <div className="col-md-12">
                    <h2>Settings</h2>
                    <ul
                      className="nav nav-pills mb-3"
                      id="crypto-tab"
                      role="tablist"
                    >
                      <li className="nav-item">
                        <a
                          className="nav-link active"
                          id="pills-profile-tab"
                          data-toggle="pill"
                          href="#pills-profile"
                          role="tab"
                          aria-controls="pills-profile"
                          aria-selected="true"
                        >
                          Profile
                        </a>
                      </li>
                      <li className="nav-item">
                        <a
                          className="nav-link"
                          id="pills-trading-tab"
                          data-toggle="pill"
                          href="#pills-trading"
                          role="tab"
                          aria-controls="pills-trading"
                          aria-selected="false"
                        >
                          Trading
                        </a>
                      </li>
                      <li className="nav-item">
                        <a
                          className="nav-link"
                          id="pills-billing-tab"
                          data-toggle="pill"
                          href="#pills-billing"
                          role="tab"
                          aria-controls="pills-billing"
                          aria-selected="false"
                        >
                          Billing
                        </a>
                      </li>
                    </ul>
                    <div className="tab-content" id="pills-tabContent">
                      <div
                        className="tab-pane fade show active"
                        id="pills-profile"
                        role="tabpanel"
                        aria-labelledby="pills-profile-tab"
                      >
                        <div className="container-fluid">
                          <div className="row">
                            <div className="col-md-6 setting-spacing">
                              <form className="account-form" action="">
                                <h6>Account</h6>
                                <p>
                                  The info provided won't be shared with any
                                  other parties
                                </p>
                                <div className="form-group">
                                  <input
                                    type="email"
                                    className="form-control"
                                    id="email"
                                    placeholder="abcdef@gmail.com"
                                  />
                                </div>
                              </form>
                            </div>
                            <div className="col-md-6 setting-spacing">
                              <form className="account-form" action="">
                                <h6>Security</h6>
                                <p>Add an extra layer of security using 2FA</p>
                                <div className="form-group">
                                  <div className="status-toggle crypto-stats">
                                    <p>Status</p>
                                    <label className="switch">
                                      <input type="checkbox" />
                                      <span className="slider round"></span>
                                    </label>
                                  </div>
                                </div>
                              </form>
                            </div>
                            <div className="col-md-6 setting-spacing mb-3">
                              <div className="account-form">
                                <h6>Recommended Exchange</h6>
                                <p>Signup for a free additional wallet:</p>
                                <div className="row">
                                  <div className="col-6 ">
                                    <img
                                      src="files/images/dashboard/settings/bitpanda.svg"
                                      alt=""
                                    />
                                  </div>
                                  <div className="col-6">
                                    <img
                                      src="files/images/dashboard/settings/binance.svg"
                                      alt=""
                                    />
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div
                        className="tab-pane fade"
                        id="pills-trading"
                        role="tabpanel"
                        aria-labelledby="pills-trading-tab"
                      >
                        <div className="container-fluid">
                          <div className="row">
                            <div className="col-md-6 setting-spacing">
                              <form className="account-form" action="">
                                <h6>Base Currency</h6>
                                <p>
                                  Your profit on Coinrule will be shown in the
                                  following currency:
                                </p>
                                <div className="form-group">
                                  <select
                                    id="inputState"
                                    className="custom-select form-control"
                                  >
                                    <option selected="">USD</option>
                                    <option value="EURO">EURO</option>
                                    <option value="GBP">GBP</option>
                                  </select>
                                </div>
                              </form>
                            </div>
                            <div className="col-md-6 setting-spacing">
                              <div className="account-form">
                                <h6>Recommended Exchange</h6>
                                <p>Signup for a free additional wallet:</p>
                                <div className="row">
                                  <div className="col-6">
                                    <img
                                      src="files/images/dashboard/settings/bitpanda.svg"
                                      alt=""
                                    />
                                  </div>
                                  <div className="col-6">
                                    <img
                                      src="files/images/dashboard/settings/binance.svg"
                                      alt=""
                                    />
                                  </div>
                                </div>
                              </div>
                            </div>
                            <div className="col-md-12 setting-spacing">
                              <div className="outer-box">
                                <h6 className="mb-3">Notifications</h6>
                                <div className="row">
                                  <div className="col-md-6">
                                    <form className="account-form" action="">
                                      <h6>Via Telegram</h6>
                                      <ol>
                                        <li>
                                          On Telegram, search for CoinruleBot
                                        </li>
                                        <li>
                                          Press Start and Receive the Code(chat
                                          ID)
                                        </li>
                                        <li>
                                          Simply paste here below the Code you
                                          received
                                        </li>
                                      </ol>
                                      <div className="form-group">
                                        <input
                                          type="number"
                                          className="form-control"
                                          id="telegram"
                                          placeholder="Telegram Code"
                                        />
                                      </div>
                                    </form>
                                  </div>
                                  <div className="col-md-6">
                                    <form
                                      className="account-form telegram"
                                      action=""
                                    >
                                      <p>
                                        Select with telegram message you will
                                        receive
                                      </p>
                                      <div className="form-group">
                                        <div className="status-toggle crypto-stats">
                                          <p>Rule exchange</p>
                                          <label className="switch">
                                            <input type="checkbox" />
                                            <span className="slider round"></span>
                                          </label>
                                        </div>
                                      </div>
                                      <div className="form-group">
                                        <div className="status-toggle crypto-stats">
                                          <p>Rule errors</p>
                                          <label className="switch">
                                            <input type="checkbox" />
                                            <span className="slider round"></span>
                                          </label>
                                        </div>
                                      </div>
                                      <div className="form-group">
                                        <div className="status-toggle crypto-stats">
                                          <p>Rule finished</p>
                                          <label className="switch">
                                            <input type="checkbox" />
                                            <span className="slider round"></span>
                                          </label>
                                        </div>
                                      </div>
                                      <div className="form-group">
                                        <div className="status-toggle crypto-stats">
                                          <p>Demo rules</p>
                                          <label className="switch">
                                            <input type="checkbox" />
                                            <span className="slider round"></span>
                                          </label>
                                        </div>
                                      </div>
                                    </form>
                                  </div>
                                </div>
                              </div>
                            </div>
                            <div className="col-md-12 setting-spacing">
                              <div className="outer-box">
                                <h6 className="mb-3">
                                  Via Text <span>Only for Pro Plans</span>
                                  <a href=""> See Plans </a>
                                </h6>
                                <div className="row">
                                  <div className="col-md-6">
                                    <form className="account-form" action="">
                                      <h6>Mobile Number</h6>
                                      <p>
                                        Add your mobile number to receive live
                                        SMS text notifications
                                      </p>
                                      <div className="form-group">
                                        <input
                                          type="number"
                                          className="form-control"
                                          id="phonenumber"
                                          placeholder="Phone Number"
                                        />
                                      </div>
                                    </form>
                                  </div>
                                  <div className="col-md-6">
                                    <form
                                      className="account-form telegram"
                                      action=""
                                    >
                                      <p>Select which SMS you will receive:</p>
                                      <div className="form-group">
                                        <div className="status-toggle crypto-stats">
                                          <p>Daily Summary</p>
                                          <label className="switch">
                                            <input type="checkbox" />
                                            <span className="slider round"></span>
                                          </label>
                                        </div>
                                      </div>
                                    </form>
                                  </div>
                                </div>
                              </div>
                            </div>
                            <div className="col-md-12 setting-spacing">
                              <h6>Advanced</h6>
                            </div>
                            <div className="col-md-6 setting-spacing">
                              <form className="account-form" action="">
                                <h6>Market Cap</h6>
                                <p>Do not buy coins with market cap below</p>
                                <div className="form-group">
                                  <select
                                    id="inputState"
                                    className="custom-select form-control"
                                  >
                                    <option selected="">
                                      $10M (Recommended)
                                    </option>
                                    <option value="$20M">$20M</option>
                                    <option value="$30M">$30M</option>
                                    <option value="$40M">$40M</option>
                                    <option value="$50M">$50M</option>
                                    <option value="$60M">$60M</option>
                                    <option value="$70M">$70M</option>
                                  </select>
                                </div>
                              </form>
                            </div>
                            <div className="col-md-6 setting-spacing">
                              <form className="account-form" action="">
                                <h6>Limit Orders</h6>
                                <p>
                                  Safety range within limit order executions
                                  will trigger will be
                                </p>
                                <div className="form-group">
                                  <select
                                    id="inputState"
                                    className="custom-select form-control"
                                  >
                                    <option selected="">1%</option>
                                    <option value="2%">2%</option>
                                    <option value="3%">3%</option>
                                    <option value="4%">4%</option>
                                    <option value="5%">5%</option>
                                    <option value="6%">6%</option>
                                    <option value="7%">7%</option>
                                    <option value="8%">8%</option>
                                    <option value="9%">9%</option>
                                  </select>
                                </div>
                              </form>
                            </div>
                            <div className="col-md-6 setting-spacing">
                              <form className="account-form" action="">
                                <h6>Server Region</h6>
                                <p>
                                  Some exchanges apply geographical
                                  restrictions. Using a s erver in your region
                                  allows you to access all your tradable coins
                                  and funds.
                                </p>
                                <div className="form-group">
                                  <select
                                    id="inputState"
                                    className="custom-select form-control"
                                  >
                                    <option selected="">Europe</option>
                                    <option value="Gulf">Gulf</option>
                                    <option value="Asia">Asia</option>
                                  </select>
                                </div>
                              </form>
                            </div>
                            <div className="col-md-6 setting-spacing">
                              <form className="account-form telegram" action="">
                                <h6>Technical Indicators</h6>
                                <p>
                                  Advanced indicators activated as part of your
                                  plan:
                                </p>
                                <div className="form-group">
                                  <div className="status-toggle crypto-stats">
                                    <p>Level 1: Moving Average, RSI</p>
                                    <label className="switch">
                                      <input type="checkbox" />
                                      <span className="slider round"></span>
                                    </label>
                                  </div>
                                </div>
                                <div className="form-group">
                                  <div className="status-toggle crypto-stats">
                                    <p>Level 2: Bollinger Bands, +5</p>
                                    <label className="switch">
                                      <input type="checkbox" />
                                      <span className="slider round"></span>
                                    </label>
                                  </div>
                                </div>
                              </form>
                            </div>
                            <div className="col-md-6 setting-spacing mb-3">
                              <form className="account-form" action="">
                                <h6>Reset P&L</h6>
                                <p>Reset calculation of Profit and Loss:</p>
                                <a href="" className="btn">
                                  Reset
                                </a>
                              </form>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div
                        className="tab-pane fade"
                        id="pills-billing"
                        role="tabpanel"
                        aria-labelledby="pills-billing-tab"
                      >
                        <div className="container-fluid">
                          <div className="row">
                            <div className="col-md-12">
                              <h6>Take Your Trading To The Next Level</h6>
                              <p>Your current plan is Starter</p>
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
                                  <button href="" className="btn">
                                    Choose
                                  </button>
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
                                  <button href="" className="btn">
                                    Choose
                                  </button>
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
                                  <button href="" className="btn">
                                    Choose
                                  </button>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </main>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SettingDashboard;
