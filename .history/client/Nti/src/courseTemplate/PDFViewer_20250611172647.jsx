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
