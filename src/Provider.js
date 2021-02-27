import React from 'react';
import "./Provider.css";

function Provider({providers}) {
    return (

        <div className="providers">
        {providers && providers.map((provider,index)=>{
            return (
                <div className="provider" key={index}>
                <div className="provider__img">
                    <img src={`https://image.tmdb.org/t/p/original/${provider?.logo_path}`} alt="" loading="lazy"/>
                </div>
                <div className="provider__title">
                    <h3>{provider?.provider_name}</h3>
                </div>
                </div>
            ) 
        })}
            
        </div>
    )
}

export default Provider
