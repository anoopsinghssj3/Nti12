import React from 'react';
import '../corporate_traning_styles/DFCSection.css';



const clients = [
  { name: 'iBilt', logo: 'image.png' },
  { name: 'Accenture', logo: 'Partnership-Creatives--44-.png' },
  { name: 'Aditya Birla Group', logo: 'Aditya_Birla_Group_Logo.svg.png' },
  { name: 'Bajaj', logo: 'images (1).jpeg' },
  { name: 'Birlasoft', logo: 'social-logo.gif' },
  { name: 'CSC', logo: 'csc-logo-freelogovectors.net_.png' },
  { name: 'Hewitt', logo: '1630606671583.jpeg' },
  { name: 'IBM', logo: '1698290270-4070-IBM-logo-1972.jpg' },
  { name: 'Sopra Steria', logo: 'sopra_steria_logo.webp' },
  { name: 'Jubilant FoodWorks', logo: 'jubilant_foodworks_ltd__logo.jpeg' },
  { name: 'Infosys', logo: 'infosys-logo-infosys-icon-free-free-vector.jpg' },
  { name: 'Algoscale', logo: '4a1f15442e6f-algoscaletechnologieslogo-1644803841444.avif' },
  { name: 'Cognizant', logo: '1712391633-169.avif' },
  { name: 'TCS', logo: 'TATA-Consultancy-Services-logo-01.png' },
];

const DFCSection = () => {
  return (
    <section className="dfc-container mb-5">
      <div className="dfc-content">
        <h1>NTI FOR CORPORATES</h1>
        <h2>Corporate Training Solution that Accelerates Business!</h2>
        <p>
          We believe in interactive learning that is 7 times more effective than passive learning. Today, every company requires digital transformation and they are looking for effective ways to minimize the skills gap. We help corporates with best training programs to align cutting-edge technologies and employees together.
        </p>
        <div className="dfc-buttons">
          <button className="btn btn-orange">ASK A DEMO</button>
          <button className="btn btn-blue">EXPLORE MORE</button>
        </div>
      </div>

      <div className="dfc-logos">
        {clients.map((client, index) => (
          <div key={index} className="dfc-logo-card">
            <img src={client.logo} alt={client.name} />
          </div>
        ))}
      </div>
    </section>
  );
};

export default DFCSection;
