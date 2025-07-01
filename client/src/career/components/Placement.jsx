import React from 'react';
import "../styles/Placement.css";
import PlacementCards from '../placement_cards_pages/PlacementCards';
import OurLearners from '../home_pages/OurLearners';

const Placement = () => {
    return (
        <>

            <div className="text-center mt-5 placement-title title p-2">
                <h3 className="mb-3 ">
                    Best placements offered
                </h3>
                <h6>We provide best career guidance along with appropriate placements.
                </h6>

            </div>
            
            <PlacementCards />

            <div className="py-5 bg-light our-placement-partners">
                <div className="container">
                    <h2 className="text-center mb-4 learners-underline">Our Placement Partners</h2>
                    <OurLearners />
                </div>
            </div>
        </>
    );
};

export default Placement;
