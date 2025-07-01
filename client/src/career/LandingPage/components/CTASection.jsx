import React from "react";

const CTASection = () => {
  return (
    <section className="cta-section">
      <div className="cta-content">
        <h2 className="cta-title">
          Pellentesque suscipit fringilla libero eu.
        </h2>
        <button className="btn-primary btn-cta">
          <span className="label">Get a Demo</span>
          <svg
            width="6"
            height="6"
            viewBox="0 0 6 6"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M3.8047 3.875L4.62927 3.05044C4.72706 2.95265 4.72706 2.7941 4.62927 2.69631L3.8047 1.87175M4.55592 2.87337L0.883301 2.87337"
              stroke="white"
              strokeWidth="0.367253"
              strokeLinecap="round"
            />
          </svg>
        </button>
      </div>
    </section>
  );
};

export default CTASection;
