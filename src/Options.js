import React from 'react';
import "./Options.css"

function Options({sortRating,sortDate,sortAlphabetically}) {
    return (
        <div className="options">
            <div className="options__sort__rating">
                <span className="options__head">Rating</span><br/>
                <button id="ratingSortIncreasing" className="sort__btn sort__btn__inc" onClick={()=>{sortRating("i")}}>&#8593;</button> 
                <button id="ratingSortDecreasing" className="sort__btn sort__btn__dec" onClick={()=>{sortRating("d")}}>&#8595;</button> 
            </div>
            <div className="options__sort__year">
            <span className="options__head">Year</span><br/>
                <button id="yearSortIncreasing" className="sort__btn sort__btn__inc" onClick={()=>{sortDate("i")}}>&#8593;</button>
                <button id="yearSortDecreasing" className="sort__btn sort__btn__dec" onClick={()=>{sortDate("d")}}>&#8595;</button>
            </div>
            <div className="options__sort__alphabetically">
            <span className="options__head">Alphabeticaly</span><br/>
                <button id="alphabetSortIncreasing" className="sort__btn sort__btn__inc" onClick={()=>{sortAlphabetically("i")}}>&#8593;</button>
                <button id="alphabetSortDecreasing" className="sort__btn sort__btn__dec" onClick={()=>{sortAlphabetically("d")}}>&#8595;</button>
            </div>
        </div>
    )
}

export default Options
