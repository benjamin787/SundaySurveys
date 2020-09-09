import React from 'react'

import SurveyPage from './SurveyPage'

export default function SurveyCard({ survey }) {


    const openSurvey = () => {
        console.log('clicked')
        return <SurveyPage survey={survey} key={survey.id} />
    }

    return (
        <div onClick={openSurvey} className='survey-card'>
            {/* maybe an icon on left side of card? */}
            <h2 className='survey-title'>{survey.title}</h2>
        </div>
    )
}