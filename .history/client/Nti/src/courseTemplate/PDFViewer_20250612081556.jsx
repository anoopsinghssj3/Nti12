import React from 'react';
import { useLocation, useNavigate } from 'react-router-dom';

const PDFViewer = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const { pdfUrl, courseName } = location.state || {};

  if (!pdfUrl) {
    return (
      <div className="container py-5 text-center">
        <h3>No PDF provided</h3>
        <button className="btn btn-primary mt-3" onClick={() => navigate(-1)}>
          Go Back
        </button>
      </div>
    );
  }

  return (
    <div className="container-fluid px-3 py-4 bg-light">
      <div className="container bg-white shadow rounded p-4 mb-5">
        <h2 className="text-center text-primary mb-3 fw-bold">NTI TECH ACADEMY</h2>
        <h4 className="text-center mb-4">{courseName || "C Language"} Training Program</h4>

        <div className="text-center mb-4">
          <p><strong>Location:</strong> LIG - 2/21/422, Nehru Nagar, Rewa, Madhya Pradesh 486001</p>
          <p><strong>Website:</strong> <a href="http://www.ntitechacademy.com" target="_blank" rel="noopener noreferrer" className="text-decoration-underline text-primary">www.ntitechacademy.com</a></p>
          <p><strong>Phone:</strong> 07662-482289</p>
        </div>

        <div className="mb-4">
          <h5 className="fw-bold">About the Program</h5>
          <p>NTI Tech Academy offers hands-on C Language training with live projects, designed for students, professionals, and freelancers. Learn from industry experts and build a strong foundation in programming.</p>
        </div>

        <div className="mb-4">
          <h5 className="fw-bold">Why Choose Us?</h5>
          <ul className="list-unstyled ps-3">
            <li>✅ 100% Job Assistance</li>
            <li>✅ Live Project Exposure</li>
            <li>✅ Smart Classrooms</li>
            <li>✅ Resume & Interview Preparation</li>
            <li>✅ No.1 Ranked C Course in the Industry</li>
          </ul>
        </div>

        <div className="mb-4">
          <h5 className="fw-bold">What You Will Gain</h5>
          <ul className="list-unstyled ps-3">
            <li>🎓 Expert Mentorship & Career Support</li>
            <li>💼 Real-world Case Studies</li>
            <li>📜 Hands-on Tools & Certifications</li>
            <li>📈 Salary Hike Potential: Up to 50%</li>
            <li>🔁 Lifetime Learning Access</li>
          </ul>
        </div>

        <div className="mb-4">
          <h5 className="fw-bold">Course Curriculum</h5>
          <div className="row row-cols-1 row-cols-md-2 g-4">
            {[
              { title: 'Introduction to C', topics: ['History & Importance', 'Features', 'Procedural Approach'] },
              { title: 'C Language Environment', topics: ['Compiler, Interpreter, Assembler', 'IDEs', 'Compilation Process'] },
              { title: 'Basics & Buzzwords', topics: ['Data Types', 'Variables', 'Constants', 'Identifiers', 'Preprocessor Directives'] },
              { title: 'Input & Output', topics: ['Reading & Writing', 'Built-in I/O Functions'] },
              { title: 'Flow Control Statements', topics: ['if, else, else-if, switch', 'Loops: for, while, do-while', 'goto, break, continue'] },
              { title: 'Pointers', topics: ['Types & Expressions', 'Pointer Arithmetic', 'Pointers in Arrays, Strings, Functions'] },
              { title: 'Arrays & Strings', topics: ['1D, 2D, Multi-dimensional Arrays', 'Sorting, Searching', 'String Operations'] },
              { title: 'Enum', topics: ['Basics & Use Cases'] },
              { title: 'File Management', topics: ['File Modes', 'Read/Write', 'Command-line Arguments'] },
              { title: 'Preprocessor Directives', topics: ['Macros', 'File Inclusions', 'Compiler Control'] },
              { title: 'Functions', topics: ['Types, Nesting, Recursion', 'Passing & Returning Values'] },
              { title: 'Structures', topics: ['Definition', 'Pointers & Functions with Structure', 'Arrays of Structure'] },
              { title: 'Unions', topics: ['Introduction & Use Cases'] },
              { title: 'Dynamic Memory Allocation', topics: ['malloc()', 'calloc()', 'realloc()', 'free()'] },
            ].map((module, index) => (
              <div key={index} className="col">
                <div className="border rounded p-3 h-100 bg-light">
                  <h6 className="fw-semibold text-primary">{module.title}</h6>
                  <ul className="ps-3 mb-0">
                    {module.topics.map((topic, i) => <li key={i}>{topic}</li>)}
                  </ul>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="mb-4">
          <h5 className="fw-bold">Capstone Projects</h5>
          <ul className="list-unstyled ps-3">
            <li>🛠️ Mini Compilers</li>
            <li>🗃️ Student Record Management</li>
            <li>🔐 File Encryption Tool</li>
            <li>📊 Pointer-Based Memory Visualizer</li>
          </ul>
        </div>

        <div className="text-center my-4">
          <button className="btn btn-success px-4 py-2 fw-bold">
            Enroll Now
          </button>
        </div>
      </div>

      <div className="container mb-5">
        <h4 className="mb-3 text-primary">{courseName ? `${courseName} Curriculum PDF` : "Course Curriculum PDF"}</h4>
        <div style={{ height: "80vh", border: "1px solid #ccc", borderRadius: "8px", overflow: "hidden" }}>
          <iframe
            src={pdfUrl}
            title={`${courseName} Curriculum PDF`}
            width="100%"
            height="100%"
            style={{ border: "none" }}
          ></iframe>
        </div>
        <div className="text-center mt-4">
          <button className="btn btn-secondary" onClick={() => navigate(-1)}>
            ⬅ Back to Course
          </button>
        </div>
      </div>
    </div>
  );
};

export default PDFViewer;
