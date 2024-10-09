import React, { useState } from 'react';
import Search from '../Search/Search';
import './styles.css';
import { Link } from 'react-router-dom';

const Navbar = ({ onSubmit }) => {
    const [isToggled, setToggler] = useState(false);

    const handleClick = (event) => {
        event.preventDefault();
        setToggler(!isToggled);
    };

    return (
        <div className="nav-container">
            <nav className="nav">
                <div className="logo-box">
                    <h1>MoviesDB</h1>
                </div>

                <div className={`links-box ${isToggled ? 'vertical' : ''}`}>
                    <div className="links">
                        <ul>
                            <li className="L linkone">
                                <Link to="/">Popular</Link>
                            </li>
                            <li className="L linktwo">
                                <Link to="/topmovies">Top Rated</Link>
                            </li>
                            <li className="L linkthree">
                                <Link to="/upcoming">Upcoming</Link>
                            </li>
                        </ul>
                    </div>
                    <div className="search">
                        <Search onSubmit={onSubmit} />
                    </div>
                </div>


            </nav>
            <div className="toggler-icon">
                <a href="#" className="toggler" onClick={handleClick}>

                    <span></span>
                    <span></span>
                    <span></span>

                </a>
            </div>
        </div>
    );
};

export default Navbar;
