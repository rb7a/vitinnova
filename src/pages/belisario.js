import React from 'react'
import { graphql } from 'gatsby'
import Seo from '../components/seo'
import Layout from '../components/layout'

const Belisario = ({ pageContext: { locale }, data }) => {
  return (
    <Layout path='/' locale={locale} data={data} titleFooter={data.footer.childFooterJson.title} subtitleFooter={data.footer.childFooterJson.subtitle}>
      <Seo title='Il progetto' />
      <section className='container' style={{ padding: '0 4%', marginBottom: '200px' }}>
        <div style={{ textAlign: 'center', marginTop: '120px', marginBottom: '180px' }}>
          <h1>CANTINA <span style={{ color: '#b00020' }}>BELISARIO</span></h1>
        </div>
        <p>
        
        La Cantina Belisario s.a.c. è operante dal 1971 nel settore vitivinicolo.<br/><br/> Il Consiglio di Amministrazione è costituito da 15 membri ed è presieduto dal Sig. Antonio Centocanti, Vicepresidente Sig. Eolo Farroni. Nel 2004 la cooperativa ha modificato il proprio statuto sociale per adeguarlo alle norme relative alle Organizzazione dei Produttori.<br/><br/>  La cooperativa associa (al 31.01.2018) n. 171 soci per una superficie coltivata a vigneto specializzato di circa 335 Ha, ubicati sugli 8 comuni dell’Alta Vallesina che ricadono nel disciplinare della DOC Verdicchio di Matelica ed altri che ricadono nel disciplinare della DOC Colli Maceratesi. Il potenziale produttivo è interamente destinato alla produzione di vini di qualità DOC, DOCG e IGT.<br/><br/>  La cooperativa fin dal 2004 ha ottenuto la certificazione di processo e di prodotto ai sensi della normativa UNI EN ISO 9001 Vision.
La Cooperativa possiede 85 Ha di vigneti come patrimonio sociale distinti in 3 diverse aziende. Svolge anche un servizio viticolo ai soci (con oltre 15 addetti qualificati di cui 3 tecnici periti agrari specializzati) anche per il credo aziendale che ogni vino nasce da un preciso progetto vitivinicolo, per cui è indispensabile conoscere e gestire tutta la filiera produttiva per limitare errori progettuali.<br/><br/>  La maggioranza delle uve conferite sono atte alla produzione della DOC Verdicchio di Matelica e DOCG Riserva di cui la Belisario è ampiamente il maggiore produttore. E’ la più grande azienda vitivinicola della provincia di Macerata ed è tra i primi produttori regionali di Verdicchio Riserva DOCG. L’azienda è certificata ISO 9001 ed è certificata per la produzione di vini Biologici (Verdicchio di Matelica e Colli Maceratesi Rosso DOC). E’ presente sul mercato con due marchi: Belisario per il mercato Horeca distribuito in Italia da Rinaldi con 110 agenti, e Poggio alle Rondini per il mercato della GDO direttamente gestito con professionalità interne così come il mercato estero dove è presente in 25 Paesi; la Belisario ha anche 4 enoteche dirette dove oltre ai vini Belisario offre fino a 1200 etichette nazionali ed internazionali.<br/><br/>  L’azienda dispone di moderni impianti atti alla realizzazione di vinificazioni in riduzione, per criomacerazione, con tecniche di pulizia dei mosti sia per decantazione statica che per flottazione. Tutti i serbatoi in acciaio inox sono termo condizionati, così come il magazzino stoccaggio bottiglie. Il confezionamento conta due linee di imbottigliamento di cui una a servizio dei recipienti per il settore GDO e l’altra per le bottiglie da 0.75, 1.5, 0.375 litri.<br/><br/>  L’azienda produce anche vini spumanti con 3 autoclavi da 50 hl: Verdicchio di Matelica DOC spumante, Rosato Spumante e vino Spumante Dolce. La Belisario è tra le cantine marchigiane con il più alto numero di riconoscimenti nelle guide tematiche, da oltre 10 anni con 3 Bicchieri nella Guida Gambero Rosso; l’etichetta Cambrugiano Verdicchio di Matelica Riserva DOCG è stato uno dei vini più premiati della regione ed è prodotto dalla vendemmia 1988.<br/><br/>  Da sempre ha partecipato a progetti di ricerca: nel 1988 ha ospitato la prima vinificazione industriale con la tecnica della Criomacerazione e a seguire la tecnica dell’iperossigenazione dei mosti in collaborazione con l’Università di Bologna; con l’Assam ha partecipato a prove di appassimento uve, prove sul Verdicchio di Crioestrazione selettiva; prove di utilizzo del Lisozima e prove di macerazioni prolungate delle bucce sui bianchi con il Prof. Ferrarini dell’Università di Udine. La Cantina collabora da tempo con l’Università Politecnica delle Marche ospitando studenti nell’ambito dei tirocini curricolari e contribuendo allo svolgimento di prove sperimentali su gestione del vigneto e valutazione di cloni di Verdicchio. <br/><br/> Ha messo a disposizione i dati relativi agli ultimi 30 anni di vendemmia del Verdicchio per lo svolgimento di una tesi di laurea discussa presso UNIVPM nel dicembre 2017.  Ha realizzato le pubblicazioni: “Il Verdicchio di Matelica DOC e Riserva DOCG: quando un vino è un racconto” edito da Retecamere di Roma, oltre a una raccolta di documenti e descrittiva per i 25 anni dell’etichetta principale intitolata “Cambrugiano 1988-2012: 25 anni di vino”. 

        </p>
      </section>
    </Layout>
  )
}

export const query = graphql`
  query Belisario($locale: String) {
    footer: file(name: { eq: $locale }, relativeDirectory: { eq: "footer" }) {
      childFooterJson {
        title
        subtitle
      }
    }
  }
`

export default Belisario
