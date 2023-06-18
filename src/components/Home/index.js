import './home.css'
import Navbar from './Navbar'
import Body from './Body'
import Footer from './Footer'
import React from 'react'

export default function Home () {
    return (
        <div className='home'>
            <div><Navbar /></div>
            <div><Body /></div>
        </div>
    )
}
