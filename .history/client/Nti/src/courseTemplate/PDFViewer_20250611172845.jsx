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
        <div className="container-fluid p-4">
            <h4 className="mb-3 text-primary">
                {courseName ? `${courseName} Curriculum` : "Course Curriculum PDF"}
            </h4>
    <div className="container py-5">
      <h1 className="text-3xl font-bold text-center mb-6">NTI TECH ACADEMY</h1>
      <h2 className="text-2xl font-semibold text-center mb-4">C Language Training Program</h2>

      <div className="text-center mb-6">
        <p><strong>Location:</strong> LIG - 2/21/422, Nehru Nagar, Rewa, Madhya Pradesh 486001</p>
        <p><strong>Website:</strong> <a href="http://www.ntitechacademy.com" target="_blank" rel="noopener noreferrer" className="text-blue-600 underline">www.ntitechacademy.com</a></p>
        <p><strong>Phone:</strong> 07662-482289</p>
      </div>

      <section className="mb-8">
        <h3 className="text-xl font-bold mb-2">About the Program</h3>
        <p>
          NTI Tech Academy offers hands-on C Language training with live projects, designed for students,
          professionals, and freelancers. Learn from industry experts and build a strong foundation in programming.
        </p>
      </section>

      <section className="mb-8">
        <h3 className="text-xl font-bold mb-2">Why Choose Us?</h3>
        <ul className="list-disc list-inside">
          <li>100% Job Assistance</li>
          <li>Live Project Exposure</li>
          <li>Smart Classrooms</li>
          <li>Resume & Interview Preparation</li>
          <li>No.1 Ranked C Course in the Industry</li>
        </ul>
      </section>

      <section className="mb-8">
        <h3 className="text-xl font-bold mb-2">What You Will Gain</h3>
        <ul className="list-disc list-inside">
          <li>Expert Mentorship & Career Support</li>
          <li>Real-world Case Studies</li>
          <li>Hands-on Tools & Certifications</li>
          <li>Salary Hike Potential: Up to 50%</li>
          <li>Lifetime Learning Access</li>
        </ul>
      </section>

      <section className="mb-8">
        <h3 className="text-xl font-bold mb-4">Course Curriculum</h3>
        <div className="grid gap-4">
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
            <div key={index}>
              <h4 className="font-semibold text-lg mb-1">{module.title}</h4>
              <ul className="list-disc list-inside ml-4">
                {module.topics.map((topic, i) => <li key={i}>{topic}</li>)}
              </ul>
            </div>
          ))}
        </div>
      </section>

      <section className="mb-8">
        <h3 className="text-xl font-bold mb-2">Capstone Projects</h3>
        <ul className="list-disc list-inside">
          <li>Mini Compilers</li>
          <li>Student Record Management</li>
          <li>File Encryption Tool</li>
          <li>Pointer-Based Memory Visualizer</li>
        </ul>
      </section>

      <div className="text-center">
        <button className="bg-blue-600 text-white py-2 px-4 rounded hover:bg-blue-700 transition">Enroll Now</button>
      </div>
    </div>

            <div style={{ height: "80vh" }}>
                <iframe
                    src={pdfUrl}
                    title={`${courseName} Curriculum PDF`}
                    width="100%"
                    height="100%"
                    style={{ border: "1px solid #ccc", borderRadius: "8px" }}
                ></iframe>







            </div>

            <div className="text-center mt-4">
                <button className="btn btn-secondary" onClick={() => navigate(-1)}>
                    Back to Course
                </button>
            </div>
        </div>
    );
};

export default PDFViewer;
