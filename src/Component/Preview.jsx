import React, { Component } from 'react'
import './preview.css'

import sedans from '../images/icon-sedans.svg'
import luxury from '../images/icon-luxury.svg'
import suvs from '../images/icon-suvs.svg'


export default class Preview extends Component {
    render() {
        return (
            <div>
              <div className='preview_container'>
                
                <div className="prevone">
                    <div className='prev_img'>
                        <img style={{width:'100%', height:'100%'}} src={sedans} alt="nogfh" />
                    </div>
                    <div><h1>SEDANS</h1></div>
                    <div><p>  Choose a sedan for its affordability and excellent fuel economy. Ideal for cruising in the city 
                     or on your next road trip.</p></div>
                    <div>
                        <button className="prevbtn">
                            Learn More
                        </button>
                    </div>
                </div>
                <div className="prevtwo">


                <div className='prev_img'>
                        <img style={{width:'100%', height:'100%'}} src={sedans} alt="nogfh" />
                    </div>
                    <div><h1>SUVS</h1></div>
                    <div><p>    Take an SUV for its spacious interior, power, and versatility. Perfect for your next family vacation 
  and off-road adventures..</p></div>
                    <div>
                        <button className="prevbtn1">
                            Learn More
                        </button>
                    </div>

                </div>
                <div className="prevthree">

                <div className='prev_img'>
                        <img style={{width:'100%', height:'100%'}} src={sedans} alt="nogfh" />
                    </div>
                    <div><h1>LUXURY</h1></div>
                    <div><p>   Cruise in the best car brands without the bloated prices. Enjoy the enhanced comfort of a luxury 
  rental and arrive in style.s</p></div>
                    <div>
                        <button className="prevbtn2">
                            Learn More
                        </button>
                    </div>
                </div>

              </div>
            </div>
        )
    }
}
