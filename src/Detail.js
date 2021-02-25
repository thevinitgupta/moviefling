import React , {useState,useEffect} from 'react';
import Profiles from './Profiles';
import "./Detail.css";


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
                <h1>{details.title ? details.title : details.name}</h1>
                <h4>{details?.tagline}</h4>
            </div>
            <div className="details__info">
                <h4>Genre :  {details?.genres?.map(value => value.name).join(", ")}</h4>
                <div className="details__extras">
                    <p><strong>Status : </strong>{details?.status}</p>
                    {
                    details.release_date? <div className="card__info__date"><strong>Release Date :</strong> <span>{details.release_date}</span></div> : <div className="card__info__date"><strong>First Aired On :</strong><span> {details.first_air_date}</span></div> 
                }
                </div>
                {
                    details?.seasons && 
                    <div className="details__seasons">
                    <p><strong>{`Seasons : ${details.seasons?.length}`} </strong></p>
                    <Profiles profilesDetails={details?.seasons}/>
                </div>
                }
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
