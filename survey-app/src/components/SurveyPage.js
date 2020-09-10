import React, { useState } from 'react'
import { useForm } from 'react-hook-form'
import { Link } from 'react-router-dom'
import RadioGroup from '@material-ui/core/FormGroup'
import Radio from '@material-ui/core/Radio'
import ListItem from '@material-ui/core/ListItem'
import FormControl from '@material-ui/core/FormControl'
import FormControlLabel from '@material-ui/core/FormControlLabel'
import FormLabel from '@material-ui/core/FormLabel'

const responseURL = 'http://localhost:3000/question_responses'

function SurveyPage({ openSurvey }) {

    const { register, handleSubmit, getValues } = useForm()

    const [choice, setChoice] = useState(0)


    
    const handleChange = (event) => {
        setChoice(event.target.value)
    }

    const displayOptions = () => {
        for (const i in [1, 2, 3, 4]) {
            return ( <FormControlLabel
                value={i}
                label={i}
                labelPlacement='bottom'
                checked={false}
                control={<Radio inputRef={register} />}
            /> )
        }
    }

    const displayQuestions = () => {
        openSurvey.survey_questions.map(question => {
            console.log('question displayed?', question)
            return ( 
                <div>
                    <p>{question.content}</p>
                    <FormControl>
                        <FormLabel>{question.content}</FormLabel>
                        <RadioGroup aria-label='meaning' name={question.id} value={choice} row onChange={handleChange} >
                            {displayOptions()}
                        </RadioGroup>
                    </FormControl>
                </div>
            )
        })
    }

    //         return ( 
    //             <li className='question-li' key={question.id}>
    //                 <label>{question.content}</label>
    //                 <input name={question.id} type='checkbox' ref={register({required: true})} />
    //             </li>
    //         )
    //     })
    // }

    const respondToSubmit = (boolean) => {
        const buttonResponse = boolean
            ? 'Thanks for your submission!'
            : 'Please check that all questions have been answered.'
        return alert(buttonResponse)
    }

    const submitAnswers = (event) => {
        event.preventDefault()
        const answers = getValues()
        console.log(answers)
        const confirmation = fetch(responseURL, {
            method: 'POST',
            headers: {'Content-Type': 'application/json'},
            body: JSON.stringify(answers)
        })
        respondToSubmit(confirmation)
    }
    
    
    return (
        <div>
            <h2>{openSurvey.title}</h2>
            <form className='questions-list'
                onSubmit={submitAnswers}>

                {displayQuestions()}

                {/* <ol>
                    {displayQuestions()}
                </ol> */}
                <button type='submit'>Submit</button>
            </form>
            <br/>
            <Link to='/'><button>Cancel</button></Link>
        </div>
    )
}

export default SurveyPage
