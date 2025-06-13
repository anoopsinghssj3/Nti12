import React from 'react';
import './MeetTeam.css'; // Keep for avatar style

const teamMembers = [
  {
    initials: 'RK',
    name: 'Mr. Ravi Kumar Mishra',
    role: 'Founder & CEO',
  },
  {
    initials: 'SS',
    name: 'Ms. Sunita Sharma',
    role: 'Head of Academics',
  },
  {
    initials: 'RS',
    name: 'Mr. Rajeev Singh',
    role: 'Placement Director',
  },
];

const MeetTeam = () => {
  return (
    <div className="py-5 bg-light text-center team-section">
      <div className="container">
        <h2 className="text-primary fw-bold mb-5">Meet Our Core Team</h2>
        <div className="row justify-content-center g-4">
          {teamMembers.map((member, index) => (
            <div key={index} className="col-md-4 col-sm-6">
              <div className="card shadow h-100 p-4">
                <div className="avatar-circle mx-auto mb-3">{member.initials}</div>
                <h5 className="fw-semibold text-dark">{member.name}</h5>
                <p className="text-primary small mb-0">{member.role}</p>
                <img src="" alt="" />
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default MeetTeam;
