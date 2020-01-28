import React from 'react'
import { graphql } from 'gatsby'
import Seo from '../components/seo'
import Layout from '../components/layout'

const Cia = ({ pageContext: { locale }, data }) => {
  return (
    <Layout path='/' locale={locale} data={data} titleFooter={data.footer.childFooterJson.title} subtitleFooter={data.footer.childFooterJson.subtitle}>
      <Seo title='Il progetto' />
      <section className='container' style={{ padding: '0 4%', marginBottom: '200px' }}>
        <div style={{ textAlign: 'center', marginTop: '120px', marginBottom: '180px' }}>
          <h1>CONFEDERAZIONE ITALIANA <span style={{ color: '#b00020' }}>AGRICOLTORI</span></h1>
        </div>
        <p>
        La Confederazione Italiana Agricoltori della Provincia di Ancona è un’associazione senza scopo di lucro “di rappresentanza dell’agricoltura e del mondo rurale” che, oltre ad operare nel settore primario, fornisce servizi anche a cittadini, Istituzioni pubbliche, operatori di altri settori economici.<br /><br />
La CIA provinciale di Ancona si è costituita nel Dicembre 1977 dalla fusione di Alleanza Contadini, Federmezzadri ed UCI, per meglio affermare a livello nazionale, regionale e locale i “valori che attengono all’agricoltura, al lavoro, alla libera iniziativa imprenditoriale, all’ambiente rurale”.
La CIA è un’Organizzazione professionale agricola riconosciuta in sede CNEL.<br /><br />
Nel corso degli anni la Confederazione si è sempre più affermata nel territorio provinciale come punto di riferimento non solo per la categoria, ma anche per i cittadini e gli Enti locali, specie per quelli ubicati nelle aree rurali ed interne. Attualmente la CIA provinciale di Ancona fornisce assistenza ad oltre 3.000 aziende riuscendo a coprire, grazie ai suoi dipendenti e collaboratori, tutte le loro esigenze.<br /><br /> L’assistenza erogata è quanto mai varia e copre tutte le casistiche aziendali, personali e familiari dell’imprenditore. In particolare, riguarda aspetti di tipo:
          <br /><br />a. tecnico, a livello colturale e zootecnico, spingendo gli agricoltori verso l’adozione di metodi a basso impatto ambientale e biologici, nonché al recupero e reintroduzione della biodiversità (dalla “mela del papa” alla cicerchia di Serra dei Conti, dal carciofo precoce di Jesi, alla gallina Ancona);
          <br /><br />b. legislativo ed amministrativo, avvalendosi anche del CAA CIA (negli ultimi 3 anni sono state presentate mediamente 3.200 domande PAC, 1.500 domande ex UMA, 350 domande misure a superficie PSR);
          <br /><br />c. fiscale, avvalendosi anche del CAAF CIA (negli ultimi 3 anni presentate mediante 11.500 dichiarazioni dei redditi, 1.200 modelli unici, 3.500 ISEE, 4.000 RED, 600 contabilità aziendali IVA);
          <br /><br />d. previdenziale, assistenziale, contributivo, avvalendosi anche del patronato INAC (negli ultimi 3 anni fornita assistenza mediamente a 8.000 pensionati e 4.500 cittadini);
          <br /><br />e. commerciale e promozionale al fine di valorizzare le produzioni agroalimentari tipiche e biologiche, avvalendosi anche dell’Associazione prodotti di fattoria tipici marchigiani, con il coinvolgimento di circa 100 aziende;
          <br /><br />f. multifunzionalità (agriturismo, fattorie didattiche, fattorie sociali) avvalendosi anche di Turismo Verde, a cui aderiscono circa 45 aziende agrituristiche;
          <br /><br />g. progettuale a favore sia di imprese singole ed associate, sia delle stesse Istituzioni pubbliche (nell’ultimo triennio elaborati oltre 80 progetti di investimento nell’ambito del PSR e delle varie normative nazionali e regionali) e sono state presentate 653 domande di aiuto e 346 domande di pagamento
          <br /><br />h. formativo, avvalendosi anche del CIPA-AT, che negli ultimi 3 anni ha realizzato corsi di aggiornamento a favore di oltre 120 agricoltori, per far conseguire loro il tesserino per la distribuzione dei prodotti fitosanitari, l’attestato per esercitare l’attività di somministrazione di bevande ed alimenti, il riconoscimento come responsabile della sicurezza del lavoro;
          <br /><br />i. politico-sindacali. <br /><br />La CIA provinciale di Ancona è presente in tutti i tavoli della concertazione e nei comitati tecnici istituiti dalla Provincia, Comunità Montana, Enti Parco, Camera di Commercio, Enti pubblici locali, avanzando spesso proprie proposte, osservazioni, documenti programmatici volti a favorire lo sviluppo del settore primario nelle Marche.
          <br /><br />La CIA dispone nella Provincia di Ancona di:<br />
          <br /><br />– 1 sede Provinciale sita in Ancona c.so Stamira n. 29, n. 5 sedi zonali (Ancona, Arcevia, Jesi, Osimo e Senigallia), n. 37 recapiti comunali con presenza settimanale del personale CIA;
          <br /><br />– personale dipendente composto da n. 22 persone, di cui n. 3 laureati in scienze agrarie iscritti all’ordine professionale, 6 diplomati in materia agraria, n. 7 diplomati in ragioneria, n. 6 con altri diplomi;
          <br /><br />– collaboratori esterni fissi (commercialista, esperti in comunicazione) od occasionali (utilizzo di professionalità idonee alle iniziative da intraprendere).
Il sistema organizzativo CIA è articolato in un livello nazionale, un livello regionale ed un livello provinciale, operanti sulla base di propri statuti e con piena autonomia giuridica, amministrativa, patrimoniale e finanziaria.
Nel sistema CIA rientrano l’Associazione Nazionale Pensionati, Donne in Campo, l’Associazione Giovani Imprenditori Agricoli ed i Gruppi di interesse economico per specifico settore produttivo.
La CIA provinciale di Ancona svolge, tra l’altro, le seguenti attività:<br />
          <br /><br />– rappresentare e tutelare gli interessi degli associati presso le Istituzioni;
          <br /><br />– gestire servizi di formazione, consulenza, informazione e divulgazione alle imprese;
          <br /><br />– elaborare a livello provinciale le politiche sindacali e le relative iniziative;
          <br /><br />– stipulare accordi interprofessionali o accordi di filiera;
          <br /><br />– elaborare leggi, discipline, normative e regolamenti da proporre alla Provincia;
          <br /><br />– operare nell’ambito delle politiche di promozione economica in ambito provinciale e interprovinciale.
          <br /><br />La CIA ha partecipato con Cooperativa agricola Moncaro e UNIVPM al progetto di setting-up VITINNOVA avente come soggetto capofila la Cooperativa Moderna.

        </p>
      </section>
    </Layout>
  )
}

export const query = graphql`
  query Cia($locale: String) {
    footer: file(name: { eq: $locale }, relativeDirectory: { eq: "footer" }) {
      childFooterJson {
        title
        subtitle
      }
    }
  }
`

export default Cia
