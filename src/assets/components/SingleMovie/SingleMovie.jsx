import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import Cast from '../Cast/Cast';
import "./styles.css";
import Loading from '../Loading/loading';

const SingleMovie = () => {
    const { id } = useParams();
    const [casts, setCast] = useState([]);
    const [movie, setMovie] = useState({});
    const [loading, setLoading] = useState(true);
    let formattedDate;

    const fetchCast = async () => {
        try {
            const moviedata = await axios.get(` https://api.themoviedb.org/3/movie/${id}?api_key=${import.meta.env.VITE_KEY}&language=en-US`);
            const castdata = await axios.get(`https://api.themoviedb.org/3/movie/${id}/credits?api_key=${import.meta.env.VITE_KEY}&language=en-US`);
            setCast(castdata.data.cast);
            setMovie(moviedata.data);
        } catch (err) {
            console.log(err);
        }
    };

    useEffect(() => {
        fetchCast();
    }, [id]);

    useEffect(() => {
        console.log(movie);
        console.log(casts);
    }, [casts, movie]);

    if (movie.release_date) {
        const date = new Date(movie.release_date);
        const options = { weekday: 'short', year: 'numeric', month: 'long', day: 'numeric' };
        formattedDate = date.toLocaleDateString('en-GB', options);
    }

    useEffect(() => {
        setTimeout(() => {
            setLoading(false)
        }, 2000)


    }, [])


    return (
        <>
            {loading ? (
                <Loading />
            ) : (
                <div className="contain">
                    <div className="banner">
                        <div className="movie-details">
                            <div className="details">
                                <div className="backdrop">
                                    <img src={movie.backdrop_path ? `https://image.tmdb.org/t/p/w500/${movie.backdrop_path}` : "/path/to/placeholder.jpg"} alt={movie.title} />
                                </div>
                                <div className="title">
                                    <p className="o-title">{movie.title}</p>
                                    <p className="rating">
                                        <span>Rating:</span> {movie.vote_average}
                                    </p>
                                    <div className="genres">
                                        {movie.genres && movie.genres.map(genre => (
                                            <span key={genre.id}>{genre.name}</span>
                                        ))}
                                    </div>
                                    <p className="release">Release Date: {formattedDate || "N/A"}</p>
                                </div>
                            </div>
                            <div className="overview">
                                <p className="o-head">Overview</p>
                                <p className="o-text">{movie.overview}</p>
                            </div>
                        </div>
                        <div className="poster">
                            <img src={movie.poster_path ? `https://image.tmdb.org/t/p/w500/${movie.poster_path}` : "/path/to/placeholder.jpg"} alt={movie.title} className="poster-img" />
                        </div>
                    </div>
                    <h3 className="casts-heading">Cast</h3>
                    <div className="casts">
                        {casts && casts.map(cast => (
                            <Cast key={cast.id} cast={cast} />
                        ))}
                    </div>
                </div>
            )}
        </>
    );
};

export default SingleMovie;
