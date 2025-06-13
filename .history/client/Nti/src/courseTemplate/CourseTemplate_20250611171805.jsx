import React, { useEffect, useState } from 'react';
import axios from 'axios';
import "./CourseTemplate.css";
import {
  FaClock, FaRupeeSign, FaFileDownload, FaProjectDiagram,
  FaCheckCircle, FaGraduationCap
} from 'react-icons/fa';
import { useNavigate, useLocation } from 'react-router-dom';

const DEFAULT_IMG = "https://cdn.dribbble.com/users/1162077/screenshots/3848914/programmer.gif";

// Ensure fixedCourses is defined and normalized

const normalizedFixedCourses = {};
Object.keys(fixedCourses).forEach(key => {
  normalizedFixedCourses[key.toUpperCase()] = fixedCourses[key];
});

const CourseTemplate = () => {
  const navigate = useNavigate();
  const location = useLocation();

  const course = location.state?.course || "";

  const [description, setDescription] = useState('');
  const [img, setImg] = useState('');
  const [loading, setLoading] = useState(true);
  const [randomImage, setRandomImage] = useState("");
  const [randomImage2, setRandomImage2] = useState("");

  useEffect(() => {
    const images = [
      "https://cdn.dribbble.com/users/1162077/screenshots/3848914/programmer.gif",
      "https://user-images.githubusercontent.com/74038190/235224431-e8c8c12e-6826-47f1-89fb-2ddad83b3abf.gif",
      "https://user-images.githubusercontent.com/74038190/236119160-976a0405-caa7-470c-9356-16d43402ea0a.gif",
      "https://camo.githubusercontent.com/130ffc354b6ee3c8c9e506276e598bf4e19ea7950df203dacf6aeee4fc543a50/6874747073...",
    ];

    let firstIndex = Math.floor(Math.random() * images.length);
    let secondIndex;
    do {
      secondIndex = Math.floor(Math.random() * images.length);
    } while (secondIndex === firstIndex);

    setRandomImage(images[firstIndex]);
    setRandomImage2(images[secondIndex]);
  }, []);

  useEffect(() => {
    if (!course.trim()) {
      setDescription("No course selected.");
      setImg("");
      setLoading(false);
      return;
    }

    const normalizedCourse = course.trim().toUpperCase();

    if (normalizedFixedCourses[normalizedCourse]) {
      const courseData = normalizedFixedCourses[normalizedCourse];
      setDescription(courseData.description);
      setLoading(false);
    } else {
      const query = course.replace(/[^a-zA-Z0-9 ]/g, '').trim();

      axios.get(`https://en.wikipedia.org/api/rest_v1/page/summary/${encodeURIComponent(query)}`)
        .then((res) => {
          if (res.data.extract) {
            setDescription(res.data.extract);
          } else {
            setDescription('No description available for this course.');
          }
          setImg(DEFAULT_IMG);
        })
        .catch(() => {
          setDescription("Wikipedia fetch failed. Please try again.");
          setImg(DEFAULT_IMG);
        })
        .finally(() => {
          setLoading(false);
        });
    }
  }, [course]);

  if (loading) {
    return (
      <div className="text-center py-5">
        Loading course details...
      </div>
    );
  }

  const normalizedCourse = course.trim().toUpperCase();
  const courseData = normalizedFixedCourses[normalizedCourse] || {};

  return (
    <main className="container py-5 course-template">
      <h2 className="text-center mb-3">
        <FaGraduationCap className="me-2" />
        <strong className='text-uppercase'>{course || "Course Details"}</strong>
      </h2>

      <div className="row align-items-center">
        {/* LEFT SIDE WITH TWO IMAGES */}
        <div className="col-md-5 text-center mb-4 mb-md-0 d-flex flex-column align-items-center gap-3 img-fixing">
          <img
            src={randomImage || DEFAULT_IMG}
            alt={`${course} course image 1`}
            className="img-fluid rounded shadow course-image"
            style={{ width: "60%", objectFit: "cover" }}
          />
          <img
            src={randomImage2 || DEFAULT_IMG}
            alt={`${course} course image 2`}
            className="img-fluid rounded shadow course-image"
            style={{ width: "60%", objectFit: "cover" }}
          />
        </div>

        {/* DETAILS */}
        <div className="col-md-7">
          <p className="lead course-description">{description}</p>

          <hr />

          <h5><FaClock className="me-2 text-primary" />Duration</h5>
          <p>{courseData.duration || "3–6 Months"}</p>

          <h5><FaRupeeSign className="me-2 text-success" />Fees</h5>
          <p>{courseData.fees || "₹25,000 – ₹55,000"}</p>

          <h5><FaFileDownload className="me-2 text-warning" />Curriculum</h5>
          {courseData.pdfLink ? (
            <div className="d-flex gap-3 flex-wrap mb-3">
              <a
                href={courseData.pdfLink}
                download
                className="btn btn-outline-primary btn-sm"
              >
                Download PDF
              </a>
              <button
                className="btn btn-outline-secondary btn-sm"
                onClick={() => navigate("/pdf-viewer", {
                  state: {
                    pdfUrl: courseData.pdfLink,
                    courseName: course
                  }
                })}
              >
                View PDF
              </button>
            </div>
          ) : (
            <p className="text-muted">Curriculum not available</p>
          )}

          <h5><FaProjectDiagram className="me-2 text-info" />Projects</h5>
          <ul>
            {(courseData.projects || ["Capstone Projects", "Real-World Scenarios"]).map((proj, idx) => (
              <li key={idx}>{proj}</li>
            ))}
          </ul>

          <h5><FaCheckCircle className="me-2 text-success" />Extras</h5>
          <ul>
            {(courseData.extras || ["Placement Support", "Resume & Interview Prepration"]).map((extra, idx) => (
              <li key={idx}>{extra}</li>
            ))}
          </ul>

          <button
            className="btn btn-success w-100 mt-3"
            onClick={() =>
              navigate("/payment", {
                state: {
                  course: course,
                  fees: courseData.fees || "₹25,000 – ₹55,000"
                }
              })
            }
          >
            Enroll Now
          </button>

        </div>
      </div>
    </main>
  );
};

export default CourseTemplate;
