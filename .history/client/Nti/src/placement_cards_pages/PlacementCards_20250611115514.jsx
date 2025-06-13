import React from 'react';
import './PlacementCards.css';

const placementData = [
    {
        name: 'Ashutosh Kumar Jha',
        profile: "Program Analyst",
        package: '8.5 LPA',
        company: 'EbixCash',
        image: 'https://ntitechacademy.com/wp-content/uploads/2024/09/abhay-kamde-23-9.jpg',
    },
    {
        name: 'Lovekush',
        profile: 'Software Developer',
        package: '3.5 LPA',
        company: 'MS Technology',
        image: 'https://via.placeholder.com/150',
    },
    {
        name: 'Sachin Charkhwal',
        profile: 'Web Designer',
        package: '2 LPA',
        company: 'Paytel Financial Technologies P.Ltd.',
        image: 'https://via.placeholder.com/150',
    },
    // Add more...
];

export default function PlacementCards() {
    return (
        <div className="placement-section">
            <div className="placement-container">
                {placementData.map((student, index) => (
                    <div className="placement-card" key={index}>
                        <div className="placement-img-wrapper">
                            <img src={student.image} alt={student.name} className="placement-avatar" />
                        </div>
                        <h5 className="placement-name">{student.name}</h5>
                        <p><span className="label">Job Profile :</span> {student.profile}</p>
                        <p><span className="label">Package :</span> {student.package || 'N/A'}</p>
                        <p><span className="label">Company :</span> {student.company}</p>
                    </div>
                ))}
            </div>
        </div>
    );
}
