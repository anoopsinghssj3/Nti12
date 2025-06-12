import React from 'react';
import '../corporate_traning_pages/DFCSection.css';
import iBilt from "../../src/assets/ibilt.webp"
import accenture from "../../src/assets/accenture.webp"
import adityaBirlaGroup from "../../src/assets/Aditya Birla Group.webp"
import algoscale from "../../src/assets/algoscale.webp"
import bajaj from "../../src/assets/bajaj.webp"
import birlasoft from "../../src/assets/birlasoft.webp"
import csc from "../../src/assets/csc.webp"
import cognizant from "../../src/assets/cognizant.webp"
import hewitt from "../../src/assets/hewitt.webp"
import sopraSteria from "../../src/assets/soprasteria.webp"
import tcs from "../../src/assets/tcs.webp"
import jubilant from "../../src/assets/jubilant.webp"
import infosys from "../../src/assets/infosys.webp"
import ibm from "../../src/assets/ibm.webp"

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
            <img src={client.logo} alt={client.name} />
          </div>
        ))}
      </div>
    </section>
  );
};

export default DFCSection;
