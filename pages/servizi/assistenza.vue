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
            Servizio di consulenza e assistenza professionale per servizi in ambito ICT
            per risolvere tutte le vostre esigenze. Affidarsi ad un consulente informatico
            significa poter dedicare più tempo al proprio lavoro, concentrando il proprio
            impegno nello svolgimento dei task aziendali.
          </p>
        </v-sheet>
      </v-col>
      <v-col cols="12" sm="5">
        <service-image-hero
          image="/services/pc-assistence.jpg"
          alt="Assistenza PC"
        />
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
      title: 'Assistenza PC e Software aziendali'
    }
  }
}
</script>
