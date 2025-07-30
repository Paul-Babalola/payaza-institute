import React from "react";
import "../styles/SponsorshipSection.css";
import segmentLogo from "../assets/segment.png";
import asanaLogo from "../assets/asana.png";
import intercomLogo from "../assets/Intercom.png";
import bgPattern from "../assets/BG.png";

const partners = [
  segmentLogo,
  asanaLogo,
  intercomLogo,
  segmentLogo,
  asanaLogo,
  intercomLogo,
  segmentLogo,
  asanaLogo,
  intercomLogo,
];

const SponsorshipSection: React.FC = () => (
  <section className="sponsorship-section">
    <img src={bgPattern} alt="Background Pattern" className="sponsorship-bg" />
    <h3 className="sponsorship-title">OUR PARTNERS</h3>
    <div className="sponsorship-logos">
      {partners.map((logo, idx) => (
        <img
          src={logo}
          alt="Partner Logo"
          className="sponsorship-logo"
          key={idx}
        />
      ))}
    </div>
  </section>
);

export default SponsorshipSection;
