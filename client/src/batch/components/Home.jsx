import Heroes from '../home_pages/Heroes'
import SocialMedia from '../home_pages/SocialMedia'
import ExploreTopPrograms from '../home_pages/ExploreTopPrograms'
import UpcomingBatches from '../home_pages/UpcomingBatches'
import OurLearners from '../home_pages/OurLearners'
import Testimonials from '../home_pages/Testimonials'
import OurPlacementPartners from '../home_pages/OurPlacementPartners'
import GEGSection from '../home_pages/GEGSection'
import "./Home.css"

export default function Home() {
    return (
        <>
            <Heroes />
            {/* <SocialMedia /> */}
            <ExploreTopPrograms />

            <div className="text-center mt-5 container py-5 home">
                <div className="bg-animated-gradient">
                    <h3 className="fw-bold mb-0 position-relative custom-heading">
                        Our <span className="text-warning">Learners Work At</span>
                    </h3>
                </div>

                <p className="mx-auto " style={{ maxWidth: '600px' }}>
                    Ducat learners work at some of the leading and innovative organizations of today, solving core business problems.
                </p>
            </div>
            <OurLearners />
            <UpcomingBatches />
            <GEGSection />
            <Testimonials />
            <OurPlacementPartners />

        </>
    )
}
