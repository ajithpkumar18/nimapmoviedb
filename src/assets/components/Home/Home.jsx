import React, { useEffect, useState } from 'react';
import MovieCard from '../MovieCard/MovieCard.jsx';
import { Link } from 'react-router-dom';
import Loading from '../Loading/loading.jsx';
import "./styles.css"


const Home = ({ movies }) => {
    const [currentPage, setCurrentPage] = useState(1);
    const [loading, setLoading] = useState(true)
    const moviesPerPage = 9;


    const indexOfLastMovie = currentPage * moviesPerPage;
    const indexOfFirstMovie = indexOfLastMovie - moviesPerPage;
    const currentMovies = movies.slice(indexOfFirstMovie, indexOfLastMovie);


    const nextPage = () => setCurrentPage(currentPage + 1);
    const prevPage = () => setCurrentPage(currentPage - 1);

    useEffect(() => {
        const timer = setTimeout(() => {
            setLoading(false);
        }, 2000);
    }, []);

    return (

        loading ? <Loading /> : <div className="app">
            <div className="container">
                {currentMovies.filter(movie => movie.poster_path != null).map((movie) => (
                    <Link to={`/${movie.id}`} key={movie.id}>
                        <MovieCard movie={movie} />
                    </Link>
                ))}
            </div>

            <div className="pagination">
                <button onClick={prevPage} disabled={currentPage === 1}>
                    Previous
                </button>
                <span>Page {currentPage}</span>
                <button onClick={nextPage} disabled={indexOfLastMovie >= movies.length}>
                    Next
                </button>
            </div>
        </div>
    )
}

export default Home