import React from "react";
import EmailSignup from "./EmailSignup";

const FooterSection = () => {
  return (
    <footer className="footer-section">
      <div className="footer-content">
        {/* Company Logo and Copyright */}
        <div className="footer-company">
          <div className="footer-logo">
            {/* Logo SVGs */}
            {/* You may replace this with <img src="/logo.png" alt="Logo" /> if preferred */}
            <svg width="15" height="7" /* ... */> {/* SVG content */} </svg>
            <svg width="47" height="7" /* ... */> {/* SVG content */} </svg>
          </div>
          <div className="footer-copyright">
            <div className="copyright-text">
              © {new Date().getFullYear()} Landify UI Kit.
            </div>
            <div className="rights-text">All rights reserved</div>
          </div>
        </div>

        {/* Footer Navigation + Email Signup */}
        <div className="footer-links">
          <div className="footer-col">
            <h3 className="footer-col-title">Company</h3>
            <div className="footer-col-items">
              <a href="#" className="footer-link">About us</a>
              <a href="#" className="footer-link">Blog</a>
              <a href="#" className="footer-link">Contact us</a>
              <a href="#" className="footer-link">Pricing</a>
              <a href="#" className="footer-link">Testimonials</a>
            </div>
          </div>

          <div className="footer-col">
            <h3 className="footer-col-title">Support</h3>
            <div className="footer-col-items">
              <a href="#" className="footer-link">Help center</a>
              <a href="#" className="footer-link">Terms of service</a>
              <a href="#" className="footer-link">Legal</a>
              <a href="#" className="footer-link">Privacy policy</a>
              <a href="#" className="footer-link">Status</a>
            </div>
          </div>

          <div className="footer-col">
            <h3 className="footer-col-title">Subscribe</h3>
            <EmailSignup />
          </div>
        </div>
      </div>
    </footer>
  );
};

export default FooterSection;
