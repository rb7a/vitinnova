import React from 'react'
import './footer.css'
import footerPhoto from '../images/footer-istituzionale.jpg'
import mailIcon from '../images/email-icon.png'
import phoneIcon from '../images/phone-icon.png'
import gallery1 from '../images/vitinnova-gallery-1.jpg'
import gallery2 from '../images/vitinnova-gallery-2.jpg'
import gallery3 from '../images/vitinnova-gallery-3.jpg'
import gallery4 from '../images/vitinnova-gallery-4.jpg'

function footer ({ titleFooter, subtitleFooter }) {
  return (
    <section>
      <div className='gallery'>
        <img className='gallery-img' src={gallery1} alt='gallery-vittinova' />
        <img className='gallery-img' src={gallery2} alt='gallery-vittinova' />
        <img className='gallery-img' src={gallery3} alt='gallery-vittinova' />
        <img className='gallery-img' src={gallery4} alt='gallery-vittinova' />
      </div>
      <footer>
        <div className='footer-container shadow'>
          <h2>{titleFooter}</h2>
          <p>{subtitleFooter} </p>

          <div className='contact-container'>
            <div>
              <img className='footer-icon' src={mailIcon} alt='email-icon' />
              <p><a href='mailto:ancona@cia.it'>ancona@cia.it</a></p>
            </div>
            <div>
              <img className='footer-icon' src={phoneIcon} alt='phone-icon' />

              <p><a href='tel:+39071200437'>071 200437</a></p>
            </div>
          </div>

        </div>
        <img className='img-footer' src={footerPhoto} />
      </footer>
    </section>
  )
}
export default footer
