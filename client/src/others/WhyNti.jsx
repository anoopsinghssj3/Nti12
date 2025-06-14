import React from 'react';
import './WhyNti.css';
import { FaAward, FaSuitcase, FaBookOpen } from 'react-icons/fa';

const reasons = [
  {
    icon: <FaAward />,
    title: 'Quality Training',
    description: 'Industry-focused curriculum and expert trainers.',
  },
  {
    icon: <FaSuitcase />,
    title: 'Placement Support',
    description: 'Dedicated cell for 100% placement assistance.',
  },
  {
    icon: <FaBookOpen />,
    title: 'Practical Learning',
    description: 'Hands-on projects and real-world case studies.',
  },
];


const WhyNti = () => {
  return (
    <div className="py-5 text-center text-white why-nti mb-5">
      <div className="container">
        <h2 className="fw-bold mb-4">Why NTI?</h2>
        <div className="row justify-content-center g-4">
          {reasons.map((item, index) => (
            <div key={index} className="col-md-4 col-sm-6">
              <div className="px-3">
                <div className="why-icon mb-3">{item.icon}</div>
                <h5 className="fw-semibold">{item.title}</h5>
                <p className="text-light small">{item.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default WhyNti;
