import React, { useState, useEffect } from 'react';
import './App.css';

import SurveyContainer from './components/SurveyContainer'

const surveyURL = 'http://localhost:3000/surveys'

function App() {

  const [surveys, setSurveys] = useState([])

  useEffect(() => {

    async function fetchData() {
      let promise = await fetch(surveyURL)
      let surveyData = await promise.json()
      console.log('fetch data', surveyData)
      setSurveys(surveyData)
    }
    fetchData()
  }, []
  )
  
  
  

  return (
    <div className="App">
      <h1>Hi</h1>
      <SurveyContainer surveys={surveys} />
    </div>
  );
}

export default App;
