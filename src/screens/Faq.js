import React from "react";

const Faq = () => {
  return (
    <>
      <div className="Faq-wrapper container-fluid crypto-container">
        <div className="TermConditions-wrapper">
          <div className="container">
            <div className="TermConditions-header-part">
              <h4 className="term-section-list-heading mt-3 mb-5">Frequently Asked Questions</h4>
              <h2 className="termheading">FAQ</h2>
              <ul>
                <div className="term-section-list">
                  <li className="term-section-list-heading">
                    Why should I utilize Logic Crypto?
                  </li>
                  <p>How do we help others to trade cryptocurrency?</p>
                  <p>
                    We are working on how to bring the user-friendly, natural
                    user experience we have become conventional to in other tech
                    fields to the Blockchain space. Logic crypto is the outcome
                    of our creativity, designed to be easy to use for technical
                    and non-technical traders. We are here to give you a Lego
                    toolbox for cryptocurrency trading plans and trading
                    automation that enables you to backtest trading practices
                    and strategies previous to launching them. All the trading
                    performances you have wanted to set up on cryptocurrency
                    exchanges but could not due to their faulty interfaces? Now
                    we make it feasible for you.
                  </p>
                  <p>What are the benefits of using Logic Crypto?</p>
                  <p>
                    We allow you to set up your automatic trading strategies
                    based on the “This-That-Then-If” principles without
                    requiring any coding skills. The rules will run 24/7 so that
                    your portfolio supervision will grow further safe and
                    effective. Moreover, we also allow you to backtest your
                    trading rules and strategies before launching them. We
                    execute it to perform different trading strategies to
                    satisfy all traders’ requirements.
                  </p>
                </div>
                <div className="term-section-list">
                  <li className="term-section-list-heading">Get Started</li>
                  <p>
                    For the fresher in automated trading, the best way to start
                    is to watch this Introduction Video that gives you a brief
                    introduction about us and how to use our platform.
                  </p>
                  <p>
                    For more information, you can check Free Webinar, Knowledge
                    Base, and Trading Strategies.
                  </p>
                </div>
                <div className="term-section-list">
                  <li className="term-section-list-heading">
                    How to lead my rules
                  </li>
                  <p>How to play/pause a rule?</p>
                  <p>
                    In the dashboard, you will have a list of all your rules. If
                    you want to pause a rule click on the green Play button.
                    Restart it to press the play button again.
                  </p>
                  <p>Want to see the performance of the rule?</p>
                  <p>
                    The dashboard shows the performance of all the rules; you
                    will find the aggregate return of your portfolio on the top.
                  </p>
                  <p>Can I backtest my rules?</p>
                  <p>
                    There is a possibility of testing your rule before running
                    them with the use of historical data and our backtest
                    feature will be available soon.
                  </p>
                  <p>Have you any specialized analysis indicators or charts?</p>
                  <p>
                    We combine Moving Averages and RSI on rules working on
                    Coinbase and Binance. You can take an experimental overview
                    of technical indicators on our Demo Exchange without any
                    cost. To run these indicators on a live exchange you can
                    request to upgrade your plan.
                  </p>
                </div>
                <div className="term-section-list">
                  <li className="term-section-list-heading">Markets</li>
                  <p>How to connect API keys from the available exchanges?</p>
                  <p>
                    First, you have to ask to connect your Logic Crypto account
                    to the crypto exchanges of your choice via APIs. The
                    creation of your API keys is simple and can be different
                    from one exchange to the other one. If you need any
                    guidelines compared to the support exchanges you can get
                    them HERE.
                  </p>
                </div>
                <div className="term-section-list">
                  <li className="term-section-list-heading">Speed</li>
                  <p>How quickly do rules run?</p>
                  <p>
                    Our orders take only about 500 milliseconds to reach the
                    market. All our orders are sent to the market with minimum
                    delay time. To ensure that quick executions are guaranteed.
                    The only delay could be the frequency of the conditions
                    checks that runs roughly every 40 seconds.
                  </p>
                </div>
                <div className="term-section-list">
                  <li className="term-section-list-heading">
                    Balance not showing
                  </li>
                  <p>
                    I have linked the exchange to Logic Crypto using the API
                    keys but the balance is not shown. Here are some possible
                    solutions:
                  </p>
                  <p>
                    Start again the balance utilizing the Wallet button on the
                    dashboard
                  </p>
                  <p>
                    Some exchanges need users to transfer their funds into the
                    “trading account” to be capable of having a trade with Logic
                    Crypto.
                  </p>
                  <p>
                    Check again that the coins are not locked on the exchange by
                    all orders; we will show you only the coins that are
                    available for trading.
                  </p>
                  <p>
                    If you have a little balance on the exchange, it will not
                    show on Logic Crypto.
                  </p>
                  <p>
                    If you use Coinbase Pro, we do not show GBP or USD balance
                    due to restrictions on the order wallet that depends on the
                    areas of the sender of the orders. Here, we only have
                    servers in Europe, and USD/GBP wallets are not available
                    yet.
                  </p>
                </div>
                <div className="term-section-list">
                  <li className="term-section-list-heading">
                    Rules not triggering
                  </li>
                  <p>
                    On the creation of a rule, the conditions have been meeting
                    but the rule was not triggered.
                  </p>
                  <p>
                    There is an existing pair within the elected coin and wallet
                    to trigger the rule.
                  </p>
                  <p>
                    Moreover, make sure that you are controlling the trading
                    pair that the bot is monitoring. The bot picks trading pairs
                    depending on the selected parameters.
                  </p>
                </div>
                <div className="term-section-list">
                  <li className="term-section-list-heading">
                    Orders not executed
                  </li>
                  <p>
                    The rule not executed with the message “Order size is less
                    than minimum required size”
                  </p>
                  <p>
                    Every exchange sets a minimum size for each trading pair; we
                    need to observe these deadlines so these do not meet the
                    required amounts that cannot be executed.
                  </p>
                </div>
                <div className="term-section-list">
                  <li className="term-section-list-heading">
                    Order executed an unexpected amount
                  </li>
                  <p>
                    The rule is organized to buy/sell at a particular amount,
                    but the executed amount in the market is different.
                  </p>
                  <p>
                    Sometimes, there is a deficiency of liquidity in the market
                    that can lead to some differences in the amount that is
                    executed.
                  </p>
                </div>
                <div className="term-section-list">
                  <li className="term-section-list-heading">
                    Technical indicators not available
                  </li>
                  <p>
                    Linked exchange to Logic Crypto, however, it says that RSI
                    is not available.
                  </p>
                  <p>
                    Here, the technical indicators are only available on limited
                    exchanges more are available from time to time. Also, you
                    can test them free on the Demo Exchange.
                  </p>
                </div>
                <div className="term-section-list">
                  <li className="term-section-list-heading">
                    Avoid over-trading
                  </li>
                  <p>For avoiding over-trading we are giving some solutions:</p>
                  <p>
                    You can enhance the percentages to trigger the rules or add
                    more restrictive conditions. Or multiple conditions to
                    trigger the rules. This will result in the rule to only
                    perform when needed.
                  </p>
                </div>
                <div className="term-section-list">
                  <li className="term-section-list-heading">Demo exchange</li>
                  <p>Amounts that are used for Demo exchange</p>
                  <p>
                    The amounts for the Demo exchange are linked to the Binance
                    exchange with real-time amounts.
                  </p>
                </div>
                <div className="term-section-list">
                  <li className="term-section-list-heading">
                    While browsing within the app I get a blank page, why?
                  </li>
                  <p>
                    Some browser extensions contrast with the interface of our
                    platform resulting in this error. Try to remove the
                    extension and refresh the page. If the issue did not solve
                    please reach us, and we will happy to help you.
                  </p>
                </div>
                <div className="term-section-list">
                  <li className="term-section-list-heading">Pricing</li>
                  <p>Which plans do you have?</p>
                  <p>
                    You can use our platform for free with an insufficient
                    number of live and demo strategies as well as access to
                    certain templates strategies. Moreover, purchasing a monthly
                    or annual paid plan will give you access to Logic Crypto’s
                    exclusive features.
                  </p>
                </div>
                <div className="term-section-list">
                  <li className="term-section-list-heading">
                    Does this platform take a commission on trades?
                  </li>
                  <p>
                    We only charge the customer a subscription fee for the plan
                    they upgrade to any other fees that come from the exchange.
                  </p>
                </div>
                <div className="term-section-list">
                  <li className="term-section-list-heading">
                    Who are the founders?
                  </li>
                  <p>
                    We are a team of Crypto and Blockchain followers that found
                    trading cryptocurrency is unnecessarily difficult. We all
                    have earlier built companies and created the ‘magic’ of
                    crypto over the past one to two years. We are committed both
                    to crypto traders and the broader Blockchain community.
                    Because we believe in the opportunities that technology
                    brings for more comprehensive decentralization of wealth and
                    power, a more open internet, and much more ahead.
                  </p>
                </div>
                <div className="term-section-list">
                  <li className="term-section-list-heading">Security</li>
                  <p>How secure are we?</p>
                  <p>
                    We store API keys in encrypted form with dedicated private
                    keys are created for each user separately. Moreover, these
                    keys are stored on separate data storage which is also
                    encrypted with AES-256. As another layer of protection, we
                    use Cloud flare CDN against many types of attacks.
                  </p>
                </div>
              </ul>
              <h2 className="termheading mt-4">Glossary</h2>
              <div className="term-section">
                <h2 className="term-section-list-heading">API</h2>
                <p>
                  We define the Application Programming Interface as a tool to
                  create a communication protocol within our platform and your
                  crypto wallet. APIs are determined to run as these are first
                  validated by a complex secret key. Remind your mind that to
                  run Logic Crypto, APIs must be able to view your wallet and
                  send orders. We will never request any withdrawal permission
                  from your pocket.
                </p>
              </div>
              <div className="term-section">
                <h2 className="term-section-list-heading">
                  2-Factor Authentication (2FA)
                </h2>
                <p>
                  2FA involves a separate device may be a phone to confirm the
                  identity of the owner of the account. Actually, it is an
                  additional security layer offered by exchanges, sites, and
                  apps to validate some particularly sensitive actions. The
                  authentication is completed by sending a message to the
                  registered phone.
                </p>
              </div>
              <div className="term-section">
                <h2 className="term-section-list-heading">Orders</h2>
                <p>Market Order</p>
                <p>
                  An order to buy or sell an asset at the best possible market
                  requirements without limitation on value execution is known as
                  a market order. These orders are optimal when the principal
                  goal is to perform the trade instantly. Note that execution
                  values can range from the last traded value significantly
                  depending on the size of the order and the liquidity at that
                  provided time.
                </p>
                <p>Limited Order</p>
                <p>
                  It uses a limited price order to make sure that the order will
                  not be delivered at a sudden high or low price. To buy limit
                  orders only at the specific price or lower from that price.
                  Moreover, selling a limit only at a specific price or more
                  than the given price. This process allows the traders to
                  control the price when they trade.
                </p>
                <p>Bid Price</p>
                <p>
                  This is the price when buyers are ready to pay for a definite
                  asset or the value that the seller wanted to when they desire
                  to sell the asset instantly. Each sell order finds execution
                  at the best available bid price if the value is not filled;
                  progressively lower values are executed.
                </p>
                <p>Ask Price</p>
                <p>
                  Ask Price is the price trader is ready to pay to sell an asset
                  buyer is demanded to pay to buy the asset quickly. Like before
                  said, buy orders will also be executed sequentially at more
                  comfortable ask prices in that given time until the complete
                  performance of the order. Estimating that only limit orders
                  will have the reality of not being executed at a higher price
                  than the predefined limit.
                </p>
              </div>
              <div className="term-section">
                <h2 className="term-section-list-heading">Triggers</h2>
                <p>Event Trigger</p>
                <p>
                  It tracks limited in advance conditions set by the user and
                  triggers an event like a Sell or Buy order once the limited in
                  advance condition occurs in the market. When the event
                  triggers, the algorithm carries out the whole order just like
                  defined in the rule. Remark that all the orders are stored on
                  our cloud expecting the wanted conditions before being sent to
                  the market. So that, no pre-check is done in terms of
                  availability of funds or at least order allocation.
                </p>
                <p>Time Trigger</p>
                <p>
                  It makes it done to send orders without overviewing any
                  previous checking of a specific condition. The order will be
                  delivered at the exact time interval specified by the user.
                </p>
                <div className="term-section">
                  <h2 className="term-section-list-heading">Backtesting</h2>
                  <p>
                    Backtesting evaluates the survival of a trading strategy by
                    determining how it would work out after applying historical
                    data. From this, it will be easy to verify how that specific
                    strategy would have been carried out if it was run in the
                    market conditions. Backtesting is useful to understand the
                    performance of a strategy in certain conditions. It allows a
                    trader to inspire a trading strategy using historical data
                    to provide results and examine risk and profitability before
                    risking any actual capital.
                  </p>
                  <p>
                    A well-executed backtest that gains actual results ensures
                    traders that the strategy is essentially sound and is likely
                    to gain profits when executed in reality. However, a
                    well-executed backtest that additions suboptimal results
                    will assist traders to alter or reject the strategy.
                  </p>
                </div>
                <div className="term-section">
                  <h2 className="term-section-list-heading">
                    Technical Analysis
                  </h2>
                  <p>
                    The methodology based on the observations of the price of an
                    asset to get perceptive information to use for investment
                    purposes is known as technical analysis. The main idea of
                    this methodology is that offer and demand shape how the
                    price evolves. It helps a trader to observe the charts that
                    are built upon historical prices. It is possible to
                    understand the trend and find recurring patterns to try to
                    exploit to find opportunities for benefit.
                  </p>
                  <p>
                    The endless number of calculations is applied to the price
                    to provide specific signals for the traders to make
                    decisions. Moving Averages, Bollinger Bands, and many
                    Oscillators are examples of technical analysis.
                  </p>
                </div>
                <div className="term-section">
                  <h2 className="term-section-list-heading">Stop Loss</h2>
                  <p>
                    It is a spontaneous order of closing a position to decrease
                    further losses. The most significant challenge for an
                    investor or trader is how to deal with losses; not all
                    investments or trades can be successful. Deciding when it is
                    time to stop losing the amount on the investment is what
                    discriminates a professional trader from a new trader.
                  </p>
                  <p>
                    Mainly, there are two ways to stop a loss first one is that
                    a trader can decide to trade an asset when a specific price
                    reaches the market. The other one is that when the position
                    is losing a certain amount of money.
                  </p>
                </div>
                <div className="term-section">
                  <h2 className="term-section-list-heading">
                    Fear of Missing Out (FOMO)
                  </h2>
                  <p>
                    FOMO consists of a feeling that if a trader does not buy a
                    specific asset at that price, he/she will miss the chance to
                    buy it at a reasonable price later. Frequently, this is not
                    true because the reduction of the price is very common. It
                    means that often FOMO can conduct to buy at a standard
                    price.
                  </p>
                  <p>
                    Short-term price actions seem to be something unchangeable.
                    Sometimes the price of an asset would not retrace back to
                    where it was before a permanent uptrend started. But, the
                    main point to consider is that buying an asset because its
                    price is upgrading fast is not a good decision of
                    investment.
                  </p>
                </div>
                <div className="term-section">
                  <h2 className="term-section-list-heading">Risk Management</h2>
                  <p>
                    Risk management is the batch of practices that all the
                    traders have to put in order to mitigate the overall risk on
                    their positions. Good risk management strategies can reduce
                    significantly the stress often related to trading movements.
                    Eventually allow to always stay focused and basis for a
                    better decision-making method.
                  </p>
                  <p>
                    The most popular among these practices is to define the best
                    stop loss level to stop greater than desired ends. The other
                    two main pillars of an individual risk management approach
                    are setting a suitable risk ratio and always taking area
                    sizing decisions that could fit with the core level of risk
                    tolerance.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="container-fluid crypto-container">
        <div className="row">
          <div className="col-12 update-form mt-4">
            <h1>Get New Strategies Weekly</h1>
            <p>Get updates without searching in your inbox every week</p>
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
    </>
  );
};

export default Faq;
