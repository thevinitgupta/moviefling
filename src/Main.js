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
    // const resp = {
    //     page: 1,
    //     results: [
    //     {
    //     adult: false,
    //     backdrop_path: "/sWvxBXNtCOaGdtpKNLiOqmwb10N.jpg",
    //     genre_ids: [
    //     14,
    //     28
    //     ],
    //     id: 557,
    //     original_language: "en",
    //     original_title: "Spider-Man",
    //     overview: "After being bitten by a genetically altered spider, nerdy high school student Peter Parker is endowed with amazing powers to become the Amazing superhero known as Spider-Man.",
    //     popularity: 86.034,
    //     poster_path: "/gh4cZbhZxyTbgxQPxD0dOudNPTn.jpg",
    //     release_date: "2002-05-01",
    //     title: "Spider-Man",
    //     video: false,
    //     vote_average: 7.2,
    //     vote_count: 12984
    //     },
    //     {
    //     adult: false,
    //     backdrop_path: "/vc8bCGjdVp0UbMNLzHnHSLRbBWQ.jpg",
    //     genre_ids: [
    //     28,
    //     12,
    //     878,
    //     18
    //     ],
    //     id: 315635,
    //     original_language: "en",
    //     original_title: "Spider-Man: Homecoming",
    //     overview: "Following the events of Captain America: Civil War, Peter Parker, with the help of his mentor Tony Stark, tries to balance his life as an ordinary high school student in Queens, New York City, with fighting crime as his superhero alter ego Spider-Man as a new threat, the Vulture, emerges.",
    //     popularity: 149.778,
    //     poster_path: "/c24sv2weTHPsmDa7jEMN0m2P3RT.jpg",
    //     release_date: "2017-07-05",
    //     title: "Spider-Man: Homecoming",
    //     video: false,
    //     vote_average: 7.4,
    //     vote_count: 15603
    //     },
    //     {
    //     adult: false,
    //     backdrop_path: "/7d6EY00g1c39SGZOoCJ5Py9nNth.jpg",
    //     genre_ids: [
    //     28,
    //     12,
    //     16,
    //     878,
    //     35
    //     ],
    //     id: 324857,
    //     original_language: "en",
    //     original_title: "Spider-Man: Into the Spider-Verse",
    //     overview: "Miles Morales is juggling his life between being a high school student and being a spider-man. When Wilson Kingpin Fisk uses a super collider, others from across the Spider-Verse are transported to this dimension.",
    //     popularity: 102.852,
    //     poster_path: "/iiZZdoQBEYBv6id8su7ImL0oCbD.jpg",
    //     release_date: "2018-12-06",
    //     title: "Spider-Man: Into the Spider-Verse",
    //     video: false,
    //     vote_average: 8.4,
    //     vote_count: 8943
    //     },
    //     {
    //     adult: false,
    //     backdrop_path: "/8XiTPU1zfy41Xgg96TCHXj4uQJf.jpg",
    //     genre_ids: [
    //     28,
    //     12,
    //     878
    //     ],
    //     id: 429617,
    //     original_language: "en",
    //     original_title: "Spider-Man: Far from Home",
    //     overview: "Peter Parker and his friends go on a summer trip to Europe. However, they will hardly be able to rest - Peter will have to agree to help Nick Fury uncover the mystery of creatures that cause natural disasters and destruction throughout the continent.",
    //     popularity: 307.446,
    //     poster_path: "/4q2NNj4S5dG2RLF9CpXsej7yXl.jpg",
    //     release_date: "2019-06-28",
    //     title: "Spider-Man: Far from Home",
    //     video: false,
    //     vote_average: 7.5,
    //     vote_count: 9205
    //     },
    //     {
    //     adult: false,
    //     backdrop_path: null,
    //     genre_ids: [
    //     28,
    //     12,
    //     878,
    //     14
    //     ],
    //     id: 634649,
    //     original_language: "en",
    //     original_title: "Spider-Man 3",
    //     overview: "",
    //     popularity: 80.248,
    //     poster_path: "/4dS40km5rcd4udAGJheU18ZeSfi.jpg",
    //     release_date: "2021-12-15",
    //     title: "Spider-Man 3",
    //     video: false,
    //     vote_average: 0,
    //     vote_count: 0
    //     },
    //     {
    //     adult: false,
    //     backdrop_path: "/6MQmtWk4cFwSDyNvIgoJRBIHUT3.jpg",
    //     genre_ids: [
    //     14,
    //     28,
    //     12
    //     ],
    //     id: 559,
    //     original_language: "en",
    //     original_title: "Spider-Man 3",
    //     overview: "The seemingly invincible Spider-Man goes up against an all-new crop of villains—including the shape-shifting Sandman. While Spider-Man’s superpowers are altered by an alien organism, his alter ego, Peter Parker, deals with nemesis Eddie Brock and also gets caught up in a love triangle.",
    //     popularity: 76.355,
    //     poster_path: "/sqZKCRYGovZ8aN99VVJSdL8Ja9k.jpg",
    //     release_date: "2007-05-01",
    //     title: "Spider-Man 3",
    //     video: false,
    //     vote_average: 6.2,
    //     vote_count: 9450
    //     },
    //     {
    //     adult: false,
    //     backdrop_path: "/ppehJ5HlIcqFpH9erwjwFGKdIoe.jpg",
    //     genre_ids: [
    //     16,
    //     28,
    //     878,
    //     35,
    //     12
    //     ],
    //     id: 569094,
    //     original_language: "en",
    //     original_title: "Spider-Man: Into the Spider-Verse 2",
    //     overview: "The continuing story of Miles Morales and the many other Spider-People from different realities.",
    //     popularity: 51.571,
    //     poster_path: "/8ycplQbTU6DRRwiG95lQEpYkOVg.jpg",
    //     release_date: "2022-10-06",
    //     title: "Spider-Man: Into the Spider-Verse 2",
    //     video: false,
    //     vote_average: 0,
    //     vote_count: 0
    //     },
    //     {
    //     adult: false,
    //     backdrop_path: "/eaJwlzDiMC5k4kp766NO8yXnt7U.jpg",
    //     genre_ids: [
    //     28,
    //     12,
    //     14
    //     ],
    //     id: 1930,
    //     original_language: "en",
    //     original_title: "The Amazing Spider-Man",
    //     overview: "Peter Parker is an outcast high schooler abandoned by his parents as a boy, leaving him to be raised by his Uncle Ben and Aunt May. Like most teenagers, Peter is trying to figure out who he is and how he got to be the person he is today. As Peter discovers a mysterious briefcase that belonged to his father, he begins a quest to understand his parents' disappearance – leading him directly to Oscorp and the lab of Dr. Curt Connors, his father's former partner. As Spider-Man is set on a collision course with Connors' alter ego, The Lizard, Peter will make life-altering choices to use his powers and shape his destiny to become a hero.",
    //     popularity: 61.931,
    //     poster_path: "/dQ8TOCYgP9pzQvSb1cmaalYqdb5.jpg",
    //     release_date: "2012-06-23",
    //     title: "The Amazing Spider-Man",
    //     video: false,
    //     vote_average: 6.6,
    //     vote_count: 12576
    //     },
    //     {
    //     adult: false,
    //     backdrop_path: "/6al048Lat3eLVQOuKtc9h6Tu94d.jpg",
    //     genre_ids: [
    //     28,
    //     12,
    //     14
    //     ],
    //     id: 558,
    //     original_language: "en",
    //     original_title: "Spider-Man 2",
    //     overview: "Peter Parker is going through a major identity crisis. Burned out from being Spider-Man, he decides to shelve his superhero alter ego, which leaves the city suffering in the wake of carnage left by the evil Doc Ock. In the meantime, Parker still can't act on his feelings for Mary Jane Watson, a girl he's loved since childhood.",
    //     popularity: 29.527,
    //     poster_path: "/olxpyq9kJAZ2NU1siLshhhXEPR7.jpg",
    //     release_date: "2004-06-25",
    //     title: "Spider-Man 2",
    //     video: false,
    //     vote_average: 7.1,
    //     vote_count: 10501
    //     },
    //     {
    //     adult: false,
    //     backdrop_path: "/i07DYwAVPp1VF4ydwNSGlW814wB.jpg",
    //     genre_ids: [
    //     18,
    //     9648,
    //     53
    //     ],
    //     id: 9613,
    //     original_language: "en",
    //     original_title: "Spider",
    //     overview: "A mentally disturbed man takes residence in a halfway house. His mind gradually slips back into the realm created by his illness, where he replays a key part of his childhood.",
    //     popularity: 13.191,
    //     poster_path: "/yyPZJHUtOXvXn2p6C3l0R3ntPCX.jpg",
    //     release_date: "2002-11-06",
    //     title: "Spider",
    //     video: false,
    //     vote_average: 6.5,
    //     vote_count: 469
    //     },
    //     {
    //     adult: false,
    //     backdrop_path: "/rF3kAqk08zGSvs8m6hRwsi28nHg.jpg",
    //     genre_ids: [
    //     28,
    //     12,
    //     14
    //     ],
    //     id: 102382,
    //     original_language: "en",
    //     original_title: "The Amazing Spider-Man 2",
    //     overview: "For Peter Parker, life is busy. Between taking out the bad guys as Spider-Man and spending time with the person he loves, Gwen Stacy, high school graduation cannot come quickly enough. Peter has not forgotten about the promise he made to Gwen’s father to protect her by staying away, but that is a promise he cannot keep. Things will change for Peter when a new villain, Electro, emerges, an old friend, Harry Osborn, returns, and Peter uncovers new clues about his past.",
    //     popularity: 68.179,
    //     poster_path: "/c3e9e18SSlvFd1cQaGmUj5tqL5P.jpg",
    //     release_date: "2014-04-16",
    //     title: "The Amazing Spider-Man 2",
    //     video: false,
    //     vote_average: 6.4,
    //     vote_count: 9059
    //     },
    //     {
    //     adult: false,
    //     backdrop_path: "/iTqS1tP5PGNQ6CirwSxHppbDlxk.jpg",
    //     genre_ids: [
    //     878,
    //     18
    //     ],
    //     id: 785768,
    //     original_language: "en",
    //     original_title: "Spider-Man: Lotus",
    //     overview: "Following the tragic death of his former girlfriend — seemingly caused by his own attempt to save her — Peter Parker (Warden Wayne) lingers in his guilt of the past, questioning whether the curse of his alter ego should be buried for good. When he's met by the news that a terminally ill child has requested to meet Spider-Man, Peter contemplates the decision to comfort him in his final days.",
    //     popularity: 28.714,
    //     poster_path: "/bmnTSNrG1dGQgdc3IXlnORhrjvE.jpg",
    //     release_date: "2021-11-05",
    //     title: "Spider-Man: Lotus",
    //     video: false,
    //     vote_average: 0,
    //     vote_count: 0
    //     },
    //     {
    //     adult: false,
    //     backdrop_path: "/icDYw7BphDSj4OUQH9meWvadphg.jpg",
    //     genre_ids: [
    //     35,
    //     27
    //     ],
    //     id: 28504,
    //     original_language: "en",
    //     original_title: "Spider Baby",
    //     overview: "A caretaker devotes himself to three demented siblings after their father's death. But then money-hungry relatives show up to usurp their inheritance.",
    //     popularity: 10.385,
    //     poster_path: "/gDY3AZ7DY6OTrQIihrjCWvmjXHo.jpg",
    //     release_date: "1967-12-24",
    //     title: "Spider Baby",
    //     video: false,
    //     vote_average: 7,
    //     vote_count: 93
    //     },
    //     {
    //     adult: false,
    //     backdrop_path: "/7uxk164J7x8s1uhaTg0S56IlvlS.jpg",
    //     genre_ids: [
    //     878
    //     ],
    //     id: 166822,
    //     original_language: "en",
    //     original_title: "Big Ass Spider!",
    //     overview: "When a giant alien spider escapes from a military lab and rampages across the city of Los Angeles, it is up to one clever exterminator and his security guard sidekick to kill the creature before the entire city is destroyed.",
    //     popularity: 13.358,
    //     poster_path: "/xVO2QHVTrF3CTS2KZWeqXpirJGk.jpg",
    //     release_date: "2013-10-17",
    //     title: "Big Ass Spider!",
    //     video: false,
    //     vote_average: 5.5,
    //     vote_count: 164
    //     },
    //     {
    //     adult: false,
    //     backdrop_path: "/zKSWokNYMgI1skePqrN1C00Lmm6.jpg",
    //     genre_ids: [
    //     80,
    //     9648,
    //     53,
    //     28
    //     ],
    //     id: 2043,
    //     original_language: "en",
    //     original_title: "Along Came a Spider",
    //     overview: "When a teacher kidnaps a girl from a prestigious school, homicide detective, Alex Cross takes the case and teams up with young security agent, Jezzie Flannigan in hope of finding the girl and stopping the brutal psychopath.",
    //     popularity: 20.141,
    //     poster_path: "/1YtsND7vSNymylnOSzgg3DdVFMB.jpg",
    //     release_date: "2001-04-06",
    //     title: "Along Came a Spider",
    //     video: false,
    //     vote_average: 6.3,
    //     vote_count: 1186
    //     },
    //     {
    //     adult: false,
    //     backdrop_path: null,
    //     genre_ids: [
    //     16,
    //     12,
    //     28
    //     ],
    //     id: 270768,
    //     original_language: "en",
    //     original_title: "Daredevil vs. Spider-Man",
    //     overview: "Spider-Man and Daredevil team up to fight Kingpin.",
    //     popularity: 13.438,
    //     poster_path: "/mEtyZBbVl0sx0y1blYuVDgeNLkr.jpg",
    //     release_date: "2003-02-11",
    //     title: "Daredevil vs. Spider-Man",
    //     video: true,
    //     vote_average: 7.4,
    //     vote_count: 7
    //     },
    //     {
    //     adult: false,
    //     backdrop_path: null,
    //     genre_ids: [
    //     12,
    //     28,
    //     16,
    //     878
    //     ],
    //     id: 721486,
    //     original_language: "en",
    //     original_title: "Lego Spider-Man Series",
    //     overview: "When Peter Parker's uncle died, he knew that with great power, comes great responsibility. And he made the decision to fight crime as Spider-Man.",
    //     popularity: 10.947,
    //     poster_path: "/4DDKa4BzZfGJyj5XOKKa5DHsN2q.jpg",
    //     release_date: "2017-09-02",
    //     title: "Lego Spider-Man Series",
    //     video: true,
    //     vote_average: 0,
    //     vote_count: 0
    //     },
    //     {
    //     adult: false,
    //     backdrop_path: "/zlpZzccypkAYFZIyYLQcchl90ZC.jpg",
    //     genre_ids: [
    //     878,
    //     28,
    //     12,
    //     14,
    //     10770,
    //     80
    //     ],
    //     id: 225914,
    //     original_language: "en",
    //     original_title: "The Amazing Spider-Man",
    //     overview: "When an extortionist threatens to force a multi-suicide unless a huge ransom is paid, only Peter Parker can stop him with his new powers as Spider-Man.",
    //     popularity: 15.353,
    //     poster_path: "/nyXfGIkJQgKhugxMVql15URobtt.jpg",
    //     release_date: "1977-09-14",
    //     title: "The Amazing Spider-Man",
    //     video: false,
    //     vote_average: 5.3,
    //     vote_count: 50
    //     },
    //     {
    //     adult: false,
    //     backdrop_path: null,
    //     genre_ids: [
    //     16
    //     ],
    //     id: 50410,
    //     original_language: "en",
    //     original_title: "Spider-Man: The Venom Saga",
    //     overview: "A space-shuttle crash-landing puts the famous web-slinger Spider-Man in contact with a living alien substance that bonds to his suit and enhances his super-powers. Unfortunately, the alien substance begins to change him and he feels the pull of evil, so discards the suit. The evil attaches itself to another host leading to an epic confrontation between good and evil.",
    //     popularity: 20.83,
    //     poster_path: "/ilmsQLtthtcD8EU1k25cp0xFQ9a.jpg",
    //     release_date: "1994-06-07",
    //     title: "Spider-Man: The Venom Saga",
    //     video: false,
    //     vote_average: 7,
    //     vote_count: 29
    //     },
    //     {
    //     adult: false,
    //     backdrop_path: null,
    //     genre_ids: [
    //     27,
    //     878
    //     ],
    //     id: 31013,
    //     original_language: "en",
    //     original_title: "Earth vs. the Spider",
    //     overview: "A shy comic book fan is injected with an experimental serum and starts turning into a spider. When web covered bodies start appearing a policeman starts to investigate the strange case.",
    //     popularity: 12.246,
    //     poster_path: "/izESNdGC14yhvI4mcYQCB7ryJ5f.jpg",
    //     release_date: "2001-10-07",
    //     title: "Earth vs. the Spider",
    //     video: false,
    //     vote_average: 5.7,
    //     vote_count: 48
    //     }
    //     ],
    //     total_pages: 15,
    //     total_results: 281
    //     }
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
