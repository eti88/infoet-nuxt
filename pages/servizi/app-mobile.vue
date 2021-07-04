<template>
  <div>
    <v-row>
      <v-col cols="12">
        <v-col cols="12">
          <h1 class="mt-10 text-h4">{{ title }}</h1>
        </v-col>
      </v-col>
    </v-row>
    <v-row>
      <v-col cols="12" sm="7">
        <v-sheet color="transparent" class="pa-5">
          <p class="text--secondary">
            Ideazione, progettazione e ralizzazione di App Mobile iOS e Android per Smartphone.
            Il nostro approccio è quello di sviluppare tramite il framework flutter con eventuali
            integrazioni specifiche per ogni piattaforma.
            Ogni nostro progetto comincia individuando gli obbiettivie requisiti necessari per l'app
            requisito fondamentale per sviluppare prodotti brillanti per tutti i dispositivi.
          </p>
        </v-sheet>
      </v-col>
      <v-col cols="12" sm="5">
        <service-image-hero
          image="/services/mobile-app.jpg"
          alt="App Mobile"
        />
      </v-col>
    </v-row>
    <v-row>
      <v-col cols="12" md="10">
        <v-sheet color="transparent" class="pa-5">
          <h5 class="text-h6">Il cambiamento del mercato</h5>
          <p class="text--secondary">
            Le App hanno completamente cambiato gli scenari di business, con milioni di nuove app sviluppate ogni giorno.
            Perché creiamo appp mobile e perché dovresti averne una?
          </p>
          <ul class="mb-4">
            <li class="text--secondary">
              Il numero di dispositivi mobili è <b>molto più alto di quello dei computer</b>
            </li>
            <li class="text--secondary">
              in media ogni persona interagisce con lo smartphone <b>46 volte durante la giornata</b>
            </li>
            <li class="text--secondary">
              le app sono utilizzate 6 volte di più dei siti web
            </li>
            <li class="text--secondary">
              il <b>79%</b> delle persone che <b>utilizzano quotidianamente</b> gli smartphone usano il
              loro dispositivi per acquistare bene e servizi
            </li>
            <li class="text--secondary">
              il <b>73% degli imprenditori utilizza app giornalmente</b> per conivolgere i propri clienti
              e acquisirne di nuovi.
            </li>
          </ul>
          <p class="text--secondary">
            Essere fuori da questo mercato significa rischiare di essere tagliati fuori dai vostri competitor.
          </p>
        </v-sheet>
      </v-col>
    </v-row>
    <tech-showcase
      :items="showcaseElements"
      class="mb-5"
    />
    <v-row>
      <v-col cols="12">
        <v-sheet color="transparent" class="pa-5">
          <h5 class="text-h6">Pubblicazione su Google Play e Apple Store</h5>
          <p class="text--secondary">
            Ci occuperemo noi delle attività necessarie per la pubblicazione del tuo progetto. Gestiamo la pubblicazione della tua App direttamente sui market place di Google ed Apple, sia per App gratuite che a pagamento. Per le App Aziendali sviluppiamo applicativi ad hoc, con distribuzione enterprise, gestendo la distribuzione aziendale di app ai dipendenti attraverso Mobile Device Management
          </p>
        </v-sheet>
      </v-col>
    </v-row>
  </div>
</template>

<script>
import ServiceImageHero from '~/components/ServiceImageHero.vue'
export default {
  components: { ServiceImageHero },
  data () {
    return {
      title: 'App Mobile',
      showcaseElements: [
        { img: '/showcase/csharp.png', title: 'C#', href: 'https://docs.microsoft.com/it-it/dotnet/csharp/' },
        { img: '/showcase/flutter.png', title: 'Flutter', href: 'https://flutter.dev' },
        { img: '/showcase/ios.svg', title: 'iOS', href: 'https://www.apple.com/it/' },
        { img: '/showcase/android.svg', title: 'Android', href: 'https://www.android.com/intl/it_it/' }
      ]
    }
  }
}
</script>

<style lang="sass">

</style>
