import React from "react";
import logo from "../assets/images/logo.svg";
import "./Navbar.css";
import { useState } from "react";
import kite from "../assets/images/kite-logo.svg";
import kiteConnect from "../assets/images/kite-connect.svg";
import { Link } from "react-router-dom";

export default function Navbar() {
  const [openExtra, setOpenExtra] = useState(false);

  return (
    <nav className="navbar navbar-expand-lg bg-white border-bottom sticky-top">
      <div className="container nav">
        <Link className="navbar-brand" to="/">
          <img src={logo}></img>
        </Link>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <div className="ms-auto d-flex align-items-center">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <li className="nav-item px-3 d-flex flex-row">
                <Link className="nav-link" to="/signup">
                  Signup |
                </Link>
                <Link className="nav-link" to="/login">
                  Login
                </Link>
              </li>
              <li className="nav-item px-3">
                <Link className="nav-link" to="/about">
                  About
                </Link>
              </li>
              <li className="nav-item px-3">
                <Link className="nav-link" to="products">
                  Products
                </Link>
              </li>
              <li className="nav-item px-3">
                <Link className="nav-link" to="pricing">
                  Pricing
                </Link>
              </li>
              <li className="nav-item px-3">
                <Link className="nav-link" to="support">
                  Support
                </Link>
              </li>

              <div
                className="extra-hamburger px-3"
                onClick={() => setOpenExtra(!openExtra)}
                role="button"
              >
                <i class="fa-solid fa-bars"></i>
              </div>

              <ul
                className={`dropdown-menu dropdown-menu-end ${
                  openExtra ? "show" : ""
                }`}
              >
                <li className="kite">
                  <a className="dropdown-item " href="#">
                    <img src={kite} alt="kite"></img>
                    <h4>Kite</h4>
                    <p className="text-muted">Trading platform</p>
                  </a>
                </li>
                <li className="kiteConnect">
                  <a className="dropdown-item" href="#">
                    <img src={kiteConnect} alt="kiteConnect"></img>
                    <h4>Kite Connect</h4>
                    <p className="text-muted">Trading APIs</p>
                  </a>
                </li>
              </ul>
            </ul>
          </div>
        </div>
      </div>
    </nav>
  );
}
