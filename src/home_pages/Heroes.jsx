import React from 'react'
import * as  Io from "react-icons/io";
import "../styles/Heroes.css"


export default function Heroes() {
    return (
        <>
            <div id="carouselExample" className="carousel slide">
                <div className="carousel-inner">
                    {/* slide-1 */}
                    <div className="carousel-item active">
                        <div className="d-flex justify-content-center align-items-start ">
                            <div className="fs-1 mt-4 fw-semibold" style={{ width: "30rem" }}>
                                We empower students with real-world skills, expert guidance, and opportunities to build a successful future.</div>
                            <div>
                                <img style={{ width: "30rem" }} src="https://www.ducatindia.com/_next/image?url=%2Fstatic%2Fbanner%2Fpic9.png&w=828&q=75" alt="..." />
                            </div>
                        </div>
                    </div>

                    {/* slide-2 */}
                    <div className="carousel-item ">
                        <div className="d-flex justify-content-center align-items-start ">
                            <div className="fs-1 mt-4 fw-semibold" style={{ width: "30rem" }}>
                                Live project training gives you practical exposure, teamwork skills, and job-ready confidence.    </div>
                            <div>
                                <img style={{ width: "30rem" }} src="https://www.ducatindia.com/_next/image?url=%2Fstatic%2Fbanner%2Fpic6.png&w=828&q=75" alt="..." />
                            </div>
                        </div>
                    </div>

                    {/* slide-3 */}
                    <div className="carousel-item ">
                        <div className="d-flex justify-content-center align-items-start ">
                            <div className="fs-1 mt-4 fw-semibold" style={{ width: "30rem" }}>
                                Master skills, ace interviews, land internships, and secure your dream job with us.</div>
                            <div>
                                <img style={{ width: "30rem" }} src="https://www.ducatindia.com/_next/image?url=%2Fstatic%2Fbanner%2Fpic7.png&w=828&q=75" alt="..." />
                            </div>
                        </div>
                    </div>

                </div>
                <button className="carousel-control-prev" type="button" data-bs-target="#carouselExample" data-bs-slide="prev">
                    <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                    <span className="visually-hidden">Previous</span>
                </button>
                <button className="carousel-control-next" type="button" data-bs-target="#carouselExample" data-bs-slide="next">
                    <span className="carousel-control-next-icon" aria-hidden="true"></span>
                    <span className="visually-hidden">Next</span>
                </button>
                <div className='d-flex'>
                    <input type="search" className="btn w-25  p-2  ms-4 border-2 border position-relative btn-search-input " placeholder="Search Your Favourite Courses Today" />
                    <button className='btn p-2 btn-danger position-relative btn-search-btn border-0 fs-2 '>
                        <Io.IoIosSearch /></button></div>
            </div>
        </>
    )
}
