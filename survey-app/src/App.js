import React, { useState, useEffect } from 'react';
import './App.css';
import { Route, Switch } from 'react-router-dom'

import SurveyContainer from './components/SurveyContainer'
import Home from './components/Home'
import SurveyPage from './components/SurveyPage'
import CreatePage from './components/CreatePage'

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
      <div className='background-card'>
        <header><h1>Sunday with the Firooz's</h1></header>
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
              surveys={surveys}
              openSurvey={openSurvey}
              setOpenSurvey={setOpenSurvey}
              {...routerProps}
              />}
          />
          <Route
            path={'/createSurvey'}
            render={routerProps => <CreatePage {...routerProps} />}
          />
        </Switch>
      </div>
    </div>
  );
}

export default App;
