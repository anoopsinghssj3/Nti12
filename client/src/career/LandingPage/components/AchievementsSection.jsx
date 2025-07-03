import React from "react";
import CountUp from "react-countup";

const AchievementsSection = () => {
  const stats = [
    { number: 2245341, label: "Members" },
    { number: 46328, label: "Clubs" },
    { number: 828867, label: "Event Bookings" },
    { number: 1926436, label: "Payments" },
  ];

  return (
    <section className="py-5 bg-white w-100">
      <div className="container text-center">
        {/* Heading */}
        <div className="mb-5">
          <h2 className="fw-bold display-6">
            Helping a local <span className="text-primary">business reinvent itself</span>
          </h2>
          <p className="text-muted fs-5">
            We reached here with our hard work and dedication
          </p>
        </div>

        {/* Stats */}
        <div className="row g-4 justify-content-center">
          {stats.map((stat, index) => (
            <div className="col-6 col-md-3" key={index}>
              <div className="border rounded shadow-sm py-4 bg-light h-100">
                <h3 className="fw-bold text-dark display-6">
                  <CountUp start={0} end={stat.number} duration={2.5} separator="," />
                </h3>
                <p className="text-secondary mt-2 mb-0 fs-6">{stat.label}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default AchievementsSection;
