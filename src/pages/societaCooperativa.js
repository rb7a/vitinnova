import React from 'react'
import { graphql } from 'gatsby'
import Seo from '../components/seo'
import Layout from '../components/layout'

const SocietaCooperativa = ({ pageContext: { locale }, data }) => {
  const { title1, title2, title3, p1, p2, p3, p4, p5, p6 } = data.societaCooperativa.childSocietaCooperativaJson
  return (
    <Layout
      path='/'
      locale={locale} data={data}
      titleFooter={data.footer.childFooterJson.title}
      subtitleFooter={data.footer.childFooterJson.subtitle}
      dataHeader={data.header.childHeaderJson}
    >
      <Seo title='Il progetto' />
      <section className='container' style={{ padding: '0 4%', marginBottom: '200px' }}>
        <div style={{ textAlign: 'center', marginTop: '120px', marginBottom: '180px' }}>
          <h1>{title1} <span style={{ color: '#b00020' }}>{title2}</span> {title3}</h1>
        </div>
        <p>{p1}<br /> <br />{p2}<br /><br />{p3}<br /><br />
          {p4}<br /><br />
          {p5}<br /><br />
          {p6}
        </p>
      </section>
    </Layout>
  )
}

export const query = graphql`
  query SocietaCooperativa($locale: String) {
    header: file(name: { eq: $locale }, relativeDirectory: { eq: "header" }) {
      childHeaderJson {
        innovation
        project
        contact
      }
    }
    footer: file(name: { eq: $locale }, relativeDirectory: { eq: "footer" }) {
      childFooterJson {
        title
        subtitle
      }
    }
    societaCooperativa: file(name: { eq: $locale }, relativeDirectory: { eq: "societaCooperativa" }) {
      childSocietaCooperativaJson {
        title1
        title2
        title3
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

export default SocietaCooperativa
