import React from 'react';
import './OurMission.css';

const OurMission = () => {
  return (
    <div className="text-white py-5 why-nti">
      <div className="container">
        <h2 className="text-center fw-bold mb-5">Our Mission & Vision</h2>
        <div className="row justify-content-center">
          {/* Mission */}
          <div className="col-md-6 mb-4">
            <div className="d-flex align-items-start gap-3 mission-item">
              <span className="icon">🎯</span>
              <div>
                <h4 className="text-warning fw-semibold">Mission</h4>
                <p className="text-white mb-0">
                  To provide industry-relevant IT training that equips individuals with the skills and
                  knowledge to excel in their careers and contribute to technological advancements.
                </p>
              </div>
            </div>
          </div>

          {/* Vision */}
          <div className="col-md-6 mb-4">
            <div className="d-flex align-items-start gap-3 mission-item">
              <span className="icon">💡</span>
              <div>
                <h4 className="text-warning fw-semibold">Vision</h4>
                <p className="text-white mb-0">
                  To be the most trusted and preferred IT training institute globally, recognized for our
                  excellence in education, innovation, and transformative impact on careers.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default OurMission;
