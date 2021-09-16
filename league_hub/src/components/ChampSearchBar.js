import React, {useState} from 'react'
import axios from 'axios'

function ChampSearchBar() {

    const [champName, setChampName] = useState('');
    const [champDetails, setChampDetails] = useState({})
    // first letter of champ name MUST be capital for the query to work


    const handleChange = (e) => {
        setChampName(e.target.value)
    }

    // const handleCLick = () => {
    
    //     console.log('success')
    // }

    const handleSubmit = async(e) =>{
        e.preventDefault()
        try {
            const response = await axios.get(`http://ddragon.leagueoflegends.com/cdn/11.18.1/data/en_US/champion/${champName}.json`)
            console.log(response.data)
            setChampDetails(response.data)

        } catch (error) {
            console.log('error')
        }
    }

    return (
        <div>
            <form onSubmit={(e)=>{return handleSubmit(e)}}>

                <input onChange={(e)=>{return handleChange(e)}} value={champName} type='text' placeholder='Enter Champion Name'></input>
                <button type='submit'>Submit</button>

            </form>


            
        </div>
    )
}

export default ChampSearchBar





