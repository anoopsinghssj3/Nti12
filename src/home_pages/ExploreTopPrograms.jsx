import React from 'react';
import { useNavigate } from 'react-router-dom';
import '../home_styles/ExploreTopPrograms.css'; // CSS for styling

const programsData = [
  {
    program: 'mern stack + gen ai',
    src: "./src/assets/MERN STACK + GEN AI.webp" || 'https://www.ducatindia.com/_next/image?url=https%3A%2F%2Fadmin.ducatindia.com%2Fcourse%2F1739790191984mern-removebg-preview%20(1).png&w=256&q=75',
  },
  {
    program: 'mean stack',
    src: "./src/assets/Mean Stack.webp" || 'https://cdn-ildibdd.nitrocdn.com/rbXsdGUmfBuMHJMapFszLAWajPxROlDq/assets/images/optimized/rev-7e4d546/i0.wp.com/ahex.co/wp-content/uploads/2022/06/171e51e3cefe0c5637c3abfda5b98ca6.MeanStack.png',
  },
  {
    program: 'cyber security + gen ai',
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
    program: 'ui & ux',
    src: "./src/assets/UI & UX.webp" || 'https://www.ducatindia.com/_next/image?url=https%3A%2F%2Fadmin.ducatindia.com%2Fcourse%2F1718708782516UI%20UX%20png.png&w=256&q=75',
  },
  {
    program: '.net',
    src: "./src/assets/.NET.webp" || 'https://www.ducatindia.com/_next/image?url=https%3A%2F%2Fadmin.ducatindia.com%2Fcourse%2F1718714811576dot-net-png.png&w=256&q=75',
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
    program: 'software testing course',
    src: "./src/assets/SOFTWARE TESTING COURSE.webp" || 'https://www.ducatindia.com/_next/image?url=https%3A%2F%2Fadmin.ducatindia.com%2Fcourse%2F1729665153790software%20Testing.png&w=256&q=75',
  },
  {
    program: 'data analytics using python',
    src: "./src/assets/BUSINESS ANALYTICS.webp" || 'https://www.ducatindia.com/_next/image?url=https%3A%2F%2Fadmin.ducatindia.com%2Fcourse%2F1707559446250Data%20Analytics%20Using%20Python.png&w=256&q=75',
  },
  {
    program: 'generative ai',
    src: "./src/assets/GENERATIVE AI.webp" || 'https://www.ducatindia.com/_next/image?url=https%3A%2F%2Fadmin.ducatindia.com%2Fcourse%2F17337437858871712321102440Generative%20Ai(1).png&w=256&q=75',
  },
  {
    program: 'power bi',
    src: "./src/assets/POWER BI.webp" || 'https://www.ducatindia.com/_next/image?url=https%3A%2F%2Fadmin.ducatindia.com%2Fcourse%2F1709096257414Power%20BI.png&w=256&q=75',
  },
  {
    program: 'autocad',
    src: "./src/assets/AUTOCAD.webp" || 'https://www.ducatindia.com/_next/image?url=https%3A%2F%2Fadmin.ducatindia.com%2Fcourse%2F1709383439715AutoCAD.png&w=256&q=75',
  },
  {
    program: 'c programming',
    src: "./src/assets/C Programming.avif" || "https://img.freepik.com/free-photo/programming-background-collage_23-2149901789.jpg",
  },
  {
    program: 'java android flutter',
    src: "./src/assets/Java Android Flutter.avif" || "https://img.freepik.com/free-photo/modern-smartphone-interface-concept_23-2148990739.jpg",
  },
  {
    program: 'graphics design',
    src: "./src/assets/Graphics Design.png" || "https://img.freepik.com/free-photo/graphic-designer-creative-artist-working-color-selection_23-2148895654.jpg",
  },
  {
    program: 'aws',
    src: "./src/assets/AWS Course.png" || "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQIYGRXTb5UEZpd2NyUZxw8AUpLIF6zeZ16Pg&s",
  },
  {
    program: 'cloud computing',
    src: "./src/assets/Cloud Computing.webp" || "https://cdn.iconscout.com/icon/free/png-512/free-cloud-computing-icon-download-in-svg-png-gif-file-formats--network-sharing-cyberspace-interface-pack-communication-icons-2332489.png?f=webp&w=512",
  },
  {
    program: 'salesforce',
    src: "./src/assets/Salesforce.avif" || "https://img.freepik.com/free-photo/businessman-using-digital-tablet-analytics-dashboard_23-2149215272.jpg",
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
                <h5 className="text-uppercase">{program}</h5>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ExploreTopPrograms;
