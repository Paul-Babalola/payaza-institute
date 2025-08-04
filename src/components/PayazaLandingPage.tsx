import React from "react";
import Navigation from "./Navigation";
import HeroSection from "./HeroSection";
import TracksPage from "./TracksPage";
import PartnersSection from "./PartnerSection";
import { ProcessSection } from "./ProcessSection";
import { ExpectationsSection } from "./ExpectationsSection";
import FAQSection from "./FAQSection";
import Footer from "./Footer";

const PayazaLandingPage: React.FC = () => {
  return (
    <div className="overflow-hidden">
      <Navigation />
      <HeroSection />
      <TracksPage />
      <PartnersSection />
      <ProcessSection />
      <ExpectationsSection key="expectations-v2" />
      <FAQSection />
      <Footer />
    </div>
  );
};

export default PayazaLandingPage;
