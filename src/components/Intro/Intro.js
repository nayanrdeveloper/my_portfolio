import React from 'react'
import './Intro.css'
import LinkdinImage from '../../img/linkedin.png'
import InstagramImage from '../../img/instagram.png'
import GithubImage from '../../img/github.png'
import NatureImange from '../../img/colorful-ga.jpg'

export default function () {
    return (
        <div className='intro'>
            <div className='intro-left'>
                <div className='intro-name'>
                    <span>Hey I am a </span>
                    <span>Nayan Radadiya</span>
                    <span> I'm Fronted Blockchain Developer. My Dream for become a best Blockchain Developer.So Currently I'm preparatin of Blockchain Developement.</span>
                    <button className='btn intro-btn'>Hire Me</button>
                    <div className='intro-social-icon'>
                        <img src={LinkdinImage} alt='' />
                        <img src={GithubImage} alt='' />
                        <img src={InstagramImage} alt='' />
                    </div>
                </div>
            </div>
            <div className='intro-right'>
                <img src={NatureImange} alt='' />
            </div>
        </div>
    )
}
