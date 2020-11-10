import React from 'react';
import PropTypes from 'prop-types';
import "./Movies.css";

function Movies({id, title, year, rating, runtime, summary, genre, language, image}){

    return (
        <div className="movies__movie">
            <img src={image} alt={title} title={title} />
    
            <div className="movie__data">
                <h3 className="movie__title">{title}</h3>
                <h5 className="movie__year">{year}</h5>
                <p className="movie__summary">{summary.slice(0,150)}...</p>
                <h4 className="movie__genre">Genre</h4>
                <ul className="genre">{genre.map((genre, index) => <li key={index} className="genre__genre">{genre}</li>)}</ul>
                <div className="etcs">
                <h6 className="movie__rating">rating : {rating === 0 ? "not rated yet" : rating}</h6>
                <h6 className="movie__runtime">runtime : {runtime === 0 ? "not detailed" : runtime + " min"}</h6>
                </div>
            </div>
        </div>);
}


Movies.propTypes = {
    
    id: PropTypes.number.isRequired,
    title: PropTypes.string.isRequired,
    title_english: PropTypes.string,
    year: PropTypes.number.isRequired,
    rating: PropTypes.number.isRequired,
    runtime: PropTypes.number.isRequired,
    summary: PropTypes.string.isRequired,
    genre: PropTypes.arrayOf(PropTypes.string).isRequired,
    language: PropTypes.string.isRequired,
    image: PropTypes.string.isRequired

};

export default Movies;