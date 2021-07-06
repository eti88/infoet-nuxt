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
            Sviluppiamo <b>portali</b> e <b>web application</b> finalizzate all'implementazione
            di logiche di business utili all'azienda per migliorare <b>l'efficacia dei processi e la
            collaborazione all'interno dei team di lavoro</b>.<br />
            L'espressione "web application" viene impiegata per indicare tutte le applicazioni
            distribuite tramite pagine web, cioè applicativi fruibili direttamente sul web attraverso
            l'uso di un semplice browser.
          </p>
        </v-sheet>
      </v-col>
      <v-col cols="12" sm="5">
        <service-image-hero
          image="/services/web-portal.jpg"
          alt="Web Application"
        />
      </v-col>
    </v-row>
    <v-row>
      <v-col cols="12">
        <v-sheet color="transparent" class="pa-5">
          <p class="text--secondary">
            La necessità di sviluppare una web application generalmente nasce dall'esigenza di
            implementare via web una logica di business già operativa nell'azienda tramite strumenti
            tradizionali oppure di nuova ideazione per conseguire un <b>obiettivo di miglioramento strategico</b>.
            <br />
            Proprio perché progettate per l’utilizzo sia esterno che interno all’azienda, le web application spesso
            oltre a implementare una funzionalità specifica devono rispecchiare tutta o parte l’organizzazione aziendale,
            soprattutto in termini di ruoli, gruppi e comparti.
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
  transition: 'intro',
  components: { ServiceImageHero, 'cta-contact-us': CTAContactUs },
  data () {
    return {
      title: 'Portali Web & Web App',
      showcaseElements: [
        { img: '/showcase/laravel.png', title: 'Laravel', href: 'https://laravel.com/' },
        { img: '/showcase/nuxt.png', title: 'Nuxt', href: 'https://nuxtjs.org/' },
        { img: '/showcase/python.png', title: 'Python', href: 'https://www.python.org/' },
        { img: '/showcase/vue.png', title: 'Vue', href: 'https://vuejs.org/' },
        { img: '/showcase/django.png', title: 'Django', href: 'https://www.djangoproject.com/' }
      ],
      options: [
        {
          color: '#74BCEC',
          icon: 'mdi-check-decagram-outline',
          description: 'Conversione di applicazioni legacy'
        },
        {
          color: '#74BCEC',
          icon: 'mdi-check-decagram-outline',
          description: 'Realizzazione software su misura con le tecnologie web più recenti'
        },
        {
          color: '#74BCEC',
          icon: 'mdi-check-decagram-outline',
          description: 'Sviluppo di progressive web application (PWA)'
        },
        {
          color: '#74BCEC',
          icon: 'mdi-check-decagram-outline',
          description: 'Interfacciamento con software di CRM e ERP'
        },
        {
          color: '#74BCEC',
          icon: 'mdi-check-decagram-outline',
          description: 'Sviluppo procedure di importazione e esportazione dati'
        },
        {
          color: '#74BCEC',
          icon: 'mdi-check-decagram-outline',
          description: 'Soluzioni e-commerce personalizzate'
        }
      ]
    }
  }
}
</script>
