import React, { useState } from 'react'
import "./Main.css";
import Search from './Search';

function Main() {
    const [searchFor,setSearchFor] = useState("movie");
    

    function handleSearchKeyword(element,keyword){
        if(keyword){
            element.target.parentNode.childNodes.forEach(entry => {
                if(entry===element.target) {
                    element.target.classList.add("active")
                }
                else {
                    entry.classList.remove("active")
                }
            })
            setSearchFor(keyword);
        }
    }
    return (
        <div className="main">
            <div className="main__head">
                <div className="main__head__movie active" onClick={(e)=>{handleSearchKeyword(e,e.target.classList["0"].substr(12,5))}}>Movies</div>
                <div className="main__head__tv" onClick={(e)=>{handleSearchKeyword(e,e.target.classList["0"].substr(12,2))}}>Shows</div>
            </div>
            <div className="main__body">
                <Search searchFor={searchFor}/>
            </div>
        </div>
    )
}

export default Main
