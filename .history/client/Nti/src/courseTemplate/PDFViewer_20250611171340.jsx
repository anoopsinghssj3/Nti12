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
                <button className="btn btn-primary mt-3" onClick={() => navigate(-1)}>Go Back</button>
            </div>
        );
    }

    return (
        <div className="container-fluid p-4">
            <h4 className="mb-3">{courseName ? `${courseName} Curriculum` : "Course PDF"}</h4>
            <div style={{ height: "80vh" }}>
                <iframe
                    src={pdfUrl}
                    title="Course Curriculum PDF"
                    width="100%"
                    height="100%"
                    style={{ border: "1px solid #ccc" }}
                ></iframe>
            </div>
            <button className="btn btn-secondary mt-3" onClick={() => navigate(-1)}>Back to Course</button>
        </div>
    );
};

export default PDFViewer;
