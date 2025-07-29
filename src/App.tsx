import React from "react";
import HeroSection from "./components/HeroSection";
import NextStepSection from "./components/NextStepSection";
import TracksSection from "./components/TracksSection";
import ExpectSection from "./components/ExpectSection";
import FAQSection from "./components/FAQSection";
import Footer from "./components/Footer";

function App() {
  return (
    <div className="App">
      <HeroSection />
      <TracksSection />
      <NextStepSection />
      <ExpectSection />
      <FAQSection />
      <Footer />
    </div>
  );
}

export default App;
