import React, { Component } from 'react'
import './time.css'
import work from '../images/icon-work.svg'
import play from '../images/icon-play.svg'
import study from '../images/icon-study.svg'
import exercise from '../images/icon-exercise.svg'
import social from '../images/icon-social.svg'
import selfcare from '../images/icon-self-care.svg'
import jeremy from '../images/image-jeremy.png'
import { BsThreeDots} from 'react-icons/bs'
export default class Time extends Component {
    render() {
        return (
            <div>
                
                <div className="tocontain">
                    <div className="divone">
                      
                        <div className='divone1'>
                         <div style={{width:'80px' ,margin:'20px', height:'80px'}}>

                            <img  style={{width:'100%' , height :'100%'}}src={jeremy} alt="" />
                           
                            
                        </div>
                        <br/>
                        <br/>
                         <p>Report by:</p>
                         <p className='tp'>Jeremy Robson</p>
                        </div>
                        <div className='divone2'>
                            <p>Daily</p>
                            <p style= {{color:'white', fontWeight:'bold'}}>Weekly</p>
                            <p>Monthly</p>
                       
                       </div>
                       
                    </div>
                    <div className="divtwo">
                    <img className='divtwoimg' src={work} alt="" />
                        <div className="divtwo1">
                            <div className='work'>
                                <div>Work</div>
                                <div><BsThreeDots/></div>
                            </div>
                            <div className='work-body'>
                            <p className='p_tex'> 32 hrs</p>
                            <p> Previous - 36hrs</p>
                           
                            </div>
                        </div>
                    </div>
                    <div className="divthree">
                    <img className='divtwoimg' src={play} alt="" />
                        <div className="divtwo1">
                            <div className='work'>
                                <div>Play</div>
                                <div><BsThreeDots/></div>
                            </div>
                            <div className='work-body'>
                            <p className='p_tex'> 10 hrs</p>
                            <p> Previous - 8hrs</p>
                           
                            </div>
                        </div>


                    </div>
                    <div className="divfour">
                    <img className='divtwoimg' src={study} alt="" />
                        <div className="divtwo1">
                            <div className='work'>
                                <div>Study</div>
                                <div><BsThreeDots/></div>
                            </div>
                            <div className='work-body'>
                            <p className='p_tex'> 4 hrs</p>
                            <p> Previous - 7hrs</p>
                           
                            </div>
                        </div>

                    </div>
                    <div className="divfive">
                    <img className='divtwoimg' src={exercise} alt="" />
                        <div className="divtwo1">
                            <div className='work'>
                                <div>Exercise</div>
                                <div><BsThreeDots/></div>
                            </div>
                            <div className='work-body'>
                            <p className='p_tex'> 4 hrs</p>
                            <p> Previous - 5hrs</p>
                           
                            </div>
                        </div>
                    </div>
                    <div className="divsix">
                    <img className='divtwoimg' src={social} alt="" />
                        <div className="divtwo1">
                            <div className='work'>
                                <div>Social</div>
                                <div><BsThreeDots/></div>
                            </div>
                            <div className='work-body'>
                            <p className='p_tex'> 5 hrs</p>
                            <p> Previous - 10hrs</p>
                           
                            </div>
                        </div> 
                    </div>
                    <div className="divseven">
                    <img className='divtwoimg' src={selfcare} alt="" />
                        <div className="divtwo1">
                            <div className='work1'>
                                <div>Self care</div>
                                <div><BsThreeDots/></div>
                            </div>
                            <div className='work-body'>
                            <p className='p_tex'> 2 hrs</p>
                            <p> Previous - 2hrs</p>
                           
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}
