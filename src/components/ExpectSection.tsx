import React, { useState } from "react";
import "../styles/ExpectSection.css";

const items = [
  "Self-Paced Online Learning",
  "Executive Speaker Series",
  "Weekly Office Hours",
  "Capstone Project",
];

const descriptions = [
  "Master Africa's fintech ecosystem through curated content that builds strategic and technical skills. Learn on your schedule with interactive modules and real case studies.",
  "Attend sessions with CEOs and leaders from across Africa, North America, and Europe. Get insider insights on market trends and strategic challenges at the frontier.",
  "Leverage direct access to practitioners implementing fintech solutions across Africa. Get answers to complex challenges and learn from active industry professionals.",
  "Apply your learning to real-world fintech challenges. Build a portfolio showcasing your expertise while solving actual industry problems.",
];

const ExpectSection: React.FC = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(0);
  return (
    <section className="expect-section">
      <img
        src={require("../assets/RibbonExpect.png")}
        alt="Ribbon"
        className="expect-ribbon"
        style={{
          position: "absolute",
          top: "6.2%",
          left: "47%",
          transform: "translate(-50%, -50%)",
          opacity: 1.0,
          zIndex: 1,
          width: "97vw",
          maxWidth: "100%",
          pointerEvents: "none",
        }}
      />
      <div className="expect-content">
        <h3 className="expect-title">WHAT TO EXPECT</h3>
        <ul className="expect-list">
          {items.map((label, idx) => (
            <li
              key={label}
              className={openIndex === idx ? "active" : ""}
              style={{ textAlign: "left" }}
            >
              <div
                className="expect-label-row"
                style={{
                  cursor: "pointer",
                  textAlign: "left",
                  alignItems: "flex-start",
                  display: "flex",
                }}
                onClick={() => setOpenIndex(openIndex === idx ? null : idx)}
              >
                <span className="expect-label" style={{ textAlign: "left" }}>
                  {label}
                </span>
              </div>
              {openIndex === idx && (
                <span
                  className="expect-desc"
                  style={{ textAlign: "left", display: "block" }}
                >
                  {descriptions[idx]}
                </span>
              )}
            </li>
          ))}
        </ul>
        <a href="/apply" className="expect-cta">
          Start your Application
          <svg
            width="14"
            height="18"
            viewBox="0 0 24 24"
            fill="none"
            stroke="black"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
            style={{ marginLeft: "0.5rem", verticalAlign: "middle" }}
          >
            <line x1="5" y1="12" x2="19" y2="12" />
            <polyline points="12 5 19 12 12 19" />
          </svg>
        </a>
      </div>
      <div className="expect-image-container" style={{ position: "relative" }}>
        <img
          src={require("../assets/Student.jpg")}
          alt="Student"
          className="expect-image"
        />
      </div>
    </section>
  );
};

export default ExpectSection;
