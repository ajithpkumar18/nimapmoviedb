import React from 'react'
import Search from '../Search/Search'
import "./styles.css"
import { Link } from 'react-router-dom'

const Navbar = ({ onSubmit }) => {
    return (
        <div className="nav-container">

            <div className='nav'>
                <div className="logo-box">
                    <h1>MoviesDB</h1>
                </div>

                <div className='links-box'>
                    <div className='links'>
                        <ul>
                            <li className='L linkone'>
                                <Link to={"/"} >Popular</Link>
                            </li>
                            <li className='L linktwo'>

                                <Link to="/topmovies" >Top Rated</Link>
                            </li>
                            <li className='L linkthree'>

                                <Link to="/upcoming" >Upcoming</Link>
                            </li>
                        </ul>
                    </div>
                    <div className='search'>

                        <Search onSubmit={onSubmit} />
                    </div>
                </div>


            </div>
        </div>
    )
}

export default Navbar