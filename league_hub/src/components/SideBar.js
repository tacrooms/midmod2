import React from 'react'

function SideBar( {leaders} ) {
    return (
      <aside>
          <nav>
          <h3>Challenger Leader Board</h3>
          {leaders.map()}
          <a 
            href="#" 
            target="_blank"
            rel="noReferrer" >
                Jinx
            </a>


        </nav>
      </aside>
    )
}

export default SideBar
