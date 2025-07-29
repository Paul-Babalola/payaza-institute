import React from "react";
import "../styles/Footer.css";

const Footer: React.FC = () => (
  <footer className="footer-section" style={{ position: "relative" }}>
    <img
      src={require("../assets/RibbonFooter.png")}
      alt="Footer Ribbon Decoration"
      className="footer-ribbon-image"
      style={{
        position: "absolute",
        top: 0,
        left: "70%",
        transform: "translateX(-50%)",
        width: "80vw",
        maxWidth: 1055,
        opacity: 1,
        zIndex: 2,
        pointerEvents: "none",
      }}
    />
    <div className="footer-main">
      <div className="footer-logo-social">
        <img
          src={require("../assets/logo.png")}
          alt="Payaza Logo"
          className="footer-logo"
        />
        <p className="footer-address">
          1st Floor, 301 Jide Oki St, Victoria Island, Lagos.
        </p>
        <div className="footer-social">
          <a
            href="#"
            aria-label="WhatsApp"
            className="footer-social-icon whatsapp"
          >
            <img
              src={require("../assets/Linkedin.png")}
              alt="WhatsApp"
              className="linkedin"
            />
          </a>
          <a
            href="#"
            aria-label="Instagram"
            className="footer-social-icon instagram"
          >
            <img
              src={require("../assets/Vector.png")}
              alt="Instagram"
              className="w-6 h-6"
            />
          </a>
          <a href="#" aria-label="X" className="footer-social-icon x">
            <img
              src={require("../assets/x_logo.svg.png")}
              alt="X"
              className="w-6 h-6"
            />
          </a>

          <a href="#" aria-label="WhatsApp" className="footer-social-icon mail">
            <img
              src={require("../assets/email.png")}
              alt="Email"
              className="w-6 h-6"
            />
          </a>
        </div>
      </div>
      <div className="footer">
        <div className="footer-links">
          <div>
            <h4>Payaza Institute</h4>
            <a href="#aboutus">About Us</a>
            <a href="#tracks">Tracks</a>
            <a href="#howitworks">How it works</a>
            <a href="#FAQs">FAQs</a>
          </div>
          <div>
            <h4>Resources</h4>
            <a href="#demo">Demo</a>
            <a href="#documentation">Documentation</a>
            <a href="#developers">Developers</a>
          </div>
          <div>
            <h4>Company</h4>
            <a href="#aboutpayaza">About Payaza</a>
            <a
              href="#visitwebsite"
              style={{
                display: "inline-flex",
                alignItems: "center",
                gap: "0.3rem",
              }}
            >
              Visit Website
              <svg
                width="16"
                height="16"
                viewBox="0 0 24 24"
                fill="none"
                stroke="#22c55e"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                style={{ verticalAlign: "middle" }}
              >
                <path d="M18 13v6a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6" />
                <polyline points="15 3 21 3 21 9" />
                <line x1="10" y1="14" x2="21" y2="3" />
              </svg>
            </a>
          </div>
        </div>
        <div className="footer-cta">
          <a
            href="#apply"
            className="footer-apply"
            style={{ display: "flex", alignItems: "center", gap: "0.5rem" }}
          >
            Apply Now
            <svg
              width="20"
              height="20"
              viewBox="0 0 24 24"
              fill="none"
              stroke="#22c55e"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              style={{ verticalAlign: "middle" }}
            >
              <line x1="5" y1="12" x2="19" y2="12" />
              <polyline points="12 5 19 12 12 19" />
            </svg>
          </a>
        </div>
      </div>
    </div>
    <div className="footer-bottom">
      <span>© Copyright 2024. All Rights Reserved</span>
      <div className="footer-bottom-links">
        <a href="#privacypolicy">Privacy Policy</a>
        <a href="#terms">Terms & Conditions</a>
      </div>
    </div>
  </footer>
);

export default Footer;
