import React from 'react';
import '../corporate_traning_pages/DFCSection.css';
import iBilt from "/public/images/ibilt.webp"
import accenture from "/public/images/accenture.webp"
import adityaBirlaGroup from "/public/images/Aditya Birla Group.webp"
import algoscale from "/public/images/algoscale.webp"
import bajaj from "/public/images/bajaj.webp"
import birlasoft from "/public/images/birlasoft.webp"
import csc from "/public/images/csc.webp"
import cognizant from "/public/images/cognizant.webp"
import hewitt from "/public/images/hewitt.webp"
import sopraSteria from "/public/images/soprasteria.webp"
import tcs from "/public/images/tcs.webp"
import jubilant from "/public/images/jubilant.webp"
import infosys from "/public/images/infosys.webp"
import ibm from "/public/images/ibm.webp"

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
            <img src={client.logo} alt={client.name} loading="lazy"/>
          </div>
        ))}
      </div>
    </section>
  );
};

export default DFCSection;
