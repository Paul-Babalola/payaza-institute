import React from "react";
import Navigation from "./Navigation";
// import HeroSection from './HeroSection';
// import AboutSection from './AboutSection';
import TracksSection from "./TracksSection";
import PartnersSection from "./PartnerSection";
import { ProcessSection } from "./ProcessSection";
import { ExpectationsSection } from "./ExpectationsSection";
import FAQSection from "./FAQSection";
import Footer from "./Footer";

const PayazaLandingPage: React.FC = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-[#21032F] to-[#1B0029] overflow-hidden">
      <Navigation />
      {/* <HeroSection />
      <AboutSection />/>*/}
      {/* <TracksSection /> */}
      <PartnersSection />
      <ProcessSection />
      <ExpectationsSection key="expectations-v2" />
      <FAQSection />
      <Footer />
    </div>
  );
};

export default PayazaLandingPage;
