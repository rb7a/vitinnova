import React from 'react'
import { Link, graphql } from 'gatsby'
import Layout from '../components/layout'
import Image from '../components/image'
import SEO from '../components/seo'
import LocalizedLink from '../components/LocalizedLink'
import Hero from '../components/Hero'
import AboutHome from '../components/aboutHome'
import GoalsHome from '../components/goalsHome'

const IndexPage = ({ pageContext: { locale }, data }) => {
  return (
    <Layout path='/' locale={locale} data={data} titleFooter={data.footer.childFooterJson.title} subtitleFooter={data.footer.childFooterJson.subtitle}>
    <SEO title='Vittinova' />
      <Hero
        title={data.hero.childHeroJson.title}
        subtitle={data.hero.childHeroJson.subtitle}
        cta={data.hero.childHeroJson.cta}
      />
      <AboutHome
        title={data.aboutHome.childAboutHomeJson.title}
        subtitle={data.aboutHome.childAboutHomeJson.subtitle}
        cta={data.aboutHome.childAboutHomeJson.cta}
      />
      <GoalsHome
        titleSection={data.goalsHome.childGoalsHomeJson.titleSection}
        subtitleSection={data.goalsHome.childGoalsHomeJson.subtitleSection}
        title1={data.goalsHome.childGoalsHomeJson.title1}
        subtitle1={data.goalsHome.childGoalsHomeJson.subtitle1}
        title2={data.goalsHome.childGoalsHomeJson.title2}
        subtitle2={data.goalsHome.childGoalsHomeJson.subtitle2}
        title3={data.goalsHome.childGoalsHomeJson.title3}
        subtitle3={data.goalsHome.childGoalsHomeJson.subtitle3}
        title4={data.goalsHome.childGoalsHomeJson.title4}
        subtitle4={data.goalsHome.childGoalsHomeJson.subtitle4}
        title5={data.goalsHome.childGoalsHomeJson.title5}
        subtitle5={data.goalsHome.childGoalsHomeJson.subtitle5}
      /> 
    </Layout>
  )
}

export const query = graphql`
  query Home($locale: String) {
    hero: file(name: { eq: $locale }, relativeDirectory: { eq: "hero" }) {
      childHeroJson {
        title
        subtitle
        cta
      }
    }
    aboutHome: file(name: { eq: $locale }, relativeDirectory: { eq: "aboutHome" }) {
      childAboutHomeJson {
        title
        subtitle
        cta
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
        title3
        subtitle3
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
