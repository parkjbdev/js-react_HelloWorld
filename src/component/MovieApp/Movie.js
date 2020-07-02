import React from "react";
import PropTypes from 'prop-types'

function Movie({ id, title, year, summary, poster }) {
    return (
        <div>
            <h1>{title}</h1>
            <h2>{year}</h2>
            <p>{summary}</p>
            <img src={poster} alt="poster"/>
        </div>
    )

}

Movie.propTypes = {
    id: PropTypes.number.isRequired,
    year: PropTypes.number.isRequired,
    title: PropTypes.string.isRequired,
    summary: PropTypes.string.isRequired,
    poster: PropTypes.string.isRequired,
};

export default Movie;