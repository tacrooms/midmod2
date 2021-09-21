import React, {useState} from 'react'




function Cards(props) {
console.log(props)




    return (
        <div>
           <div className='container'>
                <div className='card-container'>
                    <div className='card'>
                        <figure className='front'>
                           {/* <img src= {props.champImage}/>  */}
                           <img className='champCard' width='100%' height='100%' src = {`http://ddragon.leagueoflegends.com/cdn/img/champion/splash/${props.champDetails.name}_0.jpg`} />

                        </figure>
                           
                         <figure className='back'>
                            
                            <h1>{props.champDetails.name}</h1>
                            <p>{props.champDetails.lore}</p>

                       
                        
                        </figure>

                        
            
                    </div>

                  

                </div>
            </div> 
        </div>
    )
}

export default Cards
