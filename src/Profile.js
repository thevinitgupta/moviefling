import React from 'react';
import "./Profile.css"

function Profile({profileDetails}) {
    return (
        <div className="profile" style={profileDetails?.profile_path && {background : `url("https://image.tmdb.org/t/p/original/${profileDetails?.profile_path}")`, backgroundRepeat : "no-repeat",backgroundSize:"cover" }}>
            
          <div className="profile__name">{profileDetails?.name}</div>  
        </div>
    )
}

export default Profile;
