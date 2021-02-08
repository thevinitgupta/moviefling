import React from 'react'

function Search() {
    return (
        <div className="search">
           <form>
               <input id="keyword" className="search__input" placeholder="Enter movie name or keyword"/>
               <button className="search__btn" id="search_keyword">Search</button>
           </form> 
        </div>
    )
}

export default Search
