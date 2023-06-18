import React from 'react'
import './other.css'

export default function OtherBox () {
    return (
        <div className="others-box">
            <div className="others-title">
                Other
            </div>
            <div className="other-box">
                <div className="Rounded-bar" >
                    <span className="label">React</span>
                </div>

                <div className="Rounded-bar" >
                    <span className="label">Boostrap</span>
                </div>

                <div className="Rounded-bar" >
                    <span className="label">Adobe Xd</span>
                </div>

                <div className="Rounded-bar">
                    <span className="label">Photoshop</span>
                </div>
                <div className="Rounded-bar">
                    <span className="label">Vs Code</span>
                </div>

            </div>

        </div>
    )
}
