import React from 'react';
import '../home_styles/FindTheRightCourse.css';

const courses = [
  // your courses array (unchanged)
  {
    title: 'JAVA FULL STACK DEVELOPER + GEN AI',
    duration: '6 Months',
    eligibility: 'Any Graduate',
    image: 'https://via.placeholder.com/80?text=Java',
  },
  {
    title: 'JAVA FULL STACK DEVELOPER + GEN AI',
    duration: '6 Months',
    eligibility: 'Any Graduate',
    image: 'https://via.placeholder.com/80?text=Java',
  },
  {
    title: 'JAVA FULL STACK DEVELOPER + GEN AI',
    duration: '6 Months',
    eligibility: 'Any Graduate',
    image: 'https://via.placeholder.com/80?text=Java',
  },
  {
    title: 'JAVA FULL STACK DEVELOPER + GEN AI',
    duration: '6 Months',
    eligibility: 'Any Graduate',
    image: 'https://via.placeholder.com/80?text=Java',
  },
  {
    title: 'JAVA FULL STACK DEVELOPER + GEN AI',
    duration: '6 Months',
    eligibility: 'Any Graduate',
    image: 'https://via.placeholder.com/80?text=Java',
  },
  {
    title: 'JAVA FULL STACK DEVELOPER + GEN AI',
    duration: '6 Months',
    eligibility: 'Any Graduate',
    image: 'https://via.placeholder.com/80?text=Java',
  },
  {
    title: 'JAVA FULL STACK DEVELOPER + GEN AI',
    duration: '6 Months',
    eligibility: 'Any Graduate',
    image: 'https://via.placeholder.com/80?text=Java',
  },
  {
    title: 'JAVA FULL STACK DEVELOPER + GEN AI',
    duration: '6 Months',
    eligibility: 'Any Graduate',
    image: 'https://via.placeholder.com/80?text=Java',
  },
  {
    title: 'JAVA FULL STACK DEVELOPER + GEN AI',
    duration: '6 Months',
    eligibility: 'Any Graduate',
    image: 'https://via.placeholder.com/80?text=Java',
  },
  {
    title: 'JAVA FULL STACK DEVELOPER + GEN AI',
    duration: '6 Months',
    eligibility: 'Any Graduate',
    image: 'https://via.placeholder.com/80?text=Java',
  },
  {
    title: 'JAVA FULL STACK DEVELOPER + GEN AI',
    duration: '6 Months',
    eligibility: 'Any Graduate',
    image: 'https://via.placeholder.com/80?text=Java',
  },
  // ... rest of your courses
];

export default function FindTheRightCourse() {
  // Function name matches what is called in buttons
  const handleScroll = (direction) => {
    const box = document.getElementById('scroll-container');
    const scrollAmount = 300;
    if (direction === 'left') {
      box.scrollLeft -= scrollAmount;
    } else {
      box.scrollLeft += scrollAmount;
    }
  };

  return (
    <div className="container py-5 find-the-right-course find-the right-course">
      <h2 className="learners-underline text-center mb-4 ">
        Find the Right Course for You
        <div className=" mx-auto mt-2"></div>
      </h2>

      <div style={{ position: 'relative' }}>
        {/* Left Scroll Button */}
        <button
          className="btn btn-primary"
          style={{
            position: 'absolute',
            top: '50%',
            left: 0,
            transform: 'translateY(-50%)',
            zIndex: 2,
          }}
          onClick={() => handleScroll('left')}
          aria-label="Scroll Left"
        >
          ‹
        </button>

        {/* Scrollable container */}
        <div
          id="scroll-container"
          className="courses-wrapper d-flex"
          style={{ overflowX: 'auto', scrollBehavior: 'smooth', whiteSpace: 'nowrap' }}
        >
          {courses.map((course, index) => (
            <div key={index} className="course-card" style={{ display: 'inline-block' }}>
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

        {/* Right Scroll Button */}
        <button
          className="btn btn-primary"
          style={{
            position: 'absolute',
            top: '50%',
            right: 0,
            transform: 'translateY(-50%)',
            zIndex: 2,
          }}
          onClick={() => handleScroll('right')}
          aria-label="Scroll Right"
        >
          ›
        </button>
      </div>
    </div>
  );
}
