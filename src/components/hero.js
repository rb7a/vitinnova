import React from 'react'
import LocalizedLink from './LocalizedLink'
import './hero.css'

function Hero ({ title, subtitle, cta }) {
  return (
    <div className='hero'>
      <h1>{title}</h1>
      <p>
        {subtitle}
      </p>
      {/* <LocalizedLink className='cta-hero' to='/il-progetto'>{cta}</LocalizedLink> */}
    </div>
  )
}

export default Hero
