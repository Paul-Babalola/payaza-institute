import React from "react";
import "../styles/NextStepSection.css";
import dottedArrow from "../assets/dottedarrow.png";

const steps = [
  {
    number: "01",
    title: "Submit Application",
    desc: "Start by filling the application form for us to review",
  },
  {
    number: "02",
    title: "Complete Assessment",
    desc: "You then complete an assessment according to your chosen path",
  },
  {
    number: "03",
    title: "Learn",
    desc: "Once accepted, you start your learning journey with support",
  },
  {
    number: "04",
    title: "Collect Certificate",
    desc: "After fulfilling all requirements, you are given a certificate",
  },
];

const NextStepSection: React.FC = () => {
  return (
    <section className="next-step-section" id="howitworks">
      <h2 className="title">
        Transform your <span className="highlight-career">Career</span> in a few{" "}
        <span className="highlight-steps">Steps</span>
      </h2>

      <div className="steps-wrapper">
        {steps.map((step, idx) => (
          <div className={`step step-${idx}`} key={step.number}>
            <div
              style={{
                display: "flex",
                flexDirection: "row",
                alignItems: "flex-start",
              }}
            >
              <img
                src={dottedArrow}
                alt="arrow"
                className="dotted-arrow"
                style={{ marginRight: "1rem", marginBottom: 0 }}
              />
              <div className="step-content">
                <span className="step-title">{step.title}</span>
                <p className="step-desc">{step.desc}</p>
                <span className="step-number">{step.number}</span>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default NextStepSection;
