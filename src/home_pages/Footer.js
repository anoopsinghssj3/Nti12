import React from 'react';
import './Footer.css';

function Footer() {
  return (
    <footer className="footer">
      <div className="footer-top">
        <div className="footer-section">
          <h4>Our Popular Courses</h4>
          <ul>
            <li>Java FullStack</li>
            <li>Python Full Stack</li>
            <li>.Net Full Stack</li>
            <li>Mern Stack</li>
            <li>Mean Stack</li>
            <li>PHP Full Stack</li>
            <li>UI/UX Course</li>
            <li>Data Analytics</li>
            <li>Cyber Security</li>
            <li>Ethical Hacking</li>
            <li>AWS Training</li>
            <li>Cloud Computing</li>
          </ul>
        </div>

        <div className="footer-section">
          <h4>Other Top Courses</h4>
          <ul>
            <li>SAP Hana Fico</li>
            <li>Salesforce</li>
            <li>CCNA</li>
            <li>AutoCAD</li>
            <li>Graphic Designing</li>
            <li>Multimedia & Animation</li>
            <li>Manual + Selenium Testing</li>
            <li>Full Stack QA</li>
            <li>React Native</li>
            <li>Angular</li>
            <li>Devops</li>
          </ul>
        </div>

        <div className="footer-section">
          <h4>Policies</h4>
          <ul>
            <li>Privacy Policy</li>
            <li>Refund Policy</li>
            <li>Terms and Conditions</li>
            <li>Blog</li>
            <li>TUTORIALS</li>
          </ul>

          <h4>Follow Us!</h4>
          <div className="social-icons">
            <a href="#"><i className="fab fa-facebook"></i></a>
            <a href="#"><i className="fab fa-instagram"></i></a>
            <a href="#"><i className="fab fa-youtube"></i></a>
            <a href="#"><i className="fab fa-linkedin"></i></a>
          </div>
        </div>
      </div>

      <div className="footer-training">
        <div className="training-tab">
          <button>Training in Noida</button>
          <button>Training in Gurugram</button>
          <button>Training in Delhi</button>
          <button>Training in Ghaziabad</button>
        </div>

        <div className="training-courses">
          <ul>
            <li>Digital Marketing Training Course in Noida</li>
            <li>Python Training Course in Noida</li>
            <li>Java Training Course in Noida</li>
            <li>PHP Training Course in Noida</li>
            <li>AutoCAD Training Course in Noida</li>
            <li>DevOps Training Course in Noida</li>
            <li>AWS Training Course in Noida</li>
            <li>Web Designing Training Course in Noida</li>
          </ul>
        </div>
      </div>

      <div className="footer-bottom">
        <form className="footer-form">
          <input type="text" placeholder="Full Name" />
          <input type="email" placeholder="Email Address" />
          <input type="text" placeholder="Phone Number" />
          <select>
            <option>Select a Course</option>
            <option>Java</option>
            <option>Python</option>
          </select>
          <select>
            <option>Select a Branch</option>
            <option>Noida</option>
            <option>Gurugram</option>
          </select>
          <button type="submit">Submit</button>
        </form>
        <p>&copy; 2025 S O Infotech Pvt Ltd, All Rights Reserved</p>
      </div>
    </footer>
  );
}

export default Footer;
