// import React from "react";

// function Universe() {
//   return (
//     <div className="container mt-5">
//       <div className="row text-center">
//         <h4>The Zerodha Universe</h4>
//         <p>
//           Extend your trading and investment experience even further with our
//           partner platforms
//         </p>

//         <div className="col-4 p-3 mt-5">
//           <img src="media/images/zerodhaFundhouse.png" />
//           <p className="text-small text-muted">Thematic investment platform</p>
//         </div>
//         <div className="col-4 p-3 mt-5">
//           <img src="media/images/smallcaseLogo.png" />
//           <p className="text-small text-muted">Thematic investment platform</p>
//         </div>
//         <div className="col-4 p-3 mt-5">
//           <img src="media/images/smallcaseLogo.png" />
//           <p className="text-small text-muted">Thematic investment platform</p>
//         </div>
//         <div className="col-4 p-3 mt-5">
//           <img src="media/images/smallcaseLogo.png" />
//           <p className="text-small text-muted">Thematic investment platform</p>
//         </div>
//         <div className="col-4 p-3 mt-5">
//           <img src="media/images/smallcaseLogo.png" />
//           <p className="text-small text-muted">Thematic investment platform</p>
//         </div>
//         <div className="col-4 p-3 mt-5">
//           <img src="media/images/smallcaseLogo.png" />
//           <p className="text-small text-muted">Thematic investment platform</p>
//         </div>
//         <button
//           className="p-2 btn btn-primary fs-5 mb-5"
//           style={{ width: "20%", margin: "0 auto" }}
//         >
//           Signup Now
//         </button>
//       </div>
//     </div>
//   );
// }

// export default Universe;











































import React from "react";

function Universe() {
  return (
    <div className="container mt-5">

      {/* Heading */}
      <div className="text-center mb-5">
        <h4 className="fs-3">The Zerodha Universe</h4>

        <p className="mt-3">
          Extend your trading and investment experience even further with our
          partner platforms
        </p>
      </div>

      {/* First Row */}
      <div className="row text-center mt-5">

        <div className="col-4 px-4">
          <img
            src="media/images/zerodhaFundhouse.png"
            className="w-50 mb-3"
            alt="Zerodha Fund House"
          />
          <p className="text-muted small">
            our asset management venture<br></br>
            this is creating simple and transparent index<br></br>
            funds to help you save for your goals
          </p>
        </div>

        <div className="col-4 px-4">
          <img
            src="media/images/sensibullLogo.svg"
            className="w-50 mb-3"
            alt="Smallcase"
          />
          <p className="text-muted small">
            Options trading platform that lets you<br></br>
            creates strategies, analyze positions, and examine<br></br>
            data points like open interest, FII/DII, and more
          </p>
        </div>

        <div className="col-4 px-4">
          <img
            src="media/images/tijori2.png"
            className="w-50 mb-3"
            alt="Smallcase"
          />
          <p className="text-muted small">
            investment research platform<br></br>
            that offers detailed insights on stocks,<br></br>
            sectors, supply chains, and more.
          </p>
        </div>

      </div>

      {/* Second Row */}
      <div className="row text-center mt-5">

        <div className="col-4 px-4">
          <img
            src="media/images/streakLogo.png"
            className="w-50 mb-3"
            alt="Smallcase"
          />
          <p className="text-muted small">
            systematic trading platform <br></br>
            that allows you to create and backtest<br></br>
            strategies without coding
          </p>
        </div>

        <div className="col-4 px-4">
          <img
            src="media/images/smallcaseLogo.png"
            className="w-50 mb-3"
            alt="Smallcase"
          />
          <p className="text-muted small">
            Thematic investment platform<br></br>
            that helps you invest in driversified<br></br>
            baskets of stocks on ETFs.
          </p>
        </div>

        <div className="col-4 px-4">
          <img
            src="media/images/dittoLogo.png"
            className="w-50 mb-3"
            alt="Smallcase"
          />
          <p className="text-muted small">
          personalized advice on life <br></br>
          and health insurance. No spam<br></br>
          and no mis-selling
          </p>
        </div>

      </div>

      {/* Button */}
      <div className="text-center mt-5 mb-5">
        <button className="btn btn-primary fs-5 px-4 py-2">
          Signup up for free
        </button>
      </div>

    </div>
  );
}

export default Universe;