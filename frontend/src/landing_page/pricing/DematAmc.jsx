import React from "react";
import "./Brokerage.css";

export default function DematAmc() {
  return (
    <div className="container">
      <div className="row pt-5 mt-5">
        <h1 className="fs-3 pb-3">Demat AMC (Annual Maintenance Charge)</h1>
        <table>
          <thead>
            <tr className="border-bottom  ">
              <th className="p-3 fw-normal">Value of holdings</th>
              <th className="p-3 fw-normal">AMC</th>
            </tr>
          </thead>
          <tbody className="text-muted">
            <tr>
              <td>Up to &#8377;4 lakh</td>
              <td>
                <span class="badge bg-success">FREE*</span>
              </td>
            </tr>
            <tr>
              <td>&#8377;4 lakh - &#8377;10 lakh</td>
              <td>&#8377; 100 per year, charged quarterly*</td>
            </tr>
            <tr>
              <td>Above &#8377;10 lakh</td>
              <td> &#8377; 300 per year, charged quarterly</td>
            </tr>
          </tbody>
        </table>
        <p className="pt-3 small">
          * Lower AMC is applicable only if the account qualifies as a Basic
          Services Demat Account (BSDA). BSDA account holders cannot hold more
          than one demat account. To learn more about BSDA,{" "}
          <a href="">click here</a>.
        </p>
      </div>
    </div>
  );
}
