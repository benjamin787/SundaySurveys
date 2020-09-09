import React from 'react'

import SurveyPage from './SurveyPage'

export default function SurveyCard({ survey }) {

    const check = () => {
        console.log('survey', survey)
        console.log('survey questions', survey.survey_questions)
    }
    check()

    const openSurvey = (event) => {
        return <SurveyPage survey={survey} key={survey.id} />
    }

    return (
        <div onClick={openSurvey()}>
            {/* maybe an icon on left side of card? */}
            <h2 className='survey-title'>{survey.title}</h2>
        </div>
    )
}