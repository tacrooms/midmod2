import React from 'react'
import axios from 'axios'



function ChampRotationButton() {
    // const [champName, setChampName] = useState('');



    const handleSubmit = async(e) => {
        
        try {
            const response = await axios.get('https://na1.api.riotgames.com/lol/platform/v3/champion-rotations?api_key=RGAPI-de71f6d8-fcd6-45ca-acdb-ae0ab8588067')
            console.log(response.data.freeChampionIds)
            
        } catch (error) {
            console.log('error')
        }
    } 



    return (
        <div>
          
        

            <button onClick={()=>{return handleSubmit()}} >Free Champion Rotation</button>
        
        
        
        
            
        </div>
    )
}

export default ChampRotationButton
