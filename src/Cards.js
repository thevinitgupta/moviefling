import React from 'react'
import Card from "./Card";

function Cards({cardList}) {
    return (
        <div>
           {cardList && cardList.map((value,index)=>{
                    return <Card key={index+1} value={value} />
                    })     
                } 
        </div>
    )
}

export default Cards
