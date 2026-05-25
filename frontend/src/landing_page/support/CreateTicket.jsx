import React from "react";
import "./CreateTicket.css";

export default function CreateTicket({ title, links, icon, collapse }) {
  return (
    <div className="container">
      <div className="row">
        <div class="accordion">
          <div class="accordion-item mb-5">
            <h2 class="accordion-header">
              <button
                class="accordion-button m-0  "
                type="button"
                data-bs-toggle="collapse"
                data-bs-target={`#${collapse}`}
                aria-expanded="true"
                aria-controls={collapse}
              >
                <div class="left-box d-flex align-items-center justify-content-center fs-5 p-2">
                  <i class={icon}></i>
                </div>

                <span class="ms-3 fs-5">{title}</span>
              </button>
            </h2>
            <div id={collapse} class="accordion-collapse collapse">
              <div class="accordion-body">
                <ul className="px-3 fs-3">
                  {links.map((link, index) => (
                    <li key={index}>
                      <a href="">{link}</a>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
