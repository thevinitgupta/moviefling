import React from 'react';
import Card from "./Card";

function Cards({cardList,sub}) {
    return (
        
            <div>
           {cardList && cardList.map((value,index)=>{
                    return <Card key={index+1} value={value} sub={sub} />
                    })     
                } 
        </div>
    )
}

export default Cards
