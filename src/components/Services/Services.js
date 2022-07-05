import React from 'react'
import Cards from '../Cards/Cards'
import './Services.css'
import Emoji1 from '../../img/emoticon-glass1.png';
import Emoji2 from '../../img/emoticon-glass.png';
import Emoji3 from '../../img/emoticon-love.png';

export default function Services() {
    return (
        <div className='services'>
            <div className='left-awesome'>
                <span>My Awesome</span>
                <span>Services</span>
                <span>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.</span>
                <button className='btn'>Download CV</button>
            </div>
            <div className='right-card'>
                <div style={{top:'1rem',left: '14rem'}} >
                    <Cards emoji={Emoji1} heading="" details="" />
                </div>
                <div style={{top: '12rem', left: '1rem'}} >
                    <Cards emoji={Emoji2} heading="" details="" />
                </div>
                <div style={{top: '19rem', left: '14rem'}} >
                    <Cards emoji={Emoji3} heading="" details="" />
                </div>
            </div>
        </div>
    )
}
