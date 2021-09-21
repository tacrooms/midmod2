import React, {useState} from 'react'
import axios from 'axios'
import SumCard from './SumCard';

function SumSearchBar() {
    const [summonerName, setSummonerName] = useState('');
    // const [summonerDetails, setSummonerDetails] = useState({});
    

    const handleChange = (e) => {
        setSummonerName(e.target.value)
    }

    // const handleCLick = () => {
    
    //     console.log('success')
    // }

    const handleSubmit = async(e) => {


        e.preventDefault()
        try {
            const response = await axios.get(`https://na1.api.riotgames.com/lol/summoner/v4/summoners/by-name/${summonerName}?api_key=RGAPI-c82afaf1-92f2-49ea-94ec-2cdb2a2f2d08`)
            console.log(response.data)
            // response.data = {summonerData}
            // console.log(summonerData)
            // setSummonerDetails(response.data) 

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

            {/* <SumCard summonerName={summonerName}/> */}

        </div>
    )
}

export default SumSearchBar

