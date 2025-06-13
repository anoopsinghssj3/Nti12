import React from 'react';
import "../home_pages/OurPlacementPartners.css"
import iBilt from "../../public/images/ibilt.webp"
import accenture from "../../public/images/accenture.webp"
import adityaBirlaGroup from "../../public/images/Aditya Birla Group.webp"
import algoscale from "../../public/images/algoscale.webp"
import bajaj from "../../public/images/bajaj.webp"
import birlasoft from "../../public/images/birlasoft.webp"
import csc from "../../public/images/csc.webp"
import cognizant from "../../public/images/cognizant.webp"
import hewitt from "../../public/images/hewitt.webp"
import sopraSteria from "../../public/images/soprasteria.webp"
import tcs from "../../public/images/tcs.webp"
import jubilant from "../../public/images/jubilant.webp"
import infosys from "../../public/images/infosys.webp"
import ibm from "../../public/images/ibm.webp"

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


export default function OurPlacementPartners() {
  return (
    <div className="py-5 bg-light our-placement-partners">
      <div className="container ">
        <h2 className="text-center mb-4 learners-underline">Our Placement Partners</h2>
        <div className="row g-2  d-flex justify-content-center">
          {partners.map((partner, index) => (
            <div key={index} className="col-6 col-sm-4 col-md-3 col-lg-2 text-center">
              <div className="bg-white border rounded shadow-sm p-1 h-100 d-flex align-items-center justify-content-center">
                <img
                  src={partner.logo}
                  alt={partner.name}
                  className="img-fluid"
                  style={{ backgroundSize: "contain" }}
                />
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
