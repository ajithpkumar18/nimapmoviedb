import { BrowserRouter, Route, Routes } from 'react-router-dom'
import './App.css'
import Home from './assets/components/Home/Home'
import SingleMovie from './assets/components/SingleMovie/SingleMovie'
import TopMovie from './assets/components/TopMovies/TopMovie'
import UpcomingMovie from './assets/components/UpcomingMovie/UpcomingMovie'
import Navbar from './assets/components/Navbar/Navbar'
import Footer from './assets/components/Footer/Footer'
import { useEffect, useState } from 'react'
import axios from 'axios'

function App() {
  const [movies, setMovies] = useState([])

  const apiCall = async () => {

    try {
      let data = await axios.get(`https://api.themoviedb.org/3/movie/popular?api_key=${import.meta.env.VITE_KEY}&language=en-US&page=1`);
      let finaldata = await data.data

      setMovies(finaldata.results)
    }
    catch (err) {
      console.log(err);

    }
  }

  useEffect(() => {
    apiCall();
  }, [])

  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path='/' element={<Home movies={movies} />} />
        <Route path='/topmovies' element={<TopMovie />} />
        <Route path='/upcoming' element={<UpcomingMovie />} />
        <Route path='/:id' element={<SingleMovie movies={movies} />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  )
}

export default App
