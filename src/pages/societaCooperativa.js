import React from 'react'
import { graphql } from 'gatsby'
import Seo from '../components/seo'
import Layout from '../components/layout'

const SocietaCooperativa = ({ pageContext: { locale }, data }) => {
  return (
    <Layout path='/' locale={locale} data={data} titleFooter={data.footer.childFooterJson.title} subtitleFooter={data.footer.childFooterJson.subtitle}>
      <Seo title='Il progetto' />
      <section className='container' style={{ padding: '0 4%', marginBottom: '200px' }}>
        <div style={{ textAlign: 'center', marginTop: '120px', marginBottom: '180px' }}>
          <h1>SOCIETA <span style={{ color: '#b00020' }}>COOPERATIVA</span> AGRICOLA</h1>
        </div>
        <p>La Società Cooperativa Moderna, soggetto capofila del G.O. VITINNOVA, è retta da un Consiglio di Amministrazione costituito da 5 membri e presieduto da LANDI ROSSANO. L`oggetto sociale è l’esercizio esclusivo dell`attività agricola di cui all`art. 5 del 2135 del codice civile.<br /> <br />La Cooperativa si è costituita nel 1974 acquisendo terreni in affitto dei soci e concessi dalla Pubblica Amministrazione.<br /><br /> Nel corso degli anni alcuni appezzamenti sono stati acquistati ed altri sono entrati a far parte della cooperativa, che ad oggi gestisce oltre 300 ha, 50 dei quali di proprietà. La Cooperativa si è specializzata nel settore viticolo a partire dagli anni 90 quando è diventata socia della Cooperativa Moncaro e ad oggi ha una superficie vitata attorno a 170 ha, che dal 2016 è interamente gestita in biologico.<br /><br />
La Cooperativa Moderna viene condotta impiegando 3 salariati fissi e oltre 40 unità lavorative a tempo determinato, che operano sotto la direzione di un tecnico aziendale coadiuvato da un esperto esterno. Inoltre, viene svolta attività in conto terzi sia per interventi di gestione di vigneti in produzione sia per la realizzazione di nuovi impianti. Il parco macchine della cooperativa è ampio e comprende numerose attrezzature dedicate alla gestione del vigneto.<br /><br />
L’attività aziendale è incentrata da oltre 20 anni sul settore viticolo e da un decennio la Cooperativa collabora attivamente con l’Università Politecnica delle Marche (UNIVPM) ospitando nei propri vigneti prove sperimentali volte alla riduzione della quantità di rame impiegata annualmente nella protezione antiperonosporica. Le sperimentazioni, che hanno previsto l’irrorazione di parcelle vitate con rame a dosi ridotte e prodotti alternativi di origine naturale, hanno consentito all’azienda di verificare direttamente su Verdicchio e Montepulciano (due delle principali cultivar della Regione) la reale possibilità di limitare l’uso del rame nella difesa antiperonosporica. Nello specifico, le prove parcellari hanno evidenziato la possibilità di controllare efficacemente la peronospora della vite attraverso l’uso del chitosano, un biopolimero naturale estratto dal carapace di crostacei con attività antimicrobica ed elicitante le difese della pianta.<br /><br />
La Cooperativa agricola Moderna è stata il soggetto capofila del progetto di setting-up VITINNOVA avente come partner Moncaro, CIA e UNIVPM.
        </p>
      </section>
    </Layout>
  )
}

export const query = graphql`
  query SocietaCooperativa($locale: String) {
    footer: file(name: { eq: $locale }, relativeDirectory: { eq: "footer" }) {
      childFooterJson {
        title
        subtitle
      }
    }
  }
`

export default SocietaCooperativa
