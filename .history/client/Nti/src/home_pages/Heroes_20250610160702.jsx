import React, { useState, useEffect } from 'react'
import * as  Io from "react-icons/io";
import "../home_styles/Heroes.css"
import { IoIosSearch } from "react-icons/io";
import { FaRupeeSign } from "react-icons/fa"
import { FiBookOpen, FiAward, FiBriefcase, FiSettings } from 'react-icons/fi';


export default function Heroes() {
    const [searchTerm, setSearchTerm] = useState("");

    const handleSearchSubmit = (e) => {
        e.preventDefault();
        if (searchTerm.trim()) {
            // Navigate to search results page with query param
            window.location.href = `/search?q=${encodeURIComponent(searchTerm.trim())}`;
        }
    }
    useEffect(() => {
        const hour = new Date().getHours();
        const back = document.getElementById('ntiFlipBack');

        if (back) {
            if (hour >= 19 || hour <= 6) {
                back.classList.add('dark-theme');
            } else {
                back.classList.remove('dark-theme');
            }
        }
    }, []);

    const heroCards = [
        {
            id: 1,
            image: "https://c0.wallpaperflare.com/preview/605/964/873/hot-girl-face-eyes-indian-model-girl.jpg",
            course: "Full Stack Developer",
            package: "₹ 17 LPA"
        },
        {
            id: 2,
            image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSFQOMcIu0MJWajEqiP8GXzeteCppntYEUbgvSxDSbdA1dtwXvkNR4f3B3yJGcIigqUXLM&usqp=CAU",
            course: "Full Stack Developer",
            package: "₹ 12 LPA"
        },
        {
            id: 3,
            image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRwhOIegK1LvyLPuPbO029q9Cic28gTFmwzag&s",
            course: "Frontend Engineer",
            package: "₹ 9 LPA"
        },
    ];

    const cards = [
        {
            title: 'Master Core Concepts',
            description: 'Understand React fundamentals and modern JavaScript.',
            icon: <FiBookOpen size={40} className="mb-3 text-primary" />,
        },
        {
            title: 'Earn Industry Certifications',
            description: 'Get recognized certificates to boost your resume.',
            icon: <FiAward size={40} className="mb-3 text-success" />,
        },
        {
            title: 'Prepare for Career Growth',
            description: 'Build projects and skills that employers want.',
            icon: <FiBriefcase size={40} className="mb-3 text-warning" />,
        },
        {
            title: 'Develop Advanced Skills',
            description: 'Explore advanced topics like hooks, context & state management.',
            icon: <FiSettings size={40} className="mb-3 text-danger" />,
        },
    ];

    return (
        <>
            <div id="carouselExample" className="carousel slide">
                <div className="carousel-inner">
                    {heroCards.map((card, index) => (
                        <div key={card.id} className={`carousel-item ${index === 0 ? "active" : ""}`}>
                            <div className="container px-5">
                                <div className="row align-items-center">

                                    {/* Left Text */}
                                    <div className="col-12 col-md-6 mb-4 mb-md-0">
                                        <h2 className="fs-1 fw-semibold text-center text-md-start">
                                            {index === 0
                                                ? "We empower students with real-world skills, expert guidance, and opportunities to build a successful future."
                                                : index === 1
                                                    ? "Live project training gives you practical exposure, teamwork skills, and job-ready confidence."
                                                    : "Master skills, ace interviews, land internships, and secure your dream job with us."}
                                        </h2>
                                    </div>

                                    {/* Right Card */}
                                    <div className="col-12 col-md-6">
                                        <div className="nti-flip-card-container mx-auto">
                                            <div className="nti-flip-card">

                                                {/* FRONT */}
                                                <div className="nti-flip-front">
                                                    <div className="energy-glow"></div>
                                                    <img
                                                        src={card.image}
                                                        alt="Placement Avatar"
                                                        className="img-fluid rounded-4 nti-hero-img mt-1"
                                                    />
                                                    <h5 className="mt-3 text-primary fw-bold glow-title text-center">
                                                        🔥 Placed as {card.course}
                                                    </h5>
                                                </div>

                                                {/* BACK */}
                                                <div className="nti-flip-back" id={`ntiFlipBack-${card.id}`}>
                                                    <div className="pulse-overlay"></div>
                                                    <span className="badge fs-3 fw-bold px-3 py-2 mb-2 fullstack-badge">
                                                        {card.course}
                                                    </span>
                                                    <span className="badge fs-3 fw-bold px-3 py-2 salary-badge">
                                                        {card.package}
                                                    </span>
                                                </div>

                                            </div>
                                        </div>
                                    </div>

                                </div>
                            </div>
                        </div>
                    ))}
                </div>


                <button className="carousel-control-prev" type="button" data-bs-target="#carouselExample" data-bs-slide="prev">
                    <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                    <span className="visually-hidden">Previous</span>
                </button>
                <button className="carousel-control-next" type="button" data-bs-target="#carouselExample" data-bs-slide="next">
                    <span className="carousel-control-next-icon" aria-hidden="true"></span>
                    <span className="visually-hidden">Next</span>
                </button>
                <form className="d-flex align-items-center justify-content-center gap-2 mt-5 px-3" onSubmit={handleSearchSubmit}>
                    <input
                        type="search"
                        className="form-control w-50 p-2 rounded border border-secondary"
                        placeholder="Search your favourite course..."
                        value={searchTerm}
                        onChange={(e) => setSearchTerm(e.target.value)}
                        aria-label="Search courses"
                    />
                    <button
                        className="btn btn-danger p-2 d-flex align-items-center justify-content-center fs-4 rounded-3"
                        type="submit"
                        aria-label="Search"
                    >
                        <IoIosSearch/>
                    </button>
                </form>

                <div className="container my-5">
                    <div className="row g-4">
                        {cards.map(({ title, description, icon }, idx) => (
                            <div key={idx} className="col-12 col-md-6 col-lg-3">
                                <div className="p-4 border rounded shadow-sm text-center h-100 d-flex flex-column justify-content-center align-items-center indus-info-card text-white">
                                    {icon}
                                    <h5 className="mb-2">{title}</h5>
                                    <p className="mb-0">{description}</p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </>
    )
}
