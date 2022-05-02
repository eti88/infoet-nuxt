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
            Il sito web è il tuo biglietto da visita, la prima cosa che le persone
            consultano dopo aver sentito parlare di te o del tuo business.<br>
            Vi possiamo aiutare a <b>creare siti web professionali, accattivanti</b>
            e ricchi di contenuti.
          </p>
        </v-sheet>
      </v-col>
      <v-col cols="12" sm="5">
        <service-image-hero
          image="/services/web-site.jpg"
          alt="Siti web"
        />
      </v-col>
    </v-row>
    <v-row>
      <v-col cols="12">
        <v-sheet color="transparent" class="pa-5">
          <p class="text--secondary">
            La <b>realizzazione di un sito web professionale</b>, oltre a basarsi su
            un'analisi preliminare del settore e dei competitor, dovrà seguire una
            serie di accorgimenti per fare in modo di ottenere il meglio di quello
            che il mercato richiede.<br>
            Alcuni degli aspetti cruciali per un sito di successo sono sicuramente
            <b>un web design moderno e accattivante</b>, la <b>fruibilità su tutti i
              dispositivi</b>, la <b>velocità di caricamento delle pagine</b>, <b>contenuti
              di facile comprensione e ottimizzati per il SEO</b>, <b>materialie fotografico di qualità</b>.
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
          <h2 class="text-h6">
            Quanto costa lo sviluppo di un sito?
          </h2>
          <p class="text--secondary">
            Il <b>costo di un sito web</b> può variare molto in base agli obiettivi che
            si vogliono raggiungere grazie allo stesso.<br>
            Un sito web infatti può avere molteplici funzionalità e modalità di utilizzo,
            per questo come prima cosa, tramite i nostri analisti cercheremo di capire
            le necessità.
          </p>
        </v-sheet>
      </v-col>
    </v-row>
    <v-row>
      <v-col cols="12">
        <v-sheet color="transparent" class="pa-5">
          <h3 class="text-h6">
            Di cosa hai bisogno per iniziare
          </h3>
          <p class="text--secondary">
            Questo è il materiale consigliato di cui avremo bisogno per realizzare il tuo sito, se non
            ne sei in possesso potremo consigliarti dei professionisti per realizzarlo.
          </p>
          <v-item-group mandatory>
            <v-item v-for="(element, k) in items" :key="k">
              <v-card
                :ripple="false"
                color="transparent"
                flat
              >
                <v-list-item two-line>
                  <v-list-item-avatar
                    size="40"
                    :color="element.color"
                  >
                    <v-icon>{{ element.icon }}</v-icon>
                  </v-list-item-avatar>
                  <v-list-item-content>
                    <p>
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
import CTAContactUs from '~/components/CTAContactUs.vue'
import ServiceImageHero from '~/components/ServiceImageHero.vue'

export default {
  components: { ServiceImageHero, 'cta-contact-us': CTAContactUs },
  transition: 'intro',
  data () {
    return {
      title: 'Siti Web',
      showcaseElements: [
        { img: '/showcase/laravel.png', title: 'Laravel', href: 'https://laravel.com/' },
        { img: '/showcase/nuxt.png', title: 'Nuxt', href: 'https://nuxtjs.org/' },
        { img: '/showcase/python.png', title: 'Python', href: 'https://www.python.org/' },
        { img: '/showcase/vue.png', title: 'Vue', href: 'https://vuejs.org/' },
        { img: '/showcase/django.png', title: 'Django', href: 'https://www.djangoproject.com/' }
      ],
      items: [
        {
          color: '#74BCEC',
          icon: 'mdi-file-document-outline',
          description: 'Argomenti, servizi, prodotti e contenuti da arrangiare per il sito'
        },
        {
          color: '#74BCEC',
          icon: 'mdi-image',
          description: 'Immagini ad alta risoluzione'
        },
        {
          color: '#74BCEC',
          icon: 'mdi-domain',
          description: 'Loghi ad alta risoluzione'
        }
      ]
    }
  }
}
</script>
