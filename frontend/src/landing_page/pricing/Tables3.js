import React from "react";

function Tables3() {
  return (
    <div className="container mt-5">
      <div className="row">
        <div className="col-1"></div>
        <div className="col-10 mt-5">
          <h4 className="mt-5 mb-4 ">Charges for account opening</h4>

          <div className="table-responsive">
            <table className="table table-bordered">
              <thead>
                <tr>
                  <th>Type of account</th>
                  <th>Charges</th>
                </tr>
              </thead>

              <tbody>
                <tr>
                  <td>Individual account</td>
                  <td>
                    <span className="badge bg-success">FREE</span>
                  </td>
                </tr>

                <tr>
                  <td>Minor account</td>
                  <td>
                    <span className="badge bg-success">FREE</span>
                  </td>
                </tr>

                <tr>
                  <td>NRI account</td>
                  <td>₹ 500</td>
                </tr>

                <tr>
                  <td>HUF account</td>
                  <td>
                    <span className="badge bg-success">FREE</span>
                    &nbsp; (online) / ₹ 500 (offline)
                  </td>
                </tr>

                <tr>
                  <td>
                    Partnership, LLP and Corporate accounts (offline only)
                  </td>
                  <td>₹ 500</td>
                </tr>
              </tbody>
            </table>
          </div>

          <div className="container my-5">
            {/* Heading */}
            <h4 className="mb-4">Demat AMC (Annual Maintenance Charge)</h4>

            {/* Free for first year */}
            <div
              className="border-start border-4 border-primary bg-light px-3 py-2 mb-4"
              style={{ width: "fit-content" }}
            >
              Free for first year*
            </div>

            {/* Description */}
            <p className="mb-3">From second year onwards, for BSDA accounts:</p>

            {/* Table */}
            <div className="table-responsive">
              <table className="table table-bordered">
                <thead>
                  <tr>
                    <th>Value of holdings</th>
                    <th>AMC</th>
                  </tr>
                </thead>

                <tbody>
                  <tr>
                    <td>Up to ₹4 lakh</td>
                    <td>
                      <span className="badge bg-success">FREE</span>
                    </td>
                  </tr>

                  <tr>
                    <td>₹4 lakh – ₹10 lakh</td>
                    <td>₹100 per year + 18% GST, charged quarterly</td>
                  </tr>

                  <tr>
                    <td>Above ₹10 lakh</td>
                    <td>₹300 per year + 18% GST, charged quarterly</td>
                  </tr>
                </tbody>
              </table>
            </div>

            {/* Information */}
            <p className="mt-3">
              For a non-BSDA account, AMC is ₹300 per year + 18% GST, regardless
              of holdings value, charged quarterly.
            </p>

            <p className="mt-4">
              To learn more about BSDA,{" "}
              <a href="#" className="text-decoration-none">
                click here.
              </a>{" "}
              To learn more about AMC,{" "}
              <a href="#" className="text-decoration-none">
                click here.
              </a>
            </p>

            {/* Note */}
            <p className="mt-4">*Resident individual accounts only.</p>
          </div>

          <div className="container mt-5 mb-5">
            <h4 className="mb-4">Charges for optional value added services</h4>

            <table className="table table-bordered">
              <thead>
                <tr>
                  <th>Service</th>
                  <th>Billing Frequency</th>
                  <th>Charges</th>
                </tr>
              </thead>

              <tbody>
                <tr>
                  <td>Tickertape</td>
                  <td>Monthly / Quarterly / Annual</td>
                  <td>Free: 0 | Pro: 249/699/2399</td>
                </tr>

                <tr>
                  <td>Smallcase</td>
                  <td>Per transaction</td>
                  <td>Buy & Invest More: 100 | SIP: 10</td>
                </tr>

                <tr>
                  <td>Kite Connect</td>
                  <td>Monthly</td>
                  <td>Connect: 500 | Personal: Free</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
        <div className="col-1"></div>
      </div>
    </div>
  );
}

export default Tables3;
