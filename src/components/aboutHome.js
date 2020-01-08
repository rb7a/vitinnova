import React from 'react'
import LocalizedLink from './LocalizedLink'
import './hero.css'
import './aboutHome.css'
import imgAboutHome from '../images/vittinova-il-progeto.jpg'

function aboutHome ({ title, subtitle, cta }) {
  return (
    <section className='about-home'>
      <div>
        <img src={imgAboutHome} />
      </div>
      <div>
        <h2>{title}</h2>
        <p>{subtitle}
        </p>
        <LocalizedLink className='about-home-cta' to='/innovazione'>> {cta}</LocalizedLink>
      </div>
    </section>
  )
}

export default aboutHome
