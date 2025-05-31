import React from 'react';
import './FindTheRightCourse.css';

const courses = [
  {
    title: 'JAVA FULL STACK DEVELOPER + GEN AI',
    duration: '6 Months',
    eligibility: 'Any Graduate',
    image: 'https://via.placeholder.com/80?text=Java',
  },
  {
    title: 'DATA SCIENCE PROFESSIONAL TRAINING',
    duration: '8 Months',
    eligibility: 'BCA, B.Tech, CS',
    image: 'https://via.placeholder.com/80?text=DS',
  },
  {
    title: 'PYTHON TRAINING COURSE',
    duration: '2.5 Months',
    eligibility: 'Any Graduation',
    image: 'https://via.placeholder.com/80?text=Python',
  },
  {
    title: 'BUSINESS ANALYTICS',
    duration: '4 Months',
    eligibility: 'Any Graduate',
    image: 'https://via.placeholder.com/80?text=BA',
  },
];

function FindTheRightCourse() {
  return (
    <div className="course-container">
      <h2 className="course-heading">
        Find the Right Course for You
        <div className="heading-underline"></div>
      </h2>
      <div className="courses-wrapper">
        {courses.map((course, index) => (
          <div className="course-card" key={index}>
            <div className="badge-container">
              <span className="stars">⭐⭐⭐⭐⭐</span>
              <span className="best-in-industry">Best in Industry</span>
            </div>
            <div className="course-image">
              <img src={course.image} alt={course.title} />
            </div>
            <h3 className="course-title">{course.title}</h3>
            <p className="course-info">
              <span className="label">Duration:</span> {course.duration}
            </p>
            <p className="course-info">
              <span className="label">Eligibility:</span> {course.eligibility}
            </p>
            <button className="download-btn">
              📥 Download Brochure
            </button>
          </div>
        ))}
      </div>
    </div>
  );
}

export default FindTheRightCourse;
