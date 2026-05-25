import React from "react";
import "./Hero.css";

export default function Hero() {
  return (
    <div className="container ">
      <div className="row text-center mt-5 mb-4 p-5 productHero border-bottom">
        <h1 className="fs-2 pb-3">Zerodha Products</h1>
        <h2 className="fs-4 text-muted">
          Sleek, modern, and intuitive trading platforms
        </h2>
        <p className="pb-5 fs-5">
          Check out our{" "}
          <a href="/">
            investment offerings <i class="fa-solid fa-arrow-right fs-6"></i>
          </a>
        </p>
      </div>
    </div>
  );
}
