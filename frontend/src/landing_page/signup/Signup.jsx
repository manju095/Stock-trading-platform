import React, { useState } from "react";
import account_open from "../../assets/images/account_open.svg";
import { Link } from "react-router-dom";
import axios from "axios";
import { toast } from "react-toastify";

export default function SignUp() {
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const app2Url = import.meta.env.VITE_APP2_URL || "http://localhost:5174";
  const apiUrl = import.meta.env.VITE_API_URL || "http://localhost:3002";

  const handleSignupClick = async (e) => {
    e.preventDefault();
    console.log(username, email, password);

    try {
      await axios.post(
        `${apiUrl}/signup`,
        {
          username: username,
          email: email,
          password: password,
        },
        {
          withCredentials: true,
        },
      );
      toast.success("Account created successfully!");
      setTimeout(() => {
        window.location.assign(`${app2Url}/`);
      }, 2000);
    } catch (err) {
      console.log(err);
      const errorMessage =
        err.response?.data?.message || "Signup failed. Please try again.";
      toast.error(errorMessage);
    }
  };

  return (
    <div className="container">
      <h1 className="text-center mt-5 pt-5 fs-2">
        Open a free demat and trading account online
      </h1>
      <p className="text-center fs-4 mt-4 text-muted">
        Start investing brokerage free and join a community of 1.6+ crore
        investors and traders
      </p>
      <div className="row mt-5 mb-5 pb-5">
        <div className="col-6 col-lg-6 col-12">
          <img
            src={account_open}
            alt="accout_open"
            className="img-fluid px-3"
          ></img>
        </div>
        <div className="col-6 px-5 col-lg-6 col-12">
          <form
            className="needs-validation"
            method="POST"
            onSubmit={handleSignupClick}
          >
            <h1 className="mt-5 fs-3">Signup now</h1>
            <p className="fs-5 text-muted" noValidate>
              Or track your existing application
            </p>

            <div className="mb-3">
              <label for="username" class="form-label">
                Username
              </label>
              <input
                type="text"
                name="username"
                id="username"
                className="form-control w-75 border-dark"
                required
                onChange={(e) => {
                  setUsername(e.target.value);
                }}
                value={username}
              ></input>
            </div>
            <div className="mb-3">
              <label for="email" class="form-label">
                Email
              </label>
              <input
                type="email"
                name="email"
                id="email"
                className="form-control w-75 border-dark"
                required
                onChange={(e) => {
                  setEmail(e.target.value);
                }}
                value={email}
              ></input>
            </div>
            <div className="mb-3">
              <label for="password" class="form-label">
                Password
              </label>
              <input
                type="password"
                name="password"
                id="password"
                className="form-control w-75 border-dark"
                required
                onChange={(e) => {
                  setPassword(e.target.value);
                }}
                value={password}
              ></input>
            </div>
            <button type="submit" className="btn btn-success pt-3 mt-3">
              Signup
            </button>
            <p className="fs-6 text-muted mt-4">
              By proceeding, you agree to the Zerodha <a href="">terms</a> &{" "}
              <a href="">privacy policy</a>
            </p>
          </form>
        </div>
      </div>
    </div>
  );
}
