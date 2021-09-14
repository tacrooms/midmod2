import React, { Component } from 'react';
import { Link } from 'react-router-dom'

function NavBar() {
    return (

        <nav id='nav-bar'>
        <ul>
            <li>
            <Link to="/home">Home</Link>
            </li>
            <li>
            <Link to="/champsearch">Champ Search</Link>
            </li>
            <li>
            <Link to="/summonersearch">Summoner Search</Link>
            </li>
         
            
        </ul> 
      </nav>
    )
}

export default NavBar;