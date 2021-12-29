import React from 'react'
import { useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';
import { paymentDetails } from "../../actions/stripe/stripe";

const PricingCards = ({history}) => {

    const dispatch = useDispatch();

    const choosePaymenthandler = (packageName, packaPrice) => {
        dispatch(paymentDetails(packageName, packaPrice, history));
    };

    return (
        <div>
            <div className="container-fluid crypto-container">
                <div className="row pricing">
                    <div className="col-md-12 pricing-text">
                        <h2>Pricing</h2>
                        <p>
                            You can develop your trading strategies and these can run
                            automatically on your desired exchange. You can start with a{" "}
                            <Link to="/signup">Free Account</Link> Today
                        </p>
                    </div>
                    <div className="col-md-4 col-xl-3 col-lg-4 col-sm-6 mb-3">
                        <div className="hobbyist-plan starter-plan">
                            <h5>
                                Starter
                                <br />
                                $Free
                            </h5>
                            <ul>
                                <li>2 Live Rules</li>
                                <li>2 Demo Rules</li>
                                <li>7 Templates Strategies</li>
                                <li>1 Connected Exchange</li>
                                <li>Up to 3k Monthly Trade Volume</li>
                            </ul>
                            <div className="text-center">
                                <button className="btn">Default</button>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-4 col-xl-3 col-lg-4 col-sm-6 mb-3">
                        <div className="hobbyist-plan">
                            <h5>
                                Hobbyist
                                <br />
                                $14<span>.99/mo</span>
                            </h5>
                            <ul>
                                <li>7 Live Rules</li>
                                <li>7 Demo Rules</li>
                                <li>40 Template Strategies</li>
                                <li>2 Connected Exchanges</li>
                                <li>Up to 100k Monthly Trade volume</li>
                                <li>Trade Volume</li>
                                <li>Leverage Strategies</li>
                                <li>Live Telegram + Text Notifications</li>
                                <li>Free Access to Trader</li>
                                <li>Advanced Indicators and Operators</li>
                                <li>Live Support</li>
                            </ul>
                            <div className="text-center">
                                <button
                                    className="btn"
                                    onClick={() => choosePaymenthandler("Hobbyist", 14)}
                                >
                                    Choose
                                </button>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-4 col-xl-3 col-lg-4 col-sm-6 mb-3">
                        <div className="hobbyist-plan trader-plan">
                            <h5>
                                Trader
                                <br />
                                $24<span>.99/mo</span>
                            </h5>
                            <ul>
                                <li>15 Live Rules</li>
                                <li>15 Demo Rules</li>
                                <li>Unlimited Template Strategies</li>
                                <li>3 Connected Exchanges</li>
                                <li>Up to $1M Monthly Trade Volume</li>
                                <li>Leverage Strategies</li>
                                <li>Live Telegram + Text Notifications</li>
                                <li>Free Access to Trader</li>
                                <li>Community</li>
                                <li>One-to-one Training Sessions</li>
                                <li>Live Support</li>
                                <li>Advanced Indicators and Operators</li>
                            </ul>
                            <div className="text-center">
                                <button
                                    className="btn"
                                    onClick={() => choosePaymenthandler("Trader", 24)}
                                >
                                    Choose
                                </button>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-4 col-xl-3 col-lg-4 col-sm-6 mb-3">
                        <div className="hobbyist-plan pro-plan">
                            <h5>
                                Pro
                                <br />
                                $299<span>.99/mo</span>
                            </h5>
                            <ul>
                                <li>50 Live Rules</li>
                                <li>50 Demo Rules</li>
                                <li>Unlimited Template Strategies</li>
                                <li>Unlimited Exchanges</li>
                                <li>Up to $5M Monthly Trade Volume</li>
                                <li>Leverage Strategies</li>
                                <li>Live Telegram + Text Notifications</li>
                                <li>Free Access to Trader</li>
                                <li>Community</li>
                                <li>One-to-one Training Sessions</li>
                                <li>Ultra-Fast Executions</li>
                                <li>Prioritised Access and Execution</li>
                                <li>Dedicated Server</li>
                                <li>Advanced Indicators and Operators</li>
                            </ul>
                            <div className="text-center">
                                <button
                                    className="btn"
                                    onClick={() => choosePaymenthandler("Pro", 299)}
                                >
                                    Choose
                                </button>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-12">
                        <div className="payments">
                            <h2>Crypto Payments Accepted</h2>
                            <p>
                                We believe in the possibilities that technology brings for
                                greater decentralization of power and wealth, more open
                                internet, and much more. So, we are committed both to the
                                Blockchain community and crypto traders.
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default PricingCards
