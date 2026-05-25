import React from "react";

export default function ServiceCharge() {
  return (
    <div className="container">
      <div className="row pt-5 mt-5 pb-5">
        <h1 className="fs-3 pb-3">Charges for optional value added services</h1>
        <table>
          <thead>
            <tr className="border-bottom  ">
              <th className="p-3 fw-normal">Service</th>
              <th className="p-3 fw-normal">Billing Frquency</th>
              <th className="p-3 fw-normal">Charges</th>
            </tr>
          </thead>
          <tbody className="text-muted">
            <tr>
              <td>Tickertape</td>
              <td>Monthly / Annual</td>
              <td>Free: 0 | Pro: 249/2399</td>
            </tr>
            <tr>
              <td>Smallcase</td>
              <td>Per transaction</td>
              <td>Buy & Invest More: 100 | SIP: 10</td>
            </tr>
            <tr>
              <td>Kite Connect</td>
              <td>Monthly</td>
              <td> Connect: 500 | Personal: Free</td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
}
