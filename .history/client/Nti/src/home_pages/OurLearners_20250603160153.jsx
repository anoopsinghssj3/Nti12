import React from 'react';
import '../home_styles/OurLearners.css';

export default function OurLearners() {
    const logos = [
        { src: 'https://www.ducatindia.com/_next/image?url=https%3A%2F%2Fadmin.ducatindia.com%2Fclients%2F1717060662910TATA%20Consultancy%20Services.png&w=640&q=75', alt: 'TCS' },
        { src: 'https://www.ducatindia.com/_next/image?url=https%3A%2F%2Fadmin.ducatindia.com%2Fclients%2F1717060632915Jubilant.png&w=640&q=75', alt: 'Jubilant' },
        { src: 'https://www.ducatindia.com/_next/image?url=https%3A%2F%2Fadmin.ducatindia.com%2Fclients%2F1717060642611Infosys.png&w=640&q=75', alt: 'Infosys' },
        { src: 'https://www.ducatindia.com/_next/image?url=https%3A%2F%2Fadmin.ducatindia.com%2Fclients%2F1717060440576Ibilt.png&w=640&q=75', alt: 'iBilt' },
        { src: 'https://www.ducatindia.com/_next/image?url=https%3A%2F%2Fadmin.ducatindia.com%2Fclients%2F1717060458759Accenture.png&w=640&q=75', alt: 'Accenture' },
        { src: 'https://www.ducatindia.com/_next/image?url=https%3A%2F%2Fadmin.ducatindia.com%2Fclients%2F1717060406072Aditya%20Birla%20Group.png&w=640&q=75', alt: 'Aditya Birla' }
    ];

    return (
        <div className="container my-5 our-learners">
            
            <div className="marquee-wrapper">
                <div className="marquee">
                    {[...logos, ...logos].map((logo, idx) => (
                        <img
                            key={idx}
                            src={logo.src}
                            alt={logo.alt}
                            className="logo-img border-1 border border-secondary rounded-2 p-1"
                        />
                    ))}
                </div>
            </div>
        </div>
    );
}
