import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { createNewRule } from "../actions/exchange/exchange";
import { getExchangeAssets } from "../actions/user/user";
import Sidebar from "../components/Sidebar";

const NewRule = () => {

  const navArray = ['Event', 'Timer', 'Direct Order']
  const [navItems, setNavItems] = useState(navArray)
  // setNavItems(navArray)
  // console.log(navItems)
  const [toogler, setToogler] = useState(false);
  const [selectedExchange, setSelectedExchange] = useState(false);
  const [selectedCoin, setCoinCurrency] = useState("")
  const [coinMVP, setCoinPVM] = useState("")
  const [coinPresidencec, setCoinPresidence] = useState("")
  const { exchanges } = useSelector((s) => s.Exchange);
  const { binanceAssets } = useSelector((s) => s.User);

  const dispatch = useDispatch();
  const data = useSelector(s => s.Auth)
  // console.log(data)

  const [newRule, setNewRule] = useState({
    demoExchange: '',
    exchange: '',
    place: '',
    coin: '',
    event: {
      // coin:null,
      type: '',
      rating: '',
      price: ''
    },
    timer: {
      time: '',
      min: '',
      date: ''
    },
    order: {
      amount: '',
      action: '',
      // coin: ''
    },
    startDate: '',
    executeTime: '',
    ruleName: ''
  })

  const { demoExchange, startDate, executeTime, ruleName, coin, exchange, place, event, timer, order } = newRule
  const { type, rating, price } = event
  const { time, min, date } = timer
  const { amount, action } = order

  const changeHandler = (e) => {
    const { name, value } = e.target
    setNewRule({ ...newRule, ...newRule.event, ...newRule.timer, order: { ...order, [name]: value }, [name]: value })
    // setNewRule({ ...event, [e.target.name]: e.target.value})
    // setNewRule({ ...timer, [e.target.name]: e.target.value})
  }

  // console.log(newRule)

  const onExchangeSelectHandler = (e) => {
    console.log(e.target.value)
    if (e.target.value !== "null") {
      setSelectedExchange(true)
      dispatch(getExchangeAssets(e.target.value))
    } else {
      setSelectedExchange(false)

    }
  };


  const launchHandler = (e) => {
    e.preventDefault()
    console.log(newRule)
    dispatch(createNewRule(newRule.order))
  }


  const palceTypeHandler = (value) => {
    // dispatch(createNewRule(newRule))

    setNewRule({ ...newRule, order: { ...newRule.order, place: value }, place: value })

  }
  return (
    <div className="container-fluid crypto-container">
      <div className="row">
        <div className="col-md-12 p-0">
          <div className="s-layout">
            <Sidebar />
            <main class="s-layout__content">
              <div class="container-fluid crypto-container">
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
                          <option selected="">USD</option>
                          <option value="EURO">EURO</option>
                          <option value="GBP">GBP</option>
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
                            name='demoExchange'
                            onChange={changeHandler}
                          />
                        </div>
                      </div>
                      <div class="col-md-6 col-xl-3 col-lg-3 col-12">
                        <div class="form-group">
                          <select
                            id="inputState"
                            name='exchange'
                            class=" ml-2 custom-select form-control"
                            onChange={(e) => onExchangeSelectHandler(e)}
                            // onChange={changeHandler}
                          >
                            <option value="null" defaultValue>
                              Your Exchanges
                            </option>
                            {exchanges &&
                              exchanges.exchanges.map((ex, ind) => {
                                return (
                                  <option key={ind} value={ex.exchangeName}>
                                    {ex.exchangeName}
                                  </option>
                                );
                              })}
                          </select>
                        </div>
                      </div>
                      <div class="col-md-12 col-xl-4 col-lg-4 col-12">
                        <div class="add-exchange">
                          <i class="fa-2x fal fa-plus-circle mr-2"></i>{" "}
                          <span>Add Exchange</span>
                        </div>
                      </div>

                      {!selectedExchange && <div class="col-12 mt-4">
                        <div class="alert-notification">
                          <i class="fal fa-exclamation-circle mr-2"></i>{" "}
                          <span>Please select exchange first</span>
                        </div>
                      </div>}

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
                          <li class="nav-item"
                          >
                            <a
                              class="nav-link active"
                              id="pills-event-tab"
                              data-toggle="pill"
                              href="#pills-event"
                              role="tab"
                              aria-controls="pills-event"
                              aria-selected="true"
                              onClick={() => palceTypeHandler("EVENT")}
                            >
                              Event <i class="ml-2 fa fa-bolt"></i>
                            </a>
                          </li>
                          <li class="nav-item"
                          >
                            <a
                              class="nav-link"
                              id="pills-timer-tab"
                              data-toggle="pill"
                              href="#pills-timer"
                              role="tab"
                              aria-controls="pills-timer"
                              aria-selected="false"
                              onClick={() => palceTypeHandler("TIMER")}
                            >
                              Timer <i class="ml-2 fa fa-clock"></i>
                            </a>
                          </li>
                          <li class="nav-item"
                          >
                            <a
                              class="nav-link"
                              id="pills-order-tab"
                              data-toggle="pill"
                              href="#pills-order"
                              role="tab"
                              aria-controls="pills-order"
                              aria-selected="false"
                              onClick={() => palceTypeHandler("Direct")}
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
                                  <form action="">
                                    <div class="row">
                                      <div class="col-md-6 col-xl-3 col-lg-3 col-12">
                                        <div class="form-group d-flex align-items-center">
                                          <select
                                            id="inputState"
                                            class="custom-select form-control mr-2"
                                            name='coin'
                                            // onChange={(e) => setCoinCurrency(e.target.value)}
                                            onChange={changeHandler}
                                          >
                                            <option selected="">
                                              any coin
                                            </option>
                                            <option value="anyofmycoins">
                                              any of my coins
                                            </option>
                                            {
                                              binanceAssets?.coins && binanceAssets.coins.map((c, ind) => {
                                                return (
                                                  <option key={ind} value={c.coin} >
                                                    {c.coin}
                                                  </option>
                                                )
                                              })
                                            }
                                          </select>
                                          <span>has</span>
                                        </div>
                                      </div>
                                      <div class="col-md-6 col-xl-3 col-lg-3 col-12">
                                        <div class="form-group">
                                          <select
                                            id="inputState"
                                            class="custom-select form-control"
                                            name='type'
                                            // onChange={(e) => setCoinPVM(e.target.value)}
                                            onChange={changeHandler}
                                          >
                                            <option selected="" value={null}>---</option>
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
                                            class="custom-select form-control"
                                            name='rating'
                                            // onChange={(e) => setCoinPresidence(e.target.value)}
                                            onChange={changeHandler}
                                          >
                                            <option selected="" value={null}>---</option>
                                            <option value="increased">
                                              Increased By
                                            </option>
                                            <option value="decreased">
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
                                        <div class="form-group currency-select">
                                          <input
                                            type="number"
                                            placeholder="2.5"
                                            name='price'
                                            onChange={changeHandler}
                                          />
                                          <select
                                            id="inputState"
                                            class="custom-select form-control"
                                          >
                                            <option selected="">USD</option>
                                            <option value="EURO">EURO</option>
                                            <option value="GBP">GBP</option>
                                          </select>
                                        </div>
                                      </div>
                                    </div>
                                  </form>
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
                                  <form action="">
                                    <div class="row">
                                      <div class="col-md-6 col-xl-4 col-lg-4 col-12">
                                        <div class="form-group d-flex align-items-center">
                                          <select
                                            id="inputState"
                                            class="custom-select form-control"
                                          >
                                            <option selected="">Every</option>
                                            <option value="on">On</option>
                                            <option value="rightnow">
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
                                            <option value="hour">1 hour</option>
                                            <option value="week">1 week</option>
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
                                            class="form-control"
                                          />
                                        </div>
                                      </div>
                                    </div>
                                  </form>
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







                                  <form action="">
                                    <div class="row">
                                      <div class="col-md-6 col-xl-4 col-lg-4 col-12">
                                        <div class="form-group d-flex align-items-center">
                                          <select
                                            id="inputState"
                                            name='coin'
                                            class="custom-select form-control"
                                            onChange={changeHandler}
                                          >
                                            <option value="">Select Coin</option>
                                            <option value="BTC">Bit Coin</option>
                                            <option value="ETH">Etherium</option>

                                          </select>
                                        </div>
                                      </div>
                                      <div class="col-md-6 col-xl-4 col-lg-4 col-12">
                                        <div class="form-group  d-flex align-items-center">
                                          <select
                                            id="inputState"
                                            name='amount'
                                            class="custom-select d-flex form-control mr-2"
                                            onChange={changeHandler}
                                          >
                                            <option value="">Select Amount</option>
                                            <option value="10">
                                              10
                                            </option>
                                            <option value="20">
                                              20
                                            </option>
                                            <option value="30">
                                              30
                                            </option>
                                            <option value="40">
                                              40
                                            </option>
                                            <option value="50">50</option>
                                            <option value="100">100</option>
                                            <option value="200">
                                              200
                                            </option>
                                          </select>
                                          <span>Action</span>
                                        </div>
                                      </div>
                                      <div class="col-md-6 col-xl-4 col-lg-4 col-12">
                                        <div class="form-group">
                                          <select
                                            id="inputState"
                                            name='action'
                                            class="custom-select d-flex form-control mr-2"
                                            placeholder='Action'
                                            onChange={changeHandler}
                                          >
                                            <option selected="Buy">BUY</option>
                                            <option value="Sell">SELL</option>
                                          </select>
                                        </div>
                                      </div>
                                    </div>
                                  </form>








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
                              class="btn-floating btn-primary"
                              onClick={() => setToogler(!toogler)}
                            >
                              <i class="fas fa-plus"></i>
                            </a>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div class="row demo-exchange-row">
                      <div class="col-md-12 col-xl-10 col-lg-12">
                        <form action="">
                          <div class="row execute">
                            <div class="col-md-12 col-xl-4 col-lg-4">
                              <div class="form-group d-flex align-items-center">
                                <div class="form-group  d-flex align-items-center">
                                  <span class="mr-2">Start</span>
                                  <input
                                    type="date"
                                    class="form-control"
                                    name='startDate'
                                    onChange={changeHandler} />
                                </div>
                              </div>
                            </div>
                            <div class="col-md-12 col-xl-8 col-lg-8">
                              <div class="form-group  d-flex align-items-center">
                                <span class="mr-2">and execute</span>
                                <input
                                  type="text"
                                  class="form-control"
                                  id="demo"
                                  placeholder="Demo exchange"
                                  name='executeTime'
                                  onChange={changeHandler}
                                />
                                <span class="ml-2">times</span>
                              </div>
                            </div>
                          </div>
                        </form>
                      </div>
                      <div class="on-state">
                        <p>EXECUTE</p>
                      </div>
                    </div>
                    <div class="row demo-exchange-row">
                      <div class="col-xl-10 col-lg-12 col-md-12">
                        <form action="">
                          <div class="row execute">
                            <div class="col-md-12 col-xl-8 col-lg-7">
                              <div class="form-group  d-flex align-items-center">
                                <span class="mr-2">Now name this rule</span>
                                <input
                                  type="text"
                                  class="form-control"
                                  id="demo"
                                  placeholder="Eg. Drive and conquer"
                                  name='ruleName'
                                  onChange={changeHandler}
                                />
                              </div>
                            </div>
                            <div class="col-md-12 col-xl-4 col-lg-5">
                              <div class="form-group  d-flex align-items-center whiite-space-pre">
                                <button class="mr-2">Save Draft</button>
                                <button onClick={launchHandler}>Launch</button>
                              </div>
                            </div>
                          </div>
                        </form>
                      </div>
                      <div class="on-state">
                        <p>GO</p>
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

export default NewRule;
