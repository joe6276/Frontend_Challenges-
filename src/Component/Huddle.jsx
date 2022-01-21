import React, { Component } from 'react';
import './huddle.css'

import message from '../images/icon-messages.svg'
import phone from '../images/icon-phone.svg'
import communities from '../images/icon-communities.svg'
// import phone2 from '../images/bg-section-top-desktop-2.svg'
// import phone3 from '../images/bg-section-top-desktop-1.svg'
export default class 
 extends Component {
  render() {
    return <div>
        <div className="huddle_header">
            <div className="huddle_header_img">
            <img src={message} alt="" /> <span className='span_header'>Huddle</span>  
            </div>

            <div className="huddle_header_img">
                <button className="try">
                    Try it free
                </button>
            </div>
          
        </div>

        {/* end of Header */}
        <div className='huddle_header2'>
        <h1 className='huddle_header2h1'>Build The Community Your Fans Will Love</h1>
        <p className="huddle_header2p"> Huddle re-imagines the way we build communities. You have a voice, but so does 
  your audience. Create connections with your users as you engage in genuine discussion. </p>
        <button className="huddle_header2b">
  Get Started For Free</button>
        </div>

{/* 
        <div style={{width:'200px', height:'200px'}}>
            <img style={{width:'100%', height:'100%'}} src={phone} alt="" />
        </div> */}

        <div  className='huddle_section'>
            <div className="huddle_sectionleft">
                <img style={{width:'60px', height:'60px'}} src={communities} alt="" />
                <h1 style={{color:'black', fontSize:'50px',fontWeight:'bold'}}>  1.4k+</h1>
                
                <p>Communities Formed</p>
                            </div>
            <div className="huddle_sectionright">

            <img style={{width:'60px', height:'60px'}} src={message} alt="" />
                <h1 style={{color:'black', fontSize:'50px',fontWeight:'bold'}}>  2.7M+</h1>
                
                <p> Messages Sent</p>
            </div>
        </div>
    </div>
  }
}
