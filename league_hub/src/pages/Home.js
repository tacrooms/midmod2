import { useState, useEffect } from 'react';
// import SideBar from '../components/SideBar';



function Home() {
    const [leaders, setLeaders] = useState([]);

    const getLeaders = async () =>{
        const temp = await fetch(`https://na1.api.riotgames.com/lol/league/v4/masterleagues/by-queue/RANKED_SOLO_5x5?api_key=RGAPI-de71f6d8-fcd6-45ca-acdb-ae0ab8588067`)
        .then(res => res.json());
        console.log(Response)

        // setLeaders(temp.slice(0,5));
    }

    // useEffect(()=>{
    //     getLeaders();
    //     console.log("Leaders")
    // }, []);

    
    console.log(leaders);

    return (
        <div id='home'>
            
            <div>
                <span>LEAGUE HUB</span>

                {/* <SideBar leaders={leaders} /> */}
            </div>



        
            
            
        </div>
    )
}

export default Home
