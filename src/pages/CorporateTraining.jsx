import React from 'react'
import CorporateTrainingForm from '../corporate_traning_pages/CorporateTrainingForm'
import Corporate_traning_data from '../corporate_traning_pages/Corporate_traning_data'
import OurLearners from '../home_pages/OurLearners'
import FeatureCards from '../corporate_traning_pages/FeatureCards'
import DFCSection from '../corporate_traning_pages/DFCSection'


function CorporateTraining() {
    return (
        <>
            <CorporateTrainingForm />
            <OurLearners />
            <Corporate_traning_data />
            <FeatureCards/>
            <DFCSection/>
        </>
    )
}

export default CorporateTraining