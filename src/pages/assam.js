import React from 'react'
import { graphql } from 'gatsby'
import Seo from '../components/seo'
import Layout from '../components/layout'

const Assam = ({ pageContext: { locale }, data }) => {
  const { title1, title2, p1, p2, p3, p4, p5, p6, p7 } = data.assam.childAssamJson

  return (
    <Layout path='/' locale={locale} data={data} titleFooter={data.footer.childFooterJson.title} subtitleFooter={data.footer.childFooterJson.subtitle}>
      <Seo title='Il progetto' />
      <section className='container' style={{ padding: '0 4%', marginBottom: '200px' }}>
        <div style={{ textAlign: 'center', marginTop: '120px', marginBottom: '180px' }}>
          <h1>{title1} <span style={{ color: '#b00020' }}>{title2}</span></h1>
        </div>
        <div className='shadow-page'>
          <p>
            {p1}<br /><br />
            {p2}<br /><br />
            {p3}<br /><br />
            {p4}<br /><br />
            {p5}<br /><br />
            {p6}<br /><br />
            {p7}<br /><br />
          </p>
        </div>
      </section>
    </Layout>
  )
}

export const query = graphql`
  query Assam($locale: String) {
    footer: file(name: { eq: $locale }, relativeDirectory: { eq: "footer" }) {
      childFooterJson {
        title
        subtitle
      }
    }
    assam: file(name: { eq: $locale }, relativeDirectory: { eq: "assam" }) {
      childAssamJson {
        title1
        title2
        p1
        p2
        p3
        p4
        p5
        p6
      }
    }
  }
`

export default Assam
