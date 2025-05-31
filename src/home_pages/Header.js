import React from 'react';
import './Header.css';
import { Link } from 'react-router-dom';

function Header() {
  return (
    <header className="navbar navbar-expand-lg navbar-light bg-light">
      <div className="container-fluid">
        <Link className="navbar-brand d-flex align-items-center" to="/">
          <img src="NTI-logo_color.png" alt="NTI Logo" style={{ height: '40px', marginRight: '10px' }} />
          <span>The IT Training School</span>
        </Link>

        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNavDropdown"
          aria-controls="navbarNavDropdown"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        <div className="collapse navbar-collapse" id="navbarNavDropdown">
          <ul className="navbar-nav ms-auto">
            <li className="nav-item">
              <Link className="nav-link" to="/">Home</Link>
            </li>

            <li className="nav-item dropdown">
              <a className="nav-link dropdown-toggle" href="#" id="coursesDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                Courses
              </a>
              <ul className="dropdown-menu" aria-labelledby="coursesDropdown">
                <li><Link className="dropdown-item" to="/courses/web-development">Web Development</Link></li>
                <li><Link className="dropdown-item" to="/courses/java">Java</Link></li>
                <li><Link className="dropdown-item" to="/courses/python">Python</Link></li>
              </ul>
            </li>

            <li className="nav-item">
              <Link className="nav-link" to="/placement">Placement</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/CorporateTraining">Corporate Training</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/OnlineRegistrationForm">Online Registration</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/certificate">Certificate</Link>
            </li>

            <li className="nav-item ai-guidance d-flex align-items-center">
              <span className="ai-badge me-2">AI-Powered</span>
              <a href="#" className="nav-link position-relative">
                Career Guidance
                <span className="tooltip position-absolute">Free career guidance. Chat with our AI expert!</span>
              </a>
            </li>

            <li className="nav-item dropdown">
              <a className="nav-link dropdown-toggle" href="#" id="othersDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                Others
              </a>
              <ul className="dropdown-menu" aria-labelledby="othersDropdown">
                <li><Link className="dropdown-item" to="/about">About Us</Link></li>
                <li><Link className="dropdown-item" to="/contact">Contact</Link></li>
              </ul>
            </li>
          </ul>
        </div>
      </div>
    </header>
  );
}

export default Header;
