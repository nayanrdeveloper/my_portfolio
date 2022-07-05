import React from 'react'
import './Navbar.css'

export default function Navbar() {
  return (
    <div className='n-wrapper'>
        <div className='n-left'>
            <div className='n-name'>Nayan Radadiya</div>
            <div className='n-toggle-btn'>Toggle Button</div>
        </div>
        <div className='n-right'>
            <div className='n-list'>
                <ul>
                    <li>Experience</li>
                    <li>Portfolio</li>
                    <li>Testimontials</li>
                    <li>Service</li>
                </ul>
            </div>
            <div className='n-contact-btn'>
                <button className='btn n-btn'>Contact Us</button>
            </div>
        </div>
    </div>
  )
}
