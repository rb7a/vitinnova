import React from 'react'
import { Link, graphql } from 'gatsby'
import Layout from '../components/layout'
import Image from '../components/image'
import SEO from '../components/seo'
import LocalizedLink from '../components/LocalizedLink'
import Hero from '../components/Hero'
import AboutHome from '../components/aboutHome'

const IndexPage = ({ pageContext: { locale }, data }) => {
  return (
    <Layout path='/' locale={locale} data={data}> {/* site title gets from graphql query and pass it to layout component */}
      <SEO title='Home' />
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
  }
`

export default IndexPage
