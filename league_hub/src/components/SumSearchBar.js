import React, {useState} from 'react'
import axios from 'axios'

function SumSearchBar() {
    const [SummonerName, setSummonerName] = useState('');
    

    const handleChange = (e) => {
        setSummonerName(e.target.value)
    }

    // const handleCLick = () => {
    
    //     console.log('success')
    // }

    const handleSubmit = async(e) => {


        e.preventDefault()
        try {
            const response = await axios.get(`https://na1.api.riotgames.com/lol/summoner/v4/summoners/by-name/${SummonerName}?api_key=RGAPI-55b32194-5947-4592-b4ba-bffcae5b82e3`)
            console.log(response.data)
        } catch (error) {
            console.log('error')
            
        }


    }

    





    return (
        <div>
                <form onSubmit={(e)=>{return handleSubmit(e)}}>
                <input onChange={(e)=>{return handleChange(e)}} type='text' placeholder= "Enter Summoner Name" value={SummonerName} />
                <button  type="submit">Submit</button>
            </form>
        </div>
    )
}

export default SumSearchBar

