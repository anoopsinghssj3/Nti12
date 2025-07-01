import React from "react";

const AchievementsSection = () => {
  const stats = [
    { number: "2,245,341", label: "Members" },
    { number: "46,328", label: "Clubs" },
    { number: "828,867", label: "Event Bookings" },
    { number: "1,926,436", label: "Payments" },
  ];

  return (
    <section className="achievements-section">
      <div className="achievements-content">
        <div className="achievements-heading">
          <div className="achievements-text">
            <h2 className="achievements-title">
              <span className="title-main">Helping a local </span>
              <span className="title-accent">business reinvent itself</span>
            </h2>
          </div>
          <p className="achievements-description">
            We reached here with our hard work and dedication
          </p>
        </div>
        <div className="achievements-counts">
          <div className="counts-row">
            <div className="stat-item">
              <div className="stat-details">
                <div className="stat-number">{stats[0].number}</div>
                <div className="stat-label">{stats[0].label}</div>
              </div>
            </div>
            <div className="stat-item">
              <div className="stat-details">
                <div className="stat-number">{stats[1].number}</div>
                <div className="stat-label">{stats[1].label}</div>
              </div>
            </div>
          </div>
          <div className="counts-row">
            <div className="stat-item">
              <div className="stat-details">
                <div className="stat-number">{stats[2].number}</div>
                <div className="stat-label">{stats[2].label}</div>
              </div>
            </div>
            <div className="stat-item">
              <div className="stat-details">
                <div className="stat-number">{stats[3].number}</div>
                <div className="stat-label">{stats[3].label}</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AchievementsSection;
