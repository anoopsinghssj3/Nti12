import React from 'react';
import { FaLinkedinIn, FaWhatsapp, FaInstagram, FaFacebookF } from "react-icons/fa";
import "../home_styles/SocialMedia.css";

export default function SocialMedia({ name, email, phone, course, branch, message }) {
    const whatsappMsg = `Enquiry Details:\nName: ${name || ""}\nEmail: ${email || ""}\nPhone: ${phone || ""}\nCourse: ${course || ""}\nBranch: ${branch || ""}\nMessage: ${message || "N/A"}`;
    const whatsappUrl = `https://wa.me/9174253016?text=${encodeURIComponent(whatsappMsg)}`;

    const handleWhatsAppClick = (e) => {
        e.preventDefault(); // avoid any unintended behavior
        window.open(whatsappUrl, "_blank");
    };

    return (
        <div className="social-media position-fixed d-flex flex-column gap-2 p-1 p-2 bg-secondary ">

            <a href={whatsappUrl} onClick={handleWhatsAppClick} className="rounded-circle" style={{ backgroundColor: "#25D366", width: '40px', height: '40px', display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
                <FaWhatsapp color="white" size="20" />
            </a>

            <a href="https://www.facebook.com/newtalentinfotech" target="_blank" rel="noopener noreferrer" className="rounded-circle" style={{ backgroundColor: "#1877F2", width: '40px', height: '40px', display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
                <FaFacebookF color="white" size="20" />
            </a>

            <a href="https://www.linkedin.com/company/new-talent-infotech/" target="_blank" rel="noopener noreferrer" className="linkedin d-flex align-items-center justify-content-center rounded-circle" style={{ width: '40px', height: '40px' }}>
                <FaLinkedinIn className="text-white fs-4" />
            </a>

            <a href="https://www.instagram.com/newtalentinfotech/" target="_blank" rel="noopener noreferrer" className="insta d-flex align-items-center justify-content-center rounded-circle" style={{ width: '40px', height: '40px' }}>
                <FaInstagram className="text-white fs-4" />
            </a>

        </div>
    );
}
