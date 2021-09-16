import React  from 'react';
import { Link } from 'react-router-dom'

function NavBar() {
    return (

        <nav id='nav-bar'>
        <ul>
            <li>
            <Link to="/Home">HOME</Link>
            </li>
            <li>
            <Link to="/ChampSearch">CHAMPIONS</Link>
            </li>
            <li>
            <Link to="/SummonerSearch">RANKED</Link>
            </li>
         
            
        </ul> 
      </nav>
    )
}

export default NavBar;