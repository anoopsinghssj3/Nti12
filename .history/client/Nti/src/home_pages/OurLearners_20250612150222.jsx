import React from 'react';
import '../home_pages/OurLearners.css';

export default function OurLearners() {

    const clients = [
        { name: 'iBilt', logo: iBilt },
        { name: 'Accenture', logo: accenture },
        { name: 'Aditya Birla Group', logo: adityaBirlaGroup },
        { name: 'Bajaj', logo: bajaj },
        { name: 'Birlasoft', logo: birlasoft },
        { name: 'CSC', logo: csc },
        { name: 'Hewitt', logo: hewitt },
        { name: 'IBM', logo: ibm },
        { name: 'Sopra Steria', sopraSteria },
        { name: 'Jubilant FoodWorks', logo: jubilant },
        { name: 'Infosys', logo: infosys },
        { name: 'Algoscale', logo: algoscale },
        { name: 'Cognizant', logo: cognizant },
        { name: 'TCS', logo: tcs },
    ];


    return (
        <div className="container my-5 our-learners">

            <div className="marquee-wrapper">
                <div className="marquee">
                    {[...logos, ...logos].map((logo, idx) => (
                        <img
                            key={idx}
                            src={clients.src}
                            alt={clients.alt}
                            className="logo-img border-1 border border-secondary rounded-2 p-1"
                        />
                    ))}
                </div>
            </div>
        </div>
    );
}
