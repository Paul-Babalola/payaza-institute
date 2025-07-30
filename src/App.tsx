import React from "react";
import { Routes, Route } from "react-router-dom";
import HeroSection from "./components/HeroSection";
import NextStepSection from "./components/NextStepSection";
import TracksSection from "./components/TracksSection";
import ExpectSection from "./components/ExpectSection";
import FAQSection from "./components/FAQSection";
import Footer from "./components/Footer";
import SponsorshipSection from "./components/SponsorshipSection";
import ApplicationFormFlow from "./components/ApplicationForm/ApplicationFormFlow";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={
          <>
            <HeroSection />
            <TracksSection />
            <SponsorshipSection />
            <NextStepSection />
            <ExpectSection />
            <FAQSection />
            <Footer />
          </>
        } />
        <Route path="/apply/*" element={<ApplicationFormFlow />} />
      </Routes>
    </div>
  );
}

export default App;
