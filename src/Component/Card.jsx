import React, { Component } from 'react'
import Cards from './Cards'

import data from '../data.json'

export default class Card extends Component {
    render() {
        return (
        <div  style={{display:'flex', flexDirection:'column'}}> 
            {data.challenges.map((challenge, i) =>(
            <Cards key={i} index={i+1} challenge={challenge}/>
            ))}
        </div>
        )
    }
}
