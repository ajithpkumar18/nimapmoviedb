import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import Home from './assets/components/Home/Home';
import SingleMovie from './assets/components/SingleMovie/SingleMovie';
import TopMovie from './assets/components/TopMovies/TopMovie';
import UpcomingMovie from './assets/components/UpcomingMovie/UpcomingMovie';
import Navbar from './assets/components/Navbar/Navbar';
import { useEffect, useState } from 'react';
import axios from 'axios';

function App() {
  const [movies, setMovies] = useState([]);
  const [search, setSearch] = useState('');


  const allMovies = async () => {
    try {
      let data = await axios.get(`https://api.themoviedb.org/3/movie/popular?api_key=${import.meta.env.VITE_KEY}&language=en-US&page=1`);
      let finalData = await data.data;
      setMovies(finalData.results);
    } catch (err) {
      console.log(err);
    }
  };


  const searchMovies = async () => {
    try {
      let data = await axios.get(`https://api.themoviedb.org/3/search/movie?api_key=${import.meta.env.VITE_KEY}&language=en-US&query=${search}&page=1`);
      console.log(data);

      let finalData = await data.data;
      setMovies(finalData.results);
    } catch (err) {
      console.log(err);
    }
  };

  useEffect(() => {
    allMovies();
  }, []);

  const handleUpdate = (data) => {
    setSearch(data);
    if (search === '') {
      allMovies();
    }
    else {

      searchMovies();
    }
  };

  return (
    <BrowserRouter>
      <Navbar onSubmit={handleUpdate} />
      <Routes>
        <Route path='/' element={<Home movies={movies} />} />
        <Route path='/topmovies' element={<TopMovie search={search} />} />
        <Route path='/upcoming' element={<UpcomingMovie search={search} />} />
        <Route path='/:id' element={<SingleMovie />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
