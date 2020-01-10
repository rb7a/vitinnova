import React from 'react'
import { graphql } from 'gatsby'
import Seo from '../components/seo'
import Layout from '../components/layout'
import societaCoperativa from '../images/società-cooperativa-agricola.png'
import moncaro from '../images/moncaro.png'
import belisario from '../images/belisario.png'
import univpm from '../images/univpm.png'
import agricoltoriItaliani from '../images/agricoltori-italiani.png'
import assam from '../images/assam.png'

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
