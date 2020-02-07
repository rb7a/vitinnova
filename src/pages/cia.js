import React from 'react'
import { graphql } from 'gatsby'
import Seo from '../components/seo'
import Layout from '../components/layout'

const Cia = ({ pageContext: { locale }, data }) => {
  const { title1, title2, p1, p2, p3, p4, p5, p6, p7, p8, p9, p10, p11, p12, p13, p14, p15, p16, p17, p18, p19, p20, p21, p22, p23, p24, p25 } = data.cia.childCiaJson

  return (
    <Layout path='/' locale={locale} data={data} titleFooter={data.footer.childFooterJson.title} subtitleFooter={data.footer.childFooterJson.subtitle}>
      <Seo title='Il progetto' />
      <section className='container' style={{ padding: '0 4%', marginBottom: '200px' }}>
        <div style={{ textAlign: 'center', marginTop: '120px', marginBottom: '180px' }}>
          <h1>{title1} <span style={{ color: '#b00020' }}>{title2}</span></h1>
        </div>
        <p>
          {p1}<br /><br />
          {p2}<br /><br />
          {p3}<br /><br />
          {p4}<br /><br />
          {p5}<br /><br />
          {p6}<br /><br />
          {p7}<br /><br />
          {p8}<br /><br />
          {p9}<br /><br />
          {p10}<br /><br />
          {p11}<br /><br />
          {p12}<br /><br />
          {p13}<br /><br />
          {p14}<br /><br />
          {p15}<br /><br />
          {p16}<br /><br />
          {p17}<br /><br />
          {p18}<br /><br />
          {p19}<br /><br />
          {p20}<br /><br />
          {p21}<br /><br />
          {p22}<br /><br />
          {p23}<br /><br />
          {p24}<br /><br />
          {p25}<br /><br />
        </p>
      </section>
    </Layout>
  )
}

export const query = graphql`
  query Cia($locale: String) {
    footer: file(name: { eq: $locale }, relativeDirectory: { eq: "footer" }) {
      childFooterJson {
        title
        subtitle
      }
    }
    cia: file(name: { eq: $locale }, relativeDirectory: { eq: "cia" }) {
      childCiaJson {
        title1
        title2
        p1
        p2
        p3
        p4
        p5
        p6
        p7
        p8
        p9
        p10
        p11
        p12
        p13
        p14
        p15
        p16
        p17
        p18
        p19
        p20
        p21
        p22
        p23
        p24
        p25
      }
    }
  }
`

export default Cia
