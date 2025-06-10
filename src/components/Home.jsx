import Heroes from '../home_pages/Heroes'
import SocialMedia from '../home_pages/SocialMedia'
import ExploreTopPrograms from '../home_pages/ExploreTopPrograms'
import UpcomingBatches from '../home_pages/UpcomingBatches'
import OurLearners from '../home_pages/OurLearners'
// import TopCourses from '../home_pages/TopCourses'
import Testimonials from '../home_pages/Testimonials'
// import FindTheRightCourse from '../home_pages/FindTheRightCourse'
import OurPlacementPartners from '../home_pages/OurPlacementPartners'
import GEGSection from '../home_pages/GEGSection'

export default function Home() {
    return (
        <>
            <Heroes />
            <SocialMedia />
            <ExploreTopPrograms />

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
            <OurLearners />
            <UpcomingBatches />
            <GEGSection />
            {/* <TopCourses /> */}
            <Testimonials />
            {/* <FindTheRightCourse /> */}
            <OurPlacementPartners />

        </>
    )
}
