import React from "react";
import education from "../../assets/images/education.svg";
import "./education.css";

export default function Education() {
  return (
    <div className="container">
      <div className="row education">
        <div className="col">
          <img src={education} alt="education" class="img-fluid"></img>
        </div>
        <div className="col market">
          <h3 className="mb-4">Free and open market education</h3>
          <p className="text-muted">
            Varsity, the largest online stock market education book in the world
            covering everything from the basics to advanced trading.
          </p>
          <a href="/">
            Varsity <i class="fa-solid fa-arrow-right"></i>
          </a>
          <p className="text-muted mt-4">
            TradingQ&A, the most active trading and investment community in
            India for all your market related queries.
          </p>
          <a href="/">
            TradingQ&A <i class="fa-solid fa-arrow-right"></i>
          </a>
        </div>
      </div>
    </div>
  );
}
