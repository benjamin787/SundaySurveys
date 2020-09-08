import React, { useState, useEffect } from 'react';
import './App.css';

import SurveyContainer from './components/SurveyContainer'

const surveyURL = 'http://localhost:3000/surveys'

function App() {

  const [surveys, setSurveys] = useState({})

  useEffect(() => 
      fetch(surveyURL)
        .then(response => response.json())
        .then(surveys => setSurveys(surveys))
        // .then(({surveys}) => console.log(surveys))
  , []) 
  
  
  

  return (
    <div className="App">
      <h1>Hi</h1>
      <SurveyContainer surveys={surveys} />
    </div>
  );
}

export default App;
