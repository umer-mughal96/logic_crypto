import React from 'react'

const EvaluateCost = () => {
    return (
        <div>
            <div className="container-fluid crypto-container est-cost">
        <div className="row est-cost">
          <div className="col-md-12 mb-4">
            <h2>Evaluate Your Cost</h2>
          </div>
          <div className="col-md-7">
            <form action="">
              <div className="row">
                <div className="col-8">
                  <h6>How Much Do You Trade Monthly?</h6>
                </div>
                <div className="col-4 text-right">
                  <h2>$630</h2>
                </div>
              </div>
              <input type="range" min="0" max="4" step="0.5" />
              <h6 className="mt-5">
                Save <span>$6</span>/month
              </h6>
              <p>Compared to a 1% fee on other trading tools</p>
            </form>
          </div>
          <div className="col-md-5">
            <div className="est-cost-box">
              <p>Best Plan for you</p>
              <h3>Trader $59.99</h3>
              <p>Cost only</p>
              <h3>0.05% of trade volume</h3>
              <a className="btn">Start for free</a>
            </div>
          </div>
        </div>
      </div>
        </div>
    )
}

export default EvaluateCost
