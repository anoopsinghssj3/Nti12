import React from "react";

const TestimonialsSection = () => {
  const clientLogos = [
    {
      id: 1,
      bg: "#E8F5E9",
      svg: (
        <svg
          width="14"
          height="15"
          viewBox="0 0 14 15"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <g clipPath="url(#clip0_212_1587)">
            <path
              fillRule="evenodd"
              clipRule="evenodd"
              d="M3.74931 0.958862C5.59319 0.958862 7.08798 2.45363 7.08798 4.29753V0.958862H10.4266C12.2705 0.958862 13.7653 2.45363 13.7653 4.29753C13.7653 6.14141 12.2705 7.63619 10.4266 7.63619C12.2705 7.63619 13.7653 9.13098 13.7653 10.9749C13.7653 11.8904 13.3968 12.7199 12.7999 13.3231L12.7874 13.3357L12.7764 13.3467C12.1731 13.9444 11.343 14.3135 10.4266 14.3135C9.51655 14.3135 8.6915 13.9494 8.08924 13.3588C8.08143 13.3512 8.07362 13.3434 8.06584 13.3357C8.05853 13.3284 8.05125 13.321 8.044 13.3136C7.45269 12.7113 7.08798 11.8856 7.08798 10.9749C7.08798 12.8187 5.59319 14.3135 3.74931 14.3135C1.90542 14.3135 0.410645 12.8187 0.410645 10.9749V7.63619H3.74931C1.90542 7.63619 0.410645 6.14141 0.410645 4.29753C0.410645 2.45363 1.90542 0.958862 3.74931 0.958862Z"
              fill="#5417D7"
            />
          </g>
          <defs>
            <clipPath id="clip0_212_1587">
              <rect
                width="13.3547"
                height="13.3547"
                fill="white"
                transform="translate(0.410645 0.958862)"
              />
            </clipPath>
          </defs>
        </svg>
      ),
    },
    // Additional logos would go here
  ];

  return (
    <section className="testimonials-section">
      <div className="testimonials-content">
        <img
          src="https://cdn.builder.io/api/v1/image/assets/TEMP/b5c82671312c14c67fbf0e39ab3c7b6c98c69654?width=454"
          alt="Customer testimonial"
          className="testimonial-image"
        />
        <div className="testimonial-text">
          <div className="testimonial-content-text">
            <p className="testimonial-quote">
              Maecenas dignissim justo eget nulla rutrum molestie. Maecenas
              lobortis sem dui, vel rutrum risus tincidunt ullamcorper. Proin eu
              enim metus. Vivamus sed libero ornare, tristique quam in, gravida
              enim. Nullam ut molestie arcu, at hendrerit elit. Morbi laoreet
              elit at ligula molestie, nec molestie mi blandit. Suspendisse
              cursus tellus sed augue ultrices, quis tristique nulla sodales.
              Suspendisse eget lorem eu turpis vestibulum pretium. Suspendisse
              potenti. Quisque malesuada enim sapien, vitae placerat ante
              feugiat eget. Quisque vulputate odio neque, eget efficitur libero
              condimentum id. Curabitur id nibh id sem dignissim finibus ac sit
              amet magna.
            </p>
            <div className="testimonial-author">
              <div className="author-name">Tim Smith</div>
              <div className="author-title">
                British Dragon Boat Racing Association
              </div>
            </div>
          </div>
          <div className="testimonial-footer">
            <div className="client-logos">
              {clientLogos.map((logo) => (
                <div
                  key={logo.id}
                  className="client-logo"
                  style={{ backgroundColor: logo.bg }}
                >
                  {logo.svg}
                </div>
              ))}
            </div>
            <div className="meet-customers">
              <span className="meet-text">Meet all customers</span>
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
    </section>
  );
};

export default TestimonialsSection;
