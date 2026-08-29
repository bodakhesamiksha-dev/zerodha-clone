import React from "react";

function Hero() {
  return (
    <div className="container border-bottom mb-5">
      <div className="text-center mt-5 p-3">
        <h3>Zerodha Products</h3>
        <p className="text-muted mt-2 fs-5">
          Sleek, modern, and intuitive trading platforms
        </p>
        <p className="mt-3 mb-5 text-muted">
          Check out our{" "}
          <a href="" style={{ textDecoration: "none" }}>
            investment offerings{" "}
            <i class="fa fa-long-arrow-right" aria-hidden="true"></i>
          </a>
        </p>
      </div>
    </div>
  );
}

export default Hero;