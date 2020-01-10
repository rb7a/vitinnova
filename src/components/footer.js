import React from 'react'
import { Link } from 'gatsby'
import LocalizedLink from './LocalizedLink'
import './footer.css'
import footerPhoto from '../images/footer-istituzionale.jpg'
import mailIcon from '../images/email-icon.png'
import phoneIcon from '../images/phone-icon.png'


function footer ( { titleFooter, subtitleFooter }) {
  return (
    <footer>
        <div className='footer-container shadow'>
            <h2>{ titleFooter }</h2>
            <p>{ subtitleFooter} </p>

         <div className='contact-container'>
   
   <div>
    <img className='footer-icon' src={mailIcon} alt='email-icon'/>
        <p><a href='mailto:ancona@cia.it'>ancona@cia.it</a></p>
        </div>
        <div>
        <img className='footer-icon' src={phoneIcon} alt='phone-icon'/>
       
    
        <p><a href='tel:+39071200437'>071 200437</a></p>
        </div>
    </div>
           
        </div>
      <img className='img-footer' src={footerPhoto} />
    </footer>
  )
}
export default footer
