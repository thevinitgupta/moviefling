import React, { useState } from 'react'
import { Route, Switch } from 'react-router-dom';
import Cards from './Cards';
import Detail from './Detail';
import "../css/Main.css";
import Options from './Options';
import Search from './Search';
import Sort from "./Sort";

function Main() {
    const [searchFor,setSearchFor] = useState("movie");
    const [searchKeyword,setSearchKeyword] = useState("")
    const [cardList,setCardList] = useState([]);
    const apiKey = process.env.REACT_APP_TMDB_API_KEY;

    
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
    function handleChange(event){
        setSearchKeyword(event.target.value)
}
    function handleSearch(){
        if(searchKeyword){
            const finalSearchKeyword = searchKeyword.split(/[ -,]/).join("+");
            fetch(`https://api.themoviedb.org/3/search/${searchFor}?api_key=${apiKey}&language=en-US&query=${finalSearchKeyword}&page=1&include_adult=false`).then(res => res.json()).then(resp=>{
                console.log(resp)
                setCardList(resp.results);
            }).catch(error => {
                console.log(error);
            })
        }
       else {
           alert("Please retry!")
       }
                
    }

    function addDates(){
        if(cardList &&(!cardList[0].date)){
            for(let i=0;i<cardList.length;i++){
                let dateVal;
                if(cardList[i].release_date){
                    dateVal = cardList[i].release_date.split("-").join(",");
                }
                else if(cardList[i].first_air_date){
                    dateVal = cardList[i].first_air_date.split("-").join(",");
                }
                cardList[i].date = new Date(dateVal);
            }
        }
        else {
            return;
        }
    }

    function sortRating(order){
       setCardList(Sort.mergeSort(cardList,"vote_average",order));
    }

    function sortDate(order){
        addDates();
        setCardList(Sort.mergeSort(cardList,"date",order));
    }

    function sortAlphabetically(order){
        if(cardList[0].title)
        setCardList(Sort.mergeSort(cardList,"title",order))
        else
        setCardList(Sort.mergeSort(cardList,"name",order))
    }
    return (
        
            <Switch>
            
            <Route exact path="/">
            <div className="main">
            <div className="main__head">
                <div className="main__head__movie active" onClick={(e)=>{handleSearchKeyword(e,e.target.classList["0"].substr(12,5)); setSearchFor("movie")}}>Movies</div>
                <div className="main__head__tv" onClick={(e)=>{handleSearchKeyword(e,e.target.classList["0"].substr(12,2)); setSearchFor("tv")}}>Shows</div>
            </div>
            <div className="main__body">
                <Search searchForClass={`search__btn search__btn__${searchFor}`} handleSearch={handleSearch} handleChange={handleChange}/>
                <div  className="sorting">
                <span className="main__head__tv sorting__head">Sort by</span>
                <Options sortRating={sortRating} sortDate={sortDate} sortAlphabetically={sortAlphabetically}/>
                </div>
                
                <Cards cardList={cardList} sub={searchFor}/>
            </div>
            </div>
            </Route>
            <div className="main full">
            <Route path={`/:type/:id`} component={Detail}></Route>           
             </div>
             
            </Switch>
    )
}

export default Main
