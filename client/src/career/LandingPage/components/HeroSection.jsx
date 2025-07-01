import React from "react";

const HeroSection = () => {
  return (
    <section className="hero-section">
      <div className="hero-content">
        <div className="hero-text">
          <h1 className="hero-title">
            <span className="title-main">Lessons and insights </span>
            <span className="title-accent">from 8 years</span>
          </h1>
          <p className="hero-description">
            Where to grow your business as a photographer: site or social media?
          </p>
        </div>
      </div>
      <div className="hero-image">
        <img
          src="https://cdn.builder.io/api/v1/image/assets/TEMP/1cc3bd2a52115ce8bcbd86b6614490ca9f29ea8d?width=544"
          alt="Illustration"
          className="illustration"
        />
      </div>
    </section>
  );
};

export default HeroSection;
