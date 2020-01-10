import React from 'react'
import { graphql } from 'gatsby'

import Layout from '../components/layout'

const Team = ({ pageContext: { locale }, data }) => {
  return (
    <Layout path='/' locale={locale} data={data} titleFooter={data.footer.childFooterJson.title} subtitleFooter={data.footer.childFooterJson.subtitle}>
      <p>team</p>
    </Layout>
  )
}

export const query = graphql`
  query Team($locale: String) {
    footer: file(name: { eq: $locale }, relativeDirectory: { eq: "footer" }) {
      childFooterJson {
        title
        subtitle
      }
    }
  }
`

export default Team
