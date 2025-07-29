import React, { useState } from "react";
import "../styles/FAQSection.css";

const faqs = [
  {
    question: "Who is Payaza Institute designed for?",
    answer:
      "University students, and early career professionals across financial services, and anyone seeking deep expertise in African fintech markets.",
    open: true,
  },
  { question: "Do I need a technical background to succeed?", answer: "" },
  { question: "How current is the learning content?", answer: "" },
  { question: "How much time commitment is required?", answer: "" },
  { question: "Is this live instruction or self-paced?", answer: "" },
  { question: "Will I receive a certificate upon completion?", answer: "" },
  { question: "Does this cover my specific African market?", answer: "" },
  { question: "Is this just theory or practical knowledge?", answer: "" },
  {
    question: "How is Payaza Institute different from other fintech courses?",
    answer: "",
  },
  { question: "What if I need help during the course?", answer: "" },
  { question: "Can I access my courses after completion?", answer: "" },
];

const FAQSection: React.FC = () => {
  const [openIndex, setOpenIndex] = useState(0);

  return (
    <section className="faq-section">
      <img
        src={require("../assets/BG.png")}
        alt="Decorative Cover"
        className="cover-image"
      />
      <div className="faq-container">
        <h2 className="faq-title">FREQUENTLY ASKED QUESTIONS</h2>
        <div className="faq-list">
          {faqs.map((faq, idx) => (
            <div
              key={idx}
              className={`faq-item${openIndex === idx ? " open" : ""}`}
            >
              <div className="faq-question-row" role="button" tabIndex={0}>
                <span
                  className="faq-question"
                  onClick={() => setOpenIndex(idx)}
                >
                  {faq.question}
                </span>
                <span className="faq-icon">
                  {openIndex === idx ? (
                    <span
                      onClick={() => setOpenIndex(-1)}
                      style={{ cursor: "pointer" }}
                    >
                      <svg
                        width="16"
                        height="16"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="#b9b4b4ff"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      >
                        <line x1="18" y1="6" x2="6" y2="18" />
                        <line x1="6" y1="6" x2="18" y2="18" />
                      </svg>
                    </span>
                  ) : (
                    <span
                      onClick={() => setOpenIndex(idx)}
                      style={{ cursor: "pointer" }}
                    >
                      <svg
                        width="16"
                        height="16"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="#80ff72"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      >
                        <line x1="12" y1="5" x2="12" y2="19" />
                        <line x1="5" y1="12" x2="19" y2="12" />
                      </svg>
                    </span>
                  )}
                </span>
              </div>
              {openIndex === idx && faq.answer && (
                <div className="faq-answer">{faq.answer}</div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FAQSection;
