import React from "react";
import { Link } from "react-router-dom";
import "./openAccount.css";

export default function OpenAccount() {
  return (
    <div className="container account">
      <h3>Open a Zerodha account</h3>
      <p className="text-muted mt-3">
        Modern platforms and apps, ₹0 investments, and flat ₹20 intraday and F&O
        trades.
      </p>
      <Link to="/signup">
        <button className=" btn btn-primary fs-5 my-4 mt-3">
          Sign up for free
        </button>
      </Link>
    </div>
  );
}
