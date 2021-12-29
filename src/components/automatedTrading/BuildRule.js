import React from 'react'

const BuildRule = (props) => {

    return (
        <div>
            <div className="container-fluid crypto-container">
        <div className="row choose">
          <div className="col-md-12">
            <div className="choose-heading">
              <h2>
                {props?.value?.heading ? props?.value?.heading : 'Build Your Own Rule or Select from 150+'}
              </h2>
            </div>
          </div>
          <div className="col-md-3">
            <img src="files/images/automated/Group 30.png" alt="" />
          </div>
          <div className="col-md-3">
            <img src="files/images/automated/Group 30.png" alt="" />
          </div>
          <div className="col-md-3">
            <img src="files/images/automated/Group 30.png" alt="" />
          </div>
          <div className="col-md-3">
            <img src="files/images/automated/Group 30.png" alt="" />
          </div>
          <div className="col-md-12">
            <a className="btn mt-3">{props?.value?.buttonName ? props?.value?.buttonName : 'Try for Free'}</a>
          </div>
        </div>
      </div>
        </div>
    )
}

export default BuildRule
