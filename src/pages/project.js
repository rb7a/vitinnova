import React from 'react'
import { graphql } from 'gatsby'
import Seo from '../components/seo'
import Layout from '../components/layout'
import volantino from '../images/programma-vitinnova.jpg'

const Project = ({ pageContext: { locale }, data }) => {
  const { title1, title2, subtitle, titleP1, p1, p2, p3, titleP2, p4, p5, p6, action1, action2, action3, action4, action5, action6, action7 } = data.project.childProjectJson
  return (
    <Layout
      path='/' locale={locale} data={data}
      titleFooter={data.footer.childFooterJson.title}
      subtitleFooter={data.footer.childFooterJson.subtitle}
      dataHeader={data.header.childHeaderJson}
    >
      <Seo title='Il progetto' />

      <section className='container' style={{ padding: '0 4%', marginBottom: '180px' }}>
        <div style={{ textAlign: 'center', marginTop: '120px', marginBottom: '180px' }}>
          <h1>{title1} <span style={{ color: '#b00020' }}>{title2}</span></h1>
          <p>{subtitle}</p>
        </div>
        <img src={volantino} style={{
          maxWidth:'100%'
        }}></img>
        <p style={{
          marginBottom: '120px'
        }}>Segui la diretta: <a href=" https://www.tipicita.it/project/vitinnova-e-la-vitivinicoltura-4-0-oggi-il-futuro-e-passato-esperienze-vendemmie-2019-e-2020/">Vitinnova e la Vitivinicoltura 4.0</a></p>
        <div>
          <h2>{titleP1}</h2>
          <p>{p1}<br /><br /> {p2}<br /><br /> {p3}</p>
          <h2 style={{ marginTop: '80px' }}>{titleP2}</h2>
          <p>{p4}<br /><br />
            {p5}
            <br /><br />
            {p6}

            <br /> <br />{action1}
            <br /> <br />{action2}
            <br /> <br />{action3}
            <br /><br />{action4}
            <br /><br />{action5}
            <br /><br />{action6}
            <br /><br />{action7}
          </p>
        </div>
      </section>
    </Layout>
  )
}

export const query = graphql`
  query Project($locale: String) {
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
    project: file(name: { eq: $locale }, relativeDirectory: { eq: "project" }) {
      childProjectJson {
        title1
        title2
        subtitle
        titleP1
        p1
        p2
        p3
        titleP2
        p4
        p5
        p6
        action1
        action2
        action3
        action4
        action5
        action6
        action7
      }
    }
  }
`

export default Project
