import React from 'react';
import { Link } from 'react-router-dom';
import "../css/Card.css";
import RatingBar from './RatingBar';

function Card({value,sub}) {

    //card object to hold all details of the current card
    const card = {
        title : value.title? value.title : value.name,
        poster : value.poster_path?`https://image.tmdb.org/t/p/original/${value.poster_path}`: "https://www.themoviedb.org/assets/2/v4/logos/v2/blue_square_2-d537fb228cf3ded904ef09b136fe3fec72548ebc1fea3fbbd1ad9e36364db38b.svg",
        release : value.release_date?"Release Date :" : "First Aired On :",
        releasedOn : value.release_date?value.release_date : value.first_air_date ,
        averageVote : value.vote_average,
        rating : value.vote_average ,
        overview : value.overview ,
        id : value.id
    }
    return (
        <div className="card">
            <div className="card__image">
            <img src={card.poster} alt={`${card.title}__poster`}/>
            </div>
            <div className="card__info">
                <h2>{card.title}</h2>
                <div className="card__info__date"><strong>{card.release}</strong> <span>{card.releasedOn}</span></div> 

                <div className="card__info__rating">
                    <div className="rating__text"><strong>Rating :</strong></div>
                    <RatingBar voteAverage={card.averageVote} />
                </div>
                <div className="card__info__overview">
                    <p>{card.overview}</p>
                </div>
                <div className="card__readMore">
                    <div className="card__readMore__link">
                        <Link to={`/${sub}/${card.id}`}>
                        <span>read more</span>
                        <span className="material-icons card__readMore__link__icon">arrow_circle_down</span>
                        </Link>
                    </div>
                </div>
            </div>  
        </div>
    )
}

export default Card
