import React from "react";

const Apps = () => {
  return (
    <div className="apps-page">

      <div className="apps-header">
        <h1>Apps</h1>
        <p>Useful tools to make your trading experience better.</p>
      </div>

      <div className="apps-grid">

        {/* Market Overview */}
        <div className="app-card">
          <div className="app-icon market-icon">
            📊
          </div>

          <div className="app-content">
            <h3>Market Overview</h3>
            <p>
              Keep an eye on market trends and important movements.
            </p>

            <button>Explore →</button>
          </div>
        </div>


        {/* Profit Calculator */}
        <div className="app-card">
          <div className="app-icon calculator-icon">
            🧮
          </div>

          <div className="app-content">
            <h3>Profit Calculator</h3>
            <p>
              Calculate your potential profit or loss before trading.
            </p>

            <button>Open Tool →</button>
          </div>
        </div>


        {/* SIP Calculator */}
        <div className="app-card">
          <div className="app-icon sip-icon">
            💰
          </div>

          <div className="app-content">
            <h3>SIP Calculator</h3>
            <p>
              Estimate your investment growth with regular SIPs.
            </p>

            <button>Calculate →</button>
          </div>
        </div>


        {/* Trading Journal */}
        <div className="app-card">
          <div className="app-icon journal-icon">
            📈
          </div>

          <div className="app-content">
            <h3>Trading Journal</h3>
            <p>
              Keep track of your trades and analyze your performance.
            </p>

            <button>Open Journal →</button>
          </div>
        </div>


        {/* Market News */}
        <div className="app-card">
          <div className="app-icon news-icon">
            📰
          </div>

          <div className="app-content">
            <h3>Market News</h3>
            <p>
              Stay updated with important market information.
            </p>

            <button>View News →</button>
          </div>
        </div>


        {/* Watchlist */}
        <div className="app-card">
          <div className="app-icon watch-icon">
            ⭐
          </div>

          <div className="app-content">
            <h3>My Watchlist</h3>
            <p>
              Quickly access and monitor your favorite stocks.
            </p>

            <button>View Watchlist →</button>
          </div>
        </div>

      </div>

    </div>
  );
};

export default Apps;