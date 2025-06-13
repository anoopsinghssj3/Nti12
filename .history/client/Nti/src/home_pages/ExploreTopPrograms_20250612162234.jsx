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
  {
    program: 'cyber security',
    src: cyberSecurity || 'https://www.ducatindia.com/_next/image?url=https%3A%2F%2Fadmin.ducatindia.com%2Fcourse%2F1707561125125Cyber%20Security.png&w=256&q=75',
  },
  {
    program: 'java full stack',
    src: javaFullStack || "https://img.freepik.com/free-photo/programming-background-with-person-working-with-codes-computer_23-2150010125.jpg",
  },
  {
    program: 'core java',
    src: javacore || 'https://www.ducatindia.com/_next/image?url=https%3A%2F%2Fadmin.ducatindia.com%2Fcourse%2F1709033901773Java.png&w=256&q=75',
  },
  {
    program: 'advance java',
    src: advanceJava || 'https://www.ducatindia.com/_next/image?url=https%3A%2F%2Fadmin.ducatindia.com%2Fcourse%2F1709033901773Java.png&w=256&q=75',
  },
  {
    program: 'advance digital marketing',
    src: advanceDigitalMarketing || 'https://www.ducatindia.com/_next/image?url=https%3A%2F%2Fadmin.ducatindia.com%2Fcourse%2F1721644964282Digital%20Marketing.png&w=256&q=75',
  },
  {
    program: 'data science',
    src: dataScience || 'https://www.ducatindia.com/_next/image?url=https%3A%2F%2Fadmin.ducatindia.com%2Fcourse%2F1707559465273Data%20Science%20Training%20in%20Delhi.png&w=256&q=75',
  },
  {
    program: 'python',
    src: python || 'https://www.ducatindia.com/_next/image?url=https%3A%2F%2Fadmin.ducatindia.com%2Fcourse%2F1710312728346Python.png&w=256&q=75',
  },
  {
    program: 'business analytics',
    src: businessAnalytics || 'https://www.ducatindia.com/_next/image?url=https%3A%2F%2Fadmin.ducatindia.com%2Fcourse%2F1709621420973Business%20Analytics.png&w=256&q=75',
  },
  {
    program: 'aws',
    src: aws || 'https://www.ducatindia.com/_next/image?url=https%3A%2F%2Fadmin.ducatindia.com%2Fcourse%2F1729665262800aws.png&w=256&q=75',
  },
  {
    program: 'software testing (manual)',
    src: softwareManual || 'https://www.ducatindia.com/_next/image?url=https%3A%2F%2Fadmin.ducatindia.com%2Fcourse%2F1729665153790software%20Testing.png&w=256&q=75',
  },

  {
    program: 'automation',
    src: automation || 'https://www.ducatindia.com/_next/image?url=https%3A%2F%2Fadmin.ducatindia.com%2Fcourse%2F1729665153790software%20Testing.png&w=256&q=75',
  },

  {
    program: 'c programming',
    src: cProgram || "https://img.freepik.com/free-photo/programming-background-collage_23-2149901789.jpg",
  },

  {
    program: 'c++ programming',
    src: cPlus || "https://img.freepik.com/free-photo/programming-background-collage_23-2149901789.jpg",
  },

  {
    program: 'graphics design',
    src: graphicDesign || "https://img.freepik.com/free-photo/graphic-designer-creative-artist-working-color-selection_23-2148895654.jpg",
  },

  {
    program: 'android app developement',
    src: android || "https://www.freepnglogos.com/uploads/android-logo-png/android-logo-android-icon-logo-vector-eps-download-24.png",
  },


  {
    program: 'ios app developement',
    src: ios || "https://visualpharm.com/assets/123/iOS%20Logo-595b40b75ba036ed117d84b5.svg",
  },

  {
    program: 'aws with devops',
    src: awsDev || "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQIYGRXTb5UEZpd2NyUZxw8AUpLIF6zeZ16Pg&s",
  },
  {
    program: 'salesforce',
    src: salesforce || "",
  },

  {
    program: 'communication skills & personality developement',
    src: cspd || "https://blog.iilm.edu/wp-content/uploads/2020/06/Soft-skill-image-2.jpg",
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
        {programsData.map((program, idx) => (
          <div
            key={idx}
            className="col-12 col-sm-6 col-md-4"
            onClick={() => handleCourseClick(program.program)}
            onKeyPress={(e) => e.key === 'Enter' && handleCourseClick(program.program)}
            role="button"
            tabIndex={0}
            aria-label={`Explore ${program.program} course`}
          >
            <div className="cardshadow-sm hover-scale cursor-pointer">
              <img
                loading="lazy"
                src={program.src}
                className="card-img-top course-image w-25"
                alt={`${program.program} course visual`}
              />
              <div className="card-body text-center">
                <h5 className="text-uppercase fs-6 fw-bold">{program.program}</h5>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ExploreTopPrograms;
