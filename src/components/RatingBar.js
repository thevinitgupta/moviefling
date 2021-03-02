import React from 'react';
import "../css/RatingBar.css"

function RatingBar({voteAverage}) {

    let rate = (voteAverage/10)*100;
    return (
        <div className="ratingbar">
            <div className="ratingbar__rate" style={{width :`${rate}px`}}></div>
        </div>
    )
}

export default RatingBar
