import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import Sidebar from "../components/Sidebar";
import { useDispatch, useSelector } from 'react-redux'
import { socket } from "../utils/socket";
import { getUserBalance } from "../actions/balances/balances";
import { ruleListing } from "../actions/rules/rules";



const RulesDashboard = () => {

  const dispatch = useDispatch()
  const { user } = useSelector(s => s.Auth)
  const { rulesList } = useSelector(s => s.Rules)
  console.log("🚀 ~ file: RulesDashboard.js ~ line 16 ~ RulesDashboard ~ rulesList", rulesList)
  var date = new Date(user.createdAt)

  const [getBalance, setgetBalance] = useState({
    exchange: 'balance_binance',
    userId: user._id
  })

  const socketExchange = {
    exchange: 'market_prices_binance'
  }

  const [ruleListData, setruleListData] = useState({
    user_id: user._id,
    tabName: 'all'
  })
  console.log("🚀 ~ file: RulesDashboard.js ~ line 31 ~ RulesDashboard ~ ruleListData", ruleListData)

  const tabHandler = (e) =>{
  console.log("🚀 ~ file: RulesDashboard.js ~ line 30 ~ tabHandler ~ obj", e.target.name)
      setruleListData({ ...ruleListData, tabName: e.target.name })

      
      
  }


  useEffect(() => {

    dispatch(getUserBalance(getBalance))
      
    
    const skt = socket();
    setInterval(() => {
      skt.emit('getPrices' , socketExchange.exchange);

    },10000)

    skt.on("sendPrices" , (data) => {
      console.log(data);
    })

    dispatch(ruleListing(ruleListData))

  },[ruleListData])

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
                  onClick={(e)=> tabHandler(e)}
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
                      name='all'
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
                      name='active'
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
                      name='pause'
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
                      name='completed'
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

                          {rulesList?.data?.map((obj, ind)=>(
                            <div className="crypto-stats">
                            <div className="row" key={ind}>
                              <div className="col-md-12 col-12 col-sm-12 col-lg-12 col-xl-6 stats-bar">
                                <div className="bitcoin">
                                  <i className="fab fa-bitcoin"></i>
                                </div>
                                <div className="high-low">
                                  <p>
                                    {obj.name}{" "}
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
                                    Growth <span>{obj.buy_symbol_price}%</span>
                                  </p>
                                </div>
                                <div className="netprofit">
                                  <p>
                                    Net Profit <span>{obj.use_wallet_price}%</span>
                                  </p>
                                </div>
                              </div>
                            </div>
                          </div>  
                          ))}
                          
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
