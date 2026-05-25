import React from "react";
import Navbar from "../Navbar";
import Hero from "./Hero";
import CreateTicket from "./CreateTicket";
import Footer from "../Footer";

export default function SupportPage() {
  return (
    <>
      <Hero />

      <CreateTicket
        collapse="collapseOne"
        icon="fa-solid fa-circle-plus icon"
        title="Account Opening"
        links={[
          "Resident individual",
          "Minor",
          "Non resident Indian (NRI)",
          "Company, Partenership, HUF and LLP",
          "glossary",
        ]}
      />

      <CreateTicket
        collapse="collapseTwo"
        icon="fa-regular fa-circle-user"
        title="Your Zerodha Account"
        links={[
          "your Profile",
          "Account modification",
          "Client Master Report (CMR) and Depository Participant (DP)",
          "Nomination",
          "Transfer and conversion of securities",
        ]}
      />

      <CreateTicket
        collapse="collapseThree"
        icon="fa-brands fa-uikit"
        title="Kite"
        links={[
          "IPO",
          "Trading FAQs",
          "Margin Trading Facility (MTF) and Margins",
          "Charts and orders",
          "Alerts and Nudges",
          "General",
        ]}
      />

      <CreateTicket
        collapse="collapseFour"
        icon="fa-solid fa-indian-rupee-sign"
        title="Funds"
        links={[
          "Add money",
          "Withdraw money",
          "Add bank accounts",
          "eMandates",
        ]}
      />

      <CreateTicket
        collapse="collapseFive"
        icon="fa-regular fa-circle-user fa-rotate-270"
        title="Console"
        links={[
          "Portfolio",
          "Corporate actions",
          "Funds statement",
          "Reports",
          "Profile",
          "Segments",
        ]}
      />

      <CreateTicket
        collapse="collapseSix"
        icon="fa-solid fa-coins"
        title="Coin"
        links={[
          "Mutual Funds",
          "National Pension Scheme (NPS)",
          "Fixed Deposit (FD)",
          "Features on Coin",
          "Payments and Orders",
          "General",
        ]}
      />
    </>
  );
}
