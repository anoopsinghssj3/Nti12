import React, { useEffect, useState } from 'react';
import axios from 'axios';
import "./CourseTemplate.css"
import {
  FaClock, FaRupeeSign, FaFileDownload, FaProjectDiagram,
  FaCheckCircle, FaGraduationCap
} from 'react-icons/fa';
import { useNavigate, useLocation } from 'react-router-dom';

const DEFAULT_IMG = "https://cdn.dribbble.com/users/1162077/screenshots/3848914/programmer.gif";

const fixedCourses = {
  "mern stack": {
    description: `Build full-stack web applications powered by intelligent AI features. You’ll master MongoDB for flexible data models, Express.js for robust server APIs, React for dynamic user interfaces, and Node.js for seamless backend logic. Then layer in Generative AI: learn how to integrate pre-trained language and image models into your apps to drive chatbots, content generation, and smart recommendations. Hands-on labs guide you step-by-step—from designing RESTful endpoints to crafting React components that consume AI-driven data. By project’s end you’ll have a polished portfolio: an end-to-end MERN app augmented with AI, plus guided capstones illustrating best practices in testing.`,
    duration: "5 Months",
    pdfLink:
      "https://example.com/mernstack-genai-course-outline.pdf",
    fees: "₹35,000 (GST not included) ",
    projects: [
      "live projects"
    ]
  },

  "mean stack": {
    description: `This comprehensive course blends the power of the MEAN Stack—MongoDB, Express.js, Angular, and Node.js—with cutting-edge Generative AI technologies. Learn how to design robust backend services with Node and Express, build dynamic frontends using Angular, and manage flexible data storage with MongoDB. Then take it further by integrating AI features like intelligent chatbots, content generation, and recommendation systems into your applications. Through hands-on projects, you'll gain practical experience using APIs from leading AI providers and deploying smart applications to the cloud. Each module walks you through real-world development scenarios, from creating RESTful APIs to building responsive Angular components that consume AI-driven services.`,
    duration: "5 Months",
    pdfLink: "https://example.com/mernstack-genai-course-outline.pdf",
    fees: "₹35,000 (GST not included)",
    projects: [
      "live projects"]
  },


  "cyber security": {
    description: `Learn to protect and audit digital systems while harnessing AI for smarter threat detection. You’ll first explore core security domains—network defense, ethical hacking, cryptography, and incident response—through interactive simulations and real-world labs. Then you’ll learn how Generative AI can automate log analysis, flag anomalies, and even simulate sophisticated attack scenarios for proactive defense. With guided exercises using tools like Wireshark, Metasploit, and Python-powered AI scripts, you’ll understand both the human and algorithmic sides of cybersecurity. Capstone projects include building an AI-driven intrusion detection prototype and conducting a full-scope pentest on a mock network.`,
    duration: "3 Months",
    pdfLink: "https://example.com/cybersecurity-genai-course-outline.pdf",
    fees: "₹20,000 (GST not included)",
    projects: [
      "live projects"
    ]
  },

  "java full stack": {
    description: `Deep-dive into Java’s core and advanced features to become a confident, industry-ready developer. You’ll start with fundamentals—OOP principles, exception handling, and collections—then move into multithreading, JVM tuning, and memory management. Hands-on coding exercises walk you through building console apps, then scaling up to web services with Spring and Hibernate. You’ll create RESTful APIs, integrate databases via JDBC and JPA, and learn best practices for clean, maintainable code. Project modules include designing a microservice architecture, optimizing performance, and writing unit tests with JUnit. Along the way, you’ll pick up tooling workflows—Maven, Gradle, Git—and learn to deploy Java apps to cloud or on-premise servers. By course’s end, you’ll have a portfolio of real applications showcasing your mastery and be positioned to excel as a Backend Engineer, Software Developer, or Java Specialist.`,
    duration: "5 months",
    pdfLink: "https://example.com/java-expert-course-outline.pdf",
    fees: "₹40,000 (GST not included)",
    projects: [
      "live projects"
    ]
  },

  "core java": {
    img: "https://www.ducatindia.com/_next/image?url=https%3A%2F%2Fadmin.ducatindia.com%2Fcourse%2F1709033901773Java.png&w=256&q=75",
    description: `The Core Java course provides a strong foundation in Java programming for beginners and intermediate learners. You’ll start with basic concepts like variables, data types, operators, control structures, and then move into more advanced topics such as object-oriented programming (OOP), classes, inheritance, polymorphism, abstraction, and encapsulation.
You will also learn exception handling, file input/output (I/O), multithreading, arrays, strings, collections framework, and Java memory management. The course includes practical coding exercises and real-life mini projects to help reinforce your understanding.`,
    duration: "1.5 Months",
    pdfLink: "https://example.com/core-java-course-outline.pdf",
    fees: "₹10,000 (GST not included)",
    projects: ["live projects"
    ]
  },

  "advance java": {
    img: "https://www.ducatindia.com/_next/image?url=https%3A%2F%2Fadmin.ducatindia.com%2Fcourse%2F1709033901773Java.png&w=256&q=75",
    description: `The Advanced Java course is designed for learners who have a solid understanding of Core Java and want to dive into building web-based enterprise applications. You’ll explore Java EE technologies such as JDBC (Java Database Connectivity), Servlets, JSP (Java Server Pages), and MVC architecture.

This course also covers essential skills like connecting Java applications to databases, managing sessions, creating dynamic web pages, and building real-world web apps. You’ll learn to use tools like Apache Tomcat, and frameworks like Hibernate and basics of Spring for backend development.`,
    duration: "3 Months",
    pdfLink: "https://example.com/advanced-java-course-outline.pdf",
    fees: "₹20,000 (GST not included)",
    projects: [
      "live projects"
    ]
  },

  "advance digital marketing": {
    description: `Transform how brands connect with audiences through data-driven digital campaigns. You’ll learn to strategize and execute SEO, SEM, social media, content marketing, email workflows, and influencer partnerships. Each module pairs theory with live hands-on work in Google Ads, Facebook Business Manager, and analytics platforms—so you’ll optimize ad spend, craft compelling copy, and measure ROI in real time. Workshops guide you in building landing pages, A/B testing creatives, and automating drip campaigns. By the end, you’ll present a full multi-channel campaign, backed by dashboards and insights that drive business growth. This course equips you for roles as Digital Marketer, Performance Specialist, or Content Strategist, with portfolio projects that showcase your ability to drive measurable results.`,
    duration: "2 Months",
    pdfLink: "https://example.com/adv-digital-marketing-course-outline.pdf",
    fees: "₹15,000 (GST not included) ",
    projects: [
      "live projects"
    ]
  },

  "data science": {
    description: `Master data analysis, visualization, and machine learning to extract actionable insights. You’ll learn Python for data manipulation, statistical modeling, and use libraries like pandas, NumPy, and scikit-learn. Courses cover data cleaning, exploratory data analysis, supervised and unsupervised learning, and deploying ML models. Real-world projects include predictive analytics and customer segmentation. The course prepares you for roles like Data Scientist, Analyst, or ML Engineer with hands-on experience and a strong portfolio.`,
    duration: "4 Months",
    pdfLink: "https://example.com/data-science-course-outline.pdf",
    fees: "₹50,000 (GST not included)",
    projects: [
      "live projects"
    ]
  },
  "python": {
    description: `Learn Python programming from basics to advanced topics including OOP, web scraping, automation, and REST APIs. Practical exercises cover building scripts, data handling, and integrating with databases. This versatile language course prepares you for software development, data science, or automation roles with hands-on coding and project work.`,
    duration: "1 Month",
    pdfLink: "https://example.com/python-training-course-outline.pdf",
    fees: "₹10,000 (GST not included)",
    projects: [
      "live projects"
    ]
  },

  "business analytics": {
    description: `Develop the skills to analyze business data and guide decision-making. This course covers data visualization, dashboard creation, statistical analysis, and forecasting techniques using tools like Excel, Tableau, and Power BI. You’ll work on case studies to optimize business performance. Ideal for aspiring Business Analysts or Data Consultants.`,
    duration: "2 Months",
    pdfLink: "https://example.com/business-analytics-course-outline.pdf",
    fees: "₹20,000 (GST not included) ",
    projects: [
      "live projects"
    ]
  },

  "aws with devops": {
    description: `Gain expertise in Amazon Web Services cloud computing. Learn core services including EC2, S3, Lambda, and VPC configuration. Hands-on labs guide you through deploying scalable applications, setting up CI/CD pipelines with AWS DevOps tools, and managing cloud security. Perfect for Cloud Engineers, DevOps, and Solutions Architects.`,
    duration: "2.5 Months",
    pdfLink: "https://example.com/aws-professional-training-course-outline.pdf",
    fees: "₹20,000 (GST not included)",
    projects: [
      "live projects"
    ]
  },

  "software testing (manual)": {
    description: `Understand manual and automated software testing methodologies. Topics include test case design, bug tracking, Selenium automation, and performance testing. Practical labs simulate real-world testing scenarios. This course prepares you for roles as QA Engineer, Test Analyst, or Automation Tester.`,
    duration: "3 Months",
    pdfLink: "https://example.com/software-testing-course-outline.pdf",
    fees: "₹25,000",
    projects: [
      "live projects"
    ]
  },
  "automation": {
    description: `Master automation testing tools and techniques to accelerate software quality assurance processes. This course covers both foundational and advanced concepts, starting with the basics of software testing, test case design, and bug tracking systems. You'll then dive deep into automation tools like Selenium WebDriver, TestNG, and frameworks such as Maven and Jenkins. Learn how to write reusable test scripts using Java or Python, perform cross-browser testing, and set up continuous testing pipelines using CI/CD integration. Real-world labs and assignments simulate enterprise-level testing workflows, giving you experience with both front-end and back-end automation. The curriculum also touches on performance testing using tools like JMeter and explores version control practices with Git. By the end of the course, you will be confident in automating regression, functional, and integration tests.`,
    duration: "3 Months",
    pdfLink: "https://example.com/software-testing-course-outline.pdf",
    fees: "₹15,000",
    projects: [
      "live projects"
    ]
  },

  "c programming": {
    description: `Start with fundamentals of C programming: syntax, control structures, functions, pointers, and memory management. Build efficient console applications and understand system-level programming concepts. A strong foundation for embedded systems, OS development, and software engineering roles.`,
    duration: "1.5 Months",
    pdfLink: "https://ntitechacademy.com/wp-content/uploads/2023/09/C-LANGUAGE.pdf",
    fees: "₹8,000",
    projects: [
      "live projects"
    ]
  },

  "c++ programming": {
    description: `Start with fundamentals of C++ programming: syntax, control structures, functions, pointers, and memory management. Build efficient console applications and understand system-level programming concepts. A strong foundation for embedded systems, OS development, and software engineering roles.`,
    duration: "1.5 Months",
    pdfLink: "https://example.com/c-programming-course-outline.pdf",
    fees: "8,000",
    projects: [
      "live projects"
    ]
  },

  "android app developement": {
    description: `This Android App Development course is designed to help learners build real-world mobile applications using Java and Kotlin. You’ll begin by understanding Android architecture, activities, layouts, and UI components. The course then takes you through building interactive applications, working with databases using Room and SQLite, integrating RESTful APIs, and managing user input, background tasks, and notifications. You’ll also explore Android Studio, Material Design principles, and best practices for debugging and app optimization. As you progress, you’ll implement modern development techniques like MVVM architecture, Firebase integration for authentication and cloud storage, and Google Play Store deployment strategies. Practical projects include building chat apps, e-commerce applications, and media players.`,
    duration: "2 Months",
    pdfLink: "https://example.com/android-app-development-course-outline.pdf",
    fees: "₹15,000",
    projects: [
      "live projects"
    ]
  },

  "ios app developement": {
    description: `This iOS App Development course empowers learners to design and build fully functional iOS applications using Swift and Xcode. Starting with core Swift programming—variables, control flow, and functions—you'll progress to more advanced topics like OOP, closures, and protocol-oriented programming. You’ll learn UIKit for building responsive interfaces and integrate essential components like navigation controllers, table views, gestures, and user inputs. The course emphasizes real-world development with modules on working with APIs, data persistence using Core Data and UserDefaults, and networking with URLSession. You'll also explore SwiftUI for declarative UI design and understand the Apple Human Interface Guidelines. Projects include building a task manager, a weather app, and a media gallery. By the end of the course, you’ll understand App Store submission, provisioning profiles, and performance optimization techniques.`,
    duration: "2 Months",
    pdfLink: "https://example.com/ios-app-development-course-outline.pdf",
    fees: "₹15,000",
    projects: [
      "live projects"
    ]
  },

  "graphics design": {
    description: `Learn design principles and software tools like Adobe Photoshop, Illustrator, and InDesign. Develop skills in branding, typography, and digital illustration. The course emphasizes creativity and design thinking, enabling learners to create eye-catching graphics for print and digital platforms. Hands-on modules focus on practical tasks such as logo creation, poster layouts, brochure design, and UI mockups. You’ll also explore color theory, visual hierarchy, and portfolio building. Whether you're aiming to freelance or join a creative agency, this program builds a strong foundation for visual communication.`,
    duration: "3 Months",
    pdfLink: "https://example.com/graphics-design-course-outline.pdf",
    fees: "₹20,000",
    projects: [
      "live projects"]
  },

  "communication skills & personality developement": {
    description: `This course is designed to enhance both verbal and non-verbal communication skills along with personal grooming and confidence-building. Participants will learn public speaking, interpersonal communication, email and business writing, body language, and conflict resolution. The personality development section focuses on leadership traits, teamwork, time management, emotional intelligence, and professional etiquette. Ideal for students and professionals seeking to improve their impact in interviews, meetings, and client interactions. Through interactive workshops, role-playing, and self-assessment exercises, learners will become confident, articulate, and workplace-ready individuals.`,
    duration: "1.5 Months",
    pdfLink: "https://example.com/communication-personality-course-outline.pdf",
    fees: "₹5,000 (GST not included)",
    projects: [
      "live projects"
    ],
    extras: [
      "Soft Skills Certification",
      "1-on-1 Mentoring",
      "Resume & Interview Support"
    ]
  },

  "salesforce": {
    "description": "Become a Salesforce expert and learn to customize, configure, and administer the world's leading CRM platform. This course covers Salesforce Sales Cloud, Service Cloud, Marketing Cloud, and App Builder. Develop skills in creating custom objects, workflows, reports, and dashboards. Hands-on modules focus on practical tasks such as lead management, opportunity tracking, case management, and campaign automation. You’ll also explore Salesforce security, data management, and integration. Whether you're aiming to become a Salesforce Administrator, Developer, or Consultant, this program provides the knowledge and skills to excel in the Salesforce ecosystem.",
    "duration": "3 Months",
    "pdfLink": "https://example.com/salesforce-course-outline.pdf",
    "fees": "₹22,000",
    "projects": [
      "live projects"
    ]
  }
};

const normalizedFixedCourses = {};
Object.keys(fixedCourses).forEach(key => {
  normalizedFixedCourses[key.toUpperCase()] = fixedCourses[key];
});

const CourseTemplate = () => {
  const navigate = useNavigate();
  const location = useLocation();

  const course = location.state?.course || "";

  const [description, setDescription] = useState('');
  const [img, setImg] = useState('');
  const [loading, setLoading] = useState(true);
  const [randomImage, setRandomImage] = useState("");
  const [randomImage2, setRandomImage2] = useState("");

  useEffect(() => {
    const images = [
      "https://camo.githubusercontent.com/5119ee303e5e49cdf23def653b737bede0da49a859a34714d62d9ab518afbbb2/68747470733a2f2f63646e2e6472696262626c652e636f6d2f75736572732f313136323037372f73637265656e73686f74732f333834383931342f70726f6772616d6d65722e676966",
      "https://camo.githubusercontent.com/5046cb083418fd1922b7f5990e594c3bb06f5d87e5516cd8839ae0aa48b3aec4/68747470733a2f2f696d616765732e73717561726573706163652d63646e2e636f6d2f636f6e74656e742f76312f35373696966340316263316261626131616462623261622f313534313538303631313632342d5445363451474b524a4738535741495553374e532f6b6531375a77644742546f6464493870446d34386b506f73776c7a6a53564d4d2d53784f703743563539425a772d7a505067646e346a557756634a45315a7657515578776b6d794578676c4e714770304976544a5a616d574c49327a76595748384b332d735f3479737a63703272795449304871544f6161556f68724938504936465879386339505774426c7141566c555335697a7064634958445a71445976707252715a32395077306f2f636f64696e672d667265616b2e676966",
      "https://camo.githubusercontent.com/2366b34bb903c09617990fb5fff4622f3e941349e846ddb7e73df872a9d21233/68747470733a2f2f63646e2e6472696262626c652e636f6d2f75736572732f3733303730332f73637265656e73686f74732f363538313234332f6176656e746f2e676966",
      "https://camo.githubusercontent.com/4d9f5ecceb711eec6e2018f38a5677dc657c9738d4a65ba3b928c41c0a45b439/68747470733a2f2f6d69726f2e6d656469756d2e636f6d2f6d61782f313336302f302a37513379765349765f7430696f4a2d5a2e676966",
      "https://camo.githubusercontent.com/130ffc354b6ee3c8c9e506276e598bf4e19ea7950df203dacf6aeee4fc543a50/68747470733a2f2f616e616c7974696373696e6469616d61672e636f6d2f77702d636f6e74656e742f75706c6f6164732f323031382f31322f646576656c6f7065722d6472696262626c652e676966",
      "https://camo.githubusercontent.com/88adc7c88c9d3dba7479020846ed35d13410e3707c7f149e1c6140cc6beaef9a/68747470733a2f2f70687973696373677572756b756c2e66696c65732e776f726470726573732e636f6d2f323031392f30322f6368617261637465722d312e676966",
      "https://camo.githubusercontent.com/87af9a9fec730c94fc8b08eb21fa5ef6ab7831a67ba17bf8cc76696f6e4be1ef/68747470733a2f2f63646e2e6472696262626c652e636f6d2f75736572732f313138373833362f73637265656e73686f74732f363533393432392f70726f6772616d65722e676966",
      "https://raw.githubusercontent.com/TheDudeThatCode/TheDudeThatCode/master/Assets/Designer.gif",
      "https://raw.githubusercontent.com/TheDudeThatCode/TheDudeThatCode/master/Assets/Developer.gif", "https://cdn.dribbble.com/userupload/21606445/file/original-87f89c32747bd361f530e0735083d18d.gif", "https://miro.medium.com/v2/resize:fit:1400/1*IO0G2ygwIml_NGAv26Na4w.gif",
      "https://static1.squarespace.com/static/558c162ee4b03447dc049b73/t/56a09aef9cadb60afe120881/1453366010166/?format=1500w", "https://user-images.githubusercontent.com/74038190/235224431-e8c8c12e-6826-47f1-89fb-2ddad83b3abf.gif", "https://user-images.githubusercontent.com/74038190/236119160-976a0405-caa7-470c-9356-16d43402ea0a.gif"
    ];

    // Pick 2 distinct random images
    let firstIndex = Math.floor(Math.random() * images.length);
    let secondIndex;
    do {
      secondIndex = Math.floor(Math.random() * images.length);
    } while (secondIndex === firstIndex);

    setRandomImage(images[firstIndex]);
    setRandomImage2(images[secondIndex]);
  }, []);

  useEffect(() => {
    if (!course.trim()) {
      setDescription("No course selected.");
      setImg("");
      setLoading(false);
      return;
    }

    const normalizedCourse = course.trim().toUpperCase();

    if (normalizedFixedCourses[normalizedCourse]) {
      const courseData = normalizedFixedCourses[normalizedCourse];
      setDescription(courseData.description);
      setLoading(false);
    } else {
      // Wikipedia fallback
      const query = course.replace(/[^a-zA-Z0-9 ]/g, '').trim();

      axios.get(`https://en.wikipedia.org/api/rest_v1/page/summary/${encodeURIComponent(query)}`)
        .then((res) => {
          if (res.data.extract) {
            setDescription(res.data.extract);
          } else {
            setDescription('No description available for this course.');
          }
          setImg(DEFAULT_IMG);
        })
        .catch(() => {
          setDescription("Wikipedia fetch failed. Please try again.");
          setImg(DEFAULT_IMG);
        })
        .finally(() => {
          setLoading(false);
        });
    }
  }, [course]);

  if (loading) {
    return (
      <div className="text-center py-5">
        Loading course details...
      </div>
    );
  }

  const normalizedCourse = course.trim().toUpperCase();
  const courseData = normalizedFixedCourses[normalizedCourse] || {};

  return (
    <main className="container py-5 course-template course-template">

      <h2 className="text-center mb-3">
        <FaGraduationCap className="me-2" />
        <strong className='text-uppercase'>{course || "Course Details"}</strong>
      </h2>

      <div className="row align-items-center">
        {/* LEFT SIDE WITH TWO IMAGES */}
        <div className="col-md-5 text-center mb-4 mb-md-0 d-flex flex-column align-items-center gap-3 img-fixing">
          <img
            src={randomImage || DEFAULT_IMG}
            alt={`${course} course image 1`}
            className="img-fluid rounded shadow course-image"
            style={{ width: "60%", objectFit: "cover" }}
          />
          <img
            src={randomImage2 || DEFAULT_IMG}
            alt={`${course} course image 2`}
            className="img-fluid rounded shadow course-image"
            style={{ width: "60%", objectFit: "cover" }}
          />
        </div>

        {/* DETAILS */}
        <div className="col-md-7">
          <p className="lead course-description">{description}</p>

          <hr />

          <h5><FaClock className="me-2 text-primary" />Duration</h5>
          <p>{courseData.duration || "3–6 Months"}</p>

          <h5><FaRupeeSign className="me-2 text-success" />Fees</h5>
          <p>{courseData.fees || "₹25,000 – ₹55,000"}</p>

          <h5><FaFileDownload className="me-2 text-warning" />Curriculum</h5>
          <a
            href={courseData.pdfLink || "#"}
            className="btn btn-outline-primary btn-sm mb-3"
            target="_blank"
            rel="noopener noreferrer"
          >
            Download PDF
          </a>

          <h5><FaProjectDiagram className="me-2 text-info" />Projects</h5>
          <ul>
            {(courseData.projects || ["Capstone Projects", "Real-World Scenarios"]).map((proj, idx) => (
              <li key={idx}>{proj}</li>
            ))}
          </ul>

          <h5><FaCheckCircle className="me-2 text-success" />Extras</h5>
          <ul>
            {(courseData.extras || ["Placement Support", "Resume & Interview Prepration"]).map((extra, idx) => (
              <li key={idx}>{extra}</li>
            ))}
          </ul>

          <button
            className="btn btn-success w-100 mt-3"
            onClick={() => alert('Enroll functionality not implemented yet')}
          >
            Enroll Now
          </button>
        </div>
      </div>
    </main>
  );
};

export default CourseTemplate;
