import React from "react";
import { Link } from "react-router-dom";
import Sidebar from "../components/Sidebar";
import {useSelector} from 'react-redux'

const RulesDashboard = () => {

  const {user} = useSelector(s => s.Auth)
  const state = useSelector(s => s.User)
  var date = new Date(user.createdAt)

  console.log(state)
  return (
    <div className="container-fluid">
      <div className="row">
        <div className="col-md-12 p-0">
          <div className="s-layout">
            <Sidebar />

            <main className="s-layout__content">
              <div className="d-flex">
                <div className="col-md-3 col-xl-6 col-lg-5 col-5 profit-row">
                  <div className="net-profit">
                    <h5>
                      Net Profit
                      <br />
                      <span>$0</span>
                    </h5>
                  </div>
                  <div className="net-profit">
                    <h5>
                      Total Growth
                      <br />
                      <span>0%</span>
                    </h5>
                  </div>
                  <div className="net-profit">
                    <h5>
                      Since
                      <br />
                      <span>{date.toLocaleDateString()}</span>
                    </h5>
                  </div>
                </div>
                <div className="col-md-9 col-xl-6 col-lg-7 col-7 profit-row">
                  <div className="icons-top">
                    <div className="wallet-icon">
                      <a href="">
                        <i className="fas fa-wallet mr-2"></i>
                      </a>
                    </div>
                    <div className="notification-icon">
                      <a href="">
                        <i className="fas fa-bell"></i>
                      </a>
                      <i class="red-alert fas fa-circle"></i>
                    </div>
                  </div>
                  <div className="buttons-top">
                    <div className="link-exchange">
                      <Link to="/exchange-dsh" className="btn mr-2">
                        + Link Exchanges
                      </Link>
                    </div>
                    <div className="link-exchange">
                      <Link to="/rule" className="btn">
                        + Create Rules
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
              <div className="p-3">
                <ul
                  className="nav nav-pills mb-3"
                  id="crypto-tab"
                  role="tablist"
                >
                  <li className="nav-item">
                    <a
                      className="nav-link active"
                      id="pills-all-tab"
                      data-toggle="pill"
                      href="#pills-all"
                      role="tab"
                      aria-controls="pills-all"
                      aria-selected="true"
                    >
                      All
                    </a>
                  </li>
                  <li className="nav-item">
                    <a
                      className="nav-link"
                      id="pills-active-tab"
                      data-toggle="pill"
                      href="#pills-active"
                      role="tab"
                      aria-controls="pills-active"
                      aria-selected="false"
                    >
                      Active
                    </a>
                  </li>
                  <li className="nav-item">
                    <a
                      className="nav-link"
                      id="pills-paused-tab"
                      data-toggle="pill"
                      href="#pills-paused"
                      role="tab"
                      aria-controls="pills-paused"
                      aria-selected="false"
                    >
                      Paused
                    </a>
                  </li>
                  <li className="nav-item">
                    <a
                      className="nav-link"
                      id="pills-complete-tab"
                      data-toggle="pill"
                      href="#pills-complete"
                      role="tab"
                      aria-controls="pills-complete"
                      aria-selected="false"
                    >
                      Complete
                    </a>
                  </li>
                  <p>Rule 1</p>
                </ul>
                <div className="tab-content" id="pills-tabContent">
                  <div
                    className="tab-pane fade show active"
                    id="pills-all"
                    role="tabpanel"
                    aria-labelledby="pills-all-tab"
                  >
                    <div className="container-fluid">
                      <div className="row">
                        <div className="col-md-12 p-0">
                          <div className="crypto-stats">
                            <div className="row">
                              <div className="col-md-12 col-12 col-sm-12 col-lg-12 col-xl-6 stats-bar">
                                <div className="bitcoin">
                                  <i className="fab fa-bitcoin"></i>
                                </div>
                                <div className="high-low">
                                  <p>
                                    Buy Low Sell High{" "}
                                    <i className="ml-1 fas fa-arrow-circle-down"></i>
                                  </p>
                                </div>
                                <div className="demo">
                                  <p>Demo</p>
                                </div>
                                <div className="chart">
                                  <img
                                    src="files/images/dashboard/chart-image.svg"
                                    alt=""
                                  />
                                </div>
                              </div>
                              <div className="col-md-12 col-12 col-sm-12 col-lg-12 col-xl-6 stats-bar">
                                <div className="status-toggle">
                                  <p>Status</p>
                                  <label className="switch">
                                    <input type="checkbox" />
                                    <span className="slider round"></span>
                                  </label>
                                </div>
                                <div className="growth">
                                  <p>
                                    Growth <span>-2.13%</span>
                                  </p>
                                </div>
                                <div className="netprofit">
                                  <p>
                                    Net Profit <span>-2.13%</span>
                                  </p>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div
                    className="tab-pane fade"
                    id="pills-active"
                    role="tabpanel"
                    aria-labelledby="pills-active-tab"
                  >
                    <div className="container-fluid">
                      <div className="row">
                        <div className="col-md-12 p-0">
                          <div className="crypto-stats">
                            <div className="row">
                              <div className="col-md-12 col-12 col-sm-12 col-lg-12 col-xl-6 stats-bar">
                                <div className="bitcoin">
                                  <i className="fab fa-bitcoin"></i>
                                </div>
                                <div className="high-low">
                                  <p>
                                    Buy Low Sell High{" "}
                                    <i className="ml-1 fas fa-arrow-circle-down"></i>
                                  </p>
                                </div>
                                <div className="demo">
                                  <p>Demo</p>
                                </div>
                                <div className="chart">
                                  <img
                                    src="files/images/dashboard/chart-image.svg"
                                    alt=""
                                  />
                                </div>
                              </div>
                              <div className="col-md-12 col-12 col-sm-12 col-lg-12 col-xl-6 stats-bar">
                                <div className="status-toggle">
                                  <p>Status</p>
                                  <label className="switch">
                                    <input type="checkbox" checked />
                                    <span className="slider round"></span>
                                  </label>
                                </div>
                                <div className="growth">
                                  <p>
                                    Growth <span>-2.13%</span>
                                  </p>
                                </div>
                                <div className="netprofit">
                                  <p>
                                    Net Profit <span>-2.13%</span>
                                  </p>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div
                    className="tab-pane fade"
                    id="pills-paused"
                    role="tabpanel"
                    aria-labelledby="pills-paused-tab"
                  >
                    <div className="container-fluid">
                      <div className="row">
                        <div className="col-md-12 p-0">
                          <div className="crypto-stats">
                            <div className="row">
                              <div className="col-md-12 col-12 col-sm-12 col-lg-12 col-xl-6 stats-bar">
                                <div className="bitcoin">
                                  <i className="fab fa-bitcoin"></i>
                                </div>
                                <div className="high-low">
                                  <p>
                                    Buy Low Sell High{" "}
                                    <i className="ml-1 fas fa-arrow-circle-down"></i>
                                  </p>
                                </div>
                                <div className="demo">
                                  <p>Demo</p>
                                </div>
                                <div className="chart">
                                  <img
                                    src="files/images/dashboard/chart-image.svg"
                                    alt=""
                                  />
                                </div>
                              </div>
                              <div className="col-md-12 col-12 col-sm-12 col-lg-12 col-xl-6 stats-bar">
                                <div className="status-toggle">
                                  <p>Status</p>
                                  <label className="switch">
                                    <input type="checkbox" checked />
                                    <span className="slider round"></span>
                                  </label>
                                </div>
                                <div className="growth">
                                  <p>
                                    Growth <span>-2.13%</span>
                                  </p>
                                </div>
                                <div className="netprofit">
                                  <p>
                                    Net Profit <span>-2.13%</span>
                                  </p>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div
                    className="tab-pane fade"
                    id="pills-complete"
                    role="tabpanel"
                    aria-labelledby="pills-complete-tab"
                  >
                    <div className="container-fluid">
                      <div className="row">
                        <div className="col-md-12 p-0">
                          <div className="crypto-stats">
                            <div className="row">
                              <div className="col-md-12 col-12 col-sm-12 col-lg-12 col-xl-6 stats-bar">
                                <div className="bitcoin">
                                  <i className="fab fa-bitcoin"></i>
                                </div>
                                <div className="high-low">
                                  <p>
                                    Buy Low Sell High{" "}
                                    <i className="ml-1 fas fa-arrow-circle-down"></i>
                                  </p>
                                </div>
                                <div className="demo">
                                  <p>Demo</p>
                                </div>
                                <div className="chart">
                                  <img
                                    src="files/images/dashboard/chart-image.svg"
                                    alt=""
                                  />
                                </div>
                              </div>
                              <div className="col-md-12 col-12 col-sm-12 col-lg-12 col-xl-6 stats-bar">
                                <div className="status-toggle">
                                  <p>Status</p>
                                  <label className="switch">
                                    <input type="checkbox" checked />
                                    <span className="slider round"></span>
                                  </label>
                                </div>
                                <div className="growth">
                                  <p>
                                    Growth <span>-2.13%</span>
                                  </p>
                                </div>
                                <div className="netprofit">
                                  <p>
                                    Net Profit <span>-2.13%</span>
                                  </p>
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

export default RulesDashboard;
