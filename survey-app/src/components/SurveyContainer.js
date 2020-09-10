import React from 'react'

import SurveyCard from './SurveyCard'

export default function SurveyContainer({ surveys, setOpenSurvey }) {
    
    const displaySurveyCards = () => surveys.map(survey => {
        return <SurveyCard survey={survey} key={survey.id} setOpenSurvey={setOpenSurvey} />
    })

    return (
        <div className='survey-container'>
            {displaySurveyCards()}
        </div>
    )
}
