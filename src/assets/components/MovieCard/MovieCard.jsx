import React from 'react'
import "./styles.css"

const MovieCard = (props) => {
    const { movie } = props;

    return (

        <div className="movie">
            <div>
                <p>{movie.release_date}</p>
            </div>
            <div>
                <img
                    src={
                        movie.
                            poster_path
                            !== "N/A"
                            ? `https://image.tmdb.org/t/p/w500/${movie.poster_path}` : "#"
                    }
                    alt={movie.title}
                />
            </div>
            <div>
                <span>{movie.title}</span>
                <h3>{movie.vote_average}</h3>
            </div>
        </div>
    )
}

export default MovieCard