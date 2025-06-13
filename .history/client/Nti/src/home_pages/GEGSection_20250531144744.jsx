import React from 'react';
import "../home_styles/GEGSection.css"
import { FaPhoneAlt, FaWhatsapp } from 'react-icons/fa';


export default function GEGSection() {
  return (
    <div className="bw-100 geg-container">
      <div className="d-flex justify-content-center w-100">
        <div className="row w-75 align-items-center">
          <div className="col-md-6 text-center text-md-start mb-4 mb-md-0">
            <h1 className="fw-bold mb-3">
              Get expert guidance— call or WhatsApp us today!!
            </h1>
            <p className="mb-4">
              A roadmap for readying key roles in your organization for business in the digital age.
            </p>
           
         <div className="d-flex flex-column flex-md-row gap-3 justify-content-center justify-content-md-start">
  <div className="d-flex align-items-center gap-2 bg-white p-2 rounded-3 w-100 w-md-50 justify-content-center justify-content-md-center shadow-sm">
    <FaPhoneAlt className="text-success" />
    <a href="tel:+917070905090" className="text-decoration-none fw-bold text-dark">
      +91-7070905090
    </a>
  </div>

  <div className="d-flex align-items-center gap-2 bg-white p-2 rounded-3 w-100 w-md-50 justify-content-center justify-content-md-center shadow-sm">
    <FaWhatsapp className="text-success" fontSize="1.5rem" />
    <a
      href="https://wa.me/9174253016"
      target="_blank"
      rel="noopener noreferrer"
      className="text-decoration-none fw-bold text-dark"
    >
      +91-9174253016
    </a>
  </div>
</div>
 </div>

          {/* Image */}
          <div className="col-md-6 text-center">
            <img
              src="https://www.ducatindia.com/_next/image?url=%2Fstatic%2Fcorporate%2FIf_You_Are_Enroll.png&w=750&q=75"
              alt="Expert Guidance"
              className="img-fluid"
              style={{ maxHeight: '300px', objectFit: 'contain' }}
            />
          </div>
        </div>
      </div>
    </div >
  );
}
