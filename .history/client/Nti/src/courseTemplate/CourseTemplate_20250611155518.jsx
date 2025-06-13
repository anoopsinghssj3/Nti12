import React, { useEffect, useState } from 'react';
import axios from 'axios';
import "./CourseTemplate.css"
import {
  FaClock, FaRupeeSign, FaFileDownload, FaProjectDiagram,
  FaCheckCircle, FaGraduationCap
} from 'react-icons/fa';
import { useNavigate, useLocation } from 'react-router-dom';

const DEFAULT_IMG = "https://cdn.dribbble.com/users/1162077/screenshots/3848914/programmer.gif";

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
      "https://camo.githubusercontent.com/5119ee303e5e49cdf23def653b737bede0da49a859a34714d62d9ab518afbbb2/68747470733a2f2f63646e2e6472696262626c652e636f6d2f75736572732f313136323037372f73637265656e73686f74732f333834383931342f70726f6772616d6d65722e676966",
      "https://camo.githubusercontent.com/5046cb083418fd1922b7f5990e594c3bb06f5d87e5516cd8839ae0aa48b3aec4/68747470733a2f2f696d616765732e73717561726573706163652d63646e2e636f6d2f636f6e74656e742f76312f35373696966340316263316261626131616462623261622f313534313538303631313632342d5445363451474b524a4738535741495553374e532f6b6531375a77644742546f6464493870446d34386b506f73776c7a6a53564d4d2d53784f703743563539425a772d7a505067646e346a557756634a45315a7657515578776b6d794578676c4e714770304976544a5a616d574c49327a76595748384b332d735f3479737a63703272795449304871544f6161556f68724938504936465879386339505774426c7141566c555335697a7064634958445a71445976707252715a32395077306f2f636f64696e672d667265616b2e676966",
      "https://camo.githubusercontent.com/2366b34bb903c09617990fb5fff4622f3e941349e846ddb7e73df872a9d21233/68747470733a2f2f63646e2e6472696262626c652e636f6d2f75736572732f3733303730332f73637265656e73686f74732f363538313234332f6176656e746f2e676966",
      "https://camo.githubusercontent.com/4d9f5ecceb711eec6e2018f38a5677dc657c9738d4a65ba3b928c41c0a45b439/68747470733a2f2f6d69726f2e6d656469756d2e636f6d2f6d61782f313336302f302a37513379765349765f7430696f4a2d5a2e676966",
      "https://camo.githubusercontent.com/130ffc354b6ee3c8c9e506276e598bf4e19ea7950df203dacf6aeee4fc543a50/68747470733a2f2f616e616c7974696373696e6469616d61672e636f6d2f77702d636f6e74656e742f75706c6f6164732f323031382f31322f646576656c6f7065722d6472696262626c652e676966",
      "https://camo.githubusercontent.com/88adc7c88c9d3dba7479020846ed35d13410e3707c7f149e1c6140cc6beaef9a/68747470733a2f2f70687973696373677572756b756c2e66696c65732e776f726470726573732e636f6d2f323031392f30322f6368617261637465722d312e676966",
      "https://camo.githubusercontent.com/87af9a9fec730c94fc8b08eb21fa5ef6ab7831a67ba17bf8cc76696f6e4be1ef/68747470733a2f2f63646e2e6472696262626c652e636f6d2f75736572732f313138373833362f73637265656e73686f74732f363533393432392f70726f6772616d65722e676966",
      "https://raw.githubusercontent.com/TheDudeThatCode/TheDudeThatCode/master/Assets/Designer.gif",
      "https://raw.githubusercontent.com/TheDudeThatCode/TheDudeThatCode/master/Assets/Developer.gif", "https://cdn.dribbble.com/userupload/21606445/file/original-87f89c32747bd361f530e0735083d18d.gif", "https://miro.medium.com/v2/resize:fit:1400/1*IO0G2ygwIml_NGAv26Na4w.gif",
      "https://static1.squarespace.com/static/558c162ee4b03447dc049b73/t/56a09aef9cadb60afe120881/1453366010166/?format=1500w", "https://user-images.githubusercontent.com/74038190/235224431-e8c8c12e-6826-47f1-89fb-2ddad83b3abf.gif", "https://user-images.githubusercontent.com/74038190/236119160-976a0405-caa7-470c-9356-16d43402ea0a.gif"
    ];

    // Pick 2 distinct random images
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
      // Wikipedia fallback
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
    <main className="container py-5 course-template course-template">

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
          <a
            href={courseData.pdfLink || "#"}
            className="btn btn-outline-primary btn-sm mb-3"
            target="_blank"
            rel="noopener noreferrer"
          >
            Download PDF
          </a>

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
            onClick={() => navigate('/payment')}
          >
            Enroll Now
          </button>
        </div>
      </div>
    </main>
  );
};

export default CourseTemplate;
