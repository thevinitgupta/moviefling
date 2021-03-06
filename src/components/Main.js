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
    const [nextPage,setNextPage] = useState(1)
    const apiKey = process.env.REACT_APP_TMDB_API_KEY;

    
    function handleSearchKeyword(element,keyword){
        if(keyword){

            //highlighting the active tab
            element.target.parentNode.childNodes.forEach(entry => {
                if(entry===element.target) {
                    element.target.classList.add("active")
                }
                //removing the active class from the other tab
                else {
                    entry.classList.remove("active")
                }
            });

            //setting the keyword for search -> movie or tv
            setSearchFor(keyword);
            
        }
    }

    //handle the search value ie the movie or tv show name
    function handleSearchValue(event){
        setSearchKeyword(event.target.value)
    }

    //handle search and request for data from API
    function handleSearch(page){
        if(searchKeyword){
            const finalSearchKeyword = searchKeyword.split(/[ -,]/).join("+");
            fetch(`https://api.themoviedb.org/3/search/${searchFor}?api_key=${apiKey}&language=en-US&query=${finalSearchKeyword}&page=${page}&include_adult=false`).then(res => res.json()).then(resp=>{
                setCardList(resp.results);
                if(page>=resp.total_pages) page=0;
                setNextPage(page+1)

            }).catch(error => {
                console.log(error);
            })
        }
       else {
           alert("Please retry with new text!")
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
    function sortResults(option,order="i"){
        if(cardList){
            if(option==="rating"){
               sortRating(order);
            }
            else if(option==="date"){
               sortDate(order);
            }
            else if(option==="alphabet"){
                sortAlphabetically(order);
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
                <div className="main__head__movie active" onClick={(e)=>{handleSearchKeyword(e,"movie");}}>Movies</div>
                <div className="main__head__tv" onClick={(e)=>{handleSearchKeyword(e,"tv");}}>Shows</div>
            </div>


            <div className="main__body">
                <Search searchForClass={`search__btn search__btn__${searchFor}`} handleSearch={handleSearch} handleSearchValue={handleSearchValue} page={nextPage}/>

                {cardList.length>0 &&                 
                    <div  className="sorting">
                    <div className="sorting__head"><p>Sort by</p></div>
                    <Options sortResults={sortResults} keyword={searchFor}/>
                    </div>
                }
                
                
                <Cards cardList={cardList} sub={searchFor}/>
                {cardList.length>0 &&                
                    <div className="main__body__getMore" style={searchFor==="movie" ?{backgroundColor : "#00b8a9"}:{backgroundColor:"#ea5455"}} onClick={()=>{
                        window.scrollTo({
                           top: 0,
                           left: 0,
                           behavior: 'smooth'
                        })
                        handleSearch(nextPage);
                    }}>
                    <span>Get Next Page</span>
                    </div>
                }

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
