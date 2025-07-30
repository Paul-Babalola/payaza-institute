import React, { useState } from "react";
import "../styles/FAQSection.css";

const faqs = [
  {
    question: "Who is Payaza Institute designed for?",
    answer:
      "University students, and early career professionals across financial services, and anyone seeking deep expertise in African fintech markets.",
    open: true,
  },
  {
    question: "Do I need a technical background to succeed?",
    answer:
      "The majority of the curriculum will be quite technical. While no fintech experience is required, some familiarity programming is required to get the most out of the experience.",
  },
  {
    question: "How current is the learning content?",
    answer:
      "The curriculum is based on up‑to‑date industry data (2023–2025) and is regularly refreshed. Live speaker sessions provide real‑time insights from active market leaders.",
  },
  {
    question: "How much time commitment is required?",
    answer:
      "The flagship 8‑week course structure requires about 3–4 hours per week of focus time. However, you can progress at your own pace.",
  },
  {
    question: "Is this live instruction or self-paced?",
    answer:
      "Courses are self‑paced with interactive content. Our executive speaker series includes live sessions with Q&A, and recordings are available.",
  },
  {
    question: "Will I receive a certificate upon completion?",
    answer:
      "Yes. Each course comes with a completion certificate, plus access to our alumni network and ongoing resources.",
  },
  {
    question: "Does this cover my specific African market?",
    answer:
      "Yes. We cover fintech developments across more than 25 African countries, with case studies from major markets like Kenya, Nigeria, South Africa, Ghana, Egypt, and others.",
  },
  {
    question: "Is this just theory or practical knowledge?",
    answer:
      " Both. We combine academic frameworks with real case studies, practical tools, and actionable insights you can apply immediately. Assignments are designed to help students build a portfolio of projects they can share with employers.",
  },
  {
    question: "How is Payaza Institute different from other fintech courses?",
    answer:
      "This is the only program built specifically for African fintech markets, with content from industry practitioners and localized insights unavailable elsewhere.",
  },
  {
    question: "What if I need help during the course?",
    answer:
      " You’ll have access to office hours, a resource library, and support channels",
  },
  {
    question: "Can I access my courses after completion?",
    answer:
      "Yes. Graduates maintain access to course materials, alumni forums, selected speaker content, and regular market updates.",
  },
];

const FAQSection: React.FC = () => {
  const [openIndex, setOpenIndex] = useState(0);

  return (
    <section className="faq-section" id="FAQs">
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
