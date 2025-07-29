import React from "react";
import "../styles/NextStepSection.css";

const steps = [
  {
    title: "Submit Application",
    desc: "Start by filling the application form for us to review",
    color: "#6eea6b",
  },
  {
    title: "Complete Assessment",
    desc: "You then complete an assessment according to your chosen path",
    color: "#bc4af6",
  },
  {
    title: "Learn",
    desc: "Once accepted, you start your learning journey with support",
    color: "#6eea6b",
  },
  {
    title: "Collect Certificate",
    desc: "After fulfilling all requirements, you are given a certificate",
    color: "#bc4af6",
  },
];

const NextStepSection: React.FC = () => (
  <section className="next-step-section">
    <h2 className="next-step-title">
      Transform your <span className="next-step-highlight">Career</span> in a
      few <span className="next-step-highlight-alt">Steps</span>
    </h2>
    <div className="next-step-steps">
      {steps.map((step, idx) => (
        <div className="next-step-item" key={step.title}>
          <div className="next-step-dot-row">
            <span className="next-step-dot" />
            {idx < steps.length - 1 && <span className="next-step-line" />}
          </div>
          <div className="next-step-content">
            <span className="next-step-number">{`0${idx + 1}`}</span>
            <span className="next-step-label" style={{ color: step.color }}>
              {step.title}
            </span>
            <span className="next-step-desc">{step.desc}</span>
          </div>
        </div>
      ))}
    </div>
  </section>
);

export default NextStepSection;
