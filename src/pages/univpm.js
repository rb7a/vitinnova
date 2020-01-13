import React from 'react'
import { graphql } from 'gatsby'
import Seo from '../components/seo'
import Layout from '../components/layout'

const Univpm = ({ pageContext: { locale }, data }) => {
  return (
    <Layout path='/' locale={locale} data={data} titleFooter={data.footer.childFooterJson.title} subtitleFooter={data.footer.childFooterJson.subtitle}>
      <Seo title='Il progetto' />
      <section className='container' style={{ padding: '0 4%', marginBottom: '200px' }}>
        <div style={{ textAlign: 'center', marginTop: '120px', marginBottom: '180px' }}>
          <h1><span style={{ color: '#b00020' }}>UNIVERSITÀ</span> POLITECNICA DELLE MARCHE</h1>
        </div>
        <p>
        
        Il soggetto pubblico coinvolto è L’Università Politecnica delle Marche (UNIVPM), con sede ad Ancona.<br/><br/>
L’UNIVPM presenta un’ampia e significativa attività di ricerca e diffusione delle conoscenze e dell’innovazione nel settore AGROALIMENTARE e una fitta rete di collaborazioni nazionali e internazionali.<br/><br/> Le competenze di molti gruppi di ricerca dell’Ateneo si sono aggregate e integrate per favorire il trasferimento dei risultati al mondo produttivo. Nel settore agro-alimentare, l’UNIVPM vede coinvolti almeno 30 gruppi di ricerca, appartenenti soprattutto, ma non solo, al D3A, con competenze multidisciplinari che riguardano sostenibilità ambientale ed economica, adattamento al cambio climatico, processi di produzione alimentare, qualità e sicurezza degli alimenti, alimentazione, nutrizione e salute, tutela della biodiversità, miglioramento genetico, ecc. 
<br/><br/>Il settore Arboricoltura generale e colture arboree del D3A ha attivato da tempo linee di ricerca in viticoltura che riguardano i rapporti tra cambio climatico, fenologia e decorso della maturazione dell’uva, le strategie di adattamento colturale al nuovo contesto climatico e la conseguente messa a punto di tecniche colturali innovative, la valutazione e la gestione dell’efficienza dei vigneti, la regolazione della vigoria delle viti e del decorso della maturazione.<br/><br/> L’attività di divulgazione scientifica, svolta sia a livello internazionale che nazionale attraverso l’editoria specializzata, si completa con il trasferimento dell’innovazione nella formazione universitaria e nell’attività convegnistica. Nel settore Patologia vegetale del D3A vengono studiate da anni strategie per la protezione dalla peronospora della vite in agricoltura biologica alternative all’uso del rame.<br/><br/> Le attività dei ricercatori del D3A riguardano anche una serie di prove sperimentali e dimostrative condotte presso l’Azienda Agraria dell’Università Politecnica delle Marche nei diversi settori dell’agronomia e delle coltivazioni, viticoltura compresa, che costituiscono non solo un sistema efficace di trasferimento dell’innovazione durante il processo formativo (esercitazioni di campo rivolte agli studenti), ma che rappresentano anche un fondamentale veicolo di trasferimento dell’innovazione al settore produttivo (visite ai campi sperimentali, giornate dimostrative). <br/><br/>Nell'ambito della Microbiologia agroalimentare e ambientale il gruppo di ricerca afferente al DiSVA da diversi anni collabora attivamente con le aziende vitivinicole della regione mediante prove sperimentali di vinificazione volte ad applicare e trasferire le attività di ricerca sviluppate a livello di laboratorio dai ricercatori in ambito enologico. UNIVPM ha partecipato con la Cooperativa agricola Moncaro e CIA al progetto di setting-up VITINNOVA avente come soggetto capofila la Cooperativa Moderna.

        </p>
      </section>
    </Layout>
  )
}

export const query = graphql`
  query Univpm($locale: String) {
    footer: file(name: { eq: $locale }, relativeDirectory: { eq: "footer" }) {
      childFooterJson {
        title
        subtitle
      }
    }
  }
`

export default Univpm
