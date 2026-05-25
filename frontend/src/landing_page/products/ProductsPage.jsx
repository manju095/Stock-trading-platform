import React from "react";
import Hero from "./Hero";
import LeftSection from "./LeftSection";
import RightSection from "./RightSection";
import Universe from "./Universe";
import Navbar from "../Navbar";
import Footer from "../Footer";
import kite from "../../assets/images/kite.png";
import coin from "../../assets/images/coin.png";
import varsity from "../../assets/images/varsity.svg";
import console from "../../assets/images/console.png";
import kiteconnect from "../../assets/images/kiteconnect.png";

export default function ProductsPage() {
  return (
    <>
      <Hero />
      <LeftSection
        imageURL={[{ src: kite, className: "bigImg img-fluid" }]}
        productName="Kite"
        productDescription="Our ultra-fast flagship trading platform with streaming market data, advanced charts, an elegant UI, and more. Enjoy the Kite experience seamlessly on your Android and iOS devices."
        links={[
          { label: "Try demo", url: "" },
          { label: "Learn more", url: "" },
        ]}
        googlePlay=""
        appStore=""
      />
      <RightSection
        imageURL={[{ src: console, className: "bigImg img-fluid" }]}
        productName="Console"
        productDescription="The central dashboard for your Zerodha account. Gain insights into your trades and investments with in-depth reports and visualisations.


"
        links={[{ label: "Learn more", url: "" }]}
      />
      <LeftSection
        imageURL={[{ src: coin, className: "bigImg img-fluid" }]}
        productName="Coin"
        productDescription="Buy direct mutual funds online, commission-free, delivered directly to your Demat account. Enjoy the investment experience on your Android and iOS devices.

"
        links={[{ label: "Coin", url: "" }]}
        googlePlay=""
        appStore=""
      />
      <RightSection
        imageURL={[{ src: kiteconnect, className: "bigImg img-fluid" }]}
        productName="Kite Connect API"
        productDescription="Build powerful trading platforms and experiences with our super simple HTTP/JSON APIs. If you are a startup, build your investment app and showcase it to our clientbase.



"
        links={[{ label: "Kite Connect", url: "" }]}
      />
      <LeftSection
        imageURL={[{ src: varsity, className: "smallImg img-fluid" }]}
        productName="Varsity mobile"
        productDescription="An easy to grasp, collection of stock market lessons with in-depth coverage and illustrations. Content is broken down into bite-size cards to help you learn on the go.

"
        googlePlay=""
        appStore=""
      />
      <p className="text-center fs-4 p-5">
        Want to know more about our technology stack? Check out the{" "}
        <a href="">Zerodha.tech </a>
        blog.
      </p>
      <Universe />
    </>
  );
}
