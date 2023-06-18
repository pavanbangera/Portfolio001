import React from 'react'
import { ContactData } from '../../Data'

export default function ContactType () {
    return (
        ContactData.map((e) => {

            return (

                <div className='contact-box' key={e.platform} >
                    <div className="contact-box-top">
                        <div className="contact-heading">{e.platform}</div>
                        <div className="contact-img">{e.image}</div>
                    </div>
                    <div className="contact-box-bottom">
                        {e.contact && <div className="contact-number">{e.contact}</div>}
                        {e.link && <a href={e.link} target="_blank">Chat</a>}
                    </div>

                </div>
            )
        })
    )
}
