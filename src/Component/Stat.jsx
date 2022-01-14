import React, { Component } from 'react'
import './stat.css'

import image1 from '../images/image-header-desktop.jpg'

export default class Stat extends Component {
    render() {
        return (
            <div className='container_all'>
                <div className='main_container'>
                <div className="contain5">
                    <div className="contain51">
                        <div className='contain511'>
                            <h1>  Get <span className='span1'>insights</span> that help your business grow.</h1>
                        <p> Discover the benefits of data analytics and make better decisions regarding revenue, customer 
                          experience, and overall efficiency.</p>
                        </div>

                        <div className="contain512">
                            <div className="contain5121">
                            <p> 10k+</p>
                           
                           
                            <p>COMPANIES</p> 
                            </div>
                            <div className="contain5122">
                            <p>314</p> 
                           
                            <p>TEMPLATES</p>
                            
                            </div>
                            <div className="contain5123">
                           
                            <p> 12m+</p>
                            
                             <p>QUERIES</p>
                            </div>
                        </div>
                    </div>
                    <div className="contain52">
                        <img  className='contain53' src={image1} alt="" />
                    </div>
                </div>
                </div>
            </div>
            
        )
    }
}
