import React from 'react';

const courses = [
  'Cloud Computing', 'Devops', 'Cyber Security + AI', 'Full Stack Development + AI', '.Net Core + AI',
  'Java + AI', 'Mern Stack + AI', 'Python', 'UI / UX', 'Business Analytics',
  'Data Science', 'Data Analytics', 'Generative AI', 'Machine learning', 'AWS',
  'Digital Marketing + AI', 'Software Testing', 'AutoCAD', 'ERP', 'Azure'
];

function TopCourses() {  return (
    <div className="container my-5">
      <div className="text-center mb-4">
        <h2 className=" pb-2 learners-underline">
          <strong>TOP COURSES</strong>
        </h2>
      </div>

      <div className="row g-4">
        {courses.map((course, index) => (
          <div className="col-12 col-sm-6 col-md-4 col-lg-3" key={index}>
            <div className="p-2 fw-semibold border border-1 rounded text-center bg-light shadow-sm h-100">
              {course}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default TopCourses;
