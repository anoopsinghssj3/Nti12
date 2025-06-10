import React from 'react';
import { useNavigate } from 'react-router-dom';
import '../home_styles/ExploreTopPrograms.css'; // CSS for styling

const programsData = [
  {
    program: 'mern stack',
    src: "./src/assets/MERN STACK + GEN AI.webp" || 'https://www.ducatindia.com/_next/image?url=https%3A%2F%2Fadmin.ducatindia.com%2Fcourse%2F1739790191984mern-removebg-preview%20(1).png&w=256&q=75',
  },
  {
    program: 'mean stack',
    src: "./src/assets/Mean Stack.webp" || 'https://cdn-ildibdd.nitrocdn.com/rbXsdGUmfBuMHJMapFszLAWajPxROlDq/assets/images/optimized/rev-7e4d546/i0.wp.com/ahex.co/wp-content/uploads/2022/06/171e51e3cefe0c5637c3abfda5b98ca6.MeanStack.png',
  },
  {
    program: 'cyber security',
    src: "./src/assets/CYBER SECURITY + GEN AI.webp" || 'https://www.ducatindia.com/_next/image?url=https%3A%2F%2Fadmin.ducatindia.com%2Fcourse%2F1707561125125Cyber%20Security.png&w=256&q=75',
  },
  {
    program: 'java full stack',
    src: "./src/assets/Java Full Stack Developer.png" || "https://img.freepik.com/free-photo/programming-background-with-person-working-with-codes-computer_23-2150010125.jpg",
  },
  {
    program: 'core java',
    src: "./src/assets/JAVA EXPERT.webp" || 'https://www.ducatindia.com/_next/image?url=https%3A%2F%2Fadmin.ducatindia.com%2Fcourse%2F1709033901773Java.png&w=256&q=75',
  },
  {
    program: 'advance java',
    src: "./src/assets/JAVA EXPERT.webp" || 'https://www.ducatindia.com/_next/image?url=https%3A%2F%2Fadmin.ducatindia.com%2Fcourse%2F1709033901773Java.png&w=256&q=75',
  },
  {
    program: 'advance digital marketing',
    src: "./src/assets/ADVANCE DIGITAL MARKETING.webp" || 'https://www.ducatindia.com/_next/image?url=https%3A%2F%2Fadmin.ducatindia.com%2Fcourse%2F1721644964282Digital%20Marketing.png&w=256&q=75',
  },
  {
    program: 'data science',
    src: "./src/assets/DATA SCIENCE PROFESSIONAL TRAINING.webp" || 'https://www.ducatindia.com/_next/image?url=https%3A%2F%2Fadmin.ducatindia.com%2Fcourse%2F1707559465273Data%20Science%20Training%20in%20Delhi.png&w=256&q=75',
  },
  {
    program: 'python',
    src: "./src/assets/PYTHON TRAINING COURSE.webp" || 'https://www.ducatindia.com/_next/image?url=https%3A%2F%2Fadmin.ducatindia.com%2Fcourse%2F1710312728346Python.png&w=256&q=75',
  },
  {
    program: 'business analytics',
    src: "./src/assets/BUSINESS ANALYTICS.webp" || 'https://www.ducatindia.com/_next/image?url=https%3A%2F%2Fadmin.ducatindia.com%2Fcourse%2F1709621420973Business%20Analytics.png&w=256&q=75',
  },
  {
    program: 'aws',
    src: "./src/assets/AWS PROFESSIONAL TRAINING.webp" || 'https://www.ducatindia.com/_next/image?url=https%3A%2F%2Fadmin.ducatindia.com%2Fcourse%2F1729665262800aws.png&w=256&q=75',
  },
  {
    program: 'software testing (manual)',
    src: "./src/assets/SOFTWARE TESTING COURSE.webp" || 'https://www.ducatindia.com/_next/image?url=https%3A%2F%2Fadmin.ducatindia.com%2Fcourse%2F1729665153790software%20Testing.png&w=256&q=75',
  },

  {
    program: 'automation',
    src: "./src/assets/SOFTWARE TESTING COURSE.webp" || 'https://www.ducatindia.com/_next/image?url=https%3A%2F%2Fadmin.ducatindia.com%2Fcourse%2F1729665153790software%20Testing.png&w=256&q=75',
  },

  {
    program: 'c programming',
    src: "./src/assets/C Programming.avif" || "https://img.freepik.com/free-photo/programming-background-collage_23-2149901789.jpg",
  },

  {
    program: 'c++ programming',
    src: "./src/assets/C Programming.avif" || "https://img.freepik.com/free-photo/programming-background-collage_23-2149901789.jpg",
  },

  {
    program: 'graphics design',
    src: "./src/assets/Graphics Design.png" || "https://img.freepik.com/free-photo/graphic-designer-creative-artist-working-color-selection_23-2148895654.jpg",
  },

  {
    program: 'android app developement',
    src: "./src/assets/android.png" || "https://www.freepnglogos.com/uploads/android-logo-png/android-logo-android-icon-logo-vector-eps-download-24.png",
  },


  {
    program: 'ios app developement',
    src: "./src/assets/ios.svg" || "https://visualpharm.com/assets/123/iOS%20Logo-595b40b75ba036ed117d84b5.svg",
  },

  {
    program: 'aws with devops',
    src: "./src/assets/AWS Course.png" || "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQIYGRXTb5UEZpd2NyUZxw8AUpLIF6zeZ16Pg&s",
  },
  {
    program: 'salesforce',
    src: "./src/assets/Salesforce.avif" || "",
  },

  {
    program: 'communication skills & personality developement',
    src: "./src/assets/Communication Skills & Personality Developement.jpg" || "https://blog.iilm.edu/wp-content/uploads/2020/06/Soft-skill-image-2.jpg",
  }
];

const ExploreTopPrograms = () => {
  const navigate = useNavigate();

  const handleCourseClick = (program) => {
    navigate("/course_template", { state: { course: program } });
  };

  return (
    <div className="container py-5 explore-top-programs w-75">
      <h2 className="mb-4 text-center learners-underline">Explore Top Programs</h2>

      <div className="row g-4">
        {programsData.map(({ program, src }, idx) => (
          <div
            key={idx}
            className="col-12 col-sm-6 col-md-4"
            onClick={() => handleCourseClick(program)}
            onKeyPress={(e) => e.key === 'Enter' && handleCourseClick(program)}
            role="button"
            tabIndex={0}
            aria-label={`Explore ${program} course`}
          >
            <div className="card h-75 shadow-sm hover-scale d-flex flex-row justify-content-center cursor-pointer">
              <img
                src={src}
                className="card-img-top course-image mx-auto w-25"
                alt={`${program} course visual`}
              />
              <div className="card-body text-center">
                <h5 className="text-uppercase fs-6 fw-bold">{program}</h5>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ExploreTopPrograms;
