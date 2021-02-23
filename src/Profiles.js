import React from 'react';
import Profile from './Profile';
import "./Profiles.css"

function Profiles({profilesDetails}) {

    return (
        
        <div className="cast">
        {profilesDetails?.map((cast,index)=>{
            return (<Profile key={index} profileDetails={cast} number={index}/>)
        })}
        </div>
        
    )
}

export default Profiles;
