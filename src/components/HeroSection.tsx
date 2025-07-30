import React from "react";
import { useNavigate } from "react-router-dom";
import "../styles/HeroSection.css";
import Navbar from "./Navbar";

const HeroSection: React.FC = () => {
  const navigate = useNavigate();

  const handleApplyNow = () => {
    navigate('/apply');
  };

  return (
  <section className="hero-section">
    <img
      src={require("../assets/BG.png")}
      alt="Decorative Cover"
      className="cover-image"
    />
    <img
      src={require("../assets/Ribbon.png")}
      alt="Ribbon Decoration"
      className="ribbon-image"
      style={{
        position: "absolute",
        top: 100,
        left: "50%",
        transform: "translateX(-50%)",
        width: "100vw",
        maxWidth: 2000,
        opacity: 1,
        zIndex: 2,
        pointerEvents: "none",
      }}
    />
    <div className="hero-top">
      <Navbar />
      <div className="hero-left">
        <img
          src={require("../assets/robot.png")}
          alt="AI Robot"
          className="robot-image"
        />
        <div className="hero-text">
          <h1 className="headline">
            Build Fintech Skills with{" "}
            <span className="highlight">AI Superpowers</span>
          </h1>
          <p className="subheadline">
            Transform the way you learn fintech with intelligent tools designed
            to accelerate your career journey.
          </p>
          <button className="apply" onClick={handleApplyNow}>
            Apply Now
            <img
              src={require("../assets/Arrow.png")}
              alt="Arrow Icon"
              className="arrow-icon"
            />
          </button>

          <div className="about">
            <h3>ABOUT US</h3>
            <p>
              Payaza Institute is Africa’s first fintech training academy,
              designed to meet the specialized education needs of the
              continent’s rapidly growing sector.
              <br />
              <br />
              Through expert-led training, industry insights, and practical
              application, we prepare future leaders to navigate complexity and
              build solutions for Africa’s diverse markets.
            </p>
          </div>
        </div>
      </div>
    </div>
  </section>
  );
};

export default HeroSection;
