import React, { useState } from "react";
import { Box, Typography, Collapse, Divider } from "@mui/material";
import { styled } from "@mui/material/styles";

const FAQContainer = styled(Box)(({ theme }) => ({
  display: "flex",
  width: "60%",
  maxWidth: "1200px",
  padding: "120px 102px",
  alignItems: "center",
  gap: "10px",
  borderRadius: "16px",
  background: "rgba(21, 1, 31, 0.58)",
  backdropFilter: "blur(10px)",
  margin: "60px auto",
  [theme.breakpoints.down("lg")]: {
    maxWidth: "100%",
    padding: "80px 60px",
    margin: "60px auto",
  },
  [theme.breakpoints.down("md")]: {
    padding: "60px 32px",
    margin: "40px auto",
  },
  [theme.breakpoints.down("sm")]: {
    padding: "40px 24px",
    margin: "30px auto",
  },
}));

const FAQContent = styled(Box)({
  display: "flex",
  width: "100%",
  flexDirection: "column",
  alignItems: "flex-start",
  gap: "32px",
  flexShrink: 0,
});

const SectionTitle = styled(Typography)(({ theme }) => ({
  color: "var(--Primary-Green-500, #80FF72)",
  textAlign: "center",
  fontFamily:
    "Rebond Grotesque, Space Grotesk, -apple-system, Roboto, Helvetica, sans-serif",
  fontSize: "18px",
  fontStyle: "italic",
  fontWeight: 600,
  lineHeight: "150%",
  paddingTop: "80px",
  [theme.breakpoints.down("md")]: {
    paddingTop: "60px",
  },
  [theme.breakpoints.down("sm")]: {
    paddingTop: "40px",
  },
}));

const FAQItem = styled(Box)({
  display: "flex",
  flexDirection: "column",
  alignItems: "flex-start",
  gap: "20px",
  alignSelf: "stretch",
  position: "relative",
});

const FAQHeader = styled(Box)({
  display: "flex",
  justifyContent: "space-between",
  alignItems: "center",
  alignSelf: "stretch",
  cursor: "pointer",
  "&:hover": {
    opacity: 0.8,
  },
});

const QuestionText = styled(Typography)(({ theme }) => ({
  color: "#FFF",
  fontFamily: "Roobert, Inter, -apple-system, Roboto, Helvetica, sans-serif",
  fontSize: "22px",
  fontStyle: "normal",
  fontWeight: 500,
  lineHeight: "24px",
  letterSpacing: "-0.22px",
  flex: 1,
  textAlign: "left",
  [theme.breakpoints.down("md")]: {
    fontSize: "20px",
    lineHeight: "22px",
  },
  [theme.breakpoints.down("sm")]: {
    fontSize: "18px",
    lineHeight: "20px",
    letterSpacing: "-0.18px",
  },
}));

const AnswerText = styled(Typography)(({ theme }) => ({
  color: "var(--Gray-300, #B3B8C5)",
  fontFamily: "Roobert, Inter, -apple-system, Roboto, Helvetica, sans-serif",
  fontSize: "20px",
  fontStyle: "normal",
  fontWeight: 400,
  lineHeight: "171%",
  letterSpacing: "-0.2px",
  maxWidth: "893px",
  textAlign: "left",
  [theme.breakpoints.down("md")]: {
    fontSize: "18px",
    lineHeight: "160%",
  },
  [theme.breakpoints.down("sm")]: {
    fontSize: "16px",
    lineHeight: "150%",
    letterSpacing: "-0.16px",
  },
}));

const IconContainer = styled(Box)({
  width: "32px",
  height: "32px",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  flexShrink: 0,
});

const CustomDivider = styled(Divider)({
  height: "1px",
  flexShrink: 0,
  alignSelf: "stretch",
  background: "#1A101F",
  border: "none",
});

const CloseIcon = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="32"
    height="32"
    viewBox="0 0 32 32"
    fill="none"
  >
    <path
      d="M24 8L8 24M8 8L24 24"
      stroke="#776D7D"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);

const PlusIcon = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="32"
    height="32"
    viewBox="0 0 32 32"
    fill="none"
  >
    <path
      d="M16.7418 6.30283C16.7418 5.67168 17.2535 5.16004 17.8847 5.16C18.5159 5.16 19.0275 5.67165 19.0275 6.30283L19.0275 14.8572H27.5818C28.213 14.8572 28.7247 15.3688 28.7247 16C28.7247 16.6312 28.213 17.1428 27.5818 17.1428H19.0275L19.0275 25.6972C19.0275 26.3284 18.5159 26.84 17.8847 26.84C17.2535 26.84 16.7418 26.3283 16.7418 25.6972L16.7418 17.1428L8.18751 17.1428C7.55633 17.1428 7.04468 16.6312 7.04468 16C7.04468 15.3688 7.55633 14.8572 8.18751 14.8572L16.7418 14.8572L16.7418 6.30283Z"
      fill="#80FF72"
    />
  </svg>
);

interface FAQData {
  id: number;
  question: string;
  answer: string;
}

const faqData: FAQData[] = [
  {
    id: 1,
    question: "Who is Payaza Institute designed for?",
    answer:
      "University students, and early career professionals across financial services, and anyone seeking deep expertise in African fintech markets.",
  },
  {
    id: 2,
    question: "Do I need a technical background to succeed?",
    answer:
      "The majority of the curriculum will be quite technical. While no fintech experience is required, some familiarity programming is required to get the most out of the experience. Courses geared to non-technical people will be added in the next cohort.",
  },
  {
    id: 3,
    question: "How current is the learning content?",
    answer:
      "The curriculum is based on up‑to‑date industry data (2023–2025) and is regularly refreshed. Live speaker sessions provide real‑time insights from active market leaders.",
  },
  {
    id: 4,
    question: "How much time commitment is required?",
    answer:
      "The flagship 8‑week course structure requires about 3–4 hours per week of focus time. However, you can progress at your own pace.",
  },
  {
    id: 5,
    question: "Is this live instruction or self-paced?",
    answer:
      "Courses are self‑paced with interactive content. Our executive speaker series includes live sessions with Q&A, and recordings are available.",
  },
  {
    id: 6,
    question: "Will I receive a certificate upon completion?",
    answer:
      "Yes. Each course comes with a completion certificate, plus access to our alumni network and ongoing resources.",
  },
  {
    id: 7,
    question: "Does this cover my specific African market?",
    answer:
      "Yes. We cover fintech developments across more than 25 African countries, with case studies from major markets like Kenya, Nigeria, South Africa, Ghana, Egypt, and others.",
  },
  {
    id: 8,
    question: "Is this just theory or practical knowledge?",
    answer:
      " Both. We combine academic frameworks with real case studies, practical tools, and actionable insights you can apply immediately. Assignments are designed to help students build a portfolio of projects they can share with employers.",
  },
  {
    id: 9,
    question: "How is Payaza Institute different from other fintech courses?",
    answer:
      "This is the only program built specifically for African fintech markets, with content from industry practitioners and localized insights unavailable elsewhere.",
  },
  {
    id: 10,
    question: "What if I need help during the course?",
    answer:
      " You’ll have access to office hours, a resource library, and support channels.",
  },
  {
    id: 11,
    question: "Can I access my courses after completion?",
    answer:
      "Yes. Graduates maintain access to course materials, alumni forums, selected speaker content, and regular market updates.",
  },
];

const PayazaFAQ: React.FC = () => {
  const [expandedItems, setExpandedItems] = useState<Set<number>>(new Set([1])); // First item expanded by default
  // const theme = useTheme();
  // const isMobile = useMediaQuery(theme.breakpoints.down("md"));

  const toggleItem = (id: number) => {
    const newExpandedItems = new Set(expandedItems);
    if (newExpandedItems.has(id)) {
      newExpandedItems.delete(id);
    } else {
      newExpandedItems.add(id);
    }
    setExpandedItems(newExpandedItems);
  };

  return (
    <div
      id="faq"
      className="flex flex-col items-center justify-center"
      style={{
        backgroundImage: "url('/src/assets/BG.png')",
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
        minHeight: "100vh",
        width: "100%",
      }}
    >
      <SectionTitle>FREQUENTLY ASKED QUESTIONS</SectionTitle>
      <FAQContainer>
        <FAQContent>
          {faqData.map((item, index) => (
            <FAQItem key={item.id}>
              <Box sx={{ width: "100%" }}>
                <FAQHeader onClick={() => toggleItem(item.id)}>
                  <QuestionText>{item.question}</QuestionText>
                  <IconContainer>
                    {expandedItems.has(item.id) ? <CloseIcon /> : <PlusIcon />}
                  </IconContainer>
                </FAQHeader>

                <Collapse in={expandedItems.has(item.id)} timeout={300}>
                  <Box sx={{ mt: 1, mb: 2 }}>
                    <AnswerText>{item.answer}</AnswerText>
                  </Box>
                </Collapse>
              </Box>

              {index < faqData.length - 1 && <CustomDivider />}
            </FAQItem>
          ))}
        </FAQContent>
      </FAQContainer>
    </div>
  );
};

export default PayazaFAQ;
