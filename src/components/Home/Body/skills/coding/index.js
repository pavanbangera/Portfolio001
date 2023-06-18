import React from 'react'
import './codingBox.css'

export default function CodingBox () {
    return (
        <div className="skills-box">
            <div className="skills-title">
                coding
            </div>
            <div className="skill-box">
                <div className="skill-top">
                    <div className="skill-heading">html</div>
                    <div className="skill-percentage">96%</div>
                </div>
                <div className="skill-bottom">
                    <div className="progress-bar">
                        <div id="html" className=''></div>
                    </div>
                </div>
            </div>
            <div className="skill-box">
                <div className="skill-top">
                    <div className="skill-heading">css</div>
                    <div className="skill-percentage">85%</div>
                </div>
                <div className="skill-bottom">
                    <div className="progress-bar">
                        <div id="css"></div>
                    </div>
                </div>
            </div>
            <div className="skill-box">
                <div className="skill-top">
                    <div className="skill-heading">JavaScript</div>
                    <div className="skill-percentage">90%</div>
                </div>
                <div className="skill-bottom">
                    <div className="progress-bar">
                        <div id="js"></div>
                    </div>
                </div>
            </div>
            <div className="skill-box">
                <div className="skill-top">
                    <div className="skill-heading">Php</div>
                    <div className="skill-percentage">75%</div>
                </div>
                <div className="skill-bottom">
                    <div className="progress-bar">
                        <div id="php"></div>
                    </div>
                </div>
            </div>
            <div className="skill-box">
                <div className="skill-top">
                    <div className="skill-heading">node js</div>
                    <div className="skill-percentage">65%</div>
                </div>
                <div className="skill-bottom">
                    <div className="progress-bar">
                        <div id="node-js"></div>
                    </div>
                </div>
            </div>
        </div>
    )
}
