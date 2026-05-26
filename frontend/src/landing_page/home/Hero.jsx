import React from "react";
import { Link } from "react-router-dom";
import homeHero from "../../assets/images/homeHero.png";
import "./Hero.css";

export default function Hero() {
  return (
    <div className="container p-5">
      <div className="row text-center">
        <img src={homeHero} alt="homeHero image" className="mx-auto mb-5"></img>
        <h2>Invest in everything</h2>
        <p className="fs-5">
          Online platform to invest in stocks, derivatives, mutual funds, ETFs,
          bonds, and more.
        </p>
        <Link to="/signup">
          <button className=" btn  fs-5 my-4">Sign up for free</button>
        </Link>
      </div>
    </div>
  );
}
