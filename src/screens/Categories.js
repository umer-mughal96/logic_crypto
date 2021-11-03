import React from "react";

const Categories = () => {
  return (
    <div>
      <div className="container-fluid crypto-container">
        <div className="row">
          <div className="col-12 search-form">
            <h1>
              Knowledgebase
              <br />
              <span>Home/Risk managment</span>
            </h1>
            <form action="" method="GET" id="search-form">
              <input
                className="form-control my-0 py-1 amber-border"
                type="text"
                aria-label="Search"
                name="keyword"
                value=""
              />
              <a href="" className="btn">
                Search
              </a>
              <img src="files/images/knowledgepage/search-icon.svg" alt="" />
            </form>
          </div>
        </div>
      </div>

      <div className="container risk">
        <div className="row">
          <div className="col-md-4">
            <div id="main">
              <div className="accordion" id="faq">
                <h2>Get Started</h2>
                <div className="card">
                  <div className="card-header" id="faqhead2">
                    <a
                      href="#"
                      className="btn btn-header-link collapsed"
                      data-toggle="collapse"
                      data-target="#faq1"
                      aria-expanded="true"
                      aria-controls="faq1"
                    >
                      Trading Strategies
                    </a>
                  </div>

                  <div
                    id="faq1"
                    className="collapse"
                    aria-labelledby="faqhead1"
                    data-parent="#faq"
                  >
                    <div className="card-body">
                      <ul>
                        <li>
                          <a href="">How to Trade with the RSI</a>
                        </li>
                        <li>
                          <a href="">How to Trade with Moving Averges</a>
                        </li>
                        <li>
                          <a href="">Contrarian</a>
                        </li>
                        <li>
                          <a href="">Trend Following</a>
                        </li>
                        <li>
                          <a href="">Accumulation</a>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
                <div className="card">
                  <div className="card-header" id="faqhead2">
                    <a
                      href="#"
                      className="btn btn-header-link collapsed"
                      data-toggle="collapse"
                      data-target="#faq2"
                      aria-expanded="true"
                      aria-controls="faq2"
                    >
                      Exchange Guidelines
                    </a>
                  </div>

                  <div
                    id="faq2"
                    className="collapse"
                    aria-labelledby="faqhead2"
                    data-parent="#faq"
                  >
                    <div className="card-body">
                      <ul>
                        <li>
                          <a href="">How to Trade with the RSI</a>
                        </li>
                        <li>
                          <a href="">How to Trade with Moving Averges</a>
                        </li>
                        <li>
                          <a href="">Contrarian</a>
                        </li>
                        <li>
                          <a href="">Trend Following</a>
                        </li>
                        <li>
                          <a href="">Accumulation</a>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
                <div className="card">
                  <div className="card-header" id="faqhead3">
                    <a
                      href="#"
                      className="btn btn-header-link collapsed"
                      data-toggle="collapse"
                      data-target="#faq3"
                      aria-expanded="true"
                      aria-controls="faq3"
                    >
                      Trading Tips
                    </a>
                  </div>

                  <div
                    id="faq3"
                    className="collapse"
                    aria-labelledby="faqhead3"
                    data-parent="#faq"
                  >
                    <div className="card-body">
                      <ul>
                        <li>
                          <a href="">How to Trade with the RSI</a>
                        </li>
                        <li>
                          <a href="">How to Trade with Moving Averges</a>
                        </li>
                        <li>
                          <a href="">Contrarian</a>
                        </li>
                        <li>
                          <a href="">Trend Following</a>
                        </li>
                        <li>
                          <a href="">Accumulation</a>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
                <div className="card">
                  <div className="card-header" id="faqhead4">
                    <a
                      href="#"
                      className="btn btn-header-link collapsed"
                      data-toggle="collapse"
                      data-target="#faq4"
                      aria-expanded="true"
                      aria-controls="faq4"
                    >
                      Trading Ideas
                    </a>
                  </div>

                  <div
                    id="faq4"
                    className="collapse"
                    aria-labelledby="faqhead4"
                    data-parent="#faq"
                  >
                    <div className="card-body">
                      <ul>
                        <li>
                          <a href="">How to Trade with the RSI</a>
                        </li>
                        <li>
                          <a href="">How to Trade with Moving Averges</a>
                        </li>
                        <li>
                          <a href="">Contrarian</a>
                        </li>
                        <li>
                          <a href="">Trend Following</a>
                        </li>
                        <li>
                          <a href="">Accumulation</a>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
                <div className="card">
                  <div className="card-header" id="faqhead5">
                    <a
                      href="#"
                      className="btn btn-header-link collapsed"
                      data-toggle="collapse"
                      data-target="#faq5"
                      aria-expanded="true"
                      aria-controls="faq5"
                    >
                      Trading View Strategies
                    </a>
                  </div>

                  <div
                    id="faq5"
                    className="collapse"
                    aria-labelledby="faqhead5"
                    data-parent="#faq"
                  >
                    <div className="card-body">
                      <ul>
                        <li>
                          <a href="">How to Trade with the RSI</a>
                        </li>
                        <li>
                          <a href="">How to Trade with Moving Averges</a>
                        </li>
                        <li>
                          <a href="">Contrarian</a>
                        </li>
                        <li>
                          <a href="">Trend Following</a>
                        </li>
                        <li>
                          <a href="">Accumulation</a>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="col-md-8">
            <div className="risk-wrapper-text">
              <h2>Risk Management</h2>
              <p>
                One of the most important aspects of implementing an automatic
                trading strategy is to prevent significant losses that will
                potentially compromise a trader’s capital over the long-term.
                Before making money, it’s important to learn how to protect your
                crypto portfolio
              </p>
              <h2>First rule of Trading: Cut off losses!</h2>
              <p>
                What is usually the biggest challenge for a trader is to realise
                and accept that a trade is not going in the expected direction.
              </p>
              <p>
                Most traders focus on learning when to start a trade but don’t
                put enough effort on the exit strategy.
              </p>
              <p>
                Risk management protects your crypto portfolio and prevents from
                further losses. However, it is crucial for the long-term success
                of any trader to understand that cutting a loss at the right
                time can be a move as successful as selling a coin at a profit.
              </p>
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

export default Categories;
