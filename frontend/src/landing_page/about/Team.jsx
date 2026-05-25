import React from "react";
import "./Team.css";
import nithinKamath from "../../assets/images/nithinKamath.jpg";

export default function Team() {
  return (
    <div className="container">
      <div className="row  mb-5 px-5">
        <h1 className="  text-center fs-3">People</h1>
      </div>
      <div className="row  mb-5 px-5 boxes">
        <div className="col-6 px-5 text-center box2">
          <img src={nithinKamath} alt="nithinKamath" className="nithin "></img>
          <h5 className="mt-4">Nithin Kamath</h5>
          <h6 className="text-muted pb-5">Founder, CEO</h6>
        </div>
        <div className="col-6 text-muted teamPara box2 fs-5">
          <p>
            Nithin bootstrapped and founded Zerodha in 2010 to overcome the
            hurdles he faced during his decade long stint as a trader. Today,
            Zerodha has changed the landscape of the Indian broking industry.
          </p>
          <p>
            {" "}
            He is a member of the SEBI Secondary Market Advisory Committee
            (SMAC) and the Market Data Advisory Committee (MDAC).
          </p>
          <p> Playing basketball is his zen.</p>{" "}
          <p>
            Connect on <a href="">Homepage</a> / <a href="">TradingQnA</a> /{" "}
            <a hrerf="">Twitter</a>
          </p>
        </div>
      </div>
    </div>
  );
}
