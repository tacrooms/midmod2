import React from 'react'
import Logo from "./../Images/logo3.png"
import SumSearchBar from '../components/SumSearchBar'

function SummonerSearch() {
    return (
        <div>
            <div className='search'>
            <h1>
                <img id="logo" src={Logo} />
                <span>
                   <strong>RANKED</strong> 
                </span>
            </h1>
        <SumSearchBar />
            </div>



        </div>
    )
}

export default SummonerSearch
