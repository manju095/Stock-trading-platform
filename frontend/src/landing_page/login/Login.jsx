import React, { useEffect, useState } from "react";
import { useSearchParams } from "react-router-dom";
import account_open from "../../assets/images/account_open.svg";
import { Link } from "react-router-dom";
import axios from "axios";
import { toast } from "react-toastify";

export default function Login() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const [searchParams] = useSearchParams();
  const [flashMessage, setFlashMessage] = useState("");
  const app2Url = import.meta.env.VITE_APP2_URL || "http://localhost:5174";
  const apiUrl = import.meta.env.VITE_API_URL || "http://localhost:3002";

  const handleLoginClick = async (e) => {
    e.preventDefault();
    console.log(username, password);

    try {
      await axios.post(
        `${apiUrl}/login`,
        {
          username: username,
          password: password,
        },
        {
          withCredentials: true,
        },
      );
      toast.success("Logged in successfully!");
      setTimeout(() => {
        window.location.assign(`${app2Url}/`);
      }, 2000);
    } catch (err) {
      console.log(err);
      if (err.response) {
        toast.error("Invalid username or password");
      } else if (err.request) {
        toast.error("Server is currently offline. Please try again later.");
      }
    }
  };

  useEffect(() => {
    const message = searchParams.get("message");
    if (message) {
      setFlashMessage(message);
    }
  }, [searchParams]);

  return (
    <div className="container">
      {flashMessage && (
        <div
          style={{
            backgroundColor: "#ffdbdb",
            color: "#d93838",
            padding: "10px",
            borderRadius: "5px",
            marginBottom: "15px",
            textAlign: "center",
            border: "1px solid #f5baba",
          }}
        >
          {flashMessage}
        </div>
      )}
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
          <form className="needs-validation" onSubmit={handleLoginClick}>
            <h1 className="mt-5 pt-5 pb-3 fs-2">Login now</h1>

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
              Login
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}
