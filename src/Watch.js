import React, { useEffect, useState } from 'react';
import "./Watch.css";
import Profiles from './Profiles';

function Watch({id,type}) {
    const [watchWhere,setWatchWhere] = useState({});
    const [searchWatchWhere,setSearchWatchWhere] = useState(false);
    //example api request -> https://api.themoviedb.org/3/movie/345/watch/providers?api_key=api_key
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
        setWatchWhere(jsonData.results.IN);
    }
    // Object.entries(watchWhere.IN).map((service,index)=>{
    //     console.log(watchWhere)
    //     if(service==="buy"||service==="flatrate"||service==="rent")
    //     return (<Profiles profilesDetails={service}/>);
    //     else return null;
    //     })
    return (
        <div className="watch">
            <div className="watch__head">
                <h3>Providers :</h3>
            </div>
            <div className="watch__info">
                {!searchWatchWhere && <div className="searchWatchWhere" onClick={()=>{
                    setSearchWatchWhere(true);
                }}>Search Providers</div>}
                {watchWhere && Object.entries(watchWhere).slice(1).map((provider,index)=> {
                    console.log(provider[0]," here ->",provider[1])
                    return (
                        <div>
                        <h3>{`${provider[0]} :`}</h3>
                        <Profiles profilesDetails={provider[1]}/>
                        </div>
                        )
                })
                }
            </div>
        </div>
    )
}

export default Watch
