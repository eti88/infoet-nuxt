<template>
  <div>
    <v-row align="center">
      <v-col cols="12" sm="7">
        <v-sheet id="hero-card" ref="heroCard" class="pa-10 glass-container">
          <hero-title class="hero-title" text="C'è sempre una maniera migliore per lavorare" />
          <p class="mt-5 mb-5">
            Creiamo portali web, app per smartphone, software per desktop e server che possono
            aiutarti a crescere senza compromessi. Siamo qui per sviluppare le tue idee.
          </p>
          <div class="hero-cta">
            <v-btn
              href="/servizi"
              class="text-uppercase px-4 py-2 mr-2"
              large
              elevation="0"
              color="#241C2C"
            >
              Servizi
            </v-btn>
            <v-btn
              href="/contatti"
              class="text-uppercase px-4 py-2"
              large
              elevation="0"
              color="#1690D3"
            >
              contattaci
            </v-btn>
          </div>
        </v-sheet>
      </v-col>
      <v-col
        cols="12"
        sm="5"
        :class="$vuetify.breakpoint.xsOnly ? 'mt-n32' : ''"
      >
        <img class="hero-img" src="/hero-img.svg">
      </v-col>
    </v-row>
  </div>
</template>

<script>
import HeroTitle from './HeroTitle.vue'
export default {
  components: { HeroTitle },
  data () {
    return {
      x: null,
      y: null,
      cx: null,
      cy: null,
      width: null,
      height: null
    }
  },
  mounted () {
    const card = this.$el.querySelector('#hero-card')
    /*
      To compute the center of the card. Get the coordinates and dimensions
    */
    const {
      x,
      y,
      width,
      height
    } = card.getBoundingClientRect()

    this.x = x
    this.y = y
    this.width = width
    this.height = height

    this.cx = x + width / 2
    this.cy = y + height / 2

    card.addEventListener('mousemove', this.handleMove)
    card.addEventListener('mouseout', this.handleOut)
  },
  beforeDestroy () {
    const card = this.$el.querySelector('#hero-card')
    card.removeEventListener('mousemove', this.handleMove)
    card.removeEventListener('mouseout', this.handleOut)
  },
  methods: {
    /*
      Following the mouse movement event copute the distance
      between the curor and the center of the card.
    */
    handleMove (e) {
      const { pageX, pageY } = e
      // Consider the relative distance in [-1, 1] range
      const dx = (this.cx - pageX) / (this.width / 2)
      const dy = (this.cy - pageY) / (this.height / 2)

      // this.$refs.heroCard.style.transform = `rotateX(${10 * dy * -1}deg) rotateY(${10 * dx}deg)`
      const card = this.$el.querySelector('#hero-card')
      card.style.transform = `rotateX(${8 * dy * -1}deg) rotateY(${8 * dx}deg)`
    },
    /*
      Following the mouseout event reset the transform property
    */
    handleOut () {
      const card = this.$el.querySelector('#hero-card')
      card.style.transform = 'initial'
      // this.$refs.heroCard.style.transform = 'initial'
    }
  }
}
</script>

<style lang="sass">
.glass-container
  background: rgba( 255, 255, 255, 0.10 ) !important
  box-shadow: 0 8px 32px 0 rgba( 31, 38, 135, 0.37 ) !important
  backdrop-filter: blur( 6.5px ) !important
  -webkit-backdrop-filter: blur( 6.5px ) !important
  border-radius: 10px !important
  transition: transform 0.2s ease-out

#hero-card
  transform-style: preserve-3d
  transform: translateZ(0)
  backface-visibility: hidden

  .hero-title
    transform: translateZ(100px)
  p
    transform: translateZ(50px)
  .hero-cta
    transform: translateZ(80px)
.hero-img
  height: 500px
.mt-n32
  margin-top: -128px
</style>
