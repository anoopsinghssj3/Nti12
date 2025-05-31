import Heroes from '../home_pages/Heroes'
import SocialMedia from '../home_pages/SocialMedia'
import ExploreTopPrograms from '../home_pages/ExploreTopPrograms'
import UpcomingBatches from '../home_pages/UpcomingBatches'
import OurLerners from '../home_pages/OurLerners'
import TopCourses from '../home_pages/TopCourses'
import Testimonials from '../home_pages/Testimonials'

export default function Home() {
    return (
        <>
            <Heroes />
            <SocialMedia />
            <ExploreTopPrograms />
            <OurLerners />
            <UpcomingBatches />
            <TopCourses />
            <Testimonials/>
        </>
    )
}
