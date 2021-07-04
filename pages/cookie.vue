<template>
  <div>
    <div v-show="false">
      <h1>Cookie Policy</h1>
    </div>
    <v-row justify="center" align="center">
      <v-col cols="12">
        <h3 class="mt-10 text-h4">Cookie Policy</h3>
      </v-col>
    </v-row>
    <v-row justify="center" align="center">
      <v-col cols="12">
        <p>
          I siti web di Infoet utilizzano cookie e tecnologie simili per garantire il corretto funzionamento delle procedure,
          migliorare l’esperienza di navigazione degli utenti ed effettuare attività di profilazione.
        </p>
        <p>
          Il presente documento fornisce informazioni dettagliate sull’uso dei cookie e di tecnologie similari, su come sono
          utilizzati all’interno dei siti di Infoet e sulla loro modalità di gestione. L’utilizzo di cookie da parte del titolare
          di questo sito, Infoet si inquadra nella Privacy Policy dello stesso; per tutte le informazioni richieste dall’art. 13
          del Codice della Privacy <a href="/privacy">clicca qui</a>.
        </p>
        <h4>Definizione</h4>
        <p>
          I cookie sono file di testo (lettere e/o numeri) che contengono pacchetti di informazioni che vengono memorizzati sul
          computer o sul dispositivo mobile dell’interessato tutte le volte che questo visita un sito web attraverso un browser. Ad ogni
          successiva visita il browser invia questi cookies al sito web che li ha originati o ad un altro sito. I cookies permettono ai
          siti di ricordare alcune informazioni per permettere all’utente di navigare online in modo semplice e veloce. I cookie sono
          utilizzati per diverse finalità, hanno caratteristiche diverse, e possono essere utilizzati sia dal titolare del sito che si
          sta visitando, sia da terze parti.
        </p>
        <h4>Tipologie di cookie</h4>
        <p>
          Questo sito utilizza le seguenti tipologie di cookie:
        </p>
        <v-sheet class="glass-container pa-5 custom-overflow my-5">
          <cookie-table-types />
        </v-sheet>
        <p>
          È possibile procedere alla disabilitazione e/o cancellazione dei cookie mediante le relative impostazioni del browser e alla
          disabilitazione e/o cancellazione dei singoli cookie non “tecnici” somministrati dalle terze parti accedendo al sito web gestito
          da European Interactive Digital Advertising Alliance (EDAA) all’indirizzo www.youronlinechoices.eu. È anche possibile trovare
          ulteriori informazioni sui cookies e su come gestirli consultando il sito www.aboutcookies.org.
        </p>
        <p>
          <i>
            Nota: i cookie di terze parti possono cambiare nome, aumentare o diminuire di numero in qualsiasi momento e senza preavviso da
            parte del fornitore terzo.
          </i>
        </p>
        <h4>Consenso del Navigatore</h4>
        <p>
          Il conferimento dei dati da parte dell’utente ha natura facoltativa. L’utente che naviga sul sito di Infoet acconsente al conferimento
          dei dati per il tramite dei cookies se compie una delle seguenti azioni:
        </p>
        <ul>
          <li>cliccando sul tasto OK presente all’interno del banner;</li>
          <li>chiudendo il banner attraverso l’apposito tasto (X);</li>
          <li>cliccando su qualunque altro punto della pagina;</li>
        </ul>
        <p>
          L’utente ha sempre la possibilità di revocare il consenso, cliccando sui link riportati nella tabella suindicata.
          L’utente può impostare il proprio browser in maniera tale da ricevere un avvertimento della presenza di un cookie e
          decidere quindi se accettarlo o rifiutarlo. Può inoltre eliminare detti cookie attraverso le funzionalità messe a
          disposizione da ciascun browser per l’accesso ad internet. A titolo di esempio, in Internet Explorer, attraverso il
          menu Strumenti->Opzioni Internet ->Privacy, è possibile accedere ad un pannello di controllo dove definire se accettare
          o meno i diversi tipi di cookie e procedere alla loro rimozione.
        </p>
        <ul>
          <li>
            <a href="https://support.google.com/chrome/answer/95647?hl=it">
              Chrome
            </a>
          </li>
          <li>
            <a href="https://support.mozilla.org/it/kb/Gestione%20dei%20cookie">
              Firefox
            </a>
          </li>
          <li>
            <a href="http://windows.microsoft.com/it-it/windows7/how-to-manage-cookies-ininternet-explorer-9">
              Internet Explorer
            </a>
          </li>
          <li>
            <a href="http://help.opera.com/Windows/10.00/it/cookies.html">
              Opera
            </a>
          </li>
          <li>
            <a href="http://support.apple.com/kb/HT1677?viewlocale=it_IT">
              Safari
            </a>
          </li>
        </ul>
        <p>
          Se non utilizzi nessuno dei browser sopra elencati, seleziona “cookie” nella relativa sezione della guida per scoprire dove
          si trova la tua cartella dei cookie.
        </p>
        <h4>Attivazione e disattivazione dei cookies</h4>
        <p>
          Oltre a poter utilizzare gli strumenti previsti dal browser per attivare o disattivare i singoli cookies informiamo che il
          sito www.youronlinechoices.com riporta l’elenco dei principali provider che lavorano con i gestori dei siti web per raccogliere
          e utilizzare informazioni utili alla fruizione della pubblicità comportamentale. Puoi disattivare o attivare tutte le società
          o in alternativa regolare le tue preferenze individualmente per ogni società. Per farlo puoi utilizzare lo strumento che trovi
          nella pagina www.youronlinechoices.com/it/le-tue-scelte per controllare le tue preferenze sulla pubblicità comportamentale.
          Ulteriori informazioni utili sui cookie sono disponibili a questi indirizzi:
        </p>
        <ul>
          <li>
            <a href="http://www.allaboutcookies.org/">
              www.allaboutcookies.org
            </a>
          </li>
          <li>
            <a href="http://www.youronlinechoises.com/">
              www.youronlinechoises.com
            </a>
          </li>
        </ul>
      </v-col>
    </v-row>
  </div>
</template>

<script>
import CookieTableTypes from '~/components/CookieTableTypes.vue'
export default {
  transition: 'intro',
  components: { CookieTableTypes }
}
</script>

<style lang="sass" scoped>
.custom-overflow
  overflow: hidden
  overflow-x: scroll
.glass-container
  background: rgba( 255, 255, 255, 0.10 ) !important
  box-shadow: 0 8px 32px 0 rgba( 31, 38, 135, 0.37 ) !important
  backdrop-filter: blur( 6.5px ) !important
  -webkit-backdrop-filter: blur( 6.5px ) !important
  border-radius: 10px !important
  transition: transform 0.2s ease-out
</style>
