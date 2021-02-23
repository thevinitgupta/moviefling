import React from 'react';
import "./Profile.css"

function Profile({profileDetails}) {
  const backgroundUrl = profileDetails?.profile_path || profileDetails?.poster_path;
  const title = profileDetails?.name || profileDetails?.title;
    return (
        <div className="profile" style={backgroundUrl && {backgroundImage : `url("https://image.tmdb.org/t/p/original/${backgroundUrl}")` }}>
            
          <div className="profile__name">{title}</div>  
        </div>
    )
}

export default Profile;
