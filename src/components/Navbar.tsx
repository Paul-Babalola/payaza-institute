import React from "react";
import "../styles/HeroSection.css";

const Navbar: React.FC = () => (
  <div className="navbar-container">
    {/* Logo */}
    <div className="navbar-logo">
      <img
        src={require("../assets/logo.png")}
        alt="Payaza Institute Logo"
        className="logo"
      />
    </div>

    {/* Navigation Links */}
    <nav className="navbar-links">
      <a href="#aboutus" className="cta-secondary">
        About Us
      </a>
      <a href="#tracks" className="cta-secondary">
        Tracks
      </a>
      <a href="#howitworks" className="cta-secondary">
        How it works
      </a>
      <a href="#FAQs" className="cta-secondary">
        FAQs
      </a>
    </nav>

    {/* Sign In Button */}
    <div className="navbar-cta">
      <a
        href="#signin"
        className="cta-primary"
        style={{ display: "flex", alignItems: "center", gap: "0.5rem" }}
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="20"
          height="20"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
          style={{ verticalAlign: "middle" }}
        >
          <circle cx="12" cy="7" r="4" />
          <path d="M5.5 21a6.5 6.5 0 0 1 13 0" />
        </svg>
        Sign In
      </a>
    </div>
  </div>
);

export default Navbar;
