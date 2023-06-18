import React from 'react'
import './about.css'

export default function About () {
    return (
        <div>
            <div className="about">
                <div id='about' className="about-top">
                    <div className="about-title">
                        About Me
                    </div>
                    <div className="about-background-title">
                        #About Me
                    </div>
                </div>
                <div className="about-bottom">
                    <div className="about-picture">
                        <img src={require("../../../assets/toy003.png")} className='img' alt="logo" />
                    </div>
                    <div className="about-desc">
                        <h1>I am Lorem ipsum dolor </h1>
                        <p> Lorem ipsum dolor sit amet consectetur adipisicing elit. Quae quod quis autem obcaecati, expedita labore, rem, placeat consequuntur possimus debitis fugiat saepe amet nesciunt culpa. Soluta laboriosam, debitis sequi possimus quaerat veniam dolorem quia enim similique exercitationem libero corporis, distinctio amet, nostrum autem. Nobis, assumenda. </p>

                        <button className='button'><span>Download cv</span> </button>

                    </div>

                </div>
            </div>
        </div>
    )
}
