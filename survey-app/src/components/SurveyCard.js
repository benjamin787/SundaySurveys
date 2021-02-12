import React from 'react'
import { Link } from 'react-router-dom'
import AssessmentIcon from '@material-ui/icons/Assessment'

export default function SurveyCard({ survey, setOpenSurvey }) {

    const takeSurvey = () => setOpenSurvey(survey)

    return (
        <span onClick={takeSurvey} className='survey-card'>
            <div className=''>
                <Link to={`/surveys/${survey.id}`} >
                    <AssessmentIcon fontSize='large' />
                    <button className='survey-title'>{survey.title}</button>
                </Link>
            </div>
        </span>
    )
}