import React, { useState } from 'react'
import { Route, Switch } from 'react-router-dom';
import Cards from './Cards';
import Detail from './Detail';
import "./Main.css";
import Search from './Search';

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
                console.log(cardList)
            }).catch(error => {
                console.log(error);
            })
        }
       else {
           alert("Please retry!")
       }
                
    }

    // useEffect(()=>{
    //     cardList.map((value)=>{
    //         return console.log(value.original_title)
    //      })
    // },[cardList])
    return (
        
            <Switch>
            
            <Route exact path="/">
            <div className="main">
            <div className="main__head">
                <div className="main__head__movie active" onClick={(e)=>{handleSearchKeyword(e,e.target.classList["0"].substr(12,5))}}>Movies</div>
                <div className="main__head__tv" onClick={(e)=>{handleSearchKeyword(e,e.target.classList["0"].substr(12,2))}}>Shows</div>
            </div>
            <div className="main__body">
                <Search searchFor={searchFor} handleSearch={handleSearch} handleChange={handleChange}/>
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
