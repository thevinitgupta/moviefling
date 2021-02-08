import React from 'react'
import "./Main.css";
import Search from './Search';

function Main() {
    return (
        <div className="main">
            <div className="main__head">
                <div className="main__head__movie active">Movies</div>
                <div className="main__head__shows">Shows</div>
            </div>
            <div className="main__body">
                <Search/>
            </div>
        </div>
    )
}

export default Main
