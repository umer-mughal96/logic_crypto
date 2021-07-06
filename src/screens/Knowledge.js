import React from "react";

const Knowledge = () => {
  return (
    <div>
      <div className="container-fluid crypto-container">
        <div className="row">
          <div className="col-12 search-form">
            <h1>Knowledgebase</h1>
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
      <div className="container-fluid crypto-container">
        <div className="row knowledge-list">
          <div className="col-md-4">
            <h2>Get Started</h2>
            <ul>
              <li>Conditions and Triggers</li>
              <li>Order Types</li>
              <li>How The Demo Exchange Works</li>
              <li>How To Create Your First Rule</li>
              <li>How To Trade Crypto?</li>
              <li>What Kind Of Trader Are You?</li>
              <a href="">
                See more <i className="fas fa-arrow-right"></i>
              </a>
            </ul>
          </div>
          <div className="col-md-4">
            <h2>Trading Strategies</h2>
            <ul>
              <li>Risk Management</li>
              <li>Accumulation</li>
              <li>Trend Following</li>
              <li>Contrarian</li>
              <li>How To Trade With Moving</li>
              <li>Averages</li>
              <a href="">
                See more <i className="fas fa-arrow-right"></i>
              </a>
            </ul>
          </div>
          <div className="col-md-4">
            <h2>Get Started</h2>
            <ul>
              <li>Conditions and Triggers</li>
              <li>Order Types</li>
              <li>How The Demo Exchange Works</li>
              <li>How To Create Your First Rule</li>
              <li>How To Trade Crypto?</li>
              <li>What Kind Of Trader Are You?</li>
              <a href="">
                See more <i className="fas fa-arrow-right"></i>
              </a>
            </ul>
          </div>
        </div>
        <div className="row knowledge-list spacing">
          <div className="col-md-4">
            <h2>Trading Strategies</h2>
            <ul>
              <li>Risk Management</li>
              <li>Accumulation</li>
              <li>Trend Following</li>
              <li>Contrarian</li>
              <li>How To Trade With Moving</li>
              <li>Averages</li>
              <a href="">
                See more <i className="fas fa-arrow-right"></i>
              </a>
            </ul>
          </div>
          <div className="col-md-4">
            <h2>Get Started</h2>
            <ul>
              <li>Conditions and Triggers</li>
              <li>Order Types</li>
              <li>How The Demo Exchange Works</li>
              <li>How To Create Your First Rule</li>
              <li>How To Trade Crypto?</li>
              <li>What Kind Of Trader Are You?</li>
              <a href="">
                See more <i className="fas fa-arrow-right"></i>
              </a>
            </ul>
          </div>
          <div className="col-md-4">
            <h2>Trading Strategies</h2>
            <ul>
              <li>Risk Management</li>
              <li>Accumulation</li>
              <li>Trend Following</li>
              <li>Contrarian</li>
              <li>How To Trade With Moving</li>
              <li>Averages</li>
              <a href="">
                See more <i className="fas fa-arrow-right"></i>
              </a>
            </ul>
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

export default Knowledge;
