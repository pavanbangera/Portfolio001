import React from 'react'
import './web.css'

export default function WebMenu () {
    return (
        <div>
            <div className="web-options">
                <div className="web-option">
                    <a href="#intro"> <img src={require("../../../assets/house.png")} className='web-icon' alt="logo" />Home</a>
                </div>
                <div className="web-option">
                    <a href="#about"><img src={require("../../../assets/about.png")} className='web-icon' alt="logo" />About Me</a>
                </div>
                <div className="web-option">
                    <a href="#skills"><img src={require("../../../assets/skills.png")} className='web-icon' alt="logo" />Skills</a>
                </div>
                <div className="web-option">
                    <a href="#projects"><img src={require("../../../assets/project.png")} className='web-icon' alt="logo" />Projects</a>
                </div>
                <div className="web-option">
                    <a href="#contact"><img src={require("../../../assets/send.png")} className='web-icon' alt="logo" />Contact</a>
                </div>
            </div>
        </div >
    )
}
