import React from 'react';
import {
  FaFacebookF,
  FaInstagram,
  FaYoutube,
  FaLinkedinIn,
} from 'react-icons/fa';

function Footer() {
  return (
    <footer className="bg-dark text-light pt-5 pb-3 mt-2">
      {/* Top Footer */}
      <div className="container">
        <div className="row text-center text-md-start">
          {/* Popular Courses */}
          <div className="col-12 col-md-3 mb-4">
            <h5>Our Popular Courses</h5>
            <ul className="list-unstyled">
              {[
                'Java FullStack',
                'Python Full Stack',
                '.Net Full Stack',
                'Mern Stack',
                'Mean Stack',
                'PHP Full Stack',
                'UI/UX Course',
                'Data Analytics',
                'Cyber Security',
                'Ethical Hacking',
                'AWS Training',
                'Cloud Computing',
              ].map((item, index) => (
                <li key={index}>{item}</li>
              ))}
            </ul>
          </div>

          {/* Other Top Courses */}
          <div className="col-12 col-md-3 mb-4">
            <h5>Other Top Courses</h5>
            <ul className="list-unstyled">
              {[
                'SAP Hana Fico',
                'Salesforce',
                'CCNA',
                'AutoCAD',
                'Graphic Designing',
                'Multimedia & Animation',
                'Manual + Selenium Testing',
                'Full Stack QA',
                'React Native',
                'Angular',
                'Devops',
              ].map((item, index) => (
                <li key={index}>{item}</li>
              ))}
            </ul>
          </div>

          {/* Policies */}
          <div className="col-12 col-md-3 mb-4">
            <h5>Policies</h5>
            <ul className="list-unstyled">
              <li>Privacy Policy</li>
              <li>Refund Policy</li>
              <li>Terms and Conditions</li>
              <li>Blog</li>
              <li>Tutorials</li>
            </ul>
          </div>

          {/* Follow Us */}
          <div className="col-12 col-md-3 mb-4 justify-content-center ">
            <h5 className="" style={{ justifySelf: "center" }}>Follow Us!</h5>
            <div className="d-flex gap-3 mt-2 justify-content-center">
              <a href="#" className="text-white fs-5">
                <FaFacebookF />
              </a>
              <a href="#" className="text-white fs-5">
                <FaInstagram />
              </a>
              <a href="#" className="text-white fs-5">
                <FaYoutube />
              </a>
              <a href="#" className="text-white fs-5">
                <FaLinkedinIn />
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Training Locations */}
      {/* <div className="bg-secondary py-4">
        <div className="container text-center">
          <div className="mb-3">
            {['Noida', 'Gurugram', 'Delhi', 'Ghaziabad'].map((city, index) => (
              <button key={index} className="btn btn-outline-light btn-sm m-1">
                Training in {city}
              </button>
            ))}
          </div>
          <ul className="list-inline">
            {[
              'Digital Marketing Training Course in Noida',
              'Python Training Course in Noida',
              'Java Training Course in Noida',
              'PHP Training Course in Noida',
              'AutoCAD Training Course in Noida',
              'DevOps Training Course in Noida',
              'AWS Training Course in Noida',
              'Web Designing Training Course in Noida',
            ].map((item, index) => (
              <li key={index} className="list-inline-item d-block d-md-inline px-2">
                {item}
              </li>
            ))}
          </ul>
        </div>
      </div> */}

      {/* Footer Form */}
      {/* <div className="container py-4">
        <form className="row g-3">
          <div className="col-md-4">
            <input type="text" className="form-control" placeholder="Full Name" />
          </div>
          <div className="col-md-4">
            <input type="email" className="form-control" placeholder="Email Address" />
          </div>
          <div className="col-md-4">
            <input type="text" className="form-control" placeholder="Phone Number" />
          </div>
          <div className="col-md-6">
            <select className="form-select">
              <option>Select a Course</option>
              <option>Java</option>
              <option>Python</option>
            </select>
          </div>
          <div className="col-md-6">
            <select className="form-select">
              <option>Select a Branch</option>
              <option>Noida</option>
              <option>Gurugram</option>
            </select>
          </div>
          <div className="col-12 text-center">
            <button type="submit" className="btn btn-primary px-5">Submit</button>
          </div>
        </form>
      </div> */}

      {/* Bottom */}
      <div className="bg-black text-center text-white-50 py-2">
        &copy; 2025 NTI Academy, All Rights Reserved
      </div>
    </footer>
  );
}

export default Footer;
