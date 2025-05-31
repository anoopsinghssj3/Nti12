import React from 'react';
import * as Fa from "react-icons/fa";
import "../styles/SocialMedia.css";

export default function SocialMedia({ name, email, phone, course, branch, message }) {
    // Build WhatsApp message
    const whatsappMsg = `Enquiry Details:\nName: ${name || ""}\nEmail: ${email || ""}\nPhone: ${phone || ""}\nCourse: ${course || ""}\nBranch: ${branch || ""}\nMessage: ${message || "N/A"}`;

    const whatsappUrl = `https://wa.me/9174253016?text=${encodeURIComponent(whatsappMsg)}`;
    window.open(whatsappUrl, "_blank");

    return (
        <div className="social-media position-fixed d-flex flex-column gap-2 p-1 px-2" style={{ bottom: '20px', right: '20px', zIndex: 1050 }}>
            <a href={whatsappUrl} target="_blank" rel="noopener noreferrer"
                className="btn btn-success d-flex align-items-center justify-content-center rounded-circle"
                style={{ width: '40px', height: '40px' }}>
                <Fa.FaWhatsapp className="text-white fs-4" />
            </a>

            <a href="https://www.linkedin.com/company/new-talent-infotech/" target="_blank" rel="noopener noreferrer"
                className="btn btn-danger d-flex align-items-center justify-content-center rounded-circle linkedin border-0"
                style={{ width: '40px', height: '40px' }}>
                <Fa.FaLinkedinIn className="text-white fs-4" />
            </a>

            <a href="https://www.instagram.com/newtalentinfotech/" target="_blank" rel="noopener noreferrer"
                className="insta d-flex align-items-center justify-content-center rounded-circle"
                style={{ width: '40px', height: '40px' }}>
                <Fa.FaInstagram className="text-white fs-4" />
            </a>

            <a href="https://www.facebook.com/newtalentinfotech" target="_blank" rel="noopener noreferrer"
                className="btn btn-primary d-flex align-items-center justify-content-center rounded-circle"
                style={{ width: '40px', height: '40px' }}>
                <Fa.FaFacebookF className="text-white fs-4" />
            </a>
        </div>
    );
}

