import React from 'react'
import { Link } from 'react-router-dom'
import AddBox from '@material-ui/icons/AddBox'
import Assignment from '@material-ui/icons/Assignment'
import PieChart from '@material-ui/icons/PieChart'


import * as Survey from 'survey-react'
import 'survey-react/survey.css'


function Home() {



    return (
        <div className='background-card'>
            <Link to='' className='home-buttons'>
                <AddBox color='primary' fontSize='large' />
                <h2 className='home-label'>Bug your friends<br></br>with endless questions!</h2>
                <h2 className='home-label'> </h2>
            </Link>
            <Link to='/surveys' className='home-buttons'>
                <Assignment color='primary' fontSize='large' />
                <h2 className='home-label'>Check out your surveys</h2>
            </Link>
            <Link to='' className='home-buttons'>
                <PieChart fontSize='large'/>
                <h2 className='home-label'>Past Survey Results</h2>
            </Link>
        </div>
    )
}

export default Home
