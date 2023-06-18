import React from 'react'
import './intro.css'

export default function Home () {
    return (
        <div id='intro' className='intro'>
            <div className="intro-top">
                <div className="intro-heading">
                    <div className="main-heading">
                        Haii<span className='hand'>👋</span>..
                    </div>
                    <div className="sub-heading">
                        This is Pavan Bangera
                    </div>
                </div>
                <div className="intro-picture">
                    <img src={require("../../../assets/toy002.png")} className='img' alt="logo" />
                </div>
            </div>
            <div className="intro-bottom">
                <div className="intro-bottom-picture">
                    <img src={require("../../../assets/facebook.png")} className='bottom-icon' alt="" />
                </div>
                <div className="intro-bottom-picture">
                    <img src={require("../../../assets/instagram.png")} className='bottom-icon' alt="" />
                </div>
                <div className="intro-bottom-picture">
                    <img src={require("../../../assets/github.png")} className='bottom-icon' alt="" />
                </div>
                <div className="intro-bottom-picture">
                    <img src={require("../../../assets/twitter.png")} className='bottom-icon' alt="" />
                </div>
            </div>
        </div>
    )
}
