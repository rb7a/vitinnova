import React from 'react'

const goalsHome = ({ titleSection, subtitleSection, title1, subtitle1, title2, subtitle2, title3, subtitle3, title4, subtitle4, title5, subtitle5 }) => (
  <section className='goals-section'>
    <div>
      <h2>
        {titleSection}
      </h2>
      <p>
        {subtitleSection}
      </p>
    </div>
    <div className='container' id='why-section'>
      <div className='why-box'>
        <span>1</span>
        <strong>{title1}</strong>
        <p>
          {subtitle1}
        </p>
      </div>
      <div className='why-box' />
      <div className='why-box'>
        <span>2</span>
        <strong>{title2}</strong>
        <p>
          {subtitle2}
        </p>
      </div>
      <div className='why-box' />
      <div className='why-box'>
        <span>3</span>
        <strong>{title3}</strong>
        <p>
          {subtitle3}
        </p>
      </div>
      <div className='why-box' />
      <div className='why-box'>
        <span>4</span>
        <strong>{title4}</strong>
        <p>
          {subtitle4}
        </p>
      </div>
      <div className='why-box' />
      <div className='why-box'>
        <span>5</span>
        <strong>{title5}</strong>
        <p>
          {subtitle5}
        </p>
      </div>
    </div>
    <style jsx='true'>{`
      .goals-section {
        margin-top: 120px;
        margin-bottom: 40px;
        text-align: center
      }
   
      .thistle-container span {
        color: #79a43d;
        text-align: center
      }
    
      .why-box {
        padding-top: 20px;
      }
      .why-box span {
        font-size: 32px;
        font-weight: bold;
        display: block;
        color: #b00020;
        font-size: 54px;
        opacity: 70%;
      }
      .why-box strong {
        font-size: 18px;
        text-align: center;
        display: block;
      }
     
      @media only screen and (min-width: 1200px) {

        .goals-section{
            margin-top: 160px
        }
        #why-section {
         margin-top: 60px;
          display: grid;
          grid-template-columns: 1fr 1fr 1fr;
          grid-template-rows: 1fr 1fr 1fr;
          grid-column-gap: 0px;
          grid-row-gap: 0px;
        }
        .why-box {
          padding-top: 20px;
        }
        .why-box p {
          width: 140%;
          margin: 0 auto;
          position: relative;
          right: 60px;
          top: 20px
      }
      }
    `}
    </style>
  </section>
)

export default goalsHome
