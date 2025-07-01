import React from "react";

const BlogSection = () => {
  const blogPosts = [
    {
      id: 1,
      image:
        "https://cdn.builder.io/api/v1/image/assets/TEMP/b5c82671312c14c67fbf0e39ab3c7b6c98c69654?width=512",
      title: "Creating Streamlined Safeguarding Processes with OneRen",
    },
    {
      id: 2,
      image:
        "https://cdn.builder.io/api/v1/image/assets/TEMP/b5c82671312c14c67fbf0e39ab3c7b6c98c69654?width=512",
      title:
        "What are your safeguarding responsibilities and how can you manage them?",
    },
    {
      id: 3,
      image:
        "https://cdn.builder.io/api/v1/image/assets/TEMP/b5c82671312c14c67fbf0e39ab3c7b6c98c69654?width=512",
      title: "Revamping the Membership Model with Triathlon Australia",
    },
  ];

  return (
    <section className="blog-section">
      <div className="blog-content">
        <div className="blog-header">
          <h2 className="section-title">Caring is the new marketing</h2>
          <p className="blog-description">
            The Nextcent blog is the best place to read about the latest
            membership insights, trends and more. See who's joining the
            community, read about how our community are increasing their
            membership income and lot's more.​
          </p>
        </div>
        <div className="blog-posts">
          {blogPosts.map((post) => (
            <div key={post.id} className="blog-post">
              <img src={post.image} alt={post.title} className="blog-image" />
              <div className="blog-content-card">
                <h3 className="blog-title">{post.title}</h3>
                <div className="read-more">
                  <span className="read-more-text">Readmore</span>
                  <svg
                    width="9"
                    height="9"
                    viewBox="0 0 9 9"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M6.02324 6.24222L7.12263 5.14283C7.25301 5.01245 7.25301 4.80106 7.12263 4.67068L6.02324 3.57129M7.02484 4.90676L2.35071 4.90676"
                      stroke="#5856D6"
                      strokeWidth="0.5008"
                      strokeLinecap="round"
                    />
                  </svg>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
      <div className="blog-dots">
        <svg
          width="33"
          height="8"
          viewBox="0 0 33 8"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <circle cx="3.64075" cy="3.79797" r="3.48035" fill="#5856D6" />
          <circle
            opacity="0.3"
            cx="16.17"
            cy="3.79797"
            r="3.48035"
            fill="#5856D6"
          />
          <circle
            opacity="0.3"
            cx="28.6993"
            cy="3.79797"
            r="3.48035"
            fill="#5856D6"
          />
        </svg>
      </div>
    </section>
  );
};

export default BlogSection;
