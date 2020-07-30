import './index.css'
import React from 'react'
import { graphql, Link } from 'gatsby'
import Layout from '../components/layout'
import Seo from '../components/seo'
import Hero from '../components/hero'
import AboutHome from '../components/aboutHome'
import GoalsHome from '../components/goalsHome'

const IndexPage = ({ pageContext: { locale }, data }) => {
  return (
    <Layout
      path='/' locale={locale} data={data}
      dataHeader={data.header.childHeaderJson}
      titleFooter={data.footer.childFooterJson.title}
      subtitleFooter={data.footer.childFooterJson.subtitle}
    >
      <Seo title='Vitinnova' description='La Rivoluzione Vitivinicola' />
      <section className='container'>
        <Hero
          title={data.hero.childHeroJson.title}
          subtitle={data.hero.childHeroJson.subtitle}
          cta={data.hero.childHeroJson.cta}
          linkCta={data.hero.childHeroJson.linkCta}
        />

        <AboutHome
          title={data.aboutHome.childAboutHomeJson.title}
          subtitle={data.aboutHome.childAboutHomeJson.subtitle}
          cta={data.aboutHome.childAboutHomeJson.cta}
          linkInnovation={data.aboutHome.childAboutHomeJson.linkInnovation}
        />
        <GoalsHome
          titleSection={data.goalsHome.childGoalsHomeJson.titleSection}
          subtitleSection={data.goalsHome.childGoalsHomeJson.subtitleSection}
          title1={data.goalsHome.childGoalsHomeJson.title1}
          subtitle1={data.goalsHome.childGoalsHomeJson.subtitle1}
          title2={data.goalsHome.childGoalsHomeJson.title2}
          subtitle2={data.goalsHome.childGoalsHomeJson.subtitle2}
          title4={data.goalsHome.childGoalsHomeJson.title4}
          subtitle4={data.goalsHome.childGoalsHomeJson.subtitle4}
          title5={data.goalsHome.childGoalsHomeJson.title5}
          subtitle5={data.goalsHome.childGoalsHomeJson.subtitle5}
        />

        <iframe className='shadow' style={{ marginTop: '120px' }} width='100%' height='500px' src='https://www.youtube.com/embed/zTJ3TuRWhLA' frameBorder='0' allow='accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture' allowFullScreen />
      </section>
    </Layout>
  )
}

export const query = graphql`
  query Home($locale: String) {
    header: file(name: { eq: $locale }, relativeDirectory: { eq: "header" }) {
      childHeaderJson {
        innovation
        project
        contact
      }
    }
    hero: file(name: { eq: $locale }, relativeDirectory: { eq: "hero" }) {
      childHeroJson {
        title
        subtitle
        cta
        linkCta
      }
    }
    aboutHome: file(name: { eq: $locale }, relativeDirectory: { eq: "aboutHome" }) {
      childAboutHomeJson {
        title
        subtitle
        cta,
        linkInnovation
      }
    }
    goalsHome: file(name: { eq: $locale }, relativeDirectory: { eq: "goalsHome" }) {
      childGoalsHomeJson {
        titleSection
        subtitleSection
        title1
        subtitle1
        title2
        subtitle2
        title4
        subtitle4
        title5
        subtitle5
      }
    }
    footer: file(name: { eq: $locale }, relativeDirectory: { eq: "footer" }) {
      childFooterJson {
        title
        subtitle
      }
    }
  }
`

export default IndexPage
