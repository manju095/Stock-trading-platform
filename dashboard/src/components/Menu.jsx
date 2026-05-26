import React, { useState, useEffect } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import logo from "../assets/logo.png";
import "./Menu.css";
import { FaBars, FaTimes } from "react-icons/fa";
import { toast } from "react-toastify";

export default function Menu() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const app1Url = import.meta.env.VITE_APP1_URL || "http://localhost:5173";
  const apiUrl = import.meta.env.VITE_API_URL || "http://localhost:3002";

  const handleLogout = async () => {
    try {
      await axios.get(`${apiUrl}/logout`);
      toast.success("Logged out successfully.");
      setTimeout(() => {
        window.location.assign(`${app1Url}/`);
      }, 1000);
    } catch (err) {
      toast.error(err);
    }
  };

  const [selectedMenu, setSelectedMenu] = useState(0);
  const [isProfileDropdownOpen, setIsProfileDropdownOpen] = useState(false);

  const handleMenuClick = (index) => {
    setSelectedMenu(index);
  };

  const handleProfileClick = (index) => {
    setIsProfileDropdownOpen(!isProfileDropdownOpen);
  };

  const menuClass = "menu";
  const activeMenuClass = "menu selected";

  return (
    <div className="menu-container">
      <button
        className="hamburger-btn"
        onClick={() => setIsMenuOpen(!isMenuOpen)}
      >
        {isMenuOpen ? <FaTimes size={24} /> : <FaBars size={24} />}{" "}
      </button>
      <img src={logo} style={{ width: "50px" }} />
      <div className={`menus ${isMenuOpen ? "open" : ""}`}>
        <ul>
          <li className="menu">
            <Link
              style={{ textDecoration: "none" }}
              to="/"
              onClick={() => handleMenuClick(0)}
            >
              <p className={selectedMenu === 0 ? activeMenuClass : menuClass}>
                Dashboard
              </p>
            </Link>
          </li>
          <li className="menu">
            <Link
              style={{ textDecoration: "none" }}
              to="/orders"
              onClick={() => handleMenuClick(1)}
            >
              <p className={selectedMenu === 1 ? activeMenuClass : menuClass}>
                Orders
              </p>
            </Link>
          </li>
          <li className="menu">
            <Link
              style={{ textDecoration: "none" }}
              to="/holdings"
              onClick={() => handleMenuClick(2)}
            >
              <p className={selectedMenu === 2 ? activeMenuClass : menuClass}>
                Holdings
              </p>
            </Link>
          </li>
          <li className="menu">
            <Link
              style={{ textDecoration: "none" }}
              to="/positions"
              onClick={() => handleMenuClick(3)}
            >
              <p className={selectedMenu === 3 ? activeMenuClass : menuClass}>
                Positions
              </p>
            </Link>
          </li>
          <li className="menu">
            <Link
              style={{ textDecoration: "none" }}
              to="/funds"
              onClick={() => handleMenuClick(4)}
            >
              <p className={selectedMenu === 4 ? activeMenuClass : menuClass}>
                Funds
              </p>
            </Link>
          </li>
          <li className="menu">
            <Link
              style={{ textDecoration: "none" }}
              to="/apps"
              onClick={() => handleMenuClick(5)}
            >
              <p className={selectedMenu === 5 ? activeMenuClass : menuClass}>
                Apps
              </p>
            </Link>
          </li>
        </ul>
        <hr />
        <div className="profile" onClick={handleProfileClick}>
          <div className="avatar">ZU</div>
          <Link
            style={{ textDecoration: "none" }}
            className="text-danger"
            onClick={() => {
              handleLogout();
            }}
          >
            Logout
          </Link>
        </div>
      </div>
    </div>
  );
}
