import React from 'react'
import "./contact.css"
import ContactType from './ContactType'

export default function Contact () {
    return (
        <div className='contact-container'>
            <div className="contact-title">
                Contact
            </div>
            <div className="contact-background-title">
                #Contact
            </div>
            <div className="contacts-box">
                <div className="contacts-left-box">
                    <div className="map">
                        <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d15565.952122239172!2d75.47129992545409!3d12.746787056057341!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3ba4e8472d04cf49%3A0xb692059317a0fc18!2sKadaba%2C%20Karnataka%20574221!5e0!3m2!1sen!2sin!4v1640932477886!5m2!1sen!2sin" width="auto" height="auto" allowFullScreen="" loading="lazy"></iframe>
                    </div>

                </div>
                <div className="contacts-right-box">
                    <ContactType />
                </div>
            </div>

        </div>
    )
}
