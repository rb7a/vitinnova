import React from 'react'
import { graphql } from 'gatsby'
import Seo from '../components/seo'
import Layout from '../components/layout'
import innovationDesign from '../images/vitinnova-innovazione.jpg'
import innovationDesignMobile from '../images/vitinnova-innovazione-mobile.jpg'

const Innovation = ({ pageContext: { locale }, data }) => {
  const { title1, title2, title3, subtitle, titleP, p1, p2, p3, p4, titleTable, action, description, table1, table2, table3, table4, table5, table6, table7, table8, table9, table10, table11, table12, table13, table14, table15, table16, table17, table18, table19, table20, table21, table22, table23, titleGraphic } = data.innovation.childInnovationJson
  return (
    <Layout path='/' locale={locale} data={data} titleFooter={data.footer.childFooterJson.title} subtitleFooter={data.footer.childFooterJson.subtitle}>
      <Seo title='Il progetto' />
      <section className='container' style={{ padding: '0 4%' }}>
        <div style={{ textAlign: 'center', marginTop: '120px', marginBottom: '180px' }}>

          <h1>{title1}<span style={{ color: '#b00020' }}>{title2}</span> {title3}</h1>
          <p>{subtitle}</p>
        </div>
        <div>
          <h2>{titleP}</h2>
          <p>
            {p1}<br /><br />
            {p2}<br /><br />
            {p3}<br /><br />
            {p4}
          </p>
          <h2 style={{ marginTop: '80px' }}>{titleTable}</h2>
          <table>
            <tr>
              <th>{action}</th>
              <th>{description}</th>
            </tr>
            <tr>
              <td>1.1</td>
              <td>
{table1}     </td>

            </tr>
            <tr>
              <td>1.2</td>
              <td>
{table2}              </td>

            </tr>
            <tr>
              <td>1.3</td>
              <td>
{table3}              </td>

            </tr>
            <tr>
              <td>2.1</td>
              <td>
{table4}              </td>

            </tr>
            <tr>
              <td>2.2</td>
              <td>
{table5}              </td>

            </tr>
            <tr>
              <td>2.3</td>
              <td>
{table6}              </td>

            </tr>
            <tr>
              <td>2.4</td>
              <td>

{table7}              </td>

            </tr>
            <tr>
              <td>3.1</td>
              <td>

{table8}              </td>

            </tr>
            <tr>
              <td>3.2</td>
              <td>

{table9}              </td>

            </tr>
            <tr>
              <td>3.3</td>
              <td>

{table10}              </td>

            </tr>
            <tr>
              <td>3.4</td>
              <td>

{table11}
              </td>

            </tr>
            <tr>
              <td>4.1</td>
              <td>

{table12}
              </td>

            </tr>
            <tr>
              <td>4.2</td>
              <td>

{table13}
              </td>

            </tr>
            <tr>
              <td>4.3</td>
              <td>
{table14}
              </td>

            </tr>
            <tr>
              <td>5.1</td>
              <td>

{table15}              
             </td>

            </tr>
            <tr>
              <td>5.2</td>
              <td>

 {table16}             </td>

            </tr>
            <tr>
              <td>5.3</td>
              <td>

{table17}              </td>

            </tr>
            <tr>
              <td>6.1</td>
              <td>

{table18}              </td>

            </tr>
            <tr>
              <td>6.2</td>
              <td>

{table19}              </td>

            </tr>
            <tr>
              <td>7.1</td>
              <td>

{table20}
              </td>

            </tr>
            <tr>
              <td>7.2</td>
              <td>

{table21}
              </td>

            </tr>
            <tr>
              <td>7.3</td>
              <td>

{table22}
              </td>

            </tr>
            <tr>
              <td>7.4</td>
              <td>

{table23}
              </td>

            </tr>
          </table>
        </div>

        <h2 style={{ marginTop: '120px', textAlign: 'center' }}>{titleGraphic}</h2>
      </section>
      <div>

        <img className='innovation-graphic' style={{ width: '80%' }} src={innovationDesign} alt='vitinnova-innovazione' />
        <img className='innovation-graphic-mobile' src={innovationDesignMobile} alt='vitinnova-innovazione-mobile' />
      </div>

      <style jsx='true'>{`
      table {
        font-family: arial, sans-serif;
        border-collapse: collapse;
       width: 100%;
       }
      td, th {
       border: 1px solid #dddddd;
        text-align: left;
        padding: 8px;
        line-height: 23px
        }

      tr:nth-child(even) {
       background-color: #f7f7f7;
        }
        .innovation-graphic {
            display: block;
            margin: 0 auto;
            width: 100%;
            display: none
        }
        .innovation-graphic-mobile{
          display: block;
          margin: 0 auto
        }
        @media(min-width: 768px){
          .innovation-graphic {
            display: block;
  
        }
        .innovation-graphic-mobile{
          display: none;
        
        }
        }
          `}
      </style>

    </Layout>

  )
}

export const query = graphql`
  query Innovation($locale: String) {
    footer: file(name: { eq: $locale }, relativeDirectory: { eq: "footer" }) {
      childFooterJson {
        title
        subtitle
      }
    }
    innovation: file(name: { eq: $locale }, relativeDirectory: { eq: "innovation" }) {
      childInnovationJson {
        title1
        title2
        title3
        subtitle
        titleP
        p1
        p2
        p3
        p4
        titleTable
        action
        description
        table1
        table2
        table3
        table4
        table5
        table6
        table7
        table8
        table9
        table10
        table11
        table12
        table13
        table14
        table15
        table16
        table17
        table18
        table19
        table20
        table21
        table22
        table23
        titleGraphic
      }
    }
  }
`

export default Innovation
