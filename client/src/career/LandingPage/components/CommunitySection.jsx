import React from "react";

const CommunitySection = () => {
  const features = [
    {
      id: 1,
      title: "Membership Organisations",
      description:
        "Our membership management software provides full automation of membership renewals and payments",
      icon: (
        <svg width="34" height="34" viewBox="0 0 35 34" fill="none" xmlns="http://www.w3.org/2000/svg">
          {/* SVG PATH */}
          <path
            d="M17.3729 7.39355C14.887..."
            fill="#103E13"
          />
        </svg>
      ),
    },
    {
      id: 2,
      title: "National Associations",
      description:
        "Our membership management software provides full automation of membership renewals and payments",
      icon: (
        <svg width="34" height="34" viewBox="0 0 34 34" fill="none" xmlns="http://www.w3.org/2000/svg">
          {/* SVG PATH */}
          <path
            d="M19.2834 13.6657C19.0662..."
            fill="#103E13"
          />
        </svg>
      ),
    },
    {
      id: 3,
      title: "Clubs And Groups",
      description:
        "Our membership management software provides full automation of membership renewals and payments",
      icon: (
        <svg width="34" height="34" viewBox="0 0 34 34" fill="none" xmlns="http://www.w3.org/2000/svg">
          {/* SVG PATH */}
          <path
            d="M20.1283 16.8912C19.9607..."
            fill="#103E13"
          />
        </svg>
      ),
    },
  ];

  return (
    <section className="py-5 bg-light">
      <div className="container text-center">
        <div className="mb-5">
          <h2 className="fw-bold mb-3">Manage your entire community in a single system</h2>
          <p className="text-muted fs-5">Who is Nextcent suitable for?</p>
        </div>

        <div className="row g-4 justify-content-center">
          {features.map((feature) => (
            <div className="col-md-4" key={feature.id}>
              <div className="p-4 bg-white shadow-sm rounded h-100 d-flex flex-column align-items-center text-center">
                <div className="mb-3">{feature.icon}</div>
                <h5 className="fw-bold mb-2">{feature.title}</h5>
                <p className="text-muted">{feature.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CommunitySection;
