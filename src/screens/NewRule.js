import React, { useState } from "react";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { createNewRule } from "../actions/exchange/exchange";
import { directOrderRule } from "../actions/rules/rules";
import { timerRule } from "../actions/rules/rules";
import { getExchangeAssets } from "../actions/user/user";
import Sidebar from "../components/Sidebar";
import { socket } from "../utils/socket";
import { getUserBalance } from "../actions/balances/balances";
import { ruleListing } from "../actions/rules/rules";
import { useHistory } from "react-router-dom";



const NewRule = () => {
  const date = new Date();
  let history = useHistory();

  const [timerTab, settimerTab] = useState(false);
  const [directOrderTab, setdirectOrderTab] = useState(false);

  const navArray = ["Event", "Timer", "Direct Order"];

  const [toogler, setToogler] = useState(false);
  // const [selectedExchange, setSelectedExchange] = useState(false);

  const { exchanges } = useSelector((s) => s.Exchange);
  const { binanceAssets } = useSelector((s) => s.User);

  const { userBalance } = useSelector((s) => s.Balance);
  console.log("🚀 ~ file: NewRule.js ~ line 26 ~ NewRule ~ userBalance", userBalance)

  const dispatch = useDispatch();
  const { user } = useSelector((s) => s.Auth);
  const [currentDateTime, setcurrentDateTime] = useState();


  const [ruleListData, setruleListData] = useState({
    user_id: user._id,
    tabName: 'all'
  })
  console.log("🚀 ~ file: RulesDashboard.js ~ line 31 ~ RulesDashboard ~ ruleListData", ruleListData)

  const tabHandler = (e) =>{
  console.log("🚀 ~ file: RulesDashboard.js ~ line 30 ~ tabHandler ~ obj", e.target.name)
      setruleListData({ ...ruleListData, tabName: e.target.name })
  }

  const socketExchange = {
    exchange: 'market_prices_binance'
  }

  const [getBalance, setgetBalance] = useState({
    exchange: 'balance_binance',
    user_id : user._id
  })

  useEffect(() => {

    dispatch(getUserBalance(getBalance))
      
    
    const skt = socket();
    setInterval(() => {
      skt.emit('getPrices' , socketExchange.exchange);

    },10000)

    skt.on("sendPrices" , (data) => {
      console.log(data);
    })

    // dispatch(ruleListing(ruleListData))`

  },[ruleListData])



  const [newRule, setNewRule] = useState({
    // demoExchange: '',
    exchange: "Binance",
    place: "",
    coin: "",
    event: {
      roleType: "event",
      user_id: user._id,
      buy_symbol: "",
      use_wallet: "",
      // status: 'new',
      // created_date: date.toISOString(),
      has_condition: "",
      has_checking: "",
      quantity: "",
      quantity_behaviour: "usd",
      name: "",
      exchange: "Binance",
    },
    timer: {
      user_id: user._id,
      action: "buy",
      quantity: "0",
      quantity_behaviour: "usd",
      buy_symbol: "QTUMBTC",
      time_condition: "Every",
      use_wallet: "BTCUSDT",
      exchange: "Binance",
      name: "",
      roleType: "timer",
      startTimeType: 5,
    },
    order: {
      user_id: user._id,
      buy_symbol: "QTUMBTC",
      use_wallet: "BTCUSDT",
      roleType: "order",
      action: "buy",
      quantity: 1,
      quantity_behaviour: "usd",
      exchange: "Binance",
    },
  });

  // const { demoExchange, startDate, executeTime, ruleName, coin, exchange, place, event, timer, order } = newRule
  // const { type, rating, price } = event
  // const { amount, action } = order

  const changeHandler = (e) => {
    const { name, value } = e.target;
    setNewRule({
      ...newRule,
      ...newRule.event,
      ...newRule.timer,
      order: { ...newRule.order, [name]: value },
      event: { ...newRule.event, [name]: value },
      timer: { ...newRule.timer, [name]: value },
    });
  };

  console.log("🚀 ~ file: NewRule.js ~ line 28 ~ NewRule ~ newRule", newRule);

  const onExchangeSelectHandler = (e) => {
    const value = e.target.value;

    setNewRule({
      ...newRule,
      order: { ...newRule.order, exchange: value },
      event: { ...newRule.event, exchange: value },
      timer: { ...newRule.timer, exchange: value },
    });
    console.log(
      "🚀 ~ file: NewRule.js ~ line 95 ~ onExchangeSelectHandler ~ exchange",
      ...newRule?.timer?.exchange
    );
    console.log(
      "🚀 ~ file: NewRule.js ~ line 84 ~ onExchangeSelectHandler ~ e",
      e
    );

    // if (e.target.value !== "null") {
    //   setSelectedExchange(true);
    //   dispatch(getExchangeAssets(e.target.value));
    // } else {
    //   setSelectedExchange(false);
    // }
  };

  const launchHandler = (e) => {
    e.preventDefault();
    directOrderTab
      ? dispatch(
          directOrderRule({ ...newRule.order, exchange: newRule.exchange }),
          history.push("/rule-dsh")
        )
      : timerTab
      ? dispatch(timerRule({ ...newRule.timer, exchange: newRule.exchange }))
      : dispatch(
          directOrderRule({ ...newRule.event, exchange: newRule.exchange })
        );

    // dispatch(createNewRule(newRule.order))
  };

  const palceTypeHandler = (value) => {
    // dispatch(createNewRule(newRule))
    // settimerTab(true)
    if (value === "timer") {
      settimerTab(true);
    } else if (value === "direct") {
      setdirectOrderTab(true);
      settimerTab(false);
    } else {
      settimerTab(false);
      setdirectOrderTab(false);
    }
    setNewRule({
      ...newRule,
      order: { ...newRule.order, roleType: value },
      event: { ...newRule.event, roleType: value },
    });
  };

  return (
    <div className="container-fluid crypto-container">
      <div className="row">
        <div className="col-md-12 p-0">
          <div className="s-layout">
            <Sidebar />
            <main class="s-layout__content">
              <div class="container-fluid crypto-container">
                <form onSubmit={launchHandler}>
                  <div class="row exchange prices">
                    <div class="col-md-7 col-xl-9 col-lg-8 col-12">
                      <h2>New Rule</h2>
                    </div>
                    <div class="col-md-5 col-xl-3 col-lg-4 col-12">
                      <div class="form">
                        <div class="form-group d-flex align-items-center">
                          <span>View prices in</span>
                          <select
                            id="inputState"
                            class=" ml-2 custom-select form-control"
                          >
                            <option selected="usd">USD</option>
                            <option value="gbp">GBP</option>
                            <option value="btc">BTC</option>
                          </select>
                        </div>
                      </div>
                    </div>
                    <div class="col-md-12">
                      <div class="row demo-exchange-row">
                        <div class="col-md-6 col-xl-3 col-lg-3 col-12">
                          <div class="form-group">
                            <input
                              type="text"
                              class="form-control"
                              id="demo"
                              placeholder="Demo exchange"
                              // name='demoExchange'
                              // onChange={changeHandler}
                            />
                          </div>
                        </div>
                        <div class="col-md-6 col-xl-3 col-lg-3 col-12">
                          <div class="form-group">
                            <select
                              id="inputState"
                              name="exchange"
                              class=" ml-2 custom-select form-control"
                              onChange={(e) => onExchangeSelectHandler(e)}
                              // onChange={changeHandler}
                            >
                              <option
                                value="Binance"
                                defaultValue={newRule.exchange}
                              >
                                Binance
                              </option>
                              {/* {exchanges &&
                              exchanges.exchanges.map((ex, ind) => {
                                return (
                                  <option key={ind} value={ex.exchangeName}>
                                    {ex.exchangeName}
                                  </option>
                                );
                              })} */}
                            </select>
                          </div>
                        </div>
                        <div class="col-md-12 col-xl-4 col-lg-4 col-12">
                          <div class="add-exchange">
                            <i class="fa-2x fal fa-plus-circle mr-2"></i>{" "}
                            <span>Add Exchange</span>
                          </div>
                        </div>
                        {/* <div class="col-12 mt-4">
                            <div class="alert-notification">
                              <i class="fal fa-exclamation-circle mr-2"></i>{" "}
                              <span>Please select exchange first</span>
                            </div>
                          </div> */}
                        <div class="col-12 mt-4">
                          <div class="Show_balnce_wrapper">
                            {/* <i class="fal fa-exclamation-circle mr-2"></i> */}
                            <div className="Show_balnce_heading">
                              <h4>Your coins on Demo exchange</h4>
                              {/* <span>~ $460,319.27</span> */}
                            </div>

                            <div className="blance_exchanges row m-0">
                              {userBalance?.map((obj, ind) => (
                                <div className="col-md-4 mb-5" key={ind}>
                                  <div className="blance_exchanges_header">
                                    <span className="exchange_image">
                                      <img src="https://bitcoin.org/img/icons/opengraph.png?1641218872" />
                                    </span>
                                    <h5>{obj.symbol}</h5>
                                  </div>
                                  <div className="blance_exchanges_balnce">
                                    <h4>{obj.balance}</h4>
                                    {/* <p>~ $460,319.27</p> */}
                                  </div>
                                </div>
                              ))}
                            </div>
                          </div>
                        </div>

                        <div class="on-state">
                          <p>ON</p>
                        </div>
                      </div>
                      <div class="row demo-exchange-row">
                        <div class="col-md-12">
                          <ul
                            class="nav nav-pills mb-3"
                            id="rule-tab"
                            role="tablist"
                          >
                            <li class="nav-item">
                              <a
                                class="nav-link active"
                                id="pills-event-tab"
                                data-toggle="pill"
                                href="#pills-event"
                                role="tab"
                                aria-controls="pills-event"
                                aria-selected="true"
                                onClick={() => palceTypeHandler("event")}
                              >
                                Event <i class="ml-2 fa fa-bolt"></i>
                              </a>
                            </li>
                            <li class="nav-item">
                              <a
                                class="nav-link"
                                id="pills-timer-tab"
                                data-toggle="pill"
                                href="#pills-timer"
                                role="tab"
                                aria-controls="pills-timer"
                                aria-selected="false"
                                onClick={() => palceTypeHandler("timer")}
                              >
                                Timer <i class="ml-2 fa fa-clock"></i>
                              </a>
                            </li>
                            <li class="nav-item">
                              <a
                                class="nav-link"
                                id="pills-order-tab"
                                data-toggle="pill"
                                href="#pills-order"
                                role="tab"
                                aria-controls="pills-order"
                                aria-selected="false"
                                name="roleType"
                                onClick={() => palceTypeHandler("direct")}
                              >
                                Direct Order <i class="ml-2 fa fa-user"></i>
                              </a>
                            </li>
                          </ul>
                          <div class="tab-content" id="pills-tabContent">
                            <div
                              class="tab-pane fade show active"
                              id="pills-event"
                              role="tabpanel"
                              aria-labelledby="pills-event-tab"
                            >
                              <div class="container-fluid crypto-container">
                                <div class="row">
                                  <div class="col-md-12 p-0">
                                    <div class="row">
                                      <div class="col-md-6 col-xl-3 col-lg-3 col-12">
                                        <div class="form-group d-flex align-items-center">
                                          <select
                                            id="inputState"
                                            class="custom-select form-control mr-2 mb-2 mb-md-2 mb-lg-0"
                                            name="symbol"
                                            onChange={changeHandler}
                                            defaultValue={newRule.event.symbol}
                                          >
                                            <option selected="">
                                              any coin
                                            </option>
                                            <option value="anyofmycoins">
                                              any of my coins
                                            </option>
                                            {binanceAssets?.coins &&
                                              binanceAssets.coins.map(
                                                (c, ind) => {
                                                  return (
                                                    <option
                                                      key={ind}
                                                      value={c.coin}
                                                    >
                                                      {c.coin}
                                                    </option>
                                                  );
                                                }
                                              )}
                                          </select>
                                          <span>has</span>
                                        </div>
                                      </div>
                                      <div class="col-md-6 col-xl-3 col-lg-3 col-12">
                                        <div class="form-group">
                                          <select
                                            id="inputState"
                                            class="custom-select form-control  mb-2 mb-md-2 mb-lg-0"
                                            name="has_condition"
                                            onChange={changeHandler}
                                          >
                                            <option selected="" value={null}>
                                              ---
                                            </option>
                                            <option value="price">Price</option>
                                            <option value="volume">
                                              Volume
                                            </option>
                                            <option value="marketcap">
                                              Marketcap
                                            </option>
                                          </select>
                                        </div>
                                      </div>
                                      <div class="col-md-6 col-xl-3 col-lg-3 col-12">
                                        <div class="form-group">
                                          <select
                                            id="inputState"
                                            class="custom-select form-control  mb-2 mb-md-2 mb-lg-0"
                                            name="has_match_condition"
                                            // onChange={(e) => setCoinPresidence(e.target.value)}
                                            onChange={changeHandler}
                                          >
                                            <option selected="" value={null}>
                                              ---
                                            </option>
                                            <option value="increase">
                                              Increased By
                                            </option>
                                            <option value="decrease">
                                              Decreased By
                                            </option>
                                            <option value="lower">
                                              Lower Than
                                            </option>
                                            <option value="greater">
                                              Greater Than
                                            </option>
                                          </select>
                                        </div>
                                      </div>
                                      <div class="col-md-6 col-xl-3 col-lg-3 col-12">
                                        <div class="form-group currency-select ">
                                          <input
                                            type="number"
                                            placeholder="Checking Value"
                                            name="checking_value"
                                            onChange={changeHandler}
                                          />
                                          <select
                                            id="inputState"
                                            name="checking_symbol"
                                            class="custom-select form-control"
                                            onChange={changeHandler}
                                          >
                                            <option selected="usd">USD</option>
                                            <option value="percentage">
                                              %
                                            </option>
                                            <option value="btc">BTC</option>
                                          </select>
                                        </div>
                                      </div>

                                      <div class="col-md-6 col-xl-3 col-lg-3 col-12 pt-2">
                                        <div class="form-group">
                                          <select
                                            id="inputState"
                                            class="custom-select form-control"
                                            name="checking_time"
                                            onChange={changeHandler}
                                          >
                                            <option
                                              selected
                                              value="from_current_live_price"
                                            >
                                              from current live price
                                            </option>
                                            <option value="1">
                                              within 1 minute
                                            </option>
                                            <option value="5">
                                              within 5 minutes
                                            </option>
                                            <option value="15">
                                              within 15 minutes
                                            </option>
                                            <option value="30">
                                              within 30 minutes
                                            </option>
                                          </select>
                                        </div>
                                      </div>
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </div>
                            <div
                              class="tab-pane fade"
                              id="pills-timer"
                              role="tabpanel"
                              aria-labelledby="pills-timer-tab"
                            >
                              <div class="container-fluid crypto-container">
                                <div class="row">
                                  <div class="col-md-12 p-0">
                                    <div class="row">
                                      <div class="col-md-6 col-xl-4 col-lg-4 col-12">
                                        <div class="form-group d-flex align-items-center">
                                          <select
                                            id="inputState"
                                            class="custom-select form-control  mb-2 mb-md-2 mb-lg-0"
                                            onChange={changeHandler}
                                            name="time_condition"
                                            required
                                          >
                                            <option>Every</option>
                                            <option value="on">On</option>
                                            <option value="rightnow">
                                              Right Now
                                            </option>
                                          </select>
                                        </div>
                                      </div>
                                      <div class="col-md-6 col-xl-4 col-lg-4 col-12">
                                        <div class="form-group  d-flex align-items-center  mb-2 mb-md-2 mb-lg-0">
                                          <select
                                            id="inputState"
                                            class="custom-select d-flex form-control mr-2"
                                            onChange={changeHandler}
                                            name="startTimeType"
                                            defaultValue={
                                              newRule.timer.startTimeType
                                            }
                                            required
                                          >
                                            <option value={5}>5 minutes</option>
                                            <option value={10}>
                                              10 minutes
                                            </option>
                                            <option value={15}>
                                              15 minutes
                                            </option>
                                            <option value={30}>
                                              30 minutes
                                            </option>
                                            <option value={60}>1 hour</option>
                                            <option value={60 * 24 * 7}>
                                              1 week
                                            </option>
                                            <option value={60 * 24 * 30}>
                                              1 month
                                            </option>
                                          </select>
                                          <span>Starting</span>
                                        </div>
                                      </div>
                                      <div class="col-md-6 col-xl-4 col-lg-4 col-12 ">
                                        <div class="form-group">
                                          <input
                                            type="date"
                                            onChange={changeHandler}
                                            name="startTime"
                                            class="form-control"
                                          />
                                        </div>
                                      </div>
                                    </div>
                                  </div>
                                </div>

                                {/* Timer Action */}

                                <div class="row">
                                  <div class="col-md-6 col-xl-4 col-lg-4 col-12  mb-2 mb-md-2 mb-lg-0">
                                    <div
                                      class="form-group  d-flex align-items-center "
                                      style={{
                                        borderRadius: "22px",
                                        border: "2px solid #2b3990",
                                      }}
                                    >
                                      <span
                                        style={{
                                          display: "flex",
                                          width: "100%",
                                        }}
                                      >
                                        <input
                                          type="number"
                                          placeholder="enter quantity"
                                          class="form-control change-form-control"
                                          name="quantity"
                                          style={{
                                            width: "50%",
                                            textAlign: "center",
                                          }}
                                          defaultValue={newRule.timer.quantity}
                                          onChange={changeHandler}
                                        />

                                        <select
                                          id="inputState"
                                          name="quantity_behaviour"
                                          class="custom-select d-flex form-control change-custom-select"
                                          onChange={changeHandler}
                                          style={{ width: "50%" }}
                                        >
                                          <option selected value="usd">
                                            USD
                                          </option>
                                          <option value="percentage">%</option>
                                          <option value="coins">Coins</option>
                                        </select>
                                      </span>
                                    </div>
                                  </div>

                                  <div class="col-md-6 col-xl-4 col-lg-4 col-12">
                                    <div class="form-group d-flex align-items-center">
                                      <span class="mx-2">of</span>
                                      <select
                                        id="inputState"
                                        name="buy_symbol"
                                        class="custom-select form-control  mb-2 mb-md-2 mb-lg-0"
                                        onChange={changeHandler}
                                        defaultValue={newRule.timer.buy_symbol}
                                        required
                                      >
                                        <option value="">---</option>
                                        <option value="QTUMBTC">QTUMBTC</option>
                                        <option value="QTUMUSDT">
                                          QTUMUSDT
                                        </option>
                                      </select>

                                      <span class="mx-2">
                                        <span>with my</span>
                                      </span>
                                    </div>
                                  </div>
                                  <div class="col-md-6 col-xl-4 col-lg-4 col-12">
                                    <div class="form-group">
                                      <select
                                        id="inputState"
                                        name="use_wallet"
                                        class="custom-select d-flex form-control mr-2"
                                        placeholder="Action"
                                        defaultValue={newRule.timer.use_wallet}
                                        onChange={changeHandler}
                                      >
                                        <option>---</option>
                                        <option value="BTCUSDT">BTCUSDT</option>
                                        <option value="ETHBTC">ETHBTC</option>
                                      </select>
                                    </div>
                                  </div>

                                  <div class="col-md-6 col-xl-4 col-lg-4 col-12">
                                    <div class="pt-2">
                                      <span>Action</span>
                                    </div>

                                    <div class="form-group">
                                      <select
                                        id="inputState"
                                        name="action"
                                        class="custom-select d-flex form-control mr-2"
                                        placeholder="Action"
                                        onChange={changeHandler}
                                        defaultValue={newRule.timer.action}
                                      >
                                        <option selected value="buy">
                                          BUY
                                        </option>
                                        <option value="sell">SELL</option>
                                      </select>
                                    </div>
                                  </div>
                                </div>

                                {/* Timer Action */}
                              </div>
                            </div>
                            <div
                              class="tab-pane fade"
                              id="pills-order"
                              role="tabpanel"
                              aria-labelledby="pills-order-tab"
                            >
                              <div class="container-fluid crypto-container">
                                <div class="row">
                                  <div class="col-md-12 p-0">
                                    <div class="row">
                                      <div class="col-md-6 col-xl-4 col-lg-4 col-12  mb-2 mb-md-2 mb-lg-0">
                                        <div
                                          class="form-group  d-flex align-items-center "
                                          style={{
                                            borderRadius: "22px",
                                            border: "2px solid #2b3990",
                                          }}
                                        >
                                          <span
                                            style={{
                                              display: "flex",
                                              width: "100%",
                                            }}
                                          >
                                            <input
                                              type="number"
                                              // placeholder="enter quantity"
                                              class="form-control change-form-control"
                                              name="quantity"
                                              style={{
                                                width: "50%",
                                                textAlign: "center",
                                              }}
                                              onChange={changeHandler}
                                              defaultValue={
                                                newRule.order.quantity
                                              }
                                            />

                                            <select
                                              id="inputState"
                                              name="quantity_behaviour"
                                              class="custom-select d-flex form-control change-custom-select"
                                              onChange={changeHandler}
                                              style={{ width: "50%" }}
                                              defaultValue={
                                                newRule.order.quantity_behaviour
                                              }
                                            >
                                              <option value="usd">USD</option>
                                              <option value="percentage">
                                                %
                                              </option>
                                              <option value="coins">
                                                Coins
                                              </option>
                                            </select>
                                          </span>
                                        </div>
                                      </div>

                                      <div class="col-md-6 col-xl-4 col-lg-4 col-12">
                                        <div class="form-group d-flex align-items-center">
                                          <span class="mx-2">of</span>
                                          <select
                                            id="inputState"
                                            name="buy_symbol"
                                            class="custom-select form-control  mb-2 mb-md-2 mb-lg-0"
                                            onChange={changeHandler}
                                          >
                                            <option
                                              defaultValue={
                                                newRule.order.buy_symbol
                                              }
                                              value="QTUMBTC"
                                            >
                                              QTUMBTC
                                            </option>
                                            <option value="QTUMUSDT">
                                              QTUMUSDT
                                            </option>
                                          </select>

                                          <span class="mx-2">
                                            <span>with my</span>
                                          </span>
                                        </div>
                                      </div>
                                      <div class="col-md-6 col-xl-4 col-lg-4 col-12">
                                        <div class="form-group">
                                          <select
                                            id="inputState"
                                            name="use_wallet"
                                            class="custom-select d-flex form-control mr-2"
                                            placeholder="Action"
                                            onChange={changeHandler}
                                          >
                                            <option
                                              defaultValue={
                                                newRule.order.use_wallet
                                              }
                                              value="BTCUSDT"
                                            >
                                              BTCUSDT
                                            </option>
                                            <option value="ETHBTC">
                                              ETHBTC
                                            </option>
                                          </select>
                                        </div>
                                      </div>

                                      <div class="col-md-6 col-xl-4 col-lg-4 col-12">
                                        <div class="pt-2">
                                          <span>Action</span>
                                        </div>

                                        <div class="form-group">
                                          <select
                                            id="inputState"
                                            name="action"
                                            class="custom-select d-flex form-control mr-2"
                                            placeholder="Action"
                                            onChange={changeHandler}
                                          >
                                            <option
                                              selected
                                              value="buy"
                                              defaultValue={
                                                newRule.order.action
                                              }
                                            >
                                              BUY
                                            </option>
                                            <option value="sell">SELL</option>
                                          </select>
                                        </div>
                                      </div>
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                        <div class="on-state">
                          <p>IF</p>
                        </div>
                      </div>
                      <div class="row mb-2">
                        <div class="col-md-12">
                          <div
                            class={
                              toogler
                                ? `position-absolute text-right floating-action-menu floating-action-menu-position active`
                                : "position-absolute text-right floating-action-menu floating-action-menu-position"
                            }
                          >
                            <div class="action-menu">
                              <div class="floating-action">
                                <div class="badge">If</div>
                                <a class="btn-floating btn-sm">
                                  <i class="fa fa-bolt"></i>
                                </a>
                              </div>
                              <div class="floating-action">
                                <div class="badge">Operator</div>
                                <a class="btn-floating btn-sm">
                                  <i class="fas fa-exchange-alt"></i>
                                </a>
                              </div>
                              <div class="floating-action">
                                <div class="badge">Action</div>
                                <a class="btn-floating btn-sm">
                                  <i class="fas fa-arrow-circle-right"></i>
                                </a>
                              </div>
                            </div>
                            <div class="d-block action-button">
                              <span>Add</span>
                              <a
                                class="btn-floating btn-primary ml-2"
                                onClick={() => setToogler(!toogler)}
                              >
                                <i class="fas fa-plus"></i>
                              </a>
                            </div>
                          </div>
                        </div>
                      </div>

                      {timerTab ? (
                        <div class="row demo-exchange-row">
                          <div class="col-md-12 col-xl-10 col-lg-12">
                            <div className="col-md-12">
                              <div class="row execute">
                                <div class="col-md-12 col-xl-8 col-lg-8">
                                  <div class="row m-0 form-group execution-time  d-flex align-items-center">
                                    <div className="col-md-4">
                                      <span class="mr-2">Execute</span>
                                      <input
                                        type="text"
                                        className="form-control w-5"
                                        id="demo"
                                        placeholder="1"
                                        name="executeTime"
                                        onChange={changeHandler}
                                      />
                                    </div>
                                    <div className="col-md-4">
                                      <span className="ml-2">times</span>
                                      <select className="form-control custom-select">
                                        <option>in total</option>
                                        <option>but not more then</option>
                                      </select>
                                    </div>
                                    <div className="col-md-4">
                                      <span>once every</span>
                                      <select className="form-control custom-select">
                                        <option>5 Minutes</option>
                                        <option>10 Minutes</option>
                                        <option>15 Minutes</option>
                                        <option>30 Minutes</option>
                                        <option>1 hour</option>
                                        <option>3 hour</option>
                                        <option>6 hour</option>
                                        <option>12 hour</option>
                                        <option>1 day</option>
                                        <option>3 days</option>
                                        <option>1 week</option>
                                        <option>2 weeks</option>
                                        <option>3 weeks</option>
                                        <option>4 weeks</option>
                                      </select>
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                          <div class="on-state">
                            <p>EXECUTE</p>
                          </div>
                        </div>
                      ) : directOrderTab ? null : (
                        <div>
                          <div class="row demo-exchange-row">
                            <div class="col-md-12">
                              <div class="tab-content" id="pills-tabContent">
                                <div
                                  class="tab-pane fade show active"
                                  id="pills-event"
                                  role="tabpanel"
                                  aria-labelledby="pills-event-tab"
                                >
                                  <div class="container-fluid crypto-container">
                                    <div class="row">
                                      <div class="col-md-12 p-0">
                                        <div class="row">
                                          <div class="col-md-6 col-xl-4 col-lg-4 col-12  mb-2 mb-md-2 mb-lg-0">
                                            <div
                                              class="form-group  d-flex align-items-center"
                                              style={{
                                                borderRadius: "22px",
                                                border: "2px solid #2b3990",
                                              }}
                                            >
                                              <span
                                                style={{
                                                  display: "flex",
                                                  width: "100%",
                                                }}
                                              >
                                                <input
                                                  type="number"
                                                  placeholder="quantity"
                                                  class="form-control change-form-control"
                                                  name="quantity"
                                                  style={{
                                                    width: "50%",
                                                    textAlign: "center",
                                                  }}
                                                  onChange={changeHandler}
                                                />

                                                <select
                                                  id="inputState"
                                                  name="quantity_behaviour"
                                                  class="custom-select d-flex form-control change-custom-select"
                                                  onChange={changeHandler}
                                                  style={{ width: "50%" }}
                                                >
                                                  <option selected value="usd">
                                                    USD
                                                  </option>
                                                  <option value="percentage">
                                                    %
                                                  </option>
                                                  <option value="coins">
                                                    Coins
                                                  </option>
                                                </select>
                                              </span>
                                            </div>
                                          </div>

                                          <div class="col-md-6 col-xl-4 col-lg-4 col-12">
                                            <div class="form-group d-flex align-items-center">
                                              <span class="mx-2">of</span>
                                              <select
                                                id="inputState"
                                                name="buy_symbol"
                                                class="custom-select form-control  mb-2 mb-md-2 mb-lg-0"
                                                onChange={changeHandler}
                                              >
                                                <option value="">---</option>
                                                <option value="QTUMBTC">
                                                  QTUMBTC
                                                </option>
                                                <option value="QTUMUSDT">
                                                  QTUMUSDT
                                                </option>
                                              </select>

                                              <span class="mx-2">
                                                <span>with my</span>
                                              </span>
                                            </div>
                                          </div>
                                          <div class="col-md-6 col-xl-4 col-lg-4 col-12">
                                            <div class="form-group">
                                              <select
                                                id="inputState"
                                                name="use_wallet"
                                                class="custom-select d-flex form-control mr-2"
                                                placeholder="Action"
                                                onChange={changeHandler}
                                              >
                                                <option>---</option>
                                                <option value="BTCUSDT">
                                                  BTCUSDT
                                                </option>
                                                <option value="ETHBTC">
                                                  ETHBTC
                                                </option>
                                              </select>
                                            </div>
                                          </div>

                                          <div class="col-md-6 col-xl-4 col-lg-4 col-12">
                                            <div class="pt-2">
                                              <span>Action</span>
                                            </div>

                                            <div class="form-group">
                                              <select
                                                id="inputState"
                                                name="action"
                                                class="custom-select d-flex form-control mr-2"
                                                placeholder="Action"
                                                onChange={changeHandler}
                                              >
                                                <option value="">
                                                  Select Action
                                                </option>
                                                <option value="buy">BUY</option>
                                                <option value="sell">
                                                  SELL
                                                </option>
                                              </select>
                                            </div>
                                          </div>
                                        </div>
                                      </div>
                                    </div>
                                  </div>
                                </div>
                                <div
                                  class="tab-pane fade"
                                  id="pills-timer"
                                  role="tabpanel"
                                  aria-labelledby="pills-timer-tab"
                                >
                                  <div class="container-fluid crypto-container">
                                    <div class="row">
                                      <div class="col-md-12 p-0">
                                        <div class="row">
                                          <div class="col-md-6 col-xl-4 col-lg-4 col-12">
                                            <div class="form-group d-flex align-items-center">
                                              <select
                                                id="inputState"
                                                class="custom-select form-control"
                                                required
                                                onChange={changeHandler}
                                              >
                                                <option value="every">
                                                  Every
                                                </option>
                                                <option value="on">On</option>
                                                <option value="right_now">
                                                  Right Now
                                                </option>
                                              </select>
                                            </div>
                                          </div>
                                          <div class="col-md-6 col-xl-4 col-lg-4 col-12">
                                            <div class="form-group  d-flex align-items-center">
                                              <select
                                                id="inputState"
                                                class="custom-select d-flex form-control mr-2"
                                                required
                                                onChange={changeHandler}
                                              >
                                                <option selected="">
                                                  5 minutes
                                                </option>
                                                <option value="10 minutes">
                                                  10 minutes
                                                </option>
                                                <option value="15 minutes">
                                                  15 minutes
                                                </option>
                                                <option value="30 minutes">
                                                  30 minutes
                                                </option>
                                                <option value="hour">
                                                  1 hour
                                                </option>
                                                <option value="week">
                                                  1 week
                                                </option>
                                                <option value="month">
                                                  1 month
                                                </option>
                                              </select>
                                              <span>Starting</span>
                                            </div>
                                          </div>
                                          <div class="col-md-6 col-xl-4 col-lg-4 col-12">
                                            <div class="form-group">
                                              <input
                                                type="date"
                                                name="execution_time"
                                                class="form-control"
                                                required
                                                onChange={changeHandler}
                                              />
                                            </div>
                                          </div>
                                        </div>
                                      </div>
                                    </div>
                                  </div>
                                </div>
                                <div
                                  class="tab-pane fade"
                                  id="pills-order"
                                  role="tabpanel"
                                  aria-labelledby="pills-order-tab"
                                >
                                  <div class="container-fluid crypto-container">
                                    <div class="row">
                                      <div class="col-md-12 p-0">
                                        <div class="row">
                                          <div class="col-md-6 col-xl-4 col-lg-4 col-12">
                                            <div
                                              class="form-group  d-flex align-items-center"
                                              style={{
                                                borderRadius: "22px",
                                                border: "2px solid #2b3990",
                                              }}
                                            >
                                              <span
                                                style={{
                                                  display: "flex",
                                                  width: "100%",
                                                }}
                                              >
                                                <input
                                                  type="number"
                                                  placeholder="quantity"
                                                  class="form-control change-form-control"
                                                  name="quantity"
                                                  style={{
                                                    width: "50%",
                                                    textAlign: "center",
                                                  }}
                                                  required
                                                  onChange={changeHandler}
                                                />

                                                <select
                                                  id="inputState"
                                                  name="quantity_behaviour"
                                                  class="custom-select d-flex form-control change-custom-select"
                                                  required
                                                  onChange={changeHandler}
                                                  style={{ width: "50%" }}
                                                >
                                                  <option selected value="usd">
                                                    USD
                                                  </option>
                                                  <option value="percentage">
                                                    %
                                                  </option>
                                                  <option value="coins">
                                                    Coins
                                                  </option>
                                                </select>
                                              </span>
                                            </div>
                                          </div>

                                          <div class="col-md-6 col-xl-4 col-lg-4 col-12">
                                            <div class="form-group d-flex align-items-center">
                                              <span class="mx-2">of</span>
                                              <select
                                                id="inputState"
                                                name="buy_symbol"
                                                class="custom-select form-control"
                                                required
                                                onChange={changeHandler}
                                              >
                                                <option value="">---</option>
                                                <option value="QTUMBTC">
                                                  QTUMBTC
                                                </option>
                                                <option value="QTUMUSDT">
                                                  QTUMUSDT
                                                </option>
                                              </select>

                                              <span class="mx-2">
                                                <span class="mx-2">
                                                  with my
                                                </span>
                                              </span>
                                            </div>
                                          </div>
                                          <div class="col-md-6 col-xl-4 col-lg-4 col-12">
                                            <div class="form-group">
                                              <select
                                                id="inputState"
                                                name="use_wallet"
                                                class="custom-select d-flex form-control mr-2"
                                                placeholder="Action"
                                                required
                                                onChange={changeHandler}
                                              >
                                                <option>---</option>
                                                <option value="BTCUSDT">
                                                  BTCUSDT
                                                </option>
                                                <option value="ETHBTC">
                                                  ETHBTC
                                                </option>
                                              </select>
                                            </div>
                                          </div>

                                          <div class="col-md-6 col-xl-4 col-lg-4 col-12">
                                            <div>
                                              <span>Action</span>
                                            </div>

                                            <div class="form-group">
                                              <select
                                                id="inputState"
                                                name="action"
                                                class="custom-select d-flex form-control mr-2"
                                                placeholder="Action"
                                                required
                                                onChange={changeHandler}
                                              >
                                                <option selected value="buy">
                                                  BUY
                                                </option>
                                                <option value="sell">
                                                  SELL
                                                </option>
                                              </select>
                                            </div>
                                          </div>
                                        </div>
                                      </div>
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </div>
                            <div class="on-state">
                              <p>THEN</p>
                            </div>
                          </div>

                          <div class="row demo-exchange-row">
                            <div class="col-md-12 col-xl-12 col-lg-12">
                              <div class="col-md-12 col-xl-12 col-lg-12">
                                <div class="row execute">
                                  <div class="col-md-12 col-xl-4 col-lg-4 pl-0">
                                    <div class="form-group d-flex align-items-center">
                                      <div class="form-group  d-flex align-items-center  mb-2 mb-md-2 mb-lg-0">
                                        <span class="mr-2">Start</span>
                                        <input
                                          type="date"
                                          class="form-control"
                                          name="execution_time"
                                          required
                                          onChange={changeHandler}
                                        />
                                      </div>
                                    </div>
                                  </div>
                                  <div class="col-md-12 col-xl-8 col-lg-8">
                                    <div class="form-group  execution-time d-flex align-items-center">
                                      <span class="mr-2">and execute</span>
                                      <input
                                        type="number"
                                        class="form-control"
                                        name="startTime"
                                        required
                                        onChange={changeHandler}
                                      />
                                      <span class="ml-2">times</span>
                                    </div>
                                  </div>
                                </div>
                                <div class="col-md-12 col-xl-8 col-lg-8">
                                  <div class="form-group  d-flex align-items-center">
                                    <span class="mr-2">and execute</span>
                                    <input
                                      type="number"
                                      class="form-control"
                                      id="demo"
                                      placeholder="1"
                                      name="checkingStartCount"
                                      required
                                      onChange={changeHandler}
                                    />
                                    <span class="ml-2">times</span>
                                  </div>
                                </div>
                              </div>
                            </div>
                            <div class="on-state">
                              <p>EXECUTE</p>
                            </div>
                          </div>
                        </div>
                      )}

                      <div class="row demo-exchange-row">
                        <div class="col-xl-12 col-lg-12 col-md-12">
                          <div class="col-xl-12 col-lg-12 col-md-12">
                            <div class="row execute">
                              <div class="col-md-12 col-xl-8 col-lg-7 pl-0">
                                <div class="form-group  d-flex align-items-center  mb-2 mb-md-2 mb-lg-0">
                                  <span class="mr-2 rule-name">
                                    Now name this rule
                                  </span>
                                  <input
                                    type="text"
                                    class="form-control"
                                    id="demo"
                                    placeholder="Eg. Drive and conquer"
                                    name="name"
                                    required
                                    onChange={changeHandler}
                                  />
                                </div>
                              </div>
                              <div class="col-md-12 col-xl-4 col-lg-5">
                                <div class="form-group  d-flex align-items-center whiite-space-pre">
                                  <button class="mr-2">Save Draft</button>
                                  <button type="submit">Launch</button>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                        <div class="on-state">
                          <p>GO</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </form>
              </div>
            </main>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NewRule;
