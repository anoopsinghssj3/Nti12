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
    <section className="py-5 bg-light">
      <div className="container text-center">
        <div className="mb-5">
          <h2 className="fw-bold display-6">Caring is the new marketing</h2>
          <p className="text-muted mx-auto fs-5" style={{ maxWidth: "720px" }}>
            The Nextcent blog is the best place to read about the latest membership insights, trends and more. See who's joining the community, read about how our community is increasing their membership income, and more.
          </p>
        </div>

        <div className="row g-4">
          {blogPosts.map((post) => (
            <div className="col-md-4" key={post.id}>
              <div className="card h-100 shadow-sm border-0 transition-hover">
                <img
                  src={post.image}
                  className="card-img-top object-fit-cover"
                  style={{ height: "220px", objectFit: "cover" }}
                  alt={post.title}
                />
                <div className="card-body text-start">
                  <h5 className="card-title fw-semibold">{post.title}</h5>
                  <div className="d-flex align-items-center text-primary mt-3">
                    <span className="me-2 fw-medium">Read more</span>
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
            </div>
          ))}
        </div>

        {/* Dots */}
        <div className="mt-4 d-flex justify-content-center">
          <svg
            width="33"
            height="8"
            viewBox="0 0 33 8"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <circle cx="3.64075" cy="3.79797" r="3.48035" fill="#5856D6" />
            <circle opacity="0.3" cx="16.17" cy="3.79797" r="3.48035" fill="#5856D6" />
            <circle opacity="0.3" cx="28.6993" cy="3.79797" r="3.48035" fill="#5856D6" />
          </svg>
        </div>
      </div>
    </section>
  );
};

export default BlogSection;
