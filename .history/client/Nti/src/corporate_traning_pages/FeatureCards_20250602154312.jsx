import React from 'react';
import '../corporate_traning_styles/FeatureCards.css';

const features = [
  {
    title: 'Changing Administration',
    description: 'Employees can quickly adapt to changes in their working atmosphere and stay aligned with company objectives.',
    icon: '🛡️', // Replace with actual SVG or image later
  },
  {
    title: 'Grow your skills',
    description: 'We bridge the skills gap for industries, building future-ready workforces.',
    icon: '🚀',
  },
  {
    title: 'Return on Investment (ROI)',
    description: 'Training increases revenue and prepares staff for leadership positions.',
    icon: '📈',
  },
  {
    title: 'Acquire personality',
    description: 'Having the skills and know-how to stand out from the crowd and finish your assignment more quickly.',
    icon: '🌟',
  },
  {
    title: 'Project-based Learning',
    description: 'We combine theoretical knowledge with practical application through project-based learning.',
    icon: '📘',
  },
  {
    title: 'Crack Certification Exams',
    description: 'Most employees receiving our assistance can pass the global certification exam on the first attempt.',
    icon: '🏅',
  },
  {
    title: '100% Assistance',
    description: 'We provide constant assistance to answer your queries at any place with professional help.',
    icon: '💡',
  },
  {
    title: 'Training Certification',
    description: 'After completing the training program, you will receive a course completion certificate recognized worldwide.',
    icon: '🎓',
  },
];

const FeatureCards = () => {
  return (
    <div className="features-container">
      {features.map((feature, index) => (
        <div key={index} className="feature-card">
          <div className="feature-icon">{feature.icon}</div>
          <h3>{feature.title}</h3>
          <p>{feature.description}</p>
        </div>
      ))}
    </div>
  );
};

export default FeatureCards;
