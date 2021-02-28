import React, { useEffect, useState } from 'react';
import "./Watch.css";
import Provider from './Provider';

function Watch({id,type}) {
    const [watchWhere,setWatchWhere] = useState({});
    const [searchWatchWhere,setSearchWatchWhere] = useState(false);
    const [country,setCountry] = useState("IN");
    useEffect(()=>{
        if(searchWatchWhere){
        fetchWatchWhere().catch(error=> {
            console.log("Error:",error);
        });
    }
    },[searchWatchWhere]);
    const apiKey = process.env.REACT_APP_TMDB_API_KEY;
    
    const fetchWatchWhere = async function(){
        const resp = await fetch(`https://api.themoviedb.org/3/${type}/${id}/watch/providers?api_key=${apiKey}`);
        const jsonData = await resp.json();
        console.log(jsonData)
        setWatchWhere(jsonData.results[country]);
        setSearchWatchWhere(false)
    }
    return (
        <div className="watch">
            <div className="watch__head">
                <h3>Providers :</h3>
            </div>
            <div className="watch__search">
                <div className="watch__country">
                    <select id="dropdown" onChange={(e)=>{
                        setCountry(e.target.value);
                    }}>
                    <option value="IN">India</option>
                    <option value="AU">Australia</option>
                    <option value="CA">Canada</option>
                    <option value="FR">France</option>
                    <option value="US">USA</option>
                    <option value="GB">UK/Britain</option>
                    <option value="CH">China</option>
                    <option value="IT">Italy</option>
                    <option value="JP">Japan</option>
                    </select>
                </div>
                <div className="watch__search__button">
                    <button className="searchWatchWhere" onClick={()=>{setSearchWatchWhere(true);}}>Search</button>
                </div>
            </div>
            <div className="watch__info">
                {watchWhere ? Object.entries(watchWhere).slice(1).map((provider,index)=> {
                    return (
                        <div key={index}>
                        <h3>{`${provider[0]} :`}</h3>
                        <Provider providers={provider[1]}/>
                        </div>
                        )
                }):
                <div className="watch__error">
                    <h3>Not available in the country!</h3>
                </div>
                }
                </div>
        </div>
    )
}

export default Watch
