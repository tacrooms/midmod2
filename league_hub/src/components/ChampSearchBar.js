import React from 'react'
import axios from 'axios'



function ChampSearchBar() {
    const [champName, setChampName] = useState('');

    const handleChange = () =>{
        setChampName()
    }

    const handleSubmit = async(e) => {
        
        try {
            const response = await axios.get('https://na1.api.riotgames.com/lol/platform/v3/champion-rotations?api_key=RGAPI-d93f8ae4-25dc-4a52-a03e-57c24d84bfd2')
            console.log(response)
            
        } catch (error) {
            console.log('error')
        }
    } 



    return (
        <div>
            
        

            <button onClick={()=>{return handleSubmit()}} >Champ Rotation</button>
        
        
        
        
            
        </div>
    )
}

export default ChampSearchBar
