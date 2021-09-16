import React, {useState} from 'react'
import axios from 'axios'

function SumSearchBar() {
    const [summonerName, setSummonerName] = useState('');
    const [summonerDetails, setSummonerDetails] = useState({});
    

    const handleChange = (e) => {
        setSummonerName(e.target.value)
    }

    // const handleCLick = () => {
    
    //     console.log('success')
    // }

    const handleSubmit = async(e) => {


        e.preventDefault()
        try {
            const response = await axios.get(`https://na1.api.riotgames.com/lol/summoner/v4/summoners/by-name/${summonerName}?api_key=RGAPI-d93f8ae4-25dc-4a52-a03e-57c24d84bfd2`)
            console.log(response.data)
            setSummonerDetails(response.data) 

        } catch (error) {
            console.log('error')
            
        }


    }

    





    return (
        <div>
                <form onSubmit={(e)=>{return handleSubmit(e)}}>
                <input onChange={(e)=>{return handleChange(e)}} type='text' placeholder= "Enter Summoner Name" value={summonerName} />
                <button  type="submit">Submit</button>
            </form>
        </div>
    )
}

export default SumSearchBar

