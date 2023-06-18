import React from 'react'
import './projects.css'
import { ProjectData } from '../Data'

export default function Projects () {
    return (
        <div className='projects'>
            <div className="project-title">
                Projects
            </div>
            <div className="project-background-title">
                #Projects
            </div>
            <div className="projects-container">
                {ProjectData.map((e) => {

                    return (
                        <div className="card" key={e.title}>
                            <div className="card-body">
                                <div className="card-img">
                                    <img src={e.image} className='card-background-img' alt="" />
                                    <img src={e.image} className='card-img' alt="" />
                                </div>
                                <div className="card-desc">
                                    <div className="card-desc-heading"> {e.title}</div>
                                    <div className="card-desc-sub-heading">{e.desc.slice(0, 100)}..
                                    </div>
                                </div>
                                <div className="card-btn">
                                    <a href="" className='btn'>demo</a>
                                    <a href="" className='btn'>code</a>
                                </div>
                            </div>
                        </div>


                    )
                })}

            </div>
        </div>
    )
}
