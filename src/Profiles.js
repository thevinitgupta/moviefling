import React from 'react';
import Profile from './Profile';
import "./Profiles.css";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";


function Profiles({profilesDetails}) {
    const settings = {
        dots: false,
        infinite: true,
        speed: 1000,
        slidesToShow: 3,
        slidesToScroll: 2
      };
    return (
        
        <div className="cast">
        <Slider {...settings}>
        {profilesDetails?.map((profileData,index)=>{
            return (<div key={index}><Profile  profileDetails={profileData} number={index}/></div>)
        })}
        </Slider>
        </div>
        
    )
}

export default Profiles;
