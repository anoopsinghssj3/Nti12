import React from 'react';
import OurStory from './OurStory';
import OurMission from './OurMission';
import MeetTeam from './MeetTeam';
import WhyNti from './WhyNti';
import './AboutUs.css'; // includes minimal custom styling

const AboutUs = () => {
  return (
    <div>
      <section className="about-section d-flex flex-column align-items-center justify-content-center text-white text-center px-3 py-5">
        <div className="container about-content">
          <h2 className="fw-bold mb-3">About NTI India</h2>
          <p className="fs-5 lh-lg">
            Empowering careers through quality IT education
            . Discover our journey,
            mission, and values.
          </p>
        </div>
      </section>
      <OurStory />
      <OurMission />
      <MeetTeam />
      <WhyNti />
    </div>
  );
};

export default AboutUs;
