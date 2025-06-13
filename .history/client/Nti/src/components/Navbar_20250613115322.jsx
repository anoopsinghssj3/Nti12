import React, { useEffect, useRef } from 'react';
import { useNavigate, Link } from "react-router-dom";
import "../styles/Navbar.css";
import { IoMdHome } from "react-icons/io";
import { FaBookReader, FaFileSignature } from "react-icons/fa";
import { GiSuitcase } from "react-icons/gi";
import { IoSchoolSharp } from "react-icons/io5";
import { PiCertificateFill, PiCaretCircleDownFill } from "react-icons/pi";
import NtiLogo from "../../public/images/NtiLogo.png";

export default function Navbar() {
  const collapseRef = useRef();
  const navigate = useNavigate();

  // ✅ Collapse navbar on any link click (only for mobile)
  const handleLinkClick = () => {
    if (window.innerWidth <= 992 && collapseRef.current) {
      const collapse = new Collapse(collapseRef.current, { toggle: false });
      collapse.hide();
    }
  };

  const handleCourseClick = (program) => {
    navigate("/course_template", { state: { course: program } });
    handleLinkClick(); // ✅ collapse after navigating
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
            <span className="navbar-toggler-icon bg-danger"></span>
          </button>

          <div
            className="collapse navbar-collapse"
            id="navbarSupportedContent"
            ref={collapseRef} // ✅ ref here
          >
            <ul className="navbar-nav gap-2 mb-2 mb-lg-0 d-flex align-items-start">

              <Link className="nav-link nav-item active home-style text-secondary system" to="/" onClick={handleLinkClick}>
                <IoMdHome fontSize="1.5rem" className='mb-1' />
                <span>Home</span>
              </Link>

              <div className="nav-item dropdown system ms-1">
                <span className="nav-link dropdown-toggle text-secondary" data-bs-toggle="dropdown" role="button">
                  <FaBookReader fontSize="1.25rem" className='mb-1' /> Courses
                </span>
                <ul className="dropdown-menu">
                  {/* Example Category */}
                  <li className="dropend position-relative">
                    <span className="px-2 dropdown-item dropdown-toggle submenu-toggle" role="button">programming courses</span>
                    <ul className="dropdown-menu submenu">
                      {["mern stack", "java core"].map((prog, i) => (
                        <li key={i}>
                          <span className="dropdown-item" role="button" onClick={() => handleCourseClick(prog)}>
                            {prog}
                          </span>
                        </li>
                      ))}
                    </ul>
                  </li>
                  {/* Add rest like you did before */}
                </ul>
              </div>

              <Link className="nav-link text-secondary system me-1" to="/placement" onClick={handleLinkClick}>
                <GiSuitcase fontSize="1.5rem" className='mb-1' /> <span>Placement</span>
              </Link>

              <Link className="nav-link text-secondary system" to="/corpo_tra" onClick={handleLinkClick}>
                <IoSchoolSharp fontSize="1.25rem" className='mb-1' /> <span>Corporate Training</span>
              </Link>

              <Link className="nav-link text-secondary system ms-1" to="/on_tra" onClick={handleLinkClick}>
                <FaFileSignature fontSize="1.25rem" className='mb-1' /><span>Online Registration</span>
              </Link>

              <Link className="nav-link text-secondary system" to="/certificate" onClick={handleLinkClick}>
                <PiCertificateFill fontSize="1.5rem" className='mb-1' /> <span>Certificate</span>
              </Link>

              <Link className="nav-link text-secondary system" to="/about" onClick={handleLinkClick}>
                <PiCaretCircleDownFill fontSize="1.5rem" className='mb-1' /> <span>About</span>
              </Link>
            </ul>
          </div>
        </div>
      </nav>
    </div>
  );
}
