import React from 'react'
import './Cards.css'

export default function Cards(props) {
  return (
    <div className='card'>
        <img src={props.emoji} alt='' />
        <span>Design</span>
        <span>Photoshop,Figma,Adobe</span>
    </div>
  )
}
