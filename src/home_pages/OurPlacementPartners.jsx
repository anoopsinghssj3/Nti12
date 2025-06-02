import React from 'react';

const partners = [
  { name: 'iBilt', logo: 'https://www.ducatindia.com/_next/image?url=https%3A%2F%2Fadmin.ducatindia.com%2Fclients%2F1717060440576Ibilt.png&w=640&q=75' },

  { name: 'CSC', logo: 'https://www.ducatindia.com/_next/image?url=https%3A%2F%2Fadmin.ducatindia.com%2Fclients%2F1717060501852CSC.png&w=640&q=75' },

  { name: 'Accenture', logo: 'https://www.ducatindia.com/_next/image?url=https%3A%2F%2Fadmin.ducatindia.com%2Fclients%2F1717060458759Accenture.png&w=640&q=75' },
  { name: 'Aditya Birla Group', logo: 'https://www.ducatindia.com/_next/image?url=https%3A%2F%2Fadmin.ducatindia.com%2Fclients%2F1717060406072Aditya%20Birla%20Group.png&w=640&q=75' },
  { name: 'Cognizant', logo: 'https://www.ducatindia.com/_next/image?url=https%3A%2F%2Fadmin.ducatindia.com%2Fclients%2F1717060518401Cognizant%20Logo.png&w=640&q=75' },
  { name: 'Hewitt', logo: 'https://www.ducatindia.com/_next/image?url=https%3A%2F%2Fadmin.ducatindia.com%2Fclients%2F1717060528527Hewitt.png&w=640&q=75' },
  { name: 'Jubilant FoodWorks', logo: 'https://www.ducatindia.com/_next/image?url=https%3A%2F%2Fadmin.ducatindia.com%2Fclients%2F1717060632915Jubilant.png&w=640&q=75' },
  { name: 'Algoscale', logo: 'https://www.ducatindia.com/_next/image?url=https%3A%2F%2Fadmin.ducatindia.com%2Fclients%2F1717060469084Algoscale.png&w=640&q=75' },
  { name: 'Bajaj', logo: 'https://www.ducatindia.com/_next/image?url=https%3A%2F%2Fadmin.ducatindia.com%2Fclients%2F1717060480490Bajaj.png&w=640&q=75' },
  { name: 'IBM', logo: 'https://www.ducatindia.com/_next/image?url=https%3A%2F%2Fadmin.ducatindia.com%2Fclients%2F1717060536963IBM.png&w=640&q=75' },
  { name: 'Sopra Steria', logo: 'https://www.ducatindia.com/_next/image?url=https%3A%2F%2Fadmin.ducatindia.com%2Fclients%2F1717060621133Steria.png&w=640&q=75' },
  { name: 'Infosys', logo: 'https://www.ducatindia.com/_next/image?url=https%3A%2F%2Fadmin.ducatindia.com%2Fclients%2F1717060642611Infosys.png&w=640&q=75' },
  { name: 'Birlasoft', logo: 'https://www.ducatindia.com/_next/image?url=https%3A%2F%2Fadmin.ducatindia.com%2Fclients%2F1717060491701Birlasoft.png&w=640&q=75' },
  { name: 'TCS', logo: 'https://www.ducatindia.com/_next/image?url=https%3A%2F%2Fadmin.ducatindia.com%2Fclients%2F1717060662910TATA%20Consultancy%20Services.png&w=640&q=75' },
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
