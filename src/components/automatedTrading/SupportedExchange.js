import React from 'react'

const SupportedExchange = (props) => {
console.log("🚀 ~ file: SupportedExchange.js ~ line 4 ~ SupportedExchange ~ props", props)


    return (
        <div>
            <div className="container-fluid crypto-container">
        <div className="row">
          <div className="col-md-12 text-center support mt-3">
            <h2>{props?.value?.heading ? props?.value?.heading : 'Supported Exchanges'}</h2>
            <p>{props?.value?.paragraph ? props?.value?.paragraph : 'We integrate with 10+ of the most popular exchanges including'}</p>
          </div>
          <div className="col-md-12">
            <div className="row member-second">
              <div className="col-6 col-md-3 col-sm-4">
                <a>
                  <img
                    src="files/images/automated/Clutch-Citibank@2x.png"
                    alt=""
                  />
                </a>
              </div>
              <div className="col-6 col-md-3 col-sm-4">
                <a>
                  <img
                    src="files/images/automated/Clutch-Colorcon@2x.png"
                    alt=""
                  />
                </a>
              </div>
              <div className="col-6 col-md-3 col-sm-4">
                <a>
                  <img
                    src="files/images/automated/Clutch-eShipper@2x.png"
                    alt=""
                  />
                </a>
              </div>
              <div className="col-6 col-md-3 col-sm-4">
                <a>
                  <img src="files/images/automated/Clutch-NBCU@2x.png" alt="" />
                </a>
              </div>
              <div className="col-6 col-md-3 col-sm-4">
                <a>
                  <img
                    src="files/images/automated/Clutch-Citibank@2x.png"
                    alt=""
                  />
                </a>
              </div>
              <div className="col-6 col-md-3 col-sm-4">
                <a>
                  <img
                    src="files/images/automated/Clutch-Colorcon@2x.png"
                    alt=""
                  />
                </a>
              </div>
              <div className="col-6 col-md-3 col-sm-4">
                <a>
                  <img
                    src="files/images/automated/Clutch-eShipper@2x.png"
                    alt=""
                  />
                </a>
              </div>
              <div className="col-6 col-md-3 col-sm-4">
                <a>
                  <img src="files/images/automated/Clutch-NBCU@2x.png" alt="" />
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
        </div>
    )
}

export default SupportedExchange
