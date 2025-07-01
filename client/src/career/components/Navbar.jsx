import React, { useEffect, useRef } from 'react';
import { useNavigate, Link } from "react-router-dom";
// import "../styles/Navbar.css";
import { IoMdHome } from "react-icons/io";
import { PiBagFill } from "react-icons/pi";
import { IoSchoolSharp } from "react-icons/io5";
import { PiCertificateFill, PiCaretCircleDownFill } from "react-icons/pi";
import { IoIosCall } from "react-icons/io";
import NtiLogo from "/public/images/NtiLogo.png";
import { IoArrowRedoSharp } from "react-icons/io5";

export default function Navbar() {
  const collapseRef = useRef();
  const navigate = useNavigate();

  const handleLinkClick = () => {
    if (window.innerWidth <= 992 && collapseRef.current) {
      const collapse = new Collapse(collapseRef.current, { toggle: false });
      collapse.hide();
    }
  };

  const handleCourseClick = (program) => {
    navigate("/course_template", { state: { course: program } });
    handleLinkClick();
  };

  useEffect(() => {
    const submenuToggles = document.querySelectorAll(".submenu-toggle");

    const handleSubmenuClick = (e) => {
      e.preventDefault();
      const submenu = e.currentTarget.nextElementSibling;
      submenu.classList.toggle("show");
      document.querySelectorAll(".submenu-toggle + .dropdown-menu").forEach(menu => {
        if (menu !== submenu) menu.classList.remove("show");
      });
    };

    submenuToggles.forEach(toggle => {
      toggle.addEventListener("click", handleSubmenuClick);
    });

    return () => {
      submenuToggles.forEach(toggle => {
        toggle.removeEventListener("click", handleSubmenuClick);
      });
    };
  }, []);

  return (
    <div className="w-100 sticky-top bg-white">
      <nav className="navbar navbar-expand-lg navbar-light text-secondary main-navbar">
        <div className="container-fluid">
          <Link className="navbar-brand" to="/" onClick={handleLinkClick}>
            <img src={NtiLogo} alt="NtiLogo" loading="lazy" style={{ height: "5.5rem" }} />
          </Link>

          <button
            className="navbar-toggler dashboard"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
          >
            <span className="navbar-toggler-icon"></span>
          </button>

          <div
            className="collapse navbar-collapse"
            id="navbarSupportedContent"
            ref={collapseRef}
          >
            <ul className="navbar-nav gap-2 mb-2 mb-lg-0 d-flex align-items-start">

              <Link className="nav-link nav-item active home-style text-secondary system" to="/career" onClick={handleLinkClick}>
                <IoMdHome fontSize="1.5rem" className='mb-1' />
                <span>Home</span>
              </Link>


              <Link className="nav-link text-secondary system" to="/corpo_tra" onClick={handleLinkClick}>
                <PiBagFill fontSize="1.25rem" className='mb-1' /> <span>We Are Hiiring</span>
              </Link>

              <Link className="nav-link text-secondary system" to="/corpo_tra" onClick={handleLinkClick}>
                <IoIosCall fontSize="1.25rem" className='mb-1' /> <span>Contact Us</span>
              </Link>

              <Link className="nav-link text-secondary system" to="/about" onClick={handleLinkClick}>
                <PiCaretCircleDownFill fontSize="1.5rem" className='mb-1' /> <span>About</span>
              </Link>

              <Link className="nav-link text-secondary system bg-primary text-white py-1 px-2" to="/" onClick={handleLinkClick}>
                <IoArrowRedoSharp fontSize="1.5rem" className='mb-1' />
                <span>Enroll in Batch</span>
              </Link>

            </ul>
          </div>
        </div>
      </nav>
    </div>
  );
}
