import React from 'react';
import "./Card.css";
import RatingBar from './RatingBar';

function Card({value}) {
    const title = value.original_title? value.original_title : value.original_name;
    return (
        <div className="card">
        <div className="card__image">
        <img src={`https://image.tmdb.org/t/p/original/${value.poster_path}`} alt={`${title}__poster`}/>
        </div>
        <div className="card__info">
        <h2>{title}</h2>
        <div className="card__info__rating">
        <div className="rating__text">Rating :</div>
        <RatingBar voteAverage={value.vote_average} />
        </div>
        <div className="card__info__overview">
            <p>{value.overview}</p>
        </div>
        </div>
           
        </div>
    )
}

export default Card