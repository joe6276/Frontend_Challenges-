import React, { Component } from 'react';
import './huddle.css'

import message from '../images/icon-messages.svg'
import phone from '../images/screen-mockups.svg'
import communities from '../images/icon-communities.svg'
import phone2 from '../images/icon-email.svg'
import phone3 from '../images/icon-phone.svg'
import phone5 from '../images/icon-messages.svg'
import grow from '../images/illustration-grow-together.svg'
import user from '../images/illustration-your-users.svg'
import flow from '../images/illustration-flowing-conversation.svg'
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


        <div className='mockups'>
            <img style={{width:'100%', height:'100%'}} src={phone} alt="" />
        </div>

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

        <div className="huddle_section1">
           <div className="huddle_section1left">
            <h1>Grow Together</h1>
            <p>Generate meaningful discussions with your audience and build a strong, loyal community. 
            Think of the insightful conversations you miss out on with a feedback form. </p>

           </div>
           <div className="huddle_section1right">
               <img src= {grow} alt="" />
           </div>
        </div>


        <div className="huddle_section2">
          
           <div className="huddle_section2left">
               <img src= {flow} alt="" />

           </div>

           <div className="huddle_section2right">
            <h1>Flowing Conversations</h1>
            <p>You wouldn't paginate a conversation in real life, so why do it online? Our threads have 
             just-in-time loading for a more natural flow. </p>

           </div>
        </div>


        <div className="huddle_section3">
           <div className="huddle_section3left">
            <h1> Your Users</h1>
            <p>It takes no time at all to integrate Huddle with your app's authentication solution. This means, 
            once signed in to your app, your users can start chatting immediately.</p>

           </div>
           <div className="huddle_section3right">
               <img src= {user} alt="" />
           </div>
        </div>

        <div className="huddle_section4">
            <h1>   Ready To Build Your Community?</h1>
            <button className="huddle_header2b">
  Get Started For Free</button>
        </div>


        <div className="huddle_footer">
            <div className="huddle_footer1">
                <div>
                <img src={message} alt="" /> <span>Huddle</span>
                </div>
                <div>
                <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris nulla quam, hendrerit lacinia 
                vestibulum a, ultrices quis sem.
                </p>
                </div>

                <div>
                    <p>  Phone: +1-543-123-4567</p>
                </div>
                <div>
                    <p> example@huddle.com</p>
                </div>
                <div className='huddle_icons'>
                    <img  style={{width:'30px', height :'30px'}} src={phone2} alt="" />
                    <img  style={{width:'30px', height :'30px'}} src={phone3} alt="" />
                    <img  style={{width:'30px', height :'30px'}} src={phone5} alt="" />
                </div>
            </div>
            <div className="huddle_footer2">        
                <div><h1>NEWSLETTER</h1></div>
                <div><p> 
                To recieve tips on how to grow your community, sign up to our weekly newsletter. We’ll never 
                send you spam or pass on your email address</p></div>
                <div className='huddle_form'> 
                <input type='text' />
                <button>Subscribe</button>
                </div>
            </div>
        </div>

    </div>
  }
}
