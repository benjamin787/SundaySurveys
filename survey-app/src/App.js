import React, { useState, useEffect } from 'react';
import './App.css';
import { Route, Switch } from 'react-router-dom'
import Container from '@material-ui/core/Container'


import SurveyContainer from './components/SurveyContainer'
import Home from './components/Home'
import SurveyPage from './components/SurveyPage'

const surveyURL = 'http://localhost:3000/surveys'

function App() {

  const [surveys, setSurveys] = useState([])
  const [openSurvey, setOpenSurvey] = useState({})

  useEffect(() => {
    async function fetchData() {
      let promise = await fetch(surveyURL)
      let surveyData = await promise.json()
      setSurveys(surveyData)
    }
    fetchData()
  }, [])
  

  return (
    <div className="App">
      <Container maxWidth='sm'>
        <h1>Sunday with the Firooz's</h1>
        <Switch>
          <Route exact path='/' component={Home} />
          <Route 
            exact path='/surveys'
            render={routerProps =>
              <SurveyContainer
              surveys={surveys}
              setOpenSurvey={setOpenSurvey}
              {...routerProps}
              />}
              />
          <Route
            path={`/surveys/${openSurvey.id}`}
            render={routerProps => <SurveyPage
              openSurvey={openSurvey}
              />}
              />
          {/* <SurveyContainer surveys={surveys} /> */}
          {/* redirect back to home, with error message - like 'survey already completed' */}
        </Switch>
      </Container>
    </div>
  );
}

export default App;
