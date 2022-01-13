import React, { Component } from 'react'
import { AiOutlineArrowRight } from 'react-icons/ai'
import image1  from '../images/father.jpg'
import image2 from '../images/exposure.jpg'
import image3 from '../images/photo-camera.jpg'
import image4 from '../images/clouds.jpg'
import image7 from '../images/arc.jpg'
import image8 from '../images/living.jpg'
import image5 from '../images/adventure.jpg'
import image6 from '../images/ama.jpg'

import './brief.css'
export default class brief extends Component {
    render() {
        return (
            <div className='contain_all'>
 {/* <img src={image1} alt="" /> */}
                <div className="navbar-home">
                    <div>
                        <p>PHOTOSNAP</p>
                    </div>

                    <div>
                        <ul className='list'>
                            <li>STORIES</li>
                            <li>FEATURES</li>
                            <li>PRICING</li>
                        </ul>
                    </div>

                    <div>
                        <a className='btn'> GET AN INVITE</a>
                    </div>

                </div>

                <div className='first'>
         
                 <div className="first-left">
                        <h1 className='headers'>CREATE AND SHARE YOUR PHOTO STORIES</h1>
                        <p className='text'> 
                            Photosnap is a platform for photographers and visual
                            storytellers.We make it easy to share photos,
                            tell stories and connect with others.
                        </p>

                        <div className='get-invite-btn2'>
                            <span>
                            GET AN INVITE
                            </span>
                            <span className='arrow1'>&#10230;</span>
                        </div>
                     

                    </div>
                    <div className="first-right">
                     
                        <img className='first-image' src={image1} alt="" />
                    </div>
                {/* div2 */}

                
                    
                    <div className="second-right">
                        <h1 className='headers'>BEAUTIFUL STORIES EVERY TIME</h1>
                        <p className='text'> 
                            We provide Design templates to ensure that your 
                            stories look terriffic.Easily add photos,text,embeded maps and media
                            from the other networks.Then share your story with everyone.
                        </p>

                        <div className='get-invite-btn2'>
                            <span>
                            VIEW THE STORIES
                            </span>
                            <span className='arrow1'>&#10230;</span>
                        </div>
                     

                    </div>
                    <div className="second-left">
                     
                        <img className='first-image' src={image2} alt="" />
                    </div>
                
                {/* Another one
                 */}

            
                    <div className="third-left">
                        <img className='first-image' src={image3} alt="" />
                       
                    </div>
                    <div className="third-right">
                        <h1 className='headers'>DESIGNED FOR EVERYONE</h1>
                        <p className='text'> 
                            pPhotosnap can help
                        </p>

                        <div className='get-invite-btn2'>
                            <span>
                            VIEW THE STORIES
                            </span>
                            <span className='arrow1'>&#10230;</span>
                        </div>
                     

                    </div>
                </div>
                <div className='fives'>

                    <div className="fiveone">
                        <div className="imgclass">
                        <img className='first-image' src={image6} alt="" />
                                        
                    <div className="text2"><p>
                        The  Mountains 
                        By Joe Ndambuki
                        
                        </p>
                        <hr className='line'></hr>
                        </div>
                   
                    </div>
                    </div>  
                    <div className="fivetwo">

                    <img className='first-image' src={image5} alt="" />
                    </div>
                    <div className="fivethree">
                    <img className='first-image' src={image8} alt="" />
                    </div>
                    <div className="fivefour">
                    <img className='first-image' src={image7} alt="" />
                   
                    </div>

                </div>

                
            </div>
        )
    }
}
