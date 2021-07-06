<template>
  <v-card
    class="mx-auto mb-12 service-card"
  >
    <v-img
      :src="image"
      height="150"
    ></v-img>

    <v-card-title class="px-5 px-md-8" primary-title>
      <h3 class="text-h6 mb-0">{{ title }}</h3>
    </v-card-title>
    <v-chip-group class="mx-5 mx-md-8" show-arrows>
      <v-chip
        v-for="(tag, k) in tags"
        :key="k"
        color="#1690D3"
        text-color="#fff"
        ripple
        pill
      >
        {{ tag }}
      </v-chip>
    </v-chip-group>
    <v-card-text class="desc-wrapper px-5 px-md-8">
      <p class="text-desc">{{ climpedDescription }}</p>
    </v-card-text>

    <v-btn
      :href="url"
      class="my-5 mx-5 mx-md-8"
      color="#fff"
      text
    >
      Scopri
    </v-btn>
  </v-card>
</template>

<script>
export default {
  props: {
    image: {
      type: String,
      required: true
    },
    title: {
      type: String,
      required: true
    },
    tags: {
      type: Array,
      required: true,
      default: () => []
    },
    link: {
      type: String,
      required: false
    },
    year: {
      type: Number,
      required: false
    },
    caseStudy: {
      type: String,
      required: false
    },
    description: {
      type: String,
      required: true
    },
    url: {
      type: String,
      required: true
    },
    feedback: {
      type: String,
      required: false
    }
  },
  computed: {
    climpedDescription () {
      return this.description.length > 220 ? this.description.substring(0, 220) + '...' : this.description
    }
  }
}
</script>

<style lang="sass">
.service-card
  background: rgba( 36, 28, 44, 0.15 ) !important
  box-shadow: 0 8px 32px 0 rgba( 31, 38, 135, 0.37 ) !important
  backdrop-filter: blur( 12.0px ) !important
  -webkit-backdrop-filter: blur( 12.0px ) !important
  border-radius: 10px !important
  overflow: hidden

  .desc-wrapper
    height: 100px
    overflow: hidden
    -webkit-mask-image: linear-gradient(to bottom, black 50%, transparent 100%)
    mask-image: linear-gradient(to bottom, black 50%, transparent 100%)
    text-overflow: ellipsis

</style>
