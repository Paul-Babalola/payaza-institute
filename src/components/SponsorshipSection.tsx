import React from "react";
import "../styles/SponsorshipSection.css";
import blaaizLogo from "../assets/blaaiz.svg";
import koreLogo from "../assets/kore78.svg";
import payazaLogo from "../assets/PayazaLogo.svg";
import bgPattern from "../assets/BG.png";

const partners = [
  blaaizLogo,
  koreLogo,
  payazaLogo,
  blaaizLogo,
  koreLogo,
  payazaLogo,
  blaaizLogo,
  koreLogo,
  payazaLogo,
];

const SponsorshipSection: React.FC = () => (
  <section className="sponsorship-section">
    <img src={bgPattern} alt="Background Pattern" className="sponsorship-bg" />
    <h3 className="sponsorship-title">OUR PARTNERS</h3>
    <div className="sponsorship-logos-outer">
      <div className="sponsorship-logos-inner">
        {[...partners, ...partners].map((logo, idx) => (
          <img
            src={logo}
            alt="Partner Logo"
            className="sponsorship-logo"
            key={idx}
          />
        ))}
      </div>
    </div>
  </section>
);

export default SponsorshipSection;
