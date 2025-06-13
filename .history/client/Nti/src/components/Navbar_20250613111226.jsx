// import React, { useEffect } from 'react';
// import { useNavigate, Link, NavLink } from "react-router-dom";
// import "../styles/Navbar.css";
// import { IoMdHome } from "react-icons/io";
// import { FaBookReader, FaFileSignature } from "react-icons/fa";
// import { GiSuitcase } from "react-icons/gi";
// import { IoSchoolSharp } from "react-icons/io5";
// import { PiCertificateFill, PiCaretCircleDownFill } from "react-icons/pi";
// import NtiLogo from "../../public/images/NtiLogo.png"

// export default function Navbar() {
//   useEffect(() => {
//     const submenuToggles = document.querySelectorAll(".submenu-toggle");

//     const handleSubmenuClick = (e) => {
//       e.preventDefault();
//       const submenu = e.currentTarget.nextElementSibling;
//       submenu.classList.toggle("show");
//       document.querySelectorAll(".submenu-toggle + .dropdown-menu").forEach(menu => {
//         if (menu !== submenu) menu.classList.remove("show");
//       });
//     };

//     submenuToggles.forEach(toggle => {
//       toggle.addEventListener("click", handleSubmenuClick);
//     });

//     return () => {
//       submenuToggles.forEach(toggle => {
//         toggle.removeEventListener("click", handleSubmenuClick);
//       });
//     };
//   }, []);
//   const navigate = useNavigate();

//   const handleCourseClick = (program) => {
//     navigate("/course_template", { state: { course: program } });
//   };

//   return (
//     <div className="w-100 sticky-top bg-white">
//       <nav className="navbar navbar-expand-lg navbar-light text-secondary main-navbar">
//         <div className="container-fluid ">
//           <Link className="navbar-brand" to="/">
//             <img src={NtiLogo} alt="NtiLogo" loading="lazy" style={{ height: "5.5rem" }} />
//           </Link>

//           <button className="navbar-toggler dashboard" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent">
//             <span className="navbar-toggler-icon"></span>
//           </button>

//           <div className="collapse navbar-collapse " id="navbarSupportedContent">
//             <ul className="navbar-nav  gap-2 mb-2 mb-lg-0 d-flex align-items-start">

//               <Link className="nav-link nav-item active home-style text-secondary system  " to="/">
//                 <IoMdHome fontSize="1.5rem" className='mb-1' /> Home
//               </Link>

//               <Link className="nav-item nav-link dropdown-toggle text-secondary dropdown system  ms-1 " data-bs-toggle="dropdown" role="button">
//                 <FaBookReader fontSize="1.25rem" className='mb-1 ' /> Courses
//                 <ul className="dropdown-menu">

//                   {/* Programming */}
//                   <li className="dropend position-relative text-decoration-none">
//                     <span className="px-2 dropdown-item dropdown-toggle submenu-toggle text-decoration-none" role="button">
//                       programming courses
//                     </span>
//                     <ul className="dropdown-menu submenu text-decoration-none">
//                       {[
//                         "mern stack", "mean stack", "java core", "java advance", "java full stack",
//                         "python", "c Programming", "c++ Programming", "android app developement", "ios app developement"
//                       ].map((prog, i) => (
//                         <li key={i}>
//                           <span className="dropdown-item text-decoration-none" role="button" onClick={() => handleCourseClick(prog)}>
//                             {prog.toLowerCase()}
//                           </span>
//                         </li>
//                       ))}
//                     </ul>
//                   </li>

//                   {/* Data Science */}
//                   <li className="dropend position-relative">
//                     <span className="px-2 dropdown-item-2 dropdown-item dropdown-toggle submenu-toggle" role="button">
//                       data science & analytics
//                     </span>
//                     <ul className="dropdown-menu submenu">
//                       {["data science", "business analytics"].map((prog, i) => (
//                         <li key={i}>
//                           <span className="dropdown-item-2 dropdown-item" role="button" onClick={() => handleCourseClick(prog)}>
//                             {prog.toLowerCase()}
//                           </span>
//                         </li>
//                       ))}
//                     </ul>
//                   </li>

//                   {/* Cyber Security */}
//                   <li className="dropend position-relative">
//                     <span className="px-2 dropdown-item-3 dropdown-item dropdown-toggle submenu-toggle" role="button">
//                       cyber security
//                     </span>
//                     <ul className="dropdown-menu submenu">
//                       <li>
//                         <span className="dropdown-item-3 dropdown-item" role="button" onClick={() => handleCourseClick("cyber security")}>
//                           cyber security
//                         </span>
//                       </li>
//                     </ul>
//                   </li>

//                   {/* Digital Marketing */}
//                   <li className="dropend position-relative">
//                     <span className="px-2 dropdown-item-5 dropdown-item dropdown-toggle submenu-toggle" role="button">
//                       digital marketing
//                     </span>
//                     <ul className="dropdown-menu submenu">
//                       <li>
//                         <span className="dropdown-item-5 dropdown-item" role="button" onClick={() => handleCourseClick("advance digital marketing")}>
//                           advance digital marketing
//                         </span>
//                       </li>
//                     </ul>
//                   </li>

//                   {/* Cloud & DevOps */}
//                   <li className="dropend position-relative">
//                     <span className="px-2 dropdown-item-6 dropdown-item dropdown-toggle submenu-toggle" role="button">
//                       cloud & devops
//                     </span>
//                     <ul className="dropdown-menu submenu">
//                       {["aws with dev ops", "saleforce"].map((prog, i) => (
//                         <li key={i}>
//                           <span className="dropdown-item-6 dropdown-item" role="button" onClick={() => handleCourseClick(prog)}>
//                             {prog.toLowerCase()}
//                           </span>
//                         </li>
//                       ))}
//                     </ul>
//                   </li>

//                   {/* Software Testing */}
//                   <li className="dropend position-relative">
//                     <span className="px-2 dropdown-item-7 dropdown-item dropdown-toggle submenu-toggle" role="button">
//                       software testing
//                     </span>
//                     <ul className="dropdown-menu submenu">
//                       {["software testing (manual)", "automation"].map((prog, i) => (
//                         <li key={i}>
//                           <span className="dropdown-item-7 dropdown-item" role="button" onClick={() => handleCourseClick(prog)}>
//                             {prog.toLowerCase()}
//                           </span>
//                         </li>
//                       ))}
//                     </ul>
//                   </li>

//                   {/* Other Courses */}
//                   <li className="dropend position-relative">
//                     <span className="px-2 dropdown-item-9 dropdown-item dropdown-toggle submenu-toggle" role="button">
//                       other professional courses
//                     </span>
//                     <ul className="dropdown-menu submenu">
//                       <li>
//                         <span className="dropdown-item-2 dropdown-item" role="button" onClick={() => handleCourseClick("communication skills & personality developement")}>
//                           communication skills & personality developement
//                         </span>
//                       </li>
//                     </ul>
//                   </li>

//                 </ul>
//               </Link>

//               <Link className="nav-link text-secondary system me-1" to="/placement">
//                 <GiSuitcase fontSize="1.5rem" className='mb-1' /> Placement
//               </Link>

//               <Link className="nav-link text-secondary system " to="/corpo_tra">
//                 <IoSchoolSharp fontSize="1.25rem" className='mb-1' /> Corporate Training
//               </Link>

//               <Link className="nav-link text-secondary system ms-1" to="/on_tra">
//                 <FaFileSignature fontSize="1.25rem" className='mb-1' /> Online Registration
//               </Link>

//               <Link className="nav-link text-secondary system " to="/certificate">
//                 <PiCertificateFill fontSize="1.5rem" className='mb-1' /> Certificate
//               </Link>

//               <Link className="nav-link dropdown nav-item text-secondary system " to="/about ">
//                 <PiCaretCircleDownFill fontSize="1.5rem" className='mb-1' /> About
//               </Link>
//             </ul>
//           </div>
//         </div>
//       </nav>
//     </div>
//   );
// }


import React, { useEffect } from 'react';
import { useNavigate, Link, NavLink } from "react-router-dom";
// import "../styles/Navbar.css";
import { IoMdHome } from "react-icons/io";
import { FaBookReader, FaFileSignature } from "react-icons/fa";
import { GiSuitcase } from "react-icons/gi";
import { IoSchoolSharp } from "react-icons/io5";
import { PiCertificateFill, PiCaretCircleDownFill } from "react-icons/pi";
import NtiLogo from "../../public/images/NtiLogo.png";

export default function Navbar() {
  const navigate = useNavigate();

  const handleCourseClick = (program) => {
    navigate("/course_template", { state: { course: program } });
  };

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

  const courseCategories = [
    {
      title: "programming courses",
      items: [
        "mern stack", "mean stack", "java core", "java advance", "java full stack",
        "python", "c programming", "c++ programming", "android app developement", "ios app developement"
      ]
    },
    {
      title: "data science & analytics",
      items: ["data science", "business analytics"]
    },
    {
      title: "cyber security",
      items: ["cyber security"]
    },
    {
      title: "digital marketing",
      items: ["advance digital marketing"]
    },
    {
      title: "cloud & devops",
      items: ["aws with dev ops", "saleforce"]
    },
    {
      title: "software testing",
      items: ["software testing (manual)", "automation"]
    },
    {
      title: "other professional courses",
      items: ["communication skills & personality developement"]
    }
  ];

  return (
    <div className="w-100 sticky-top bg-white">
      <nav className="navbar navbar-expand-lg navbar-light main-navbar">
        <div className="container-fluid">
          <Link className="navbar-brand" to="/">
            <img src={NtiLogo} alt="NtiLogo" loading="lazy" style={{ height: "5.5rem" }} />
          </Link>

          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
          >
            <span className="navbar-toggler-icon"></span>
          </button>

          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav ms-auto mb-2 mb-lg-0">

              {/* Home */}
              <li className="nav-item">
                <NavLink className="nav-link text-secondary" to="/">
                  <IoMdHome className="mb-1" fontSize="1.5rem" /> Home
                </NavLink>
              </li>

              {/* Courses Dropdown */}
              <li className="nav-item dropdown">
                <span
                  className="nav-link dropdown-toggle text-secondary"
                  role="button"
                  data-bs-toggle="dropdown"
                >
                  <FaBookReader className="mb-1" fontSize="1.25rem" /> Courses
                </span>

                <ul className="dropdown-menu">
                  {courseCategories.map((category, index) => (
                    <li key={index} className="dropend dropdown-submenu position-relative">
                      <span className="dropdown-item dropdown-toggle submenu-toggle" role="button">
                        {category.title}
                      </span>
                      <ul className="dropdown-menu submenu">
                        {category.items.map((item, i) => (
                          <li key={i}>
                            <span className="dropdown-item" role="button" onClick={() => handleCourseClick(item)}>
                              {item}
                            </span>
                          </li>
                        ))}
                      </ul>
                    </li>
                  ))}
                </ul>
              </li>

              {/* Placement */}
              <li className="nav-item">
                <NavLink className="nav-link text-secondary" to="/placement">
                  <GiSuitcase className="mb-1" fontSize="1.5rem" /> Placement
                </NavLink>
              </li>

              {/* Corporate Training */}
              <li className="nav-item">
                <NavLink className="nav-link text-secondary" to="/corpo_tra">
                  <IoSchoolSharp className="mb-1" fontSize="1.25rem" /> Corporate Training
                </NavLink>
              </li>

              {/* Online Registration */}
              <li className="nav-item">
                <NavLink className="nav-link text-secondary" to="/on_tra">
                  <FaFileSignature className="mb-1" fontSize="1.25rem" /> Online Registration
                </NavLink>
              </li>

              {/* Certificate */}
              <li className="nav-item">
                <NavLink className="nav-link text-secondary" to="/certificate">
                  <PiCertificateFill className="mb-1" fontSize="1.5rem" /> Certificate
                </NavLink>
              </li>

              {/* About */}
              <li className="nav-item">
                <NavLink className="nav-link text-secondary" to="/about">
                  <PiCaretCircleDownFill className="mb-1" fontSize="1.5rem" /> About
                </NavLink>
              </li>

            </ul>
          </div>
        </div>
      </nav>
    </div>
  );
}
