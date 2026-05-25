import React from "react";
import account from "../../assets/images/account.svg";
import intraday from "../../assets/images/intraday.svg";
import "./pricing.css";

export default function Pricing() {
  return (
    <div className="container pt-5">
      <div className="row pt-5">
        <div className="col1 pt-4">
          <h3>Unbeatable pricing</h3>
          <p className="text-muted py-3">
            We pioneered the concept of discount broking and price transparency
            in India. Flat fees and no hidden charges.
          </p>
        </div>
        <div className="col2">
          <div className="pricing">
            <div className="pricingBox">
              <img src={account} alt="freeAccount"></img>
              <p className="text-muted">
                Free account <br></br>opening
              </p>
            </div>
            <div className="pricingBox">
              <img src={account} alt="freeEquity"></img>
              <p className="text-muted">
                Free equity delivery <br></br> and direct mutual funds
              </p>
            </div>
            <div className="pricingBox">
              <img src={intraday} alt="intraday"></img>
              <p className="text-muted">
                Intraday and <br></br>F&O
              </p>
            </div>
            <div className="pricingBox"></div>
          </div>
        </div>
        <a href="/">
          See Pricing <i class="fa-solid fa-arrow-right"></i>
        </a>
      </div>
    </div>
  );
}
