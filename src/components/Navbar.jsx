import React, { useEffect } from 'react';
import { useNavigate } from "react-router-dom";
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
                        type="button"
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

                            <li className="nav-item ms-4 home-style">
                                <a className="nav-link active text-secondary" href="/">
                                    <IoMdHome fontSize="1.5rem" className='mb-1' /> Home
                                </a>
                            </li>

                            <li className="nav-item dropdown ms-1">
                                <a className="nav-link dropdown-toggle text-secondary" href="#" role="button" data-bs-toggle="dropdown">
                                    <FaBookReader fontSize="1.25rem" className='mb-1' /> Courses
                                </a>
                                <ul className="dropdown-menu bg-succees">

                                    {/* Programming */}
                                    <li className="dropend position-relative ">
                                        <a className="px-2 dropdown-item dropdown-toggle submenu-toggle " href="#">
                                            programming courses
                                        </a>
                                        <ul className="dropdown-menu submenu">
                                            {[
                                                "MERN STACK + GEN AI",
                                                "JAVA EXPERT",
                                                "JAVA FULL STACK DEVELOPER + GEN AI",
                                                ".NET",
                                                "PYTHON TRAINING COURSE",
                                                "C Programming",
                                                "Java Android Flutter",
                                                "Java Full Stack Developer"
                                            ].map((prog, i) => (
                                                <li key={i}>
                                                    <a className="dropdown-item" onClick={() => handleCourseClick(prog)}>
                                                        {prog.toLowerCase()}
                                                    </a>
                                                </li>
                                            ))}
                                        </ul>
                                    </li>

                                    {/* Data Science */}
                                    <li className="dropend position-relative">
                                        <a className="px-2 dropdown-item-2 dropdown-item dropdown-toggle submenu-toggle" href="#">
                                            data science & analytics
                                        </a>
                                        <ul className="dropdown-menu submenu">
                                            {[
                                                "DATA SCIENCE PROFESSIONAL TRAINING",
                                                "DATA ANALYTICS USING PYTHON",
                                                "BUSINESS ANALYTICS",
                                                "POWER BI"
                                            ].map((prog, i) => (
                                                <li key={i}>
                                                    <a className="dropdown-item-2 dropdown-item" onClick={() => handleCourseClick(prog)}>
                                                        {prog.toLowerCase()}
                                                    </a>
                                                </li>
                                            ))}
                                        </ul>
                                    </li>

                                    {/* Cyber Security */}
                                    <li className="dropend position-relative">
                                        <a className="px-2 dropdown-item-3 dropdown-item dropdown-toggle submenu-toggle" href="#">
                                            cyber security
                                        </a>
                                        <ul className="dropdown-menu submenu">
                                            {["CYBER SECURITY + GEN AI"].map((prog, i) => (
                                                <li key={i}>
                                                    <a className="dropdown-item-3 dropdown-item" onClick={() => handleCourseClick(prog)}>
                                                        {prog.toLowerCase()}
                                                    </a>
                                                </li>
                                            ))}
                                        </ul>
                                    </li>

                                    {/* UI/UX */}
                                    <li className="dropend position-relative">
                                        <a className="px-2 dropdown-item-4 dropdown-item dropdown-toggle submenu-toggle" href="#">
                                            UI/UX & design
                                        </a>
                                        <ul className="dropdown-menu submenu">
                                            {["UI & UX", "Graphics Design"].map((prog, i) => (
                                                <li key={i}>
                                                    <a className="dropdown-item-4 dropdown-item" onClick={() => handleCourseClick(prog)}>
                                                        {prog.toLowerCase()}
                                                    </a>
                                                </li>
                                            ))}
                                        </ul>
                                    </li>

                                    {/* Digital Marketing */}
                                    <li className="dropend position-relative">
                                        <a className="px-2 dropdown-item-5 dropdown-item dropdown-toggle submenu-toggle" href="#">
                                            digital marketing
                                        </a>
                                        <ul className="dropdown-menu submenu">
                                            {["ADVANCE DIGITAL MARKETING", "GENERATIVE AI"].map((prog, i) => (
                                                <li key={i}>
                                                    <a className="dropdown-item-5 dropdown-item" onClick={() => handleCourseClick(prog)}>
                                                        {prog.toLowerCase()}
                                                    </a>
                                                </li>
                                            ))}
                                        </ul>
                                    </li>

                                    {/* Cloud & DevOps */}
                                    <li className="dropend position-relative">
                                        <a className="px-2 dropdown-item-6 dropdown-item dropdown-toggle submenu-toggle" href="#">
                                            cloud & devops
                                        </a>
                                        <ul className="dropdown-menu submenu">
                                            {[
                                                "AWS",
                                                "Cloud Computing"
                                            ].map((prog, i) => (
                                                <li key={i}>
                                                    <a className="dropdown-item-6 dropdown-item" onClick={() => handleCourseClick(prog)}>
                                                        {prog.toLowerCase()}
                                                    </a>
                                                </li>
                                            ))}
                                        </ul>
                                    </li>

                                    {/* Software Testing */}
                                    <li className="dropend position-relative">
                                        <a className="px-2 dropdown-item-7 dropdown-item dropdown-toggle submenu-toggle" href="#">
                                            software testing
                                        </a>
                                        <ul className="dropdown-menu submenu">
                                            {["SOFTWARE TESTING COURSE"].map((prog, i) => (
                                                <li key={i}>
                                                    <a className="dropdown-item-7 dropdown-item" onClick={() => handleCourseClick(prog)}>
                                                        {prog.toLowerCase()}
                                                    </a>
                                                </li>
                                            ))}
                                        </ul>
                                    </li>

                                    {/* CRM */}
                                    <li className="dropend position-relative">
                                        <a className="px-2 dropdown-item-8 dropdown-item dropdown-toggle submenu-toggle" href="#">
                                            CRM / business platforms
                                        </a>
                                        <ul className="dropdown-menu submenu">
                                            {["Salesforce"].map((prog, i) => (
                                                <li key={i}>
                                                    <a className="dropdown-item-8 dropdown-item" onClick={() => handleCourseClick(prog)}>
                                                        {prog.toLowerCase()}
                                                    </a>
                                                </li>
                                            ))}
                                        </ul>
                                    </li>

                                    {/* Other Courses */}
                                    <li className="dropend position-relative">
                                        <a className="px-2 dropdown-item-9 dropdown-item dropdown-toggle submenu-toggle" href="#">
                                            other professional courses
                                        </a>
                                        <ul className="dropdown-menu submenu">
                                            {["AUTOCAD", "Communication Skills & Personality Developement"].map((prog, i) => (
                                                <li key={i}>
                                                    <a className="dropdown-item-2 dropdown-item" onClick={() => handleCourseClick(prog)}>
                                                        {prog.toLowerCase()}
                                                    </a>
                                                </li>
                                            ))}
                                        </ul>
                                    </li>

                                </ul>
                            </li>

                            {/* Other nav items */}
                            <li className="nav-item">
                                <a className="nav-link text-secondary" href="/placement" type="button" onClick={() => navigate("/placement")}>
                                    <GiSuitcase fontSize="1.5rem" className='mb-1' /> Placement
                                </a>
                            </li>

                            <li className="nav-item">
                                <a className="nav-link text-secondary" href="/corpo_tra">
                                    <IoSchoolSharp fontSize="1.25rem" className='mb-1' type="button" onClick={() => navigate("/corpo_tra")}/> Corporate Training
                                </a>
                            </li>

                            <li className="nav-item">
                                <a className="nav-link text-secondary" href="/on_tra">
                                    <FaFileSignature fontSize="1.25rem" className='mb-1' type="button" onClick={() => navigate("/on_tra")}/> Online Registration
                                </a>
                            </li>

                            <li className="nav-item">
                                <a className="nav-link text-secondary" href="/certificate">
                                    <PiCertificateFill fontSize="1.5rem" className='mb-1' type="button" onClick={() => navigate("/certificate")}/> Certificate
                                </a>
                            </li>

                            <li className="nav-item dropdown ms-1">
                                <a className="nav-link text-secondary" href="/about">
                                    <PiCaretCircleDownFill fontSize="1.5rem" className='mb-1' type="button" onClick={() => navigate("/about")}/> About
                                </a>
                            </li>

                        </ul>
                    </div>
                </div>
            </nav>
        </div>
    );
}
