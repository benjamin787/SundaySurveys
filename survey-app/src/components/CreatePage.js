import React, { useState } from 'react'
import { Link } from 'survey-react'

const createURL = 'http://localhost:3000/surveys'
let questionList = []

function CreatePage({ routerProps }) {

    const [title, setTitle] = useState('')
    const [question1, setQuestion1] = useState({})
    const [question2, setQuestion2] = useState({})
    const [question3, setQuestion3] = useState({})
    const [question4, setQuestion4] = useState({})
    
    const onChangeTitle = (e) => setTitle(e.target.value)
    const onChangeQuestion1 = (e) => setQuestion1(e.target.value)
    const onChangeQuestion2 = (e) => setQuestion2(e.target.value)
    const onChangeQuestion3 = (e) => setQuestion3(e.target.value)
    const onChangeQuestion4 = (e) => setQuestion4(e.target.value)

    const handleSubmit = (e) => {
        e.preventDefault()
        
        questionList = [question1, question2, question3, question4].map(question => {
            return (
                {
                name: `${question.id}`,
                title: `${question1}`,
                isRequired: true,
                type: 'radiogroup',
                choices: [1,2,3,4]
                }
            )
        })
        const data = { title: questionList }

        fetch(createURL, {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(data)
        })
    }



    
    return (
        <div>
            <form>
                <input placeholder='Survey Title' 
                    value={title}
                    onChange={onChangeTitle}
                    required
                />
                <ol>
                    <li>
                        <textarea
                            placeholder='What would you like to know?'
                            value={question1}
                            onChange={onChangeQuestion1}
                            required />
                    </li>
                    <li>
                        <textarea
                            placeholder='What would you like to know?'
                            value={question2}
                            onChange={onChangeQuestion2}
                            required />
                    </li>
                    <li>
                        <textarea
                            placeholder='What would you like to know?'
                            value={question3}
                            onChange={onChangeQuestion3}
                            required />
                    </li>
                    <li>
                        <textarea
                            placeholder='What would you like to know?'
                            value={question4}
                            onChange={onChangeQuestion4}
                            required />
                    </li>
                </ol>
                <button type='submit' onSubmit={handleSubmit}>
                    Bundle Add Your Survey!
                </button>
            </form>
            <Link to='/'><button>Cancel</button></Link>
        </div>
    )
}

export default CreatePage


