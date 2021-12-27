import React, { useEffect, useState } from "react";
import {
  connectExchange,
  deleteUserExchange,
  getUserExchanges,
} from "../actions/exchange/exchange";
import { useDispatch, useSelector } from "react-redux";
import Sidebar from "../components/Sidebar";
import { exchangeKeyValidation } from "../actions/balances/balances";

const ExchangeDashboard = () => {
  const [exchange, setExchange] = useState();
  const [apiKey, setApiKey] = useState("");
  const [secretKey, setSecretKey] = useState("");
  const [passPhrase, setPassPhrase] = useState("");
  const dispatch = useDispatch();
  const { exchanges } = useSelector((s) => s.Exchange);
  const { user } = useSelector(s => s.Auth)
  const { exchangeKey } = useSelector(s => s.Balance)
  console.log("🚀 ~ file: ExchangeDashboard.js ~ line 20 ~ ExchangeDashboard ~ exchangeKey", exchangeKey?.status)

  const [exchangeCard, setexchangeCard] = useState(true)
  console.log("🚀 ~ file: ExchangeDashboard.js ~ line 22 ~ ExchangeDashboard ~ exchangeCard", exchangeCard)
  console.log("🚀 ~ file: ExchangeDashboard.js ~ line 18 ~ ExchangeDashboard ~ Auth", user)
  const data = useSelector(s => s)
  console.log(data)

  const [keyValidation, setKeyValidation] = useState({
    exchangeName: null,
    userId: user._id
  })
  console.log("🚀 ~ file: ExchangeDashboard.js ~ line 24 ~ ExchangeDashboard ~ keyValidation", keyValidation)


  let exhangeNames = [
    "Binance",
    "Binance US",
    "Bitpanda pro",
    "Bitstamp",
    "Coinbase | Pro",
    "HitBTC",
    "Kreken",
    "Liquid",
    "Okex",
    "Poloniex",
  ];

  const connectExchangeHandler = (e) => {
    e.preventDefault();
    let data = {
      exchangeName: exchange,
      apiKey,
      secretKey,
      passPhrase
    };
    console.log(data)
    dispatch(connectExchange(data));
  };

  const selectHandler = (e) =>{
    setExchange(e.target.value)
    setKeyValidation({
      ...keyValidation, exchangeName: e.target.value
    })
  }

  useEffect(() => {

    if (keyValidation?.exchangeName != null) {
      dispatch(exchangeKeyValidation(keyValidation))
    }

    
    // if(exchangeKey?.status === 400)
    // setexchangeCard(true)
    // else{
    //   setexchangeCard(false)
    // }
  }, [exchange])
  console.log("🚀 ~ file: ExchangeDashboard.js ~ line 49 ~ ExchangeDashboard ~ exchange", exchangeKey?.status)

  return (
    <div className="container-fluid">
      <div className="row">
        <div className="col-md-12 p-0">
          <div className="s-layout">
            <Sidebar />
            <main className="s-layout__content">
              <div className="container-fluid">
                <div className="row exchange">
                  <div className="col-md-12 col-xl-6 col-lg-6 col-12">
                    <h2>Exchange</h2>
                    <form>
                      <h6>Connect New Exchange</h6>
                      <p>Chosse among the top crypto currency exchange</p>
                      <div className="form-group">
                        <select
                          id="inputState"
                          className="custom-select form-control"
                          onChange={(e) => selectHandler(e)}
                        >
                          <option selected>Choose Exchange</option>
                          {exhangeNames.map((exchange, ind) => (
                            <option key={ind} value={exchange}>
                              {exchange}
                            </option>
                          ))}
                        </select>
                      </div>
                      <div className="form-group">
                        <label for="api">API Key</label>
                        <input
                          type="text"
                          className="form-control"
                          id="api"
                          placeholder="eg. 4143516asd3a1s316as1da"
                          onChange={(e) => setApiKey(e.target.value)}
                        />
                      </div>
                      <div className="form-group">
                        <label for="secretkey">Secret Key</label>
                        <input
                          type="text"
                          className="form-control"
                          id="secretkey"
                          placeholder="eg. 4143516asd3a1s316as1da"
                          onChange={(e) => setSecretKey(e.target.value)}
                        />
                      </div>

                      <div className="form-group">
                        <label for="passPhrase">Pass phrase</label>
                        <input
                          type="password"
                          className="form-control"
                          id="passphrase"
                          placeholder="passphrase"
                          onChange={(e) => setPassPhrase(e.target.value)}
                        />
                      </div>
                      <button
                        type="submit"
                        onClick={(e) => connectExchangeHandler(e)}
                        className="btn"
                      >
                        Connect
                      </button>
                      <div className="notes">
                        <p>
                          We store API keys in encrypted form AES-256 with
                          dedicated private keys which are generated for each
                          user separately.
                        </p>
                        <p>
                          Not on Binance yet? <a href="">Sign up</a> for free
                        </p>
                      </div>
                    </form>
                  </div>
                  <div class="col-md-12 col-xl-6 col-lg-6 col-12 mt-5">
                    <form class="mt-4">
                      <h6>Connected Exchange</h6>
                      <p>You haven't connected any exchange yet.</p>
                    </form>
                    <div class="row" >
                      {exchanges?.exchanges &&
                        exchanges?.exchanges.map((exc) => {
                          return (
                            <div class="col-md-12 setting-spacing mb-3" >
                              <div class="account-form" style={{boxShadow: exchangeKey?.status === 400 ? '2px solid red !important' : null}}>
                                <div class="row">
                                  <div class="col-5">
                                    <img
                                      src="files/images/dashboard/settings/binance.svg"
                                      alt=""
                                    />
                                  </div>
                                  <div class="col-7">
                                    <div class="form-group live">
                                      <label for="api">
                                        {exc.exchangeName} <span>LIVE</span>
                                      </label>

                                      <p style={{wordBreak: 'break-all'}}>key : {exc.apiKey}</p>
                                      <button
                                        className="exchange-card-btn"
                                        style={{
                                          background: "none",
                                          border: "none",
                                          color: "red",
                                        }}
                                        onClick={() =>
                                          dispatch(
                                            deleteUserExchange(
                                              exc._id,
                                              exchanges._id
                                            )
                                          )
                                        }
                                      >
                                        Remove
                                      </button>
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </div>
                          );
                        })}
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

export default ExchangeDashboard;
