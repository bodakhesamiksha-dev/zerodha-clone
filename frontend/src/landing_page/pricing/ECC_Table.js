import React from "react";

function ECC_Table() {
  return (
    <div className="container">
      <div className="row">
        <div className="col-1"></div>
        <div className="col-10">
          <div className="table-responsive">
            <table className="table table-bordered">
              <thead>
                <tr>
                  <th></th>
                  <th>Equity delivery</th>
                  <th>Equity intraday</th>
                  <th>F&O - Futures</th>
                  <th>F&O - Options</th>
                </tr>
              </thead>

              <tbody>
                <tr>
                  <td>Brokerage</td>

                  <td>Zero Brokerage</td>

                  <td>
                    0.03% or Rs. 20/executed
                    <br />
                    order whichever is lower
                  </td>

                  <td>
                    0.03% or Rs. 20/executed
                    <br />
                    order whichever is lower
                  </td>

                  <td>Flat Rs. 20 per executed order</td>
                </tr>

                <tr>
                  <td>STT/CTT</td>

                  <td>0.1% on buy & sell</td>

                  <td>0.025% on the sell side</td>

                  <td>0.05% on the sell side</td>

                  <td>
                    <ul>
                      <li>
                        0.15% of the intrinsic value on
                        <br />
                        options that are bought and
                        <br />
                        exercised
                      </li>

                      <li>0.15% on sell side (on premium)</li>
                    </ul>
                  </td>
                </tr>

                <tr>
                  <td>
                    Transaction
                    <br />
                    charges
                  </td>

                  <td>
                    NSE: 0.00307%
                    <br />
                    BSE: 0.00375%
                  </td>

                  <td>
                    NSE: 0.00307%
                    <br />
                    BSE: 0.00375%
                  </td>

                  <td>
                    NSE: 0.00183%
                    <br />
                    BSE: 0
                  </td>

                  <td>
                    NSE: 0.03553% (on premium)
                    <br />
                    BSE: 0.0325% (on premium)
                  </td>
                </tr>

                <tr>
                  <td>GST</td>

                  <td>
                    18% on (brokerage + SEBI
                    <br />
                    charges + transaction
                    <br />
                    charges)
                  </td>

                  <td>
                    18% on (brokerage + SEBI
                    <br />
                    charges + transaction
                    <br />
                    charges)
                  </td>

                  <td>
                    18% on (brokerage + SEBI
                    <br />
                    charges + transaction
                    <br />
                    charges)
                  </td>

                  <td>
                    18% on (brokerage + SEBI charges
                    <br />+ transaction charges)
                  </td>
                </tr>

                <tr>
                  <td>SEBI charges</td>

                  <td>₹10 / crore</td>

                  <td>₹10 / crore</td>

                  <td>₹10 / crore</td>

                  <td>₹10 / crore</td>
                </tr>

                <tr>
                  <td>Stamp charges</td>

                  <td>
                    0.015% or ₹1500 / crore on
                    <br />
                    buy side
                  </td>

                  <td>
                    0.003% or ₹300 / crore on
                    <br />
                    buy side
                  </td>

                  <td>
                    0.002% or ₹200 / crore on
                    <br />
                    buy side
                  </td>

                  <td>0.003% or ₹300 / crore on buy side</td>
                </tr>
              </tbody>
            </table>
          </div>
         <h4 className="text-center mt-2">Calculate your costs upfront using our brokerage calculator</h4> 
        </div>
        <div className="col-1"></div>
      </div>
    </div>
  );
}

export default ECC_Table;
