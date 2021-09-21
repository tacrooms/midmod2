import React, {useState, setState} from 'react'
import axios from 'axios'
import Cards from './Cards';

function ChampSearchBar() {

    const [champName, setChampName] = useState('');
    const [champDetails, setChampDetails] = useState({})
    // first letter of champ name MUST be capital for the query to work
    // const [visibility, setVisibility] = useState('')


    const handleChange = (e) => {
        setChampName(e.target.value)
    }

    // const handleCLick = () => {
    
    //     console.log('success')
    // }

    const handleSubmit = async(e) =>{
        e.preventDefault()
        try {
            const champData = await axios.get(`http://ddragon.leagueoflegends.com/cdn/11.18.1/data/en_US/champion/${champName}.json`)
            const champImage = await axios.get(`http://ddragon.leagueoflegends.com/cdn/img/champion/splash/${champName}_0.jpg`)
            console.log(champData.data.data, champImage.headers, "test")
            // console.log('data',champData.data.data)
            const data = champData.data.data
            
            const champion = Object.values(data)[0]
          
            console.log('data', champion)
            setChampDetails(champion, champImage)
            

        } catch (error) {
            console.log('error')
        }
    }

    return (
        
            <div className='search-box'>
            <form className='search' onSubmit={(e)=>{return handleSubmit(e)}}>

                <input onChange={(e)=>{return handleChange(e)}} value={champName} type='text' placeholder='Enter Champion Name'></input>
                <button type='submit'>Submit</button>

            </form>
            

            <Cards champDetails={champDetails} />   
            
            
            
              
            

            {/* {champDetails.name} */}
            
                    
             
            
{/* Cards */}
                {/* <div className='cardDiv'>
                <div className='card-container'>
                    <div className='card'>
                        <figure className='front'>
                        <img  width='100%' height='100%'  src={`http://ddragon.leagueoflegends.com/cdn/img/champion/splash/${champDetails.name}_0.jpg`} />
                       
                    
                            
                            
                            

                        </figure>
                           
                         <figure className='back'>

                         <h1>{champDetails.name}</h1>

                         <p>{champDetails.lore}</p>

                       
                         
                            

                       
                        
                        </figure>

                        
            
                    </div>
                    </div>
                  
                    </div> */}
                </div>
            
            
        
    )
}

export default ChampSearchBar





