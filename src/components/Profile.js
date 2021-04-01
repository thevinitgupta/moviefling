import React, { useState } from 'react';

import "../css/Profile.css"

function Profile({profileDetails,type}) {
  const [displayDetails,setDisplayDetails] = useState(false);

  //profile details in a single object
  const backgroundUrl = profileDetails?.profile_path || profileDetails?.poster_path;
  const title = profileDetails?.name || profileDetails?.title; 
  const  profile = {
    airedOn : profileDetails?.air_date || profileDetails?.first_air_date,
    id : profileDetails?.id,
    gender : {"0": "Other","1": "Female","2":"Male"},
    averageVote : profileDetails?.vote_average,
    episodes : profileDetails?.episode_count,
    popularity : profileDetails?.popularity,
  }
  

  //person details : https://api.themoviedb.org/3/person/id?api_key=key&language=en-US
  //diff -> if cast_id => person else movie or show
    return (
        <div className="profile" style={backgroundUrl && {backgroundImage : `url("https://image.tmdb.org/t/p/original/${backgroundUrl}")` }} onTouchStart={()=>{setDisplayDetails(true)}} onTouchEnd={()=>{setDisplayDetails(false)}} onMouseEnter={()=>{setDisplayDetails(true)}} onMouseLeave={()=>{setDisplayDetails(false)}}>
          { displayDetails ?
            <div className="card__details">
              <div><strong>{title}</strong></div>
                        
              {/* card details */}
              {profileDetails?.character && <div><strong>Character :</strong>{` ${profileDetails?.character}`}</div>}
              {profileDetails?.gender && <div><strong>Gender :</strong>{` ${profile.gender[profileDetails?.gender]}`}</div>}
              {profile.airedOn && <div><strong>Aired On :</strong>{` ${profile.airedOn}`}</div>}
              {profile.popularity && <div><strong>Popularity :</strong>{` ${profile.popularity}`}</div>}
              {profile.episodes && <div><strong>Episodes :</strong>{` ${profile.episodes}`}</div>}
              {profile.averageVote && <div><strong>Average Vote :</strong>{` ${profile.averageVote}`}</div>}
              </div> :
              <div className="profile__name">{title}</div> 
          }
          
        </div>
    )
}

export default Profile;
