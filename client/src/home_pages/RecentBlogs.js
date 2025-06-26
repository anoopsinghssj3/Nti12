import React from 'react';
import './RecentBlogs.css';

const blogs = [
  {
    title: "What is MERN Stack Developer?",
    description: "Master MongoDB, Express.js, React.js, and Node.js with live project-based training from industry experts. MERN Stack developers are in high demand—learn...",
    image: "MERN-630x630.png",
    link: "#"
  },
  {
    title: "Data Analyst Interview Questions and Answers in 2025",
    description: "Preparing for a data analyst interview? This comprehensive guide covers the top 25 data analyst interview questions and answers, including SQL queries...",
    image: "business-data-analysis_53876-95296.jpg",
    link: "#"
  },
  {
    title: "The Future of Creativity: AI-Generated Art and Design",
    description: "Discover how AI-generated art is reshaping creativity and digital marketing. This blog explores AI’s role in art and design, its influence on traditional art forms, and more...",
    image: "images.jpeg",
    link: "#"
  },
];

const RecentBlogs = () => {
  return (
    <section className="blogs-section">
      <h2>Recent Blogs</h2>
      <div className="blogs-grid">
        {blogs.map((blog, index) => (
          <div className="blog-card" key={index}>
            <img src={blog.image} alt={blog.title} />
            <div className="blog-content">
              <h3>{blog.title}</h3>
              <p>{blog.description}</p>
              <a href={blog.link}>read more ...</a>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default RecentBlogs;
