import React , {useState,useEffect} from 'react';
import Profiles from './Profiles';
import "./Detail.css"

function Detail({match}) {
    useEffect(()=>{
        fetchDetails().catch(error=> {
            console.log("Error:",error);
        });
        console.log(match)
    },[])
    const {id,type} = match.params;
    const apiKey = process.env.REACT_APP_TMDB_API_KEY;
    const [details,setDetails] = useState({});
    const fetchDetails = async ()=>{
        const data = await fetch(`http://api.themoviedb.org/3/${type}/${id}?api_key=${apiKey}&language=en-US&append_to_response=credits,similar`);
        const jsonData = await data.json();
        console.log(jsonData)
        setDetails(jsonData)
    };
    const backgroundUrl = details?.backdrop_path || details?.poster_path;
    return (
        <div className="details" style={backgroundUrl && {background : `url("https://image.tmdb.org/t/p/original/${backgroundUrl}")`, backgroundRepeat : "no-repeat",backgroundSize:"cover",backgroundAttachment:"fixed" }}>
            <div className="details__head" >
                <h2>{details.title ? details.title : details.name}</h2>
            </div>
            <div className="details__info">
                <h4>Genre :  {details?.genres?.map(value => value.name).join(", ")}</h4>
                <div className="details__cast">
                <p><strong>Cast : </strong></p>
                <Profiles profilesDetails={details?.credits?.cast}/>
                </div>
                <div className="details__similar">
                <p><strong>Similar : </strong></p>
                <Profiles profilesDetails={details?.similar?.results}/>
                </div>
            </div>
        </div>
    )
}

export default Detail
