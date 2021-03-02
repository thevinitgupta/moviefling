import React, { useState } from 'react';

import "../css/Profile.css"

function Profile({profileDetails,type}) {
  const [displayDetails,setDisplayDetails] = useState(false);
  const backgroundUrl = profileDetails?.profile_path || profileDetails?.poster_path;
  const title = profileDetails?.name || profileDetails?.title;
  const airedOn = profileDetails?.air_date || profileDetails?.first_air_date;
  const id = profileDetails?.id;
  const gender = {"0": "Other","1": "Female","2":"Male"}

  //person details : https://api.themoviedb.org/3/person/id?api_key=key&language=en-US
  //diff -> if cast_id => person else movie or show
    return (
        <div className="profile" style={backgroundUrl && {backgroundImage : `url("https://image.tmdb.org/t/p/original/${backgroundUrl}")` }} onTouchStart={()=>{setDisplayDetails(true)}} onTouchEnd={()=>{setDisplayDetails(false)}} onMouseEnter={()=>{setDisplayDetails(true)}} onMouseLeave={()=>{setDisplayDetails(false)}}>
                    {
                      displayDetails ?
                      <div className="card__details">
                        <div><strong>{title}</strong></div>
                        {profileDetails?.character && <div><strong>Character :</strong>{` ${profileDetails?.character}`}</div>}
                        {profileDetails?.gender && <div><strong>Gender :</strong>{` ${gender[profileDetails?.gender]}`}</div>}
                        {airedOn && <div><strong>Aired On :</strong>{` ${airedOn}`}</div>}
                        {profileDetails?.popularity && <div><strong>Popularity :</strong>{` ${profileDetails?.popularity}`}</div>}
                        {profileDetails?.episode_count && <div><strong>Episodes :</strong>{` ${profileDetails?.episode_count}`}</div>}
                        {profileDetails?.vote_average && <div><strong>Average Vote :</strong>{` ${profileDetails?.vote_average}`}</div>}
                      </div> :
                      <div className="profile__name">{title}</div> 
                    }
          
        </div>
    )
}

export default Profile;
