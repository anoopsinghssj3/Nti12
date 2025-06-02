import React from 'react';
import "../styles/Navbar.css";
import * as Ai from "react-icons/ai";
import { MdVerified } from "react-icons/md";


export default function Navbar() {
    return (
        <div className="w-100 bg-white sticky-top">
            <nav className="navbar navbar-expand-lg navbar-light bg-light text-secondary main-navbar ">
                <div className="container-fluid">

                   <a className="navbar-brand" href="/">
                        <img src="./src/assets/NtiLogo.png" alt="NTI Logo" style={{ height: "5.5rem" }} />
                    </a>

                    {/* Hamburger menu */}
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

                    {/* Collapsible Nav Links */}
                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul className="navbar-nav ms-auto mb-2 mb-lg-0 d-flex align-items-center">

                            <li className="nav-item ">
                                <a className="nav-link active text-secondary" aria-current="page" href="/">Home</a>
                            </li>

                            {/* Courses Dropdown */}
                            <li className="nav-item dropdown ms-1 ">
                                <a className="nav-link dropdown-toggle text-secondary" href="#" role="button" data-bs-toggle="dropdown">
                                    Courses
                                </a>
                                <ul className="dropdown-menu">
                                    {[
                                        "Diploma in Cloud Computing & Cyber Security",
                                        "School of AI",
                                        ".NET",
                                        "Python",
                                        "Java",
                                        "Software Testing",
                                        "Web Designing - Full Stack Development",
                                        "Programming Languages",
                                        "Cloud Computing",
                                        "Salesforce",
                                        "CAD Training",
                                        "Mobile Application Development",
                                        "Network & Security",
                                        "Digital Marketing",
                                        "MIS - Advanced Excel - BI Tools",
                                        "ERP",
                                        "Industrial Training",
                                        "Others"
                                    ].map((course, index) => (
                                        <li key={index}><a className="dropdown-item" href="#">{course} &#11166;</a></li>
                                    ))}
                                </ul>
                            </li>

                            <li className="nav-item ">
                                <a className="nav-link text-secondary" href="/placement">Placement</a>
                            </li>

                            <li className="nav-item ">
                                <a className="nav-link text-secondary" href="/corpo_tra">Corporate Training</a>
                            </li>

                            <li className="nav-item ">
                                <a className="nav-link text-secondary" href="/on_tra">Online Registration</a>
                            </li>

                            <li className="nav-item">
                                <a className="nav-link text-secondary" href="/certificate">Certificate</a>
                            </li>

                            {/* AI Powered and Career Guidance */}
                            <li className="nav-item d-flex flex-column align-items-center text-center mt-1" style={{ lineHeight: "1.2" }}>
                                {/* <a className="nav-link text-light bg-warning rounded-pill px-2 py-1 mb-1" style={{ fontSize: "0.75rem" }} href="/">
                                    <Ai.AiFillThunderbolt /> AI Powered
                                </a> */}
                                <a className="nav-link text-secondary" href="/about">
                                    <MdVerified color="green" fontSize="1.35rem" style={{ verticalAlign: "middle" }} />
                                    Career Guidance
                                </a>
                                {/* <a className="nav-link bg-dark text-light rounded-3 px-2 py-1 mt-1" style={{ fontSize: "0.65rem", lineHeight: "1" }} href="#">
                                    Free Career Guidance. <br />
                                    Chat with our AI Expert
                                </a> */}
                            </li>

                            {/* Others Dropdown */}
                            <li className="nav-item dropdown ms-1">
                                <a className="nav-link dropdown-toggle text-secondary" href="#" role="button" data-bs-toggle="dropdown">
                                    Others
                                </a>
                                <ul className="dropdown-menu">
                                    <li><a className="dropdown-item" href="#">Contact Us</a></li>
                                    <li><a className="dropdown-item" href="#">About Us</a></li>
                                    <li><a className="dropdown-item" href="#">Placement</a></li>
                                    <li><a className="dropdown-item" href="#">Blog</a></li>
                                    <li><a className="dropdown-item" href="#">Tutorials</a></li>
                                </ul>
                            </li>

                        </ul>
                    </div>
                </div>
            </nav></div>
    );
}

