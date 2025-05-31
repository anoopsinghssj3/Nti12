import React from 'react';
import './OurPlacementPartners.css';

const partners = [
  { name: 'iBilt', logo: 'image.png' },
  { name: 'CSC', logo: 'csc-logo-freelogovectors.net_.png' },
  { name: 'Accenture', logo: 'Partnership-Creatives--44-.png' },
  { name: 'Aditya Birla Group', logo: 'Aditya_Birla_Group_Logo.svg.png' },
  { name: 'Cognizant', logo: '1712391633-169.avif' },
  { name: 'Hewitt', logo: '1630606671583.jpeg' },
  { name: 'Jubilant FoodWorks', logo: 'jubilant_foodworks_ltd__logo.jpeg' },
  { name: 'Algoscale', logo: '4a1f15442e6f-algoscaletechnologieslogo-1644803841444.avif' },
  { name: 'Bajaj', logo: 'images (1).jpeg' },
  { name: 'IBM', logo: '1698290270-4070-IBM-logo-1972.jpg' },
  { name: 'Sopra Steria', logo: 'https://via.placeholder.com/150x80?text=Sopra+Steria' },
  { name: 'Infosys', logo: 'infosys-logo-infosys-icon-free-free-vector.jpg' },
  { name: 'Birlasoft', logo: 'social-logo.gif' },
  { name: 'TCS', logo: 'TATA-Consultancy-Services-logo-01.png' },
];

const OurPlacementPartners = () => {
  return (
    <section className="partners-section">
      <h2>Our Placement Partners</h2>
      <div className="partners-grid">
        {partners.map((partner, index) => (
          <div className="partner-card" key={index}>
            <img src={partner.logo} alt={partner.name} />
          </div>
        ))}
      </div>
    </section>
  );
};

export default OurPlacementPartners;
