import React from "react";
import Navbar from "../Navbar";
import Hero from "./Hero";
import Brokerage from "./Brokerage";
import Charges from "./Charges";
import DematAmc from "./DematAmc";
import ServiceCharge from "./ServiceCharge";
import Footer from "../Footer";

export default function PricingPage() {
  return (
    <>
      <Hero />
      <Brokerage />
      <Charges />
      <DematAmc />
      <ServiceCharge />
    </>
  );
}
