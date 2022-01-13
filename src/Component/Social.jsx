import React, { Component } from 'react'

import happy from '../images/icon-star.svg'
import './social.css'
import colton from '../images/image-colton.jpg'
import irene from '../images/image-irene.jpg'
import anne from '../images/image-anne.jpg'
export default class Social extends Component {
    render() {
        return (
            <div className='div-con'>
                <div className="contain2">
                    <div className="contain12">
                        <h1 className='heda'>10,000+ of our users love our products.</h1>  
                        <p>
                    We only provide great products combined with excellent customer service.
                    See what our satisfied customers are saying about our services.
                    </p>
                    </div>

                    <div className="contain13">
                        <div className="contain121">
                            <div style={{marginRight:'5px'}}>
                            <img src={happy} alt="My Happy SVG" />
                            <img src={happy} alt="My Happy SVG" />
                            <img src={happy} alt="My Happy SVG" />
                            <img src={happy} alt="My Happy SVG" />
                            <img src={happy} alt="My Happy SVG" />

                            </div>
                            <div>
                                Rated 5 Stars in Reviews
                            </div>
                        </div>
                        <div className="contain122">
                        <div>
                            <img src={happy} alt="My Happy SVG" />
                            <img src={happy} alt="My Happy SVG" />
                            <img src={happy} alt="My Happy SVG" />
                            <img src={happy} alt="My Happy SVG" />
                            <img src={happy} alt="My Happy SVG" />
                            </div>
                            <div>
                                Rated 5 Stars in Report Guru
                            </div>

                        </div>
                        <div className="contain123">
                        <div>
                            <img src={happy} alt="My Happy SVG" />
                            <img src={happy} alt="My Happy SVG" />
                            <img src={happy} alt="My Happy SVG" />
                            <img src={happy} alt="My Happy SVG" />
                            <img src={happy} alt="My Happy SVG" />
                            </div>
                            <div>
                                Rated 5 Stars in BestTech
                            </div>
                        </div>
                    </div>
                  

                </div>


                <div className="contain4">
                    <div className='div1'>
                    <div className="contain41">
                    <div className='inner_image_container'>
                                <img className='inner_image'
                                    src={colton} alt="" />
                            </div>
                            <div>
                                <p className='p_name'>  Colton Smith</p>
                                <p className='p_name1'> Verified Buyer</p>
                            </div>

                            
                            </div>
                            "We needed the same printed design as the one we had ordered a week prior.
                            Not only did they find the original order, but we also received it in time.
                            Excellent!"
                            </div>
                    {/* two */}


                    <div className='div2'>
                    <div className="contain41">
                    <div className='inner_image_container'>
                                <img className='inner_image'
                                    src={irene} alt="" />
                            </div>
                            <div>
                                <p className='p_name'> Irene Roberts </p>
                                <p className='p_name1'> Verified Buyer</p>
                            </div>

                            
                            </div>
                            "We needed the same printed design as the one we had ordered a week prior.
                            Not only did they find the original order, but we also received it in time.
                            Excellent!"
                            </div>


                            {/* three */}
                    <div className=' div3'>
                    <div className="contain41">
                    <div className='inner_image_container'>
                                <img className='inner_image'
                                    src={anne} alt="" />
                            </div>
                            <div>
                                <p className='p_name'>Anne Wallace </p>
                                <p className='p_name1'> Verified Buyer</p>
                            </div>

                            
                            </div>
                            "Put an order with this company and can only praise them for the very high
                            standard. Will definitely use them again and recommend them to everyone!"
                            </div>
                </div>
                
            </div>
        )
    }
}
