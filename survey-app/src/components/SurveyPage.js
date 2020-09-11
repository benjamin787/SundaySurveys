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

    console.log('survey', survey)

    // const collectAnswers = () => {
    //     let answerStorage = []
    //     survey_questions.forEach(question => {
    //         answerStorage.push(question.id: survey.getValue(question.id))
    //     })
    //     return answerStorage
    // }
    
    const submitAnswers = (form, event) => {
        event.preventDefault()

        fetch(responseURL, {
            method: 'POST',
            headers: {'Content-Type': 'application/json'},
            // body: JSON.stringify(collectAnswers())
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

    console.log(displaySurvey())
    
    return (
        <div>
            { openSurvey === {}
                ? routerProps.history.push('/')
                : displaySurvey()
            }
            <br/>
            <Link to='/'><button>Cancel</button></Link>
        </div>
    )
}

export default SurveyPage
