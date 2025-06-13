import React from 'react';
import { useNavigate } from 'react-router-dom';
import '../home_pages/ExploreTopPrograms.css';
import mern from "../../public/images/MERN STACK + GEN AI.webp"
import mean from "../../public/images/Mean Stack.webp"
import cyberSecurity from "../../public/images/CYBER SECURITY + GEN AI.webp"
import javaFullStack from "../../public/images/Java Full Stack Developer.png"
import javacore from "../../public/images/JAVA EXPERT.webp"
import advanceJava from "../../public/images/JAVA EXPERT.webp"
import advanceDigitalMarketing from "../../public/images/ADVANCE DIGITAL MARKETING.webp"
import dataScience from "../../public/images/DATA SCIENCE PROFESSIONAL TRAINING.webp"
import python from "../../public/images/PYTHON TRAINING COURSE.webp"
import businessAnalytics from "../../public/images/BUSINESS ANALYTICS.webp"
import aws from "../../public/images/AWS PROFESSIONAL TRAINING.webp"
import softwareManual from "../../public/images/SOFTWARE TESTING COURSE.webp"
import automation from "../../public/images/SOFTWARE TESTING COURSE.webp"
import cProgram from "../../public/images/C Programming.avif"
import cPlus from "../../public/images/C Programming.avif"
import graphicDesign from "../../public/images/Graphics Design.png"
import android from "../../public/images/android.png"
import ios from "../../public/images/ios.svg"
import awsDev from "../../public/images/AWS Course.png"
import salesforce from "../../public/images/Salesforce.avif"
import cspd from "../../public/images/Communication Skills & Personality Developement.jpg"


const programsData = [
  {
    program: 'mern stack',
    src: mern || 'https://www.ducatindia.com/_next/image?url=https%3A%2F%2Fadmin.ducatindia.com%2Fcourse%2F1739790191984mern-removebg-preview%20(1).png&w=256&q=75',
  },
  {
    program: 'mean stack',
    src: mean || 'https://cdn-ildibdd.nitrocdn.com/rbXsdGUmfBuMHJMapFszLAWajPxROlDq/assets/images/optimized/rev-7e4d546/i0.wp.com/ahex.co/wp-content/uploads/2022/06/171e51e3cefe0c5637c3abfda5b98ca6.MeanStack.png',
  },

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

        {
          programsData.map((program, idx) => (
            <div
              key={idx}
              className="col-12 col-sm-6 col-md-4"
              onClick={() => handleCourseClick(program.program)}
              onKeyPress={(e) => e.key === 'Enter' && handleCourseClick(program.program)}
              role="button"
              tabIndex={0}
              aria-label={`Explore ${program.program} course`}
            >
              <div className="card h-75 shadow-sm hover-scale d-flex flex-column justify-content-center cursor-pointer">
                <img
                  loading="lazy"
                  src={program.src}
                  className="card-img-top course-image mx-auto w-75"
                  alt={`${program.program} course visual`}
                />
                <div className="card-body text-center">
                  <h5 className="text-uppercase fs-6 fw-bold">{program.program}</h5>
                </div>
              </div>
            </div>
          ))
        }

        ))}
      </div>
    </div>
  );
};

export default ExploreTopPrograms;
