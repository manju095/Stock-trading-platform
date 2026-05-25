import React from "react";
import pricingEquity from "../../assets/images/pricingEquity.svg";
import intradayTrades from "../../assets/images/intradayTrades.svg";
import "./Hero.css";

export default function Hero() {
  return (
    <div className="container">
      <div className="row text-center charges-header pb-3">
        <h1 className="fs-2">Charges</h1>
        <p className="fs-4 text-muted pt-2">List of all charges and taxes</p>
      </div>
      <div className="row boxes pb-5">
        <div className="col-4 pricingImg text-center box2 py-0">
          <img src={pricingEquity} className="img-fluid"></img>
          <h1>Free equity delivery</h1>
          <p className="px-0 pt-3">
            All equity delivery investments (NSE, BSE), are absolutely free — ₹
            0 brokerage.
          </p>
        </div>
        <div className="col-4 pricingImg text-center box2 py-0">
          <img src={intradayTrades} className="img-fluid"></img>
          <h1>Intraday and F&O trades</h1>
          <p className="px-0 pt-3">
            Flat ₹ 20 or 0.03% (whichever is lower) per executed order on
            intraday trades across equity, currency, and commodity trades. Flat
            ₹20 on all option trades.
          </p>
        </div>
        <div className="col-4 pricingImg text-center box2 py-0">
          <img src={intradayTrades} className="img-fluid"></img>
          <h1>Free direct MF</h1>
          <p className="px-0 pt-3">
            All direct mutual fund investments are absolutely free — ₹ 0
            commissions & DP charges.
          </p>
        </div>
      </div>
    </div>
  );
}
