import React , {useState,useEffect} from 'react';
import "./Detail.css"

function Detail({match}) {
    useEffect(()=>{
        fetchDetails();
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
    return (
        <div className="details" style={details?.poster_path && {background : `url("https://image.tmdb.org/t/p/original/${details?.poster_path}")`, backgroundRepeat : "no-repeat",backgroundSize:"cover" }}>
            <div className="details__head" >
                <h2>{details.title ? details.title : details.name}</h2>
            </div>
            <div className="details__info">
                <h4>Genre :  {details?.genres?.map(value => value.name).join(", ")}</h4>
                <p><strong>Cast : </strong></p>
                {details?.credit?.cast?.map((value,index) => {
                   return (<p>{index+1}. {value?.name} -  {value?.character}</p>)
                })}
            </div>
        </div>
    )
}

export default Detail
