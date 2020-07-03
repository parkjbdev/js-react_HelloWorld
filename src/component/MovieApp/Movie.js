import React from "react";
import PropTypes from 'prop-types'
import '../../css/MovieApp/MovieApp.css';
import 'bootstrap/dist/css/bootstrap.css'

function Movie({ title, year, summary, poster }) {
    return (
        <div className="card movieBox" style={{width: "18rem"}}>
            <div className={"card-body"}>
                <img className="card-img" src={poster} alt={title}/>
                <h2 className={"card-title name"}>{title}</h2>
                <h3 className={"card-title"}>{year}</h3>
                <p className={"card-text"}>{summary.slice(0,180)}...</p>
            </div>
        </div>
    )

}

Movie.propTypes = {
    year: PropTypes.number.isRequired,
    title: PropTypes.string.isRequired,
    summary: PropTypes.string.isRequired,
    poster: PropTypes.string.isRequired,
};

export default Movie;