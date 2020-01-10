import React from 'react'
import Layout from '../components/layout'
import SEO from '../components/seo'
import { graphql } from 'gatsby'

const Project = ({ pageContext: { locale }, data }) => (
  <Layout path='/' locale={locale} data={data}>
    <SEO title='404: Not found' />
    <h1>IL PROGETTO</h1>
    <p>You just hit a route that doesn&#39;t exist... the sadness.</p>
  </Layout>
)

export default Project
