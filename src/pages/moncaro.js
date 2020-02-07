import React from 'react'
import { graphql } from 'gatsby'
import Seo from '../components/seo'
import Layout from '../components/layout'

const Moncaro = ({ pageContext: { locale }, data }) => {
  const { title1, title2, p1, p2, p3, p4, p5, p6, p7, p8, p9, p10 } = data.moncaro.childMoncaroJson
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

        </p>
      </section>
    </Layout>
  )
}

export const query = graphql`
  query Moncaro($locale: String) {
    footer: file(name: { eq: $locale }, relativeDirectory: { eq: "footer" }) {
      childFooterJson {
        title
        subtitle
      }
    }
    moncaro: file(name: { eq: $locale }, relativeDirectory: { eq: "moncaro" }) {
      childMoncaroJson {
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
      }
    }
  }
`

export default Moncaro
