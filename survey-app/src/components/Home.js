import React from 'react'
import { Link } from 'react-router-dom'
import AddBox from '@material-ui/icons/AddBox'
import Assignment from '@material-ui/icons/Assignment'
import PieChart from '@material-ui/icons/PieChart'


import * as Survey from 'survey-react'
import 'survey-react/survey.css'


function Home() {



    return (
        <div>
            <Link to=''>
                <AddBox color='primary' />
                {/* <img src={AddBox} alt='Create Survey' /> */}
                <h2 className='home-label'>Bug your friends with endless questions!</h2>
            </Link>
            <Link to='/surveys'>
                <Assignment color='primary' />
                {/* <img src={Assignment} alt='View Surveys' /> */}
                <h2 className='home-label'>Check out your surveys</h2>
            </Link>
            {/* link to view results, hopefully graphs */}
            <Link to='' >
                <PieChart />
                {/* <img src={PieChart} alt='View Results' /> */}
                <h2 className='home-label'>Past Survey Results</h2>
            </Link>
        </div>
    )
}

export default Home
