import React from 'react'

function SurveyPage({ survey }) {

    
    
    return (
        <div>
            <ol className='questions-list'>
                {survey.survey_questions.map(question => {
                    return <li className='question-li' key={question.id}>{question.content}</li>
                })}
            </ol>        
        </div>
    )
}

export default SurveyPage
