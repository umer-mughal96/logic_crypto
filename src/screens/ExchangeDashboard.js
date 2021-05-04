import React from "react";
import Sidebar from "../components/Sidebar";

const ExchangeDashboard = () => {
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
                        >
                          <option selected>Choose Exchange</option>
                          <option value="exchange 1">Exchange 1</option>
                          <option value="exchange 2">Exchange 2</option>
                          <option value="exchange 3">Exchange 3</option>
                          <option value="exchange 4">Exchange 4</option>
                          <option value="exchange 5">Exchange 5</option>
                        </select>
                      </div>
                      <div className="form-group">
                        <label for="api">API Key</label>
                        <input
                          type="text"
                          className="form-control"
                          id="api"
                          placeholder="eg. 4143516asd3a1s316as1da"
                        />
                      </div>
                      <div className="form-group">
                        <label for="secretkey">Secret Key</label>
                        <input
                          type="text"
                          className="form-control"
                          id="secretkey"
                          placeholder="eg. 4143516asd3a1s316as1da"
                        />
                      </div>
                      <button type="submit" className="btn">
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
                  <div className="col-md-12 col-xl-6 col-lg-6 col-12 mt-5">
                    <form className="mt-4">
                      <h6>Connected Exchange</h6>
                      <p>You haven't connected any exchange yet.</p>
                    </form>
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
