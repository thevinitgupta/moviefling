import React from 'react';
import Profile from './Profile';
import "./Profiles.css";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";


function Profiles({profilesDetails}) {
    const settings = {
        dots: false,
        lazyLoad: true,
        infinite: true,
        autoplay: true,
        speed: 1000,
        autoplaySpeed: 4000,
        slidesToShow: 3,
        slidesToScroll: 2,
        responsive: [
            {
              breakpoint: 1024,
              settings: {
                slidesToShow: 3,
                slidesToScroll: 3,
                infinite: true,
                dots: true
              }
            },
            {
              breakpoint: 850,
              settings: {
                slidesToShow: 2,
                slidesToScroll: 2,
                initialSlide: 2
              }
            },
            {
              breakpoint: 600,
              settings: {
                slidesToShow: 1,
                slidesToScroll: 1
              }
            }
          ],
          adaptiveHeight: true,
          cssEase: "ease-in"
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
