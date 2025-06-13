import React from 'react';
import {
  FaFacebookF,
  FaInstagram,
  FaYoutube,
  FaLinkedinIn,
} from 'react-icons/fa';
import "../home_styles/Footer.css"
import { IoIosCall } from "react-icons/io";
import { MdEmail } from "react-icons/md";
import { useNavigate, Link } from "react-router-dom";
import { FaLocationDot } from "react-icons/fa6";


function Footer() {
  const navigate = useNavigate()
  return (
    <footer className="bg-dark text-light pt-5 pb-3 mt-2" >
      <div className="container">
        <div className="row text-center text-md-start">
          <div className="col-12 col-md-3 mb-4">
            <h5>Policies</h5>
            <ul className="d-flex flex-column  list-unstyled" >
              <li>
                <Link to="/privacy_policy" className="text-white text-decoration-none">Privacy Policy</Link>
              </li>
              <li>
                <Link to="/refund_policy" className="text-white text-decoration-none">Refund Policy</Link>
              </li>
              <li>
                <Link to="/terms_conditions" className="text-white text-decoration-none">Terms and Conditions</Link>
              </li>
              <li>
                <Link to="#" className="text-white text-decoration-none">Blog</Link>
              </li>
              <li>
                <Link to="/about" className="text-white text-decoration-none">About Us</Link>
              </li>
            </ul>

            <div className="follow-us mt-3">
              <h5>Follow Us!</h5>
              <div className="d-flex gap-3 justify-content-center justify-content-md-start">
                <a href="#" className="text-white fs-5"><FaFacebookF /></a>
                <a href="#" className="text-white fs-5"><FaInstagram /></a>
                <a href="#" className="text-white fs-5"><FaYoutube /></a>
                <a href="#" className="text-white fs-5"><FaLinkedinIn /></a>
              </div>
            </div>
          </div>

          {/*Address*/}
          <div className="col-12 col-md-3 mb-4 ">
            <h5>Contact Us:</h5>
            <div className="mb-3 ">
              <span>
                <a href="tel:07662462289" style={{ textDecoration: 'none', color: 'inherit' }}>
                  <IoIosCall /> 07662-462289
                </a>
                ,&nbsp;
                <a href="tel:9174253016" style={{ textDecoration: 'none', color: 'inherit' }}>
                  9174253016
                </a>
              </span>
              <br />
              <span>
                <a href="mailto:info@ntitechacademy.com" style={{ textDecoration: 'none', color: 'inherit' }}>
                  <MdEmail /> info@ntitechacademy.com
                </a>
              </span>
            </div>

          </div>

          <div className="col-12 col-md-3 mb-4">
            <h5>Addresses:</h5>
            <div className='mb-3'><FaLocationDot /> Rewa Address: LIG-2/21/422, 1st Floor, Nehru Nagar, Rewa, Madhya Pradesh, India
            </div>

            <div className='mb-3'><FaLocationDot /> Noida Address: 23, Ground Floor, Sector-2, Noida, Uttar Pradesh 201301</div>

            <div className='mb-3'><FaLocationDot /> Pune Address: Riddhi Siddhi Heights, Chatrapati chowk Road, Wakad, Pune - 411057</div>

          </div>

          <div className="col-12 col-md-3 mb-4">
            <h5>Location & Map:</h5>
            <div>
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3669.312271620891!2d81.3177389!3d24.5480819!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39845a3d5346e9e5%3A0x3fddee36199d7bb0!2sNTI%20Tech%20Academy%20Rewa%2C%20BEST%20Digital%20Marketing%20Course%20IN%20REWA%2C%20Data%20Science%2C%20Web%20Design%2C%20Communication%20Skills%2C%20AWS!5e0!3m2!1sen!2sin!4v1717487108612!5m2!1sen!2sin"
                style={{ border: 0, height: "240px", width: "100%" }}
                allowFullScreen=""
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="NTI Tech Academy Rewa Location"
              ></iframe>
            </div>
          </div>

        </div>
      </div>

      {/* Bottom Footer */}
      <div className="bg-black text-center text-white-50 py-2">
        &copy; 2025 NTI Academy, All Rights Reserved
      </div>
    </footer >
  );
}

export default Footer;
