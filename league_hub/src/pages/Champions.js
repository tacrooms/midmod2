import React from 'react'
import ChampRotationButton from './../components/ChampRotationButton'
import ChampSearchBar from '../components/ChampSearchBar'

function Champions() {
    return (
        <div id='champions'>

            

            <div>
                <ChampSearchBar />
            </div>

            <div>
        <ChampRotationButton />
        </div>

        </div>
    )
}

export default Champions
