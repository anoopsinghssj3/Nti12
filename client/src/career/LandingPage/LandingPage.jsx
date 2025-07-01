import React from "react";
import "./LandingPage.css";
import Header from "./components/Header";
import HeroSection from "./components/HeroSection";
import ClientsSection from "./components/ClientsSection";
import CommunitySection from "./components/CommunitySection";
import UnlockSection from "./components/UnlockSection";
import AchievementsSection from "./components/AchievementsSection";
import CalendarSection from "./components/CalendarSection";
import TestimonialsSection from "./components/TestimonialsSection";
import BlogSection from "./components/BlogSection";
import ContactFormSection from "./components/ContactFormSection";
import CTASection from "./components/CTASection";
import FooterSection from "./components/FooterSection";
import MobileNavigation from "./components/MobileNavigation";

const LandingPage = () => {
  return (
    <div className="landing-page">
      <div className="main-content">
        <Header />
        <main className="home-content">
          <HeroSection />
          <ClientsSection />
          <CommunitySection />
        </main>
        <div className="body-content">
          <UnlockSection />
          <AchievementsSection />
          <CalendarSection />
          <TestimonialsSection />
          <BlogSection />
        </div>
        <ContactFormSection />
        <CTASection />
        <FooterSection />
      </div>
      <MobileNavigation />
    </div>
  );
};

export default LandingPage;
