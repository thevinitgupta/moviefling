import React from 'react';
import { Link } from 'react-router-dom';
import "./Card.css";
import RatingBar from './RatingBar';

function Card({value,sub}) {
    const title = value.title? value.title : value.name;
    return (
        <div className="card">
            <div className="card__image">
            <img src={value.poster_path?`https://image.tmdb.org/t/p/original/${value.poster_path}`: "https://www.themoviedb.org/assets/2/v4/logos/v2/blue_square_2-d537fb228cf3ded904ef09b136fe3fec72548ebc1fea3fbbd1ad9e36364db38b.svg"} alt={`${title}__poster`}/>
            </div>
            <div className="card__info">
                <h2>{title}</h2>
                {
                    value.release_date? <div className="card__info__date"><strong>Release Date :</strong> <span>{value.release_date}</span></div> : <div className="card__info__date"><strong>First Aired On :</strong><span> {value.first_air_date}</span></div> 
                }

                <div className="card__info__rating">
                    <div className="rating__text"><strong>Rating :</strong></div>
                    <RatingBar voteAverage={value.vote_average} />
                </div>
                <div className="card__info__overview">
                    <p>{value.overview}</p>
                </div>
                <div className="card__readMore">
                    <div className="card__readMore__link">
                        <Link to={`/${sub}/${value.id}`}>
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
