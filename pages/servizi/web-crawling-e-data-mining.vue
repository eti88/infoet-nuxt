<template>
  <div>
    <v-row>
      <v-col cols="12">
        <v-col cols="12">
          <h1 class="mt-10 text-h4">
            {{ title }}
          </h1>
        </v-col>
      </v-col>
    </v-row>
    <v-row>
      <v-col cols="12" sm="7">
        <v-sheet color="transparent" class="pa-5">
          <p class="text--secondary">
            Progettiamo e realizziamo procedure automatiche di estrazione dati da
            siti web come: web crawler, web spider e bot.
            Vi offriamo la possibilità di estrarre informazioni utili da qualsiasi
            sito web, file o documento e li trasformiamo in dati utili per il tuo
            business. Individuando inizialmente i requisiti e la sorgente dei dati
            da elaborare creeremo una soluzione personalizzata.
          </p>
        </v-sheet>
      </v-col>
      <v-col cols="12" sm="5">
        <service-image-hero
          image="/services/web-crawler.jpg"
          alt="App Mobile"
        />
      </v-col>
    </v-row>
    <v-row>
      <v-col cols="12">
        <v-sheet color="transparent" class="pa-5">
          <p class="text--secondary">
            I nostri bot possono estrarre dati da qualsiasi tipo di sito web indipendentemente
            dalla tecnologia utilizzata (PHP, ASP, AJAX, Javascript, ecc.), inoltre sono in grado
            di replicare tutti i tipi di integrazioni come login, navigazione, compilazione di form, ecc.
            <br>
            I dati estratti automaticamente possono essere salvati su semplici file Excel o inseriti in Database,
            inoltre è possibile realizzare delle interfacce specifiche per la consultazione rapida dei dati
            storicizzati.
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
          <h5 class="text-h6">
            Opzione chiavi in mano
          </h5>
          <p class="text--secondary mb-5">
            Se non sei dotato di un'infrastruttura idonea per il servizio
            possiamo eseguirlo sulal nostra infrastruttura informatica.
            Il cliente riceverà direttamente, con una cadenza concordata, i dati
            estratti nel formato che preferisce, in questo modo non deve preoccuparsi
            della gestione dei server, della schedulazione dei bot e di tutti gli aspetti
            tecnici.
          </p>
          <v-item-group mandatory>
            <v-item v-for="(element, k) in options" :key="k">
              <v-card
                :ripple="false"
                color="transparent"
                flat
              >
                <v-list-item>
                  <v-list-item-avatar
                    size="40"
                    :color="element.color"
                  >
                    <v-icon>{{ element.icon }}</v-icon>
                  </v-list-item-avatar>
                  <v-list-item-content>
                    <p class="mt-2">
                      {{ element.description }}
                    </p>
                  </v-list-item-content>
                </v-list-item>
              </v-card>
            </v-item>
          </v-item-group>
        </v-sheet>
      </v-col>
    </v-row>
    <v-row>
      <cta-contact-us />
    </v-row>
  </div>
</template>

<script>
import ServiceImageHero from '~/components/ServiceImageHero.vue'
import CTAContactUs from '~/components/CTAContactUs.vue'
export default {
  components: { ServiceImageHero, 'cta-contact-us': CTAContactUs },
  transition: 'intro',
  data () {
    return {
      title: 'Web crawling e Data Mining',
      showcaseElements: [
        { img: '/showcase/csharp.png', title: 'C#', href: 'https://docs.microsoft.com/it-it/dotnet/csharp/' },
        { img: '/showcase/selenium.png', title: 'Selenium', href: 'https://www.selenium.dev' },
        { img: '/showcase/scrapy.png', title: 'Scrapy', href: 'https://scrapy.org/' },
        { img: '/showcase/python.png', title: 'Python', href: 'https://www.python.org/' }
      ],
      options: [
        {
          color: '#74BCEC',
          icon: 'mdi-cloud-tags',
          description: 'tecnologia cloud computing: l\'infrastruttura scala in base alla quantità di pagine web da elaborare'
        },
        {
          color: '#74BCEC',
          icon: 'mdi-file-document-outline',
          description: 'invio dati estratti via email, con upload ftp o scritti direttamente su database. Su richiesta è possibile anche sviluppare dei software gestionali che permettano una consultazione agevole dei dati estratti con possibilità di inserire annotazioni, apportare modifiche, ecc'
        },
        {
          color: '#74BCEC',
          icon: 'mdi-wrench-outline',
          description: 'il cliente non deve preoccuparsi della manutenzione dell\'infrastruttura informatica'
        },
        {
          color: '#74BCEC',
          icon: 'mdi-calendar-clock',
          description: 'estrazioni periodiche e schedulabili con cadenza giornaliera, settimanale o mensile'
        }
      ]
    }
  }
}
</script>
