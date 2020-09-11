import React from 'react'
import { Link } from 'react-router-dom'
import AssessmentIcon from '@material-ui/icons/Assessment'


import SurveyPage from './SurveyPage'

export default function SurveyCard({ survey, setOpenSurvey }) {

    const takeSurvey = () => {
        console.log('clicked')
        setOpenSurvey(survey)
        // return <SurveyPage survey={survey} key={survey.id} />
    }



    return (
        <div onClick={takeSurvey} className='survey-card'>
            <Link to={`/surveys/${survey.id}`} >
                <AssessmentIcon />
                <button className='survey-title'>{survey.title}</button>
            </Link>
        </div>
    )
}