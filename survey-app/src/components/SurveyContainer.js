import React from 'react'
import { Link } from 'react-router-dom'
import SurveyCard from './SurveyCard'

export default function SurveyContainer({ surveys, setOpenSurvey }) {
    
    const displaySurveyCards = () => surveys.map(survey => {
        return <SurveyCard survey={survey} key={survey.id} setOpenSurvey={setOpenSurvey} />
    })

    return (
        <div className='background-card'>
            {displaySurveyCards()}
            <Link to='/' ><button>Cancel</button></Link>
        </div>
    )
}
