import React from 'react'
import { Link } from 'react-router-dom'
import {FaGithub} from 'react-icons/fa'
import  './cards.css'

const Cards=({challenge,i})=> {
    return (
    <div>
        <div class="card" style={{width:'18rem',margin:'20px'}}>
        <img src={challenge.image} class="card-img-top" alt="challenge pic"/>
        <div class="card-body">
            <h5 class="card-title">{challenge.name}</h5>
            <p class="card-text">{challenge.description}</p>
                <div className='linkssa'>
               
                 <Link to={`/challenge/${challenge.id}`}  className='linnk'>Check Out </Link>
                 
                 <a target="_blank" className='linka'
          href={challenge.git}
          rel="noopener noreferrer"> GitHub <FaGithub/></a>
               
                 </div>
        </div>
        </div>
    </div>
    )
}

export default Cards
