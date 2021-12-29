import React from 'react'

const Banner = () => {
    return (
        <div>
            <div className="container-fluid crypto-container">
        <div className="row banner">
          <div className="col-md-6">
            <div className="banner-text">
              <h1>Automated Exchanging Got Simple</h1>
              <p>
                With us, without coding, you can trade with professional traders
                and can invest your funds.
              </p>
              <a className="btn">Try for Free</a>
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
              <a>
                <img
                  src="files/images/automated/Clutch-Citibank@2x.png"
                  alt=""
                />
              </a>
              <a>
                <img
                  src="files/images/automated/Clutch-Colorcon@2x.png"
                  alt=""
                />
              </a>
              <a>
                <img
                  src="files/images/automated/Clutch-eShipper@2x.png"
                  alt=""
                />
              </a>
              <a>
                <img src="files/images/automated/Clutch-NBCU@2x.png" alt="" />
              </a>
            </div>
          </div>
        </div>
        <div className="row military-row">
          <div className="col-md-4">
            <div className="Military-work">
              <div className="work-image pr-2">
                <img
                  src="files/images/homepage/popular exchange-01.svg"
                  className="pr-2"
                  alt=""
                />
              </div>
              <div className="work-desc">
                <p>Works with the top 10+</p>
                <h4>Popular Exchanges</h4>
              </div>
            </div>
          </div>
          <div className="col-md-4">
            <div className="Military-work">
              <div className="work-image">
                <img
                  src="files/images/homepage/data-encryption.svg"
                  alt=""
                  className="pr-2"
                />
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
        </div>
    )
}

export default Banner
