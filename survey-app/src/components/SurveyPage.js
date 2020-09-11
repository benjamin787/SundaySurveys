import React, { useEffect } from 'react'
import { Link } from 'react-router-dom'
import * as Survey from 'survey-react'
import 'survey-react/survey.css'

const responseURL = 'http://localhost:3000/question_responses'

function SurveyPage({ openSurvey, setOpenSurvey, routerProps }) {

    const { survey_questions } = openSurvey


    const makeQuestions = () => {
        return survey_questions.map(question => {
            return (
                { name: `${question.id}`,
                title: `${question.content}`,
                isRequired: true,
                type: 'radiogroup',
                choices: [1,2,3,4]
                }
            )
        })
    }

    const makeJSON = () => {
        return ( {
            title: openSurvey.title,
            type: 'survey',
            elements: makeQuestions()
        })
    }
    
    const survey = new Survey.Model(makeJSON())
    
    const submitAnswers = (form, event) => {
        console.log(form)
        fetch(responseURL, {
            method: 'POST',
            headers: {'Content-Type': 'application/json'},
            body: JSON.stringify(form)
        })
        setOpenSurvey({})
    }
    
    const displaySurvey = () => {
        return ( 
            <Survey.Survey
                key={openSurvey.id}
                model={survey}
                onComplete={submitAnswers}
                questionsOnPageMode='singlePage'
                navigateToUrl='/'

            />
        )
    }
    
    return (
        <div className='background-card'>
            { openSurvey === {}
                ? routerProps.history.push('/')
                : displaySurvey()
            }
            <Link to='/'><button>Cancel</button></Link>
        </div>
    )
}

export default SurveyPage
