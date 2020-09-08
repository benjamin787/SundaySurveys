import React from 'react'

export default function SurveyCard({ survey }) {
    return (
        <div>
            {/* maybe an icon on left side of card? */}
            <h2>{survey.title}</h2>
        </div>
    )
}