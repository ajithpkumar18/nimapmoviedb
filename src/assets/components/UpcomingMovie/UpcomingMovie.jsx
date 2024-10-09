import { useEffect, useState } from "react";
import axios from "axios";
import "./styles.css";
import { useNavigate } from "react-router-dom";
import MovieCard from "../MovieCard/MovieCard";
import Loading from "../Loading/Loading";

const UpcomingMovie = () => {
  const [upMovies, setUpMovies] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const navigate = useNavigate();
  const [currentPage, setCurrentPage] = useState(1);
  const moviesPerPage = 9;

  const indexOfLastMovie = currentPage * moviesPerPage;
  const indexOfFirstMovie = indexOfLastMovie - moviesPerPage;
  const currentMovies = upMovies.slice(indexOfFirstMovie, indexOfLastMovie);

  const nextPage = () => setCurrentPage(currentPage + 1);
  const prevPage = () => setCurrentPage(currentPage - 1);

  const fetchUpcomingMovies = async () => {
    try {
      let response = await axios.get(
        `https://api.themoviedb.org/3/movie/upcoming?api_key=${
          import.meta.env.VITE_KEY
        }&language=en-US&page=1`
      );
      setUpMovies(response.data.results);
    } catch (err) {
      console.log(err);
      setError("Failed to fetch upcoming movies.");
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchUpcomingMovies();

    setTimeout(() => {
      setLoading(false);
    }, 2000);
  }, []);

  const handleMovieClick = (id) => {
    navigate(`/${id}`);
  };

  return (
    <>
      {loading ? (
        <Loading />
      ) : (
        <div className="app">
          <ul className="container">
            {currentMovies.map((movie) => (
              <li
                key={movie.id}
                onClick={() => handleMovieClick(movie.id)}
                style={{ listStyle: "none", cursor: "pointer" }}
              >
                <MovieCard movie={movie} />
              </li>
            ))}
          </ul>
          <div className="pagination">
            <button onClick={prevPage} disabled={currentPage === 1}>
              Previous
            </button>
            <span>Page {currentPage}</span>
            <button
              onClick={nextPage}
              disabled={indexOfLastMovie >= upMovies.length}
            >
              Next
            </button>
          </div>
        </div>
      )}
    </>
  );
};

export default UpcomingMovie;
