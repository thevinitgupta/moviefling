import React from 'react'
import "../css/Search.css"
function Search({searchForClass,handleSearch,handleSearchValue,page}) {
    //const [searchBtn] = useState(searchFor);
    //let searchBtnClass = `search__btn search__btn__${searchBtn}`;
    
    return (
        <div className="search">
               <input id="keyword" className="search__input" placeholder="Enter movie name or keyword" onChange={handleSearchValue} autoComplete="off"/>
               <button className={searchForClass} id="search_submit" onClick={()=>{handleSearch(page)}}>Search</button>
        </div>
    )
}

export default Search
