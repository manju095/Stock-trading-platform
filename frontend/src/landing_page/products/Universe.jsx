import React from "react";
import zerodhaFundHouse from "../../assets/images/zerodhaFundhouse.png";
import sensibullLogo from "../../assets/images/sensibullLogo.svg";
import tijori from "../../assets/images/tijori.svg";
import streakLogo from "../../assets/images/streakLogo.png";
import smallcaseLogo from "../../assets/images/smallcaseLogo.png";
import dittoLogo from "../../assets/images/dittoLogo.png";
import "./Universe.css";

export default function Universe() {
  return (
    <div className="container mt-5">
      <div className="row text-center pb-5 boxes">
        <h1 className="fs-3">The Zerodha Universe</h1>
        <p className="fs-5 pt-3 pb-5">
          Extend your trading and investment experience even further with our
          partner platforms
        </p>
        <div className="col-4 p-3 box2">
          <img src={zerodhaFundHouse} className="universeImg"></img>
          <p>
            Our asset management venture that is creating simple and transparent
            index funds to help you save for your goals.
          </p>
        </div>
        <div className="col-4 p-3 box2">
          <img src={sensibullLogo} className="universeImg"></img>
          <p>
            Options trading platform that lets you create strategies, analyze
            positions, and examine data points like open interest, FII/DII, and
            more.
          </p>
        </div>
        <div className="col-4 p-3 box2">
          <img src={tijori} className="universeImg"></img>
          <p>
            Investment research platform that offers detailed insights on stock,
            sectors, supply chains, and more.
          </p>
        </div>
        <div className="col-4 p-3 box2">
          <img src={streakLogo} className="universeImg"></img>
          <p>
            Systematic trading platform that allows you to create and backtest
            strategies without coding.
          </p>
          <p></p>
        </div>
        <div className="col-4 p-3 box2">
          <img src={smallcaseLogo} className="universeImg"></img>
          <p>
            Thematic investing platform that helps you invest in diversified
            baskets of stocks on ETFs.
          </p>
        </div>
        <div className="col-4 p-3 box2">
          <img src={dittoLogo} className="universeImg"></img>
          <p>
            Personalized advice on life and health insurance. No spam and no
            mis-selling.{" "}
          </p>
        </div>
        <button className=" btn btn-primary fs-5 my-4 mt-3 ">
          Sign up for free
        </button>
      </div>
    </div>
  );
}
