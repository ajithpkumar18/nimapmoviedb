import { BrowserRouter, Route, Routes } from 'react-router-dom'
import './App.css'
import Home from './assets/components/Home/Home'
import SingleMovie from './assets/components/SingleMovie/SingleMovie'
import TopMovie from './assets/components/TopMovies/TopMovie'
import UpcomingMovie from './assets/components/UpcomingMovie/UpcomingMovie'
import Navbar from './assets/components/Navbar/Navbar'
import Footer from './assets/components/Footer/Footer'

function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/topmovies' element={<TopMovie />} />
        <Route path='/upcoming' element={<UpcomingMovie />} />
        <Route path='/single' element={<SingleMovie />} />


      </Routes>
      <Footer />
    </BrowserRouter>
  )
}

export default App
