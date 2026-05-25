import React from "react";
import "./Brokerage.css";

export default function Charges() {
  return (
    <div className="container">
      <div className="row pt-5 mt-5">
        <h1 className="fs-3 pb-3">Charges for account opening</h1>
        <table>
          <thead>
            <tr className="border-bottom  ">
              <th className="p-3 fw-normal">Type of account</th>
              <th className="p-3 fw-normal">Charges</th>
            </tr>
          </thead>
          <tbody className="text-muted">
            <tr>
              <td>Online account</td>
              <td>
                <span class="badge bg-success">FREE</span>
              </td>
            </tr>
            <tr>
              <td>Offline account</td>
              <td>
                <span class="badge bg-success">FREE</span>
              </td>
            </tr>
            <tr>
              <td>NRI account (offline only)</td>
              <td> &#8377; 500</td>
            </tr>
            <tr>
              <td>
                Partnership, LLP, HUF, or Corporate accounts (offline only)
              </td>
              <td>&#8377; 500</td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
}
