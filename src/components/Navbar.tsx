import React from 'react'
import {
    Link
} from "react-router-dom";
import { Avatar } from '@mui/material';


const Navbar = () => {
    return (
        <div className="Navbar">
            <div className="Navbar__logo">
                <Link to="/">
                    <Avatar alt="Pokeball" src='https://www.freepnglogos.com/uploads/pokeball-png/pokeball-alexa-style-blog-pokemon-inspired-charmander-daily-8.png' />
                </Link>
            </div>
            <ul className="Navbar__buttons">
                <Link to="/">Home</Link>
                <Link to="/details">Details</Link>
                <Link to="/about">About</Link>
            </ul>
        </div>
    )
}

export default Navbar