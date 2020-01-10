import React from 'react'
import { graphql } from 'gatsby'
import Seo from '../components/seo'
import Layout from '../components/layout'
import innovationDesign from '../images/vitinnova-innovazione.png'

const Innovation = ({ pageContext: { locale }, data }) => {
  return (
    <Layout path='/' locale={locale} data={data} titleFooter={data.footer.childFooterJson.title} subtitleFooter={data.footer.childFooterJson.subtitle}>
      <Seo title='Il progetto' />
      <section className='container' style={{ padding: '0 4%' }}>
        <div style={{ textAlign: 'center', marginTop: '120px', marginBottom: '180px' }}>

          <h1>L'<span style={{ color: '#b00020' }}>INNOVAZIONE</span> DI VITTINOVA</h1>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Omnis, doloribus.</p>

        </div>
        <div>
          <h2>Lorem ipsum</h2>
          <p>L’utilizzo in campo di prodotti antiperonosporici alternativi al rame, seguito dall’uso di gas criogeni e ozono per la sanificazione delle uve e degli impianti in cantina e dall'impiego di lieviti autoctoni selezionati e migliorati, idonei a ridurre la presenza di SO2 e H2S nei vini, sarà il fondamento per ottenere vini senza solfiti aggiunti né prodotti dai lieviti.<br /><br />
La viticoltura di precisione, agli albori in Italia, verrà applicata a scala aziendale su almeno 80 ha di vigneto per generare mappe di vigore, che dovranno essere validate ai fini del loro uso per definire le mappe di prescrizione, ovvero la calibrazione degli interventi colturali volti ad aumentare la sostenibilità ambientale e l’adattamento al cambio climatico.<br /><br /> Per raggiungere appieno questo ultimo obiettivo, sarà introdotto anche un monitoraggio precoce della maturazione dell’uva per verificare la necessità di azioni correttive, prevedere la data di vendemmia e definire il momento ottimale.<br /><br /> L’uso di vendemmiatrici meccaniche anche nelle zone più declivi (pendenze superiori al 20%) aumenterà la tempestività dell’intervento e la possibilità di raccogliere uve sane.
          </p>
          <h2 style={{ marginTop: '80px' }}>Azioni del progetto</h2>
          <table>
            <tr>
              <th>Azione</th>
              <th>Descrizione</th>
            </tr>
            <tr>
              <td>1.1</td>
              <td>
Definizione di strategie di protezione antiperonosporica per la viticoltura biologica basate sull’uso di sostanze alternative al rame
              </td>

            </tr>
            <tr>
              <td>1.2</td>
              <td>
Applicazione in campo di trattamenti con sostanze alternative al rame in grado di ridurre o annullare gli apporti cuprici e garantire produzioni di qualità
              </td>

            </tr>
            <tr>
              <td>1.3</td>
              <td>
Raccolta ed elaborazione dei dati delle infezioni peronosporiche sulle viti trattate con rame e sostanze alternative
              </td>

            </tr>
            <tr>
              <td>2.1</td>
              <td>
Monitoraggio della vigoria dei vigneti con la sensoristica acquisita da Moderna e generazione di mappe di vigore
              </td>

            </tr>
            <tr>
              <td>2.2</td>
              <td>
Validazione in campo delle mappe di vigore e generazione di mappe di prescrizione
              </td>

            </tr>
            <tr>
              <td>2.3</td>
              <td>
Applicazione in campo degli interventi colturali calibrati sulla base delle mappe di prescrizione così da ridurre la variabilità (concimazione e defogliazione sito-specifica) o valorizzarla (vendemmia selettiva) ottimizzando la gestione del vigneto
              </td>

            </tr>
            <tr>
              <td>2.4</td>
              <td>

              Raccolta ed elaborazione dei dati su maturazione degli acini, qualità dell’uva e capacità produttiva delle viti presenti nelle zone a vigoria differenziata (basso, medio e alto vigore)
              </td>

            </tr>
            <tr>
              <td>3.1</td>
              <td>

              Campionamento degli acini nei vigneti differenziando le aree a diversa vigoria, analisi in laboratorio della loro composizione, redazione delle curve di maturazione
              </td>

            </tr>
            <tr>
              <td>3.2</td>
              <td>

              Interpretazione delle curve di maturazione e calibrazione delle tecniche colturali da applicare per regolare la maturazione ai fini dell’adattamento al cambio climatico (epoca, intensità e localizzazione della defogliazione meccanica; irrorazione con antitraspiranti di origine naturale, ecc.)
              </td>

            </tr>
            <tr>
              <td>3.3</td>
              <td>

              Valutazione dello stato sanitario delle uve a maturità, vendemmia tempestiva basata sul monitoraggio della maturazione, determinazione dell’entità della produzione e della  composizione del mosto disaggregate in funzione delle tecniche colturali applicate per la regolazione della maturazione
              </td>

            </tr>
            <tr>
              <td>3.4</td>
              <td>

              Elaborazione dei dati su maturazione degli acini, qualità dell’uva e capacità produttiva dei vigneti soggetti a tecniche colturali differenziate per l’adattamento al cambio climatico
              </td>

            </tr>
            <tr>
              <td>4.1</td>
              <td>

              Vini senza solfiti aggiunti - Messa a punto del ricevimento e condizionamento delle uve (gas criogenici, bassa temperatura, sanitizzazione impianti con ozono e acqua ozonata). Preparazione del mosto mediante flottazione, in protezione dall'ossigeno. Analisi microbiologiche: pre/post trattamento con gas criogenici a bassa temperatura.
              </td>

            </tr>
            <tr>
              <td>4.2</td>
              <td>

              Preparazione dell'inoculo degli starter vinari, monitoraggio del processo fermentativo con controllo dei parametri fermentativi e controllo microbiologico. Analisi della dominanza dello starter inoculato mediante isolamento e tipizzazione molecolare.
              </td>

            </tr>
            <tr>
              <td>4.3</td>
              <td>

              Chiarifica e condizionamento dei vini con l'ausilio di gas criogenici e monitoraggio con analisi chimiche, volatiloma e analisi sensoriale dei vini
              </td>

            </tr>
            <tr>
              <td>5.1</td>
              <td>

              Vini a basso tenore di solfiti. Ricevimento e condizionamento delle uve integre raccolte in cassette. Preparazione del mosto mediante flottazione, in protezione dall'ossigeno. Analisi microbiologiche: pre/post trattamento con gas criogenici a bassa temperatura.
              </td>

            </tr>
            <tr>
              <td>5.2</td>
              <td>

              Controllo microbiologico iniziale dei mosti ottenuti da uve integre raccolte in cassette e monitoraggio in tempo reale del processo fermentativo di tutte le partite per la produzione di vini a basso contenuto di solfiti con il controllo dei parametri fermentativi (zuccheri, Alcool, Ac. volatile, pH, Ac. totale, Ac. malico e Ac. Lattico, APA, K) eseguito due volte al giorno mediante FOSS.
              </td>

            </tr>
            <tr>
              <td>5.3</td>
              <td>

              Condizionamento dei vini e monitoraggio con analisi chimiche mediante FOSS e analisi finale dei vini
              </td>

            </tr>
            <tr>
              <td>6.1</td>
              <td>

              Predisposizione ed aggiornamento del sito web e della pagina facebook
              </td>

            </tr>
            <tr>
              <td>6.2</td>
              <td>

              Seminari, convegni, incontri tecnici e dimostrativi newsletter, pieghevoli e pubblicazione finale
              </td>

            </tr>
            <tr>
              <td>7.1</td>
              <td>

              Costituzione dell’ATI
              </td>

            </tr>
            <tr>
              <td>7.2</td>
              <td>

              Avvio delle azioni progettuali e coordinamento dell’avvio
              </td>

            </tr>
            <tr>
              <td>7.3</td>
              <td>

              Coordinamento gruppo operativo
              </td>

            </tr>
            <tr>
              <td>7.4</td>
              <td>

              Coordinamento chiusura del progetto
              </td>

            </tr>
          </table>
        </div>

        <h2 style={{ marginTop: '120px', textAlign: 'center' }}>Il percorso produttivo</h2>
      </section>
      <div>

        <img className='innovation-graphic' src={innovationDesign} alt='vittinova-innovazione' />
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
            width: 100%
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
  }
`

export default Innovation
