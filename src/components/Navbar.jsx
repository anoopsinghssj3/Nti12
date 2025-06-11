import React, { useEffect } from 'react';
import { useNavigate, Link, NavLink } from "react-router-dom";
import "../styles/Navbar.css";
import { IoMdHome } from "react-icons/io";
import { FaBookReader, FaFileSignature } from "react-icons/fa";
import { GiSuitcase } from "react-icons/gi";
import { IoSchoolSharp } from "react-icons/io5";
import { PiCertificateFill, PiCaretCircleDownFill } from "react-icons/pi";

export default function Navbar() {

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

    const navigate = useNavigate();

    const handleCourseClick = (program) => {
        navigate("/course_template", { state: { course: program } });
    };

    return (
        <div className="w-100 bg-white sticky-top">
            <nav className="navbar navbar-expand-lg navbar-light bg-light text-secondary main-navbar">
                <div className="container-fluid">
                    <a className="navbar-brand" href="/">
                        <img src="./src/assets/NtiLogo.png" alt="NTI Logo" style={{ height: "5.5rem" }} />
                    </a>

                    <button
                        className="navbar-toggler dashboard"
                        // type="button"
                        data-bs-toggle="collapse"
                        data-bs-target="#navbarSupportedContent"
                        aria-controls="navbarSupportedContent"
                        aria-expanded="false"
                        aria-label="Toggle navigation"
                    >
                        <span className="navbar-toggler-icon"></span>
                    </button>

                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul className="navbar-nav ms-auto gap-2 mb-2 mb-lg-0 mb-sm-5 d-flex align-items-start ps-1">


                            <Link className="nav-link nav-item active home-style text-secondary system" to="/">
                                <IoMdHome fontSize="1.5rem" className='mb-1' /> Home
                            </Link>

                            <Link className="nav-item dropdown ms-1 system">
                                <NavLink className="nav-link dropdown-toggle text-secondary  system" to="#" data-bs-toggle="dropdown">
                                    <FaBookReader fontSize="1.25rem" className='mb-1' /> Courses
                                </NavLink>
                                <ul className="dropdown-menu">

                                    {/* Programming */}
                                    <li className="dropend position-relative text-decoration-none">
                                        <NavLink className="px-2 dropdown-item dropdown-toggle submenu-toggle text-decoration-none" to="#">
                                            programming courses
                                        </NavLink>
                                        <ul className="dropdown-menu submenu text-decoration-none">
                                            {[
                                                "mern stack",
                                                "mean stack",
                                                "java core",
                                                "java advance",
                                                "java full stack",
                                                "python",
                                                "c Programming",
                                                "c++ Programming",
                                                "android app developement",
                                                "ios app developement"
                                            ].map((prog, i) => (
                                                <li key={i}>
                                                    <NavLink
                                                        className="dropdown-item text-decoration-none"
                                                        to="#"
                                                        onClick={() => handleCourseClick(prog)}
                                                    >
                                                        {prog.toLowerCase()}
                                                    </NavLink>
                                                </li>
                                            ))}
                                        </ul>
                                    </li>

                                    {/* Data Science */}
                                    <li className="dropend position-relative">
                                        <NavLink className="px-2 dropdown-item-2 dropdown-item dropdown-toggle submenu-toggle" to="#">
                                            data science & analytics
                                        </NavLink>
                                        <ul className="dropdown-menu submenu">
                                            {["data science", "business analytics"].map((prog, i) => (
                                                <li key={i}>
                                                    <NavLink
                                                        className="dropdown-item-2 dropdown-item"
                                                        to="#"
                                                        onClick={() => handleCourseClick(prog)}
                                                    >
                                                        {prog.toLowerCase()}
                                                    </NavLink>
                                                </li>
                                            ))}
                                        </ul>
                                    </li>

                                    {/* Cyber Security */}
                                    <li className="dropend position-relative">
                                        <NavLink className="px-2 dropdown-item-3 dropdown-item dropdown-toggle submenu-toggle" to="#">
                                            cyber security
                                        </NavLink>
                                        <ul className="dropdown-menu submenu">
                                            {["cyber security"].map((prog, i) => (
                                                <li key={i}>
                                                    <NavLink
                                                        className="dropdown-item-3 dropdown-item"
                                                        to="#"
                                                        onClick={() => handleCourseClick(prog)}
                                                    >
                                                        {prog.toLowerCase()}
                                                    </NavLink>
                                                </li>
                                            ))}
                                        </ul>
                                    </li>

                                    {/* Digital Marketing */}
                                    <li className="dropend position-relative">
                                        <NavLink className="px-2 dropdown-item-5 dropdown-item dropdown-toggle submenu-toggle" to="#">
                                            digital marketing
                                        </NavLink>
                                        <ul className="dropdown-menu submenu">
                                            {["advance digital marketing"].map((prog, i) => (
                                                <li key={i}>
                                                    <NavLink
                                                        className="dropdown-item-5 dropdown-item"
                                                        to="#"
                                                        onClick={() => handleCourseClick(prog)}
                                                    >
                                                        {prog.toLowerCase()}
                                                    </NavLink>
                                                </li>
                                            ))}
                                        </ul>
                                    </li>

                                    {/* Cloud & DevOps */}
                                    <li className="dropend position-relative">
                                        <NavLink className="px-2 dropdown-item-6 dropdown-item dropdown-toggle submenu-toggle" to="#">
                                            cloud & devops
                                        </NavLink>
                                        <ul className="dropdown-menu submenu">
                                            {["aws with dev ops", "saleforce"].map((prog, i) => (
                                                <li key={i}>
                                                    <NavLink
                                                        className="dropdown-item-6 dropdown-item"
                                                        to="#"
                                                        onClick={() => handleCourseClick(prog)}
                                                    >
                                                        {prog.toLowerCase()}
                                                    </NavLink>
                                                </li>
                                            ))}
                                        </ul>
                                    </li>

                                    {/* Software Testing */}
                                    <li className="dropend position-relative">
                                        <NavLink className="px-2 dropdown-item-7 dropdown-item dropdown-toggle submenu-toggle" to="#">
                                            software testing
                                        </NavLink>
                                        <ul className="dropdown-menu submenu">
                                            {["software testing (manual)", "automation"].map((prog, i) => (
                                                <li key={i}>
                                                    <NavLink
                                                        className="dropdown-item-7 dropdown-item"
                                                        to="#"
                                                        onClick={() => handleCourseClick(prog)}
                                                    >
                                                        {prog.toLowerCase()}
                                                    </NavLink>
                                                </li>
                                            ))}
                                        </ul>
                                    </li>

                                    {/* Other Courses */}
                                    <li className="dropend position-relative">
                                        <NavLink className="px-2 dropdown-item-9 dropdown-item dropdown-toggle submenu-toggle" to="#">
                                            other professional courses
                                        </NavLink>
                                        <ul className="dropdown-menu submenu">
                                            {["communication skills & personality developement"].map((prog, i) => (
                                                <li key={i}>
                                                    <NavLink
                                                        className="dropdown-item-2 dropdown-item"
                                                        to="#"
                                                        onClick={() => handleCourseClick(prog)}
                                                    >
                                                        {prog.toLowerCase()}
                                                    </NavLink>
                                                </li>
                                            ))}
                                        </ul>
                                    </li>

                                </ul>
                            </Link>

                            {/* Other nav items */}
                            {/* <li className="nav-item"> */}
                            <Link className="nav-link text-secondary system" to="/placement" >
                                <GiSuitcase fontSize="1.5rem" className='mb-1' /> Placement
                            </Link>
                            {/* </li> */}

                            {/* <li className="nav-item"> */}
                            <Link className="nav-link text-secondary system" to="/corpo_tra">
                                <IoSchoolSharp fontSize="1.25rem" className='mb-1' /> Corporate Training
                            </Link>
                            {/* </li> */}

                            {/* <li className="nav-item"> */}
                            <Link className="nav-link text-secondary system" to="/on_tra">
                                <FaFileSignature fontSize="1.25rem" className='mb-1' /> Online Registration
                            </Link>
                            {/* </li> */}

                            {/* <li className="nav-item"> */}
                            <Link className="nav-link text-secondary system" to="/certificate">
                                <PiCertificateFill fontSize="1.5rem" className='mb-1' /> Certificate
                            </Link>
                            {/* </li> */}

                            {/* <li className="nav-item dropdown ms-1"> */}
                            <Link className="nav-link dropdown nav-item text-secondary system" to="/about">
                                <PiCaretCircleDownFill fontSize="1.5rem" className='mb-1' /> About
                            </Link>
                            {/* </li> */}

                        </ul>
                    </div>
                </div>
            </nav>
        </div>
    );
}
