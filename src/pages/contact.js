import React from 'react'
import { graphql } from 'gatsby'
import Seo from '../components/seo'
import Layout from '../components/layout'

const Contact = ({ pageContext: { locale }, data }) => {
  return (
    <div className='contact'>
      <Layout path='/' locale={locale} data={data} titleFooter={data.footer.childFooterJson.title} subtitleFooter={data.footer.childFooterJson.subtitle}>

        <Seo title='Il progetto' />
        <section className='container' style={{ padding: '0 4%', marginBottom: '200px' }}>
          <div style={{ textAlign: 'center', marginTop: '120px', marginBottom: '180px' }}>
            <h1>TI VUOI METTERE IN <span style={{ color: '#b00020' }}>CONTATTO</span> CON NOI?</h1>
            <p>Per maggiori informazioni su Vitinnova:</p>
          </div>
          <div className='contact-page-container'>
            <p><strong>Email:</strong><a href='mailto:ancona@cia.it'> ancona@cia.it</a></p>
            <p><strong>Telefono:</strong><a href='tel:071200437'> 071 200437</a></p>
          </div>
        </section>
      </Layout>
      <style jsx='true'>{`
          .contact .footer-container{
              display: none
          }
          .contact-page-container{
              text-align: center
          }
          .contact-page-container p {
              margin: 40px;
              font-size:18px
          }
          .contact-page-container a {
              color: #777;
              text-decoration: none;
          }

          .contact-page-container a:hover {
              color: #222;
          }
          @media(min-width:1200px){
            .contact-page-container{
                display: flex;
                justify-content: space-evenly
            }
          }
          
          
          `}
      </style>
    </div>

  )
}

export const query = graphql`
  query Contact($locale: String) {
    footer: file(name: { eq: $locale }, relativeDirectory: { eq: "footer" }) {
      childFooterJson {
        title
        subtitle
      }
    }
  }
`

export default Contact
