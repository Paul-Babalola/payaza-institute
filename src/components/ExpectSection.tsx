import React, { useState } from "react";
import "../styles/ExpectSection.css";

const items = [
  "Self-Paced Online Learning",
  "Executive Speaker Series",
  "Weekly Office Hours",
  "Capstone Project",
];
const desc =
  "Your peace of mind is our priority – fortified protection for your financial data";

const ExpectSection: React.FC = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(0);
  return (
    <section className="expect-section">
      <div className="expect-content">
        <h3 className="expect-title">WHAT TO EXPECT</h3>
        <ul className="expect-list">
          {items.map((label, idx) => (
            <li key={label}>
              <div
                className="expect-label-row"
                style={{ cursor: "pointer" }}
                onClick={() => setOpenIndex(openIndex === idx ? null : idx)}
              >
                <span className="expect-label">{label}</span>
              </div>
              {openIndex === idx && <span className="expect-desc">{desc}</span>}
            </li>
          ))}
        </ul>
        <a href="#apply" className="expect-cta">
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
      <div className="expect-image-container">
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
