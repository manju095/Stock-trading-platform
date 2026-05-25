import React from "react";
import ecosystem from "../../assets/images/ecosystem.png";
import pressLogos from "../../assets/images/pressLogos.png";
import "./Stats.css";

export default function Stats() {
  return (
    <div className="container">
      <div className="row">
        <div className="box">
          <h3 className="my-5">Trust with confidence</h3>
          <h4>Customer-first always</h4>
          <p className="mb-4 text-muted">
            That's why 1.6+ crore customers trust Zerodha with ~ ₹6 lakh crores
            of equity investments, making us India’s largest broker;
            contributing to 15% of daily retail exchange volumes in India.
          </p>
          <h4>No spam or gimmicks</h4>
          <p className="mb-4 text-muted">
            No gimmicks, spam, "gamification", or annoying push notifications.
            High quality apps that you use at your pace, the way you like.{" "}
            <a href="/">Our philosophies.</a>
          </p>
          <h4>The Zerodha universe</h4>
          <p className="mb-4 text-muted">
            Not just an app, but a whole ecosystem. Our investments in 30+
            fintech startups offer you tailored services specific to your needs.
          </p>
          <h4>Do better with money</h4>
          <p className="mb-4 text-muted">
            With initiatives like <a href="/">Nudge</a> and
            <a href="/"> Kill Switch</a>, we don't just facilitate transactions,
            but actively help you do better with your money.
          </p>
        </div>
        <div className="box">
          <img src={ecosystem} class="img-fluid" alt="ecosystem"></img>
          <div class="text-center">
            <a href="/">
              Explore our products <i class="fa-solid fa-arrow-right"></i>
              &nbsp;&nbsp; &nbsp;&nbsp; &nbsp;
            </a>
            <a href="/">
              Try Kite demo <i class="fa-solid fa-arrow-right"></i>
            </a>
          </div>
        </div>
      </div>
      <img src={pressLogos} class="img-fluid mt-5"></img>
    </div>
  );
}
