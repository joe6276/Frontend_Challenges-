import React, { Component } from 'react'
import './productpage.css'
import image1 from '../images/image-product-1.jpg'
import image2 from '../images/image-product-2.jpg'
import image3 from '../images/image-product-3.jpg'
import image4 from '../images/image-product-4.jpg'
import image5 from '../images/image-avatar.png'


import { AiOutlineShoppingCart } from 'react-icons/ai'


export default class ProductPage extends Component {
    render() {
        return (
            <div>
            <div className='nav-bar'>
                <div className="nav-left">
                    <a href="#" className="logo">Sneakers</a>
                    <a href="#" className="nav-left-item">Collection</a>
                    <a href="#" className="nav-left-item">Men</a>
                    <a href="#" className="nav-left-item">women</a>
                    <a href="#" className="nav-left-item">about</a>
                    <a href="#" className="nav-left-item">contact</a>
                </div>
                <div className="nav-right">
                    <AiOutlineShoppingCart className='cart-icon' />
                    <div className='user-icon'>
                        <img className='profile_img'
                            src={image5} alt="" />
                    </div>
                </div>


            </div>


        <hr className='line'/>

        <div className='body_c'> 
            <div>
                <div className=' img_container'>
                <img className='image1' src={image1} alt="" />
                </div>
                

                <div className="other_part">
                <img className='images_s' src={image1} alt="" />
                <img className='images_s' src={image2} alt="" />
                <img className='images_s' src={image3} alt="" />
                <img className='images_s' src={image4} alt="" />
                </div>
            </div>

            <div className='product_description'>
            <p className='p_header'>SNEAKER COMPANY</p>

            <p className='p_header2'> Fall Limited Edition Sneakers</p> 

            <p>These low-profile sneakers are your perfect casual wear companion. Featuring a 
            durable rubber outer sole, they’ll withstand everything the weather can offer.
            </p> 
            <div className='price_container'>
                <div className='price'>
                $125.00
                </div>
                <div className='fifty'>
                50%
                </div>
            </div>
            $250.00
            <div className='price_cart'>
            <div className='cart_container'>
                <div className='minus'>
                -
                </div>
                <div className='quantity'>
                0
                </div>
                <div className='plus'>
                +
                </div>
            </div>

            <div>
            <button className='btn'>
            <AiOutlineShoppingCart className='cart-icon1' /> Add to Cart
            </button>
            </div>

            </div>
                 
            </div>
        </div>
            </div>
        )
    }
}
