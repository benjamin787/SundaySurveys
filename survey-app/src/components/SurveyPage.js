import React from 'react'
import { useForm } from 'react-hook-form'

const responseURL = 'http://localhost:3000/question_responses'

function SurveyPage({ survey }) {

    const { register, handleSubmit, getValue } = useForm()

    const displayQuestions = () => {
        survey.survey_questions.map(question => {
            return ( 
                <li className='question-li' key={question.id}>
                    <label>{question.content}</label>
                    <input name={question.id} type='checkbox' ref={register({required: true})} />
                </li>
            )
        })
    }

    const submitAnswers = async (event) => {
        event.preventDefault()
        const answers = getValue()
        const promise = await fetch(responseURL, {
            method: 'POST',
            headers: {'Content-Type': 'application/json'},
            body: JSON.stringify(answers)
        })
        const confirmation = await promise.json()
        const buttonResponse = confirmation
            ? 'Thanks for your submission!'
            : 'Please check that all questions have been answered.'
        return <button>{buttonResponse}</button>
        // add onclick redirect or link somehow? 
    }
    
    return (
        <div>
            <h2>{survey.title}</h2>
            <form>
                <ol className='questions-list'>
                    {displayQuestions()}
                </ol>
                <button type='submit' onSubmit={handleSubmit(submitAnswers)}>Submit</button>
            </form>
        </div>
    )
}

export default SurveyPage
