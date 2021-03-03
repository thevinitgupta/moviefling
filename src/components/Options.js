import React from 'react';
import "../css/Options.css"

function Options({sortResults,keyword}) {
    let optionColor = {
        color : "#00b8a9"
    }
    if(keyword==="tv"){
        optionColor.color = "#ea5455";
    }
    return (
        <div className="options">
        <select onChange={(e)=>{
            if(e.target.value==="none") return null;
             let [option,order] = e.target.value.split(",");
             sortResults(option,order)
             }} className="options__select" style={optionColor}>
        <option value="none">None</option>
        <option id="ratingSortIncreasing" className="sort__btn sort__btn__inc" value={["rating","i"]}>Rating Increasing 
        </option>
        <option id="ratingSortDecreasing" className="sort__btn sort__btn__dec" value={["rating","d"]}>Rating Decreasing 
        </option>
        <option id="yearSortIncreasing" className="sort__btn sort__btn__inc" value={["date","i"]}>Year Increasing
        </option>
        <option id="yearSortDecreasing" className="sort__btn sort__btn__dec" value={["date","d"]}>Year Decreasing
        </option>
        <option id="alphabetSortIncreasing" className="sort__btn sort__btn__inc" value={["alphabet","i"]}>Alphabetically Increasing
        </option>
        <option id="alphabetSortDecreasing" className="sort__btn sort__btn__dec" value={["alphabet","d"]}>Alphabetically Decreasing
        </option>
        </select>
           
        </div>
    )
}

export default Options
