<template>
  <div>
    <div v-show="false">
      <h1>Infoet sviluppo software personalizzati</h1>
    </div>
    <e-hero class="mt-8 mb-10" />
    <tech-showcase
      title="I principali linguaggi e framework che utilizziamo per sviluppare i progetti"
      :items="showcaseElements"
      class="my-5"
    />
    <v-row justify="center" align="center">
      <v-col cols="12">
        <v-sheet class="glass-container pa-8">
          <h2 class="mb-5 text-h4">
            Cosa facciamo
          </h2>
          <p>
            I nostri servizi sono rivolti ad aziende, uffici e professionisti che hanno bisogno
            di software personalizzati e utilizzabili per svolgere al meglio il proprio lavoro e/o per ottimizzare i tempi
            di specifiche attività.
            Il nostro team lavorerà in stretto contatto con il cliente per soddisfare ogni esigenza e risolvere ogni
            problema in maniera puntuale e attenta.
          </p>
        </v-sheet>
      </v-col>
    </v-row>
    <v-row align="center">
      <v-col cols="12" sm="8">
        <h3 class="mt-10 mb-5 text-h4">
          I nostri servizi
        </h3>
        <p class="text--secondary">
          Forniamo un'ampia gamma di servizi professionali nell'ambito dei software. Il nostro team è in grado di poter affrontare qualsiasi progetto IT.
        </p>
      </v-col>
    </v-row>
    <v-row justify="center" align="center">
      <v-col cols="12">
        <service-slider />
      </v-col>
    </v-row>
    <v-row align="center">
      <v-col cols="12" sm="8">
        <h3 class="mt-10 mb-5 text-h4">
          Alcuni dei nostri lavori
        </h3>
        <p class="text--secondary">
          Negli anni abbiamo sviluppato una gamma di progetti molto ampia e variegata. I nostri servizi di <b>sviluppo software</b> e <b>IT consulting</b> all'attivo
          sono stati realizzati in contesti multisettoriali. Qui puoi trvarne alcuni.
        </p>
        <v-row>
          <v-col cols="12" sm="5" md="4" lg="2">
            <v-btn
              href="/progetti"
              color="#fff"
              block
              text
            >
              Consulta la lista
            </v-btn>
          </v-col>
        </v-row>
      </v-col>
    </v-row>
    <v-row justify="center" align="center">
      <v-col cols="12">
        <portfolio-slider />
      </v-col>
    </v-row>
  </div>
</template>

<script>
import Hero from '~/components/Hero/Hero.vue'
import PortfolioSlider from '~/components/PortfolioSlider.vue'
import ServiceSlider from '~/components/ServiceSlider.vue'
import TechShowcase from '~/components/TechShowcase.vue'
export default {
  components: { 'e-hero': Hero, TechShowcase, ServiceSlider, PortfolioSlider },
  transition: 'intro',
  data () {
    return {
      showcaseElements: [
        { img: '/showcase/csharp.png', title: 'C#', href: 'https://docs.microsoft.com/it-it/dotnet/csharp/' },
        { img: '/showcase/flutter.png', title: 'Flutter', href: 'https://flutter.dev' },
        { img: '/showcase/laravel.png', title: 'Laravel', href: 'https://laravel.com/' },
        { img: '/showcase/nuxt.png', title: 'Nuxt', href: 'https://nuxtjs.org/' },
        { img: '/showcase/python.png', title: 'Python', href: 'https://www.python.org/' },
        { img: '/showcase/vue.png', title: 'Vue', href: 'https://vuejs.org/' },
        { img: '/showcase/django.png', title: 'Django', href: 'https://www.djangoproject.com/' }
      ]
    }
  }
}
</script>
