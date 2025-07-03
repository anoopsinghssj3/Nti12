import React from "react";
import "./LandingPage.css";

// Sections
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
    <div className="landing-page bg-light w-100">
      <div className="main-content container-fluid px-0">

        {/* Hero Section */}
        <section className="py-5 bg-white w-100">
          <HeroSection />
        </section>

        {/* Clients Section */}
        <section className=" bg-light w-100">
          <ClientsSection />
        </section>

        {/* Community Section */}
        <section className="py-5 bg-white w-100">
          <CommunitySection />
        </section>

        {/* Unlock Section */}
        <section className="py-5 bg-light w-100">
          <UnlockSection />
        </section>

        {/* Achievements Section */}
        <section className="py-5 bg-white w-100">
          <AchievementsSection />
        </section>

        {/* Calendar Section */}
        <section className="py-5 bg-light w-100">
          <CalendarSection />
        </section>

        {/* Testimonials Section */}
        <section className="py-5 bg-white w-100">
          <TestimonialsSection />
        </section>

        {/* Blog Section */}
        <section className="py-5 bg-light w-100">
          <BlogSection />
        </section>

        {/* Contact Form Section */}
        <section className="py-5 bg-white w-100">
          <ContactFormSection />
        </section>

        {/* Call to Action Section */}
        <section className="py-5 bg-primary text-white w-100">
          <CTASection />
        </section>

        {/* Footer */}
        <footer className="py-4 bg-dark text-white w-100">
          <FooterSection />
        </footer>
      </div>

      {/* Mobile Navigation */}
      <div className="d-md-none w-100">
        <MobileNavigation />
      </div>
    </div>
  );
};

export default LandingPage;
