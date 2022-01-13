import React, { Component } from 'react'
import Cards from './Cards'

import data from '../data.json'
import Homepage from './Homepage'
import './cadi.css'
export default class Card extends Component {
    render() {
        return (
            <div>
            <Homepage/>
        <div className='container_cards'> 
            {data.challenges.map((challenge, i) =>(
            <Cards key={i} index={i+1} challenge={challenge}/>
            ))}
        </div>
        </div>
        )
    }
}



