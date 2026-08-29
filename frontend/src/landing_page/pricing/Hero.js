
import React from "react";

function Hero() {
  return (
    <div className="container text-center my-5">
      <div className="row my-5">
        <h3>Charges</h3>
        <h5 className="text-muted">List of all charges and taxes</h5>
      </div>

      <br></br>

      <div className="row my-5">
        <div className="col-1"></div>
        <div className="col-3">
          <img
            src="/media/images/pricing0.svg"
            alt=""
            className="img-fluid"
            style={{ width: "190px" }}
          />
          <h4 className="py-2">Free equity delivery</h4>
          <p className="text-muted py-3">
            All equity delivery investments (NSE, BSE), are absolutely free — ₹
            0 brokerage.
          </p>
        </div>
        <div className="col-4">
          <img
            src="/media/images/intradayTrades.svg"
            alt=""
            className="img-fluid"
            style={{ width: "190px" }}
          />
          <h4 className="py-2">Intraday and F&O trades</h4>
          <p className="text-muted py-3">
            Flat ₹ 20 or 0.03% (whichever is lower) per executed order on
            intraday trades across equity, currency, and commodity trades. Flat
            ₹20 on all option trades.
          </p>
        </div>
        <div className="col-3">
          <img
            src="/media/images/pricing0.svg"
            alt=""
            className="img-fluid"
            style={{ width: "190px" }}
          />
          <h4 className="py-2">Free direct MF</h4>
          <p className="text-muted py-3">
            All direct mutual fund investments are absolutely free — ₹ 0
            commissions & DP charges.
          </p>
        </div>
        <div className="col-1"></div>
      </div>

      <div className="container mt-5">
        <div className="row">
          <div className="col-1"></div>

        
  {/* Top Tabs */}
          <div className="d-flex gap-5 border-bottom mb-1 col-10">
            <h4 className="text-dark border-bottom border-primary pb-3 mb-0">
              Equity
            </h4>

            <h4 className="text-primary">Currency</h4>

            <h4 className="text-primary">Commodity</h4>
          </div>

</div>
</div>
</div>
      
 
  );
}

export default Hero;
