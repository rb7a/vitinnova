import React, { useState } from 'react'
import { Link } from 'gatsby'
import LocalizedLink from './LocalizedLink'
import fbIcon from '../images/facebook-icon.png'
import italyFlag from '../images/italy-flag.png'
import ukFlag from '../images/uk-flag.png'
import './header.css'

function Header ({ locale, dataHeader }) {
  const { innovation, project, contact } = dataHeader

  const [visible, setVisible] = useState(false)

  const showMobileMenu = () => setVisible(!visible)
  console.log(dataHeader, 'dataHeader')

  return (
    <header>
      <section className='mobile-nav'>
        <a href='https://www.facebook.com/vitinnovavitinnova/' target='_blank'><img src={fbIcon} alt='' /></a>
        {visible ? (
          <div onClick={showMobileMenu} className='burger-icon-close'>
            <span>X</span>
          </div>
        ) : (
          <div onClick={showMobileMenu} className='burger-icon-open'>
            <span />
            <span />
            <span />
          </div>
        )}
      </section>

      {visible ? (
        <nav className='mobile-menu'>
          <ul>
            <li>
              <LocalizedLink to='/'>Home</LocalizedLink>
            </li>
            <li>
              <LocalizedLink to='/innovazione'>{innovation}</LocalizedLink>
            </li>
            <li>
              <LocalizedLink to='/il-progetto'>{project}</LocalizedLink>
            </li>

            <li>
              <LocalizedLink to='/team'>Team</LocalizedLink>
            </li>

            <li>
              <LocalizedLink to='/contatti'>{contact}</LocalizedLink>
            </li>
            <li>
              {locale == 'it'
                ? <Link to='/en'><img src={ukFlag} /></Link> : <Link to='/'><img src={italyFlag} /></Link>}
            </li>

          </ul>
        </nav>
      ) : (
        <p />
      )}

      <nav className='desktop-menu'>
        <ul>
          <li>
            <LocalizedLink to='/'>Home</LocalizedLink>
          </li>
          <li>
            <LocalizedLink to='/innovazione'>{innovation}</LocalizedLink>
          </li>
          <li>
            <LocalizedLink to='/il-progetto'>{project}</LocalizedLink>
          </li>

          <li>
            <LocalizedLink to='/team'>Team</LocalizedLink>
          </li>

          <li>
            <LocalizedLink to='/contatti'>{contact}</LocalizedLink>
          </li>
          <li>
            {locale == 'it'
              ? <Link to='/en'><img style={{ position: 'relative', bottom: '8px' }} src={ukFlag} /></Link> : <Link to='/'><img style={{ position: 'relative', bottom: '8px' }} src={italyFlag} /></Link>}
          </li>
        </ul>
        <div style={{ position: 'relative', top: '5px' }}>
          <a href='https://www.facebook.com/vitinnovavitinnova/' target='_blank'><img src={fbIcon} alt='facebook-icon' /></a>
        </div>
      </nav>
    </header>
  )
}

export default Header
