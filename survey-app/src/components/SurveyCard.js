import React from 'react'

export default function SurveyCard({ survey }) {

    const check = () => {
        console.log('survey', survey)
        console.log('survey questions', survey.survey_questions)
    }
    check()

    return (
        <div>
            {/* maybe an icon on left side of card? */}
            <h2 className='survey-title'>{survey.title}</h2>
            <ol className='questions-list'>
                {survey.survey_questions.map(question => {
                    return <li className='question-li' key={question.id}>{question.content}</li>
                })}
            </ol>
        </div>
    )
}