import React, { Component } from 'react'
import './price.css'

export default class Price extends Component {
    render() {
        return (
            <div>
                <div className='container_div'>
                    <div className='toogle'>
                        <h2>Our Pricing</h2>
                        <div className='time'>
                            <h3>Annually</h3>
                            <div className="toggle-icon">
                                <div className="inner-dot"></div>
                            </div>
                            <h3>Monthly</h3>
                        </div>
                    </div>


                    <div className='contain'>
                        <div className='contain1'>
                            <p className='contain_paragraph'> Basic </p>
                            <p className='contain_paragraph1'> $ 199.99</p>
                            <hr className='line'></hr>
                            <p className='contain_paragraph'> 500 GB Storage </p>
                            <hr className='line'></hr>
                            <p className='contain_paragraph'> 2 Users Allowed </p>
                            <hr className='line'></hr>
                            <p className='contain_paragraph'>Send up to 3 GB </p>
                            <hr className='line'></hr>
                            <button className='btns'> Learn More </button>

                        </div>




                        <div className='contain2'>
                            <p className='contain_paragraph'>   Professional </p>
                            <p className='contain_paragraph1'> $ 249.99</p>
                            <hr className='line2'></hr>
                            <p className='contain_paragraph'> 1 TB Storage </p>
                            <hr className='line2'></hr>
                            <p className='contain_paragraph'> 5 Users Allowed </p>
                            <hr className='line2'></hr>
                            <p className='contain_paragraph'>Send up to 10 GB </p>
                            <hr className='line2'></hr>
                            <button className='btn'> Learn More </button>
                        </div>

                        <div className='contain3'>
                            <p className='contain_paragraph'>    Master </p>
                            <p className='contain_paragraph1'> $ 399.99</p>
                            <hr className='line3'></hr>
                            <p className='contain_paragraph'> 2 TB Storage </p>
                            <hr className='line3'></hr>
                            <p className='contain_paragraph'> 10 Users Allowed </p>
                            <hr className='line3'></hr>
                            <p className='contain_paragraph'>Send up to 20 GB </p>
                            <hr className='line3'></hr>
                            <button className='btns'> Learn More </button>

                        </div>
                    </div>
                </div>
            </div>
        )
    }
}
