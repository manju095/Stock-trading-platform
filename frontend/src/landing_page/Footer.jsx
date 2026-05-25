import React from "react";
import logo from "../assets/images/logo.svg";
import "./Footer.css";

export default function Footer() {
  return (
    <footer className="border-top mt-5 pt-4">
      <div className="container">
        <div className="row">
          <div className="col mb-5">
            <img src={logo} className="footerLogo"></img>
            <p className="text-muted">
              &copy; 2010 - 2025, Zerodha Broking Ltd.<br></br> All rights
              reserved.
            </p>
            <i class="fa-brands fa-x-twitter"></i>
            <i class="fa-brands fa-square-facebook"></i>
            <i class="fa-brands fa-instagram"></i>
            <i class="fa-brands fa-linkedin-in"></i>
            <hr></hr>
            <i class="fa-brands fa-youtube"></i>
            <i class="fa-brands fa-whatsapp"></i>
            <i class="fa-brands fa-telegram"></i>
          </div>
          <div className="col">
            <ul>
              <li>
                <h5 className="links">Account</h5>
              </li>
              <li>
                <a href="/">Open demat account</a>
              </li>
              <br></br>
              <li>
                <a href="/">Minor demat account</a>
              </li>
              <br></br>
              <li>
                <a href="/">NRI demat account</a>
              </li>
              <br></br>
              <li>
                <a href="/">Commodity</a>
              </li>
              <br></br>
              <li>
                <a href="/">Dematerialisation</a>
              </li>
              <br></br>
              <li>
                <a href="/">Fund transfer</a>
              </li>
              <br></br>
              <li>
                <a href="/">MTF</a>
              </li>
              <br></br>
              <li>
                <a href="/">Referral program</a>
              </li>
              <br></br>
            </ul>
          </div>
          <div className="col">
            <ul>
              <li>
                <h5>Support</h5>
              </li>
              <li>
                <a href="/">Contact us</a>
              </li>
              <br></br>
              <li>
                <a href="/">Support portal</a>
              </li>
              <br></br>
              <li>
                <a href="/">How to file a complaint?</a>
              </li>
              <br></br>
              <li>
                <a href="/">Status of your complaints</a>
              </li>
              <br></br>
              <li>
                <a href="/">Bulletin</a>
              </li>
              <br></br>
              <li>
                <a href="/">Circular</a>
              </li>
              <br></br>
              <li>
                <a href="/">Z-Connect blog</a>
              </li>
              <br></br>
              <li>
                <a href="/">Downloads</a>
              </li>
              <br></br>
            </ul>
          </div>
          <div className="col">
            <ul>
              <li>
                <h5>Company</h5>
              </li>
              <li>
                <a href="/">About</a>
              </li>
              <br></br>
              <li>
                <a href="/">Philosophy</a>
              </li>
              <br></br>
              <li>
                <a href="/">Press & media</a>
              </li>
              <br></br>
              <li>
                <a href="/">Careers</a>
              </li>
              <br></br>
              <li>
                <a href="/">Zerodha Cares (CSR)</a>
              </li>
              <br></br>
              <li>
                <a href="/">Zerodha.tech</a>
              </li>
              <br></br>
              <li>
                <a href="/">Open source</a>
              </li>
              <br></br>
            </ul>
          </div>
          <div className="col">
            <ul>
              <li>
                <h5>Quick links</h5>
              </li>
              <li>
                <a href="/">Upcoming IPOs</a>
              </li>
              <br></br>
              <li>
                <a href="/">Brokerage charges</a>
              </li>
              <br></br>
              <li>
                <a href="/">Market holidays</a>
              </li>
              <br></br>
              <li>
                <a href="/">Economic calendar</a>
              </li>
              <br></br>
              <li>
                <a href="/">Calculators</a>
              </li>
              <br></br>
              <li>
                <a href="/">Markets</a>
              </li>
              <br></br>
              <li>
                <a href="/">Sectors</a>
              </li>
              <br></br>
            </ul>
          </div>
        </div>
        <p className="footerText">
          Zerodha Broking Ltd.: Member of NSE, BSE​ &​ MCX – SEBI Registration
          no.: INZ000031633 CDSL/NSDL: Depository services through Zerodha
          Broking Ltd. – SEBI Registration no.: IN-DP-431-2019 Registered
          Address: Zerodha Broking Ltd., #153/154, 4th Cross, Dollars Colony,
          Opp. Clarence Public School, J.P Nagar 4th Phase, Bengaluru - 560078,
          Karnataka, India. For any complaints pertaining to securities broking
          please write to <a href="/">complaints@zerodha.com</a>, for DP related
          to <a href="/">dp@zerodha.com</a>. Please ensure you carefully read
          the Risk Disclosure Document as prescribed by SEBI | ICF
        </p>
        <p className="footerText">
          Procedure to file a complaint on <a href="/">SEBI SCORES</a>: Register
          on SCORES portal. Mandatory details for filing complaints on SCORES:
          Name, PAN, Address, Mobile Number, E-mail ID. Benefits: Effective
          Communication, Speedy redressal of the grievances
        </p>

        <p className="footerText">
          <a href="/">Smart Online Dispute Resolution</a> |{" "}
          <a href="/">Grievances Redressal Mechanism</a>
        </p>

        <p className="footerText">
          Investments in securities market are subject to market risks; read all
          the related documents carefully before investing.
        </p>

        <p className="footerText">
          Attention investors: 1) Stock brokers can accept securities as margins
          from clients only by way of pledge in the depository system w.e.f
          September 01, 2020. 2) Update your e-mail and phone number with your
          stock broker / depository participant and receive OTP directly from
          depository on your e-mail and/or mobile number to create pledge. 3)
          Check your securities / MF / bonds in the consolidated account
          statement issued by NSDL/CDSL every month.
        </p>

        <p className="footerText">
          India's largest broker based on networth as per NSE.{" "}
          <a href="/">NSE broker factsheet</a>
        </p>

        <p className="footerText">
          "Prevent unauthorised transactions in your account. Update your mobile
          numbers/email IDs with your stock brokers. Receive information of your
          transactions directly from Exchange on your mobile/email at the end of
          the day. Issued in the interest of investors. KYC is one time exercise
          while dealing in securities markets - once KYC is done through a SEBI
          registered intermediary (broker, DP, Mutual Fund etc.), you need not
          undergo the same process again when you approach another
          intermediary." Dear Investor, if you are subscribing to an IPO, there
          is no need to issue a cheque. Please write the Bank account number and
          sign the IPO application form to authorize your bank to make payment
          in case of allotment. In case of non allotment the funds will remain
          in your bank account. As a business we don't give stock tips, and have
          not authorized anyone to trade on behalf of others. If you find anyone
          claiming to be part of Zerodha and offering such services, please
          <a href="/"> create a ticket here</a>.
        </p>
        <div className="footerLinks px-5 pb-3">
          <a href="/" className="footerLink">
            NSE
          </a>
          <a href="/" className="footerLink">
            BSE{" "}
          </a>
          <a href="/" className="footerLink">
            MCX{" "}
          </a>
          <a href="/" className="footerLink">
            Terms & conditions{" "}
          </a>
          <a href="/" className="footerLink">
            Policies & procedures{" "}
          </a>
          <a href="/" className="footerLink">
            Privacy policy{" "}
          </a>
          <a href="/" className="footerLink">
            Disclosure{" "}
          </a>
          <a href="/" className="footerLink">
            For investor's attention{" "}
          </a>
          <a href="/" className="footerLink">
            Investor charter
          </a>
        </div>
      </div>
    </footer>
  );
}
