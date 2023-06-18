import React from 'react'
import './skills.css'
import CodingBox from './coding'
import OtherBox from './other'

export default function Skills () {
    return (
        <div id='skills' className='skills'>
            <div className="title"> Skills</div>
            <div className="background-title"> #Skills</div>
            <div className="coding-skills">
                <CodingBox />
            </div>
            <div className="coding-skills">
                <OtherBox />
            </div>
        </div>
    )
}
