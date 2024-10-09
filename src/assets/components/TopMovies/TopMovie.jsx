import { useEffect, useState } from "react";
import axios from "axios";
import "./styles.css";
import { useNavigate } from "react-router-dom";
import MovieCard from "../MovieCard/MovieCard";
import Loading from "../Loading/Loading";

const TopMovie = ({ search }) => {
  const [topMovies, setTopMovies] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const navigate = useNavigate();
  const [currentPage, setCurrentPage] = useState(1);
  const moviesPerPage = 9;

  console.log(search);

  const indexOfLastMovie = currentPage * moviesPerPage;
  const indexOfFirstMovie = indexOfLastMovie - moviesPerPage;
  const currentMovies = topMovies.slice(indexOfFirstMovie, indexOfLastMovie);

  const nextPage = () => setCurrentPage(currentPage + 1);
  const prevPage = () => setCurrentPage(currentPage - 1);

  const fetchTopMovies = async () => {
    try {
      let response = await axios.get(
        `https://api.themoviedb.org/3/movie/top_rated?api_key=${
          import.meta.env.VITE_KEY
        }&language=en-US&page=1`
      );
      setTopMovies(response.data.results);
    } catch (err) {
      console.log(err);
      setError("Failed to fetch top-rated movies");
    }
  };

  useEffect(() => {
    fetchTopMovies();

    setTimeout(() => {
      setLoading(false);
    }, 2000);
  }, []);

  if (loading) {
    return <Loading />;
  }

  const handleMovieClick = (id) => {
    navigate(`/${id}`);
  };

  return (
    <>
      {error}?{error}:
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
            disabled={indexOfLastMovie >= topMovies.length}
          >
            Next
          </button>
        </div>
      </div>
    </>
  );
};

export default TopMovie;
