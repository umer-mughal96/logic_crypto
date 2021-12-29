import React from 'react'

const Banner = () => {
    return (
        <div>
            <div className="container-fluid crypto-container">
        <div className="row banner">
          <div className="col-md-6">
            <div className="banner-text">
              <h1>An A-Team of Crypto Enthusiasts That Love Trading</h1>
              <p>
              When it comes to a smart assistant in crypto trading, Logic crypto confronts every complexity for you. Get full control of your crypto trading and winning hedges despite of loss.
              </p>
              <a href="#" className="facebook">
                <i className="fab fa-facebook-square mr-1"></i>
              </a>
              <a href="#" className="twitter">
                <i className="fab fa-twitter-square mr-1"></i>
              </a>
              <a href="#" className="instagram">
                <i className="fab fa-instagram"></i>
              </a>
              <br />
              <a href="" className="btn">
                Start for free
              </a>
            </div>
          </div>
          <div className="col-md-6">
            <div className="banner-image">
              <img src="files/images/automated/banner-image.jpg" alt="" />
            </div>
          </div>
        </div>
      </div>
        </div>
    )
}

export default Banner
