import React from 'react'
import { graphql } from 'gatsby'
import Seo from '../components/seo'
import Layout from '../components/layout'

const Assam = ({ pageContext: { locale }, data }) => {
  return (
    <Layout path='/' locale={locale} data={data} titleFooter={data.footer.childFooterJson.title} subtitleFooter={data.footer.childFooterJson.subtitle}>
      <Seo title='Il progetto' />
      <section className='container' style={{ padding: '0 4%', marginBottom: '200px' }}>
        <div style={{ textAlign: 'center', marginTop: '120px', marginBottom: '180px' }}>
          <h1>AGENZIA SERVIZI SETTORE <span style={{ color: '#b00020' }}>AGROALIMENTARE</span></h1>
        </div>
        <div className='shadow-page'>
        <p>
        L’ASSAM, Agenzia Servizi Settore Agroalimentare delle Marche, è un ente pubblico economico istituito con legge regionale n. 9 del 14 gennaio 1997 e modificata con legge regionale n. 28 del 16 settembre 2013.<br/><br/>  Oltre alla sede centrale di Osimo, ha sedi operative in tutta la regione. ASSAM ha uno staff tecnico e amministrativo qualificato e di alto livello, costantemente addestrato e aggiornato in grado di gestire progetti, condurre studi e ricerche e attuare politiche. In ASSAM lavorano centocinque persone, la maggior parte delle quali sono tecnici del settore agroalimentare.
        <br/><br/>L’agenzia costituisce lo strumento regionale di riferimento e di raccordo tra il sistema produttivo ed il mondo della ricerca. Tra le sue funzioni principali vi è la realizzazione di studi e ricerche in collaborazione con Università e Istituzioni di ricerca. <br/><br/>In questo ambito, attua progetti nel settore cerealicolo ed ortofrutticolo, con particolare attenzione al settore biologico e del basso impatto ambientale. In questi ultimi anni l’Agenzia si sta sempre più allineando verso la strategia di crescita Europa 2020, applicando la visione europea sull’innovazione, anche attraverso le nuove funzioni di progettazione comunitaria per poter svolgere un ruolo determinante nel trasferimento dell’innovazione.
        <br/><br/>L'ASSAM fornisce servizi agli operatori del settore agroalimentare della regione Marche, in particolare nell'ambito della certificazione e tracciabilità, delle analisi chimiche, fisiche, microbiologiche e sensoriali dei prodotti agroalimentari, della gestione dei suoli, della forestazione e dell'agrometeorologia con un notiziario settimanale che raggiunge alcune migliaia di operatori della regione ed un sito web dedicato. ASSAM, oltre a garantire la diffusione di informazioni e dei risultati della sperimentazione nel settore agricolo, realizza corsi di formazione per la creazione e l'aggiornamento di competenze del settore primario.<br/><br/> Fanno parte delle strutture ASSAM 2 aziende sperimentali e 4 vivai forestali.
La legge regionale n. 9 del 14 gennaio 1997 assegna all’ASSAM le funzioni del Servizio Fitosanitario regionale. Il Servizio fitosanitario della Regione Marche è una istituzione governativa (Decreto legislativo 19 agosto 2005 n. 214) che svolge le competenze regionali nel settore salute delle piante. Previene l'introduzione e la diffusione di organismi nocivi alle piante ed ai prodotti vegetali e dispone misure appropriate per il loro controllo, salvaguardando l'ambiente.<br/><br/> I compiti principali del Servizio Fitosanitario sono:
<br/><br/>- Applicazione di regolamenti comunitari, nazionali e regionali in materia fitosanitaria;
<br/><br/>- Ispezioni e certificazioni per l'importazione e l'esportazione di piante e prodotti vegetali;
<br/><br/>- Controllo e vigilanza ufficiale sullo stato fitosanitario dei vegetali coltivati e spontanei;
<br/><br/>- Monitoraggio territoriale per verificare la presenza di parassiti delle piante;
<br/><br/>- Campionamento e applicazione di protocolli di laboratorio per la diagnosi di organismi nocivi;
<br/><br/>- Definizione di strategie innovative di controllo dei parassiti e delle malattie e sviluppo di piani d'azione
<br/><br/>- Effettuazione di attività di studio e sperimentazione nel settore fitosanitario, con particolare riferimento ai metodi innovativi di difesa dalle avversità delle piante che siano rispettosi dell'ambiente, dell'operatore agricolo e del consumatore, e la loro definizione e divulgazione;
<br/><br/>- Elaborazione di disciplinari di difesa integrata, al fine di migliorare lo stato fitosanitario e la qualità delle produzioni vegetali;
<br/><br/>- Elaborazione di misure specifiche di difesa fitosanitaria integrata, previste dalla direttiva CE 128/2009 sull'uso sostenibile dei prodotti fitosanitari, per la gestione delle specie nocive;
<br/><br/>- Attività di informazione (relazioni con parti interessate, riunioni, redazione di manifesti, fogli di consulenza, sito web).
<br/><br/>L’ASSAM coprirà sia il ruolo di Ente pubblico per la realizzazione di attività di ricerca, studio e sperimentazione nel settore fitosanitario, mettendo a disposizione le proprie competenze e conoscenze, sia quello di soggetto esperto nella divulgazione dei risultati del Progetto di cooperazione.
Le attività di divulgazione ed informazione rappresentano da sempre una attività fondamentale dell'ASSAM, che si avvale di diversi strumenti:
<br/><br/>- sito web;
<br/><br/>- pagina social;
<br/><br/>- notiziario Agrometeo settimanale, inviato a diverse migliaia di operatori del settore.
<br/><br/>Le attività di disseminazione sono completate dall'organizzazione di seminari e convegni tenuti sui temi attinenti le attività progettuali gestite da ASSAM


        </p>
        </div>
      </section>
    </Layout>
  )
}

export const query = graphql`
  query Assam($locale: String) {
    footer: file(name: { eq: $locale }, relativeDirectory: { eq: "footer" }) {
      childFooterJson {
        title
        subtitle
      }
    }
  }
`

export default Assam
