import React, { useState } from 'react'
import './navbar.css'
import WebMenu from './web-menu'
import MobileMenu from './mobile-menu'


export default function Navbar () {
    const [mobileLogo, setmobileLogo] = useState(false);
    const mobileToggel = () => {
        if (mobileLogo === false) {
            setmobileLogo(true);
        } else {
            setmobileLogo(false);
        }
    }
    return (
        <div className='nav-bar '>
            <div className="nav">
                <div className="logo">
                    bangera
                </div>
                <div className="menu">
                    <div className="web-menu">

                        <WebMenu />

                    </div>
                    <div className="mobile-menu">
                        <div className="mobile-toggle" onClick={mobileToggel}>{mobileLogo === false ? <img src={require("../../assets/menu.png")} className='hambargur' alt="" /> : <img src={require("../../assets/close.png")} className='hambargur' alt="" />}</div>
                        <div >
                            {mobileLogo && <MobileMenu />}

                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
