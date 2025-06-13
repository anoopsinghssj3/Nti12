import React from 'react';
import '../home_pages/OurLearners.css';
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


export default function OurLearners() {

    return (
        <div className="container my-5 our-learners">

            <div className="marquee-wrapper">
                <div className="marquee">
                    {[...clients, ...clients].map((clients, idx) => (
                        <img
                            key={idx}
                            src={clients.logo}
                            alt={clients.alt}
                            className="logo-img border-1 border border-secondary rounded-2 p-1"
                        />
                    ))}
                </div>
            </div>
        </div>
    );
}
