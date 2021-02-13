import React , {useState,useEffect} from 'react'

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
        <div className="details">
            <div className="details__head">
                <h2>{details.title ? details.title : details.name}</h2>
            </div>
            
        </div>
    )
}

export default Detail
