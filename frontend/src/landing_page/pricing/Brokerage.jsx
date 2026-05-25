import React from "react";
import { useState } from "react";
import "./Brokerage.css";

export default function Brokerage() {
  const [activeTab, setActiveTab] = useState("equity");

  const tabs = [
    { id: "equity", label: "Equity" },
    { id: "currency", label: "Currency" },
    { id: "commodity", label: "Commodity" },
  ];

  const tableConfig = {
    equity: {
      headers: [
        "",
        "Equity delivery",
        "Equity intraday",
        "F&O - Futures",
        "F&O - Options",
      ],
      rows: [
        [
          "Brokerage",
          "Zero Brokerage",
          "0.03% or Rs. 20/executed order whichever is lower",
          "0.03% or Rs. 20/executed order whichever is lower",
          "Flat Rs. 20 per executed order",
        ],
        [
          "STT/CTT",
          "0.1% on buy & sell",
          "0.025% on the sell side",
          "0.05% on the sell side",
          [
            "0.15% of the intrinsic value on options that are bought and exercised",
            "0.15% on sell side (on premium)",
          ],
        ],
        [
          "Transaction charges",
          "NSE: 0.00307%\n BSE: 0.00375% ",
          "NSE: 0.00307%\n BSE: 0.00375%",
          "NSE: 0.00183%\n BSE: 0",
          "NSE: 0.03553% (on premium)\n BSE: 0.0325% (on premium)",
        ],
        [
          "GST",
          "18% on (brokerage + SEBI charges + transaction charges)",
          "18% on (brokerage + SEBI charges + transaction charges)",
          "18% on (brokerage + SEBI charges + transaction charges)",
          "18% on (brokerage + SEBI charges + transaction charges)",
        ],
        [
          "SEBI charges",
          "₹10 / crore",
          "₹10 / crore",
          "₹10 / crore",
          "₹10 / crore",
        ],
        [
          "Stamp charges",
          "0.015% or ₹1500 / crore on buy side",
          "0.003% or ₹300 / crore on buy side",
          "0.002% or ₹200 / crore on buy side",
          "0.003% or ₹300 / crore on buy side",
        ],
      ],
    },
    currency: {
      headers: ["", "Currency futures", "Currency options"],
      rows: [
        [
          "Brokerage",
          "0.03% or ₹ 20/executed order whichever is lower",
          "₹ 20/executed order",
        ],
        ["STT/CTT", "No STT", "No STT"],
        [
          "Transaction charges",
          "NSE: 0.00035%\n BSE: 0.00045%",
          "NSE: 0.0311% \nBSE: 0.001%",
        ],
        [
          "GST",
          "18% on (brokerage + SEBI charges + transaction charges)",
          "18% on (brokerage + SEBI charges + transaction charges)",
        ],
        ["SEBI charges", "₹10 / crore", "₹10 / crore"],
        [
          "Stamp charges",
          "0.0001% or ₹10 / crore on buy side",
          "0.0001% or ₹10 / crore on buy side",
        ],
      ],
    },
    commodity: {
      headers: ["", "Commodity futures", "Commodity options"],
      rows: [
        [
          "Brokerage",
          "0.03% or Rs. 20/executed order whichever is lower",
          "₹ 20/executed order",
        ],
        ["STT/CTT", "0.01% on sell side (Non-Agri)", "0.05% on sell side"],
        [
          "Transaction charges",
          "NSE: 0.00035% \nBSE: 0.00045%",
          "NSE: 0.0311% \nBSE: 0.001%",
        ],
        [
          "GST",
          "18% on (brokerage + SEBI charges + transaction charges)",
          "18% on (brokerage + SEBI charges + transaction charges)",
        ],
        [
          "SEBI charges",
          "Agri:\n₹1 / crore\n Non-agri:\n₹10 / crore",
          "₹10 / crore",
        ],
        [
          "Stamp charges",
          "0.002% or ₹200 / crore on buy side",
          "0.003% or ₹300 / crore on buy side",
        ],
      ],
    },
  };

  const current = tableConfig[activeTab];
  return (
    <div className="container pt-5">
      <div className="row">
        <div className="border-bottom d-flex">
          {tabs.map((tab) => (
            <button
              key={tab.id}
              onClick={() => setActiveTab(tab.id)}
              className={`brokeragebtn fs-3 ${activeTab === tab.id ? "active" : ""} `}
            >
              {tab.label}
            </button>
          ))}
        </div>

        <div className="pt-5 px-0 fs-6">
          <table>
            <thead>
              <tr>
                {current.headers.map((h, i) => (
                  <th key={i} className="border-bottom p-3">
                    {h}
                  </th>
                ))}
              </tr>
            </thead>
            <tbody>
              {current.rows.map((row, i) => (
                <tr key={i}>
                  {row.map((cell, j) => (
                    <td
                      key={j}
                      className="text-muted"
                      style={{ whiteSpace: "pre-line" }}
                    >
                      {Array.isArray(cell) ? (
                        <ul>
                          {cell.map((item, k) => (
                            <li key={k}>{item}</li>
                          ))}
                        </ul>
                      ) : (
                        cell
                      )}
                    </td>
                  ))}
                </tr>
              ))}
            </tbody>
          </table>

          <p className="fs-4 text-center mt-4">
            <a href=">">Calculate your costs upfront</a> using our brokerage
            calculator
          </p>
        </div>
      </div>
    </div>
  );
}
