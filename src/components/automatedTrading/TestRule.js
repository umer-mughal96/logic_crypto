import React from 'react'
import VolumeSlider from "../RangeSlider/RangeSlider";


const TestRule = () => {
    return (
        <div>
            <div className="container-fluid crypto-container analytics">
        <div className="col-md-12">
          <div className="row chart-filters">
            <div className="col-md-12">
              <div className="chart-section">
                <h2>Test Rule Fulfillment on Authentic Data</h2>
              </div>
            </div>
            <div className="col-md-3">
              <select className="custom-select" id="chartdrop">
                <option selected>Buy The Dip In Bull Market</option>
                <option value="1">Buy The Dip Multi-Level</option>
                <option value="2">Ride The Trend</option>
                <option value="3">Maximized Crossing Moving Averages</option>
                <option value="4">Low Volatility Buy And Sell</option>
              </select>
            </div>
            <div className="col-md-3">
              <div className="form-group range-filter">
                <h6>Initial Amount</h6>
                {/* <input
                  type="range"
                  value="0"
                  max="100"
                  oninput="num.value = this.value"
                />
                <output id="num">0</output> */}
                <VolumeSlider orientation="vertical" />
              </div>
            </div>
            <div className="col-md-3">
              <div className="form-group range-filters">
                <h6>Length of investment</h6>
                {/* <input
                  type="range"
                  value="0"
                  max="1000"
                  oninput="nums.value = this.value"
                />
                <output id="nums">0</output> */}
                <VolumeSlider />
              </div>
            </div>
            <div className="col-md-3">
              <div className="total-cost text-right">
                <h2>$4.00</h2>
              </div>
            </div>
          </div>
        </div>
        <div className="col-md-12">
          <div className="wrapper">
            <canvas id="canvas"></canvas>
            <div className="note">
              Made with{" "}
              <a
                href="https://www.chartjs.org"
                target="_blank"
                rel="external noopener"
              >
                Chart.js
              </a>{" "}
              by{" "}
              <a
                href="https://hofmannsven.com"
                target="_blank"
                rel="external noopener"
              >
                Sven Hofmann
              </a>
              .
            </div>
          </div>
        </div>
        <div className="col-md-12">
          <div className="chart-section">
            <h2>Test Your Procedure Today</h2>
            <a className="btn">Start Test</a>
          </div>
        </div>
      </div>
        </div>
    )
}

export default TestRule
