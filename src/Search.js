import React from 'react'
import "./Search.css"
function Search({searchFor}) {
    const apiKey = process.env.REACT_APP_TMDB_API_KEY;
    function handleSearch(){
        fetch(`https://api.themoviedb.org/3/search/movie?api_key=${apiKey}&language=en-US&query=spider&page=1&include_adult=true`).then(res => res.json()).then(resp=>{
            console.log(resp)
        })
    }
    let searchBtnClass = `search__btn search__btn__${searchFor}`;
    return (
        <div className="search">
               <input id="keyword" className="search__input" placeholder="Enter movie name or keyword"/>
               <button className={searchBtnClass} id="search_submit" onClick={handleSearch}>Search</button>
        </div>
    )
}

export default Search
