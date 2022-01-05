import React from 'react'

const Cards=({challenge,i})=> {
    return (
    <div>
        <div class="card" style={{width:'18rem',margin:'20px'}}>
        <img src={challenge.image} class="card-img-top" alt="Image"/>
        <div class="card-body">
            <h5 class="card-title">{challenge.name}</h5>
            <p class="card-text">{challenge.description}</p>
            <a href="#" class="btn btn-primary">Check Out </a>
        </div>
        </div>
    </div>
    )
}

export default Cards
