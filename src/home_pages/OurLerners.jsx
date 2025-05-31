import React from 'react';
import '../home_styles/OurLerners.css';

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
            <div className="text-center mt-5">
                <h3 className="mb-3">
                    <strong className="learners-underline">
                        OUR <span className="">LEARNERS WORK AT</span>
                    </strong>
                </h3>

                <p className="mx-auto " style={{ maxWidth: '600px' }}>
                    Ducat learners work at some of the leading and innovative organizations of today, solving core business problems.
                </p>
            </div>

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
