import React from 'react'
import "./Search.css"
function Search({searchFor,handleSearch,handleChange}) {
    let searchBtnClass = `search__btn search__btn__${searchFor}`;
    
    return (
        <div className="search">
               <input id="keyword" className="search__input" placeholder="Enter movie name or keyword" onChange={handleChange}/>
               <button className={searchBtnClass} id="search_submit" onClick={handleSearch}>Search</button>
        </div>
    )
}

export default Search
