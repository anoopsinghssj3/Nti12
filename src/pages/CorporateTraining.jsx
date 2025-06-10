// import React from 'react'
import CorporateTrainingForm from '../corporate_traning_pages/CorporateTrainingForm'
import Corporate_traning_data from '../corporate_traning_pages/Corporate_traning_data'
import OurLearners from '../home_pages/OurLearners'
import FeatureCards from '../corporate_traning_pages/FeatureCards'
import DFCSection from '../corporate_traning_pages/DFCSection'
import GEGSection from '../home_pages/GEGSection'
import OurSuccess from '../corporate_traning_pages/OurSuccess'
import FAQSection from '../corporate_traning_pages/FAQSection'

function CorporateTraining() {
    return (
        <>
            <div className="corporate-traning gap-3">
                <div>
                    <CorporateTrainingForm /></div>
                <div>
                    <h2 className="text-center mb-4 learners-underline">Our Placement Partners</h2>
                    <OurLearners /></div>
                <div>   <Corporate_traning_data /></div>
                <div>   <FeatureCards /></div>
                <div><DFCSection /></div>
                <div className='mb-4'> <GEGSection /></div>

                <div><OurSuccess /></div>
                <div><FAQSection /></div>
            </div>
        </>
    )
}

export default CorporateTraining