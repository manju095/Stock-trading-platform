import React from "react";
import "./Hero.css";

export default function Hero() {
  return (
    <header className="bg-light mb-5">
      <div className="container">
        <div className="row ">
          <div className="row-6 mt-5 mb-4 d-flex align-items-center justify-content-between">
            <h1 className="">Support Portal</h1>
            <button className="m-0 w-5 btn fs-5">My tickets</button>
          </div>
          <div className="row-6 search-box">
            <i class="fa-solid fa-magnifying-glass search-icon"></i>
            <input
              type="text"
              placeholder="Eg: How do i open my account, How do i activate F&O..."
              className=" w-100 form-control-lg mb-5 search-input"
              style={{
                borderRadius: "5px",
                border: "1px solid #ced4da",
                height: "60px",
              }}
            ></input>
          </div>
        </div>
      </div>
    </header>
  );
}
