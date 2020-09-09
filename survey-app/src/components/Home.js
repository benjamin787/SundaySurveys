import React from 'react'
import { Switch, Link } from 'react-router-dom'

function Home() {
    return (
        <div>
            <Link to='/surveys'>Answer Surveys</Link>
            {/* <Link to= results/graph stuff */}
            {/* <Link>Create Survey</Link> */}
        </div>
    )
}

export default Home
