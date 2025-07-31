import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "../styles/Navbar.css";

const Navbar: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const navigate = useNavigate();

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <div className="navbar-container">
      {/* Logo */}
      <div className="navbar-logo">
        <img
          src={require("../assets/logo.png")}
          alt="Payaza Institute Logo"
          className="logo"
        />
      </div>

      {/* Hamburger Menu Button */}
      <button className="menu-toggle" onClick={toggleMenu}>
        <div className={`hamburger ${isMenuOpen ? "active" : ""}`}>
          <span></span>
          <span></span>
          <span></span>
        </div>
      </button>

      {/* Navigation Links */}
      <nav className={`navbar-links ${isMenuOpen ? "active" : ""}`}>
        <a href="#aboutus" className="cta-secondary" onClick={toggleMenu}>
          About Us
        </a>
        <a href="#tracks" className="cta-secondary" onClick={toggleMenu}>
          Tracks
        </a>
        <a href="#howitworks" className="cta-secondary" onClick={toggleMenu}>
          How it works
        </a>
        <a href="#FAQs" className="cta-secondary" onClick={toggleMenu}>
          FAQs
        </a>
      </nav>

      {/* Sign In Button */}
      <div className="navbar-cta">
        <button
          onClick={() => navigate("/Auth")}
          className="cta-primary"
          style={{
            display: "flex",
            alignItems: "center",
            gap: "0.5rem",
            background: "none",
            border: "none",
            cursor: "pointer",
          }}
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
        </button>
      </div>
    </div>
  );
};

export default Navbar;
