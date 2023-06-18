import React from 'react'
import Intro from './Intro'
import About from './About'
import Skills from './skills'
import Projects from './projects'
import Contact from './Contact'

export default function Body () {
    return (
        <div className='body'>

            <section id="intro">
                <Intro />
            </section>
            <section id="about">
                <About />
            </section>
            <section id="skills">
                <Skills />
            </section>
            <section id="projects">
                <Projects />
            </section>
            <section id="contact">
                <Contact />
            </section>
        </div>
    )
}
