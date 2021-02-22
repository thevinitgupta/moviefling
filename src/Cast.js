import React from 'react';
import Profile from './Profile';
import "./Cast.css";

function Cast({castDetails}) {
    return (
        
        <div className="cast">
        
        {castDetails?.map((cast,index)=>{
            return (<Profile key={index} profileDetails={cast} number={index}/>)
        })}
        </div>
    )
}

export default Cast
