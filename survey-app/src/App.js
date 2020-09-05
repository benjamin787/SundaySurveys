import React, { useState } from 'react';
import './App.css';

const surveyURL = 'http://localhost:3000/surveys'

function App() {

  const [surveys, setSurveys] = useState({})

  const componentDidMount = () => {
    fetch(surveyURL)
      .then(response => response.json())
      .then(() => setSurveys(surveys))
  }
  
  return (
    <div className="App">
      
    </div>
  );
}

export default App;
