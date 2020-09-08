import React from 'react'

import SurveyCard from './SurveyCard'

export default function SurveyContainer({ surveys }) {
    
    const displaySurveyCards = () => surveys.map(survey => {
        return <SurveyCard survey={survey} />
    })

    return (
        <div className='survey-container'>
            {displaySurveyCards}
        </div>
    )
}