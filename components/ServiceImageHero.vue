<template>
  <v-sheet
    rounded
    elevation="8"
    class="service-img"
  >
    <v-img
      :src="image"
      gradient="to top right, rgba(100,115,201,.33), rgba(25,32,72,.7)"
      alt="alt"
    >
      <template v-slot:placeholder>
        <v-row
          class="fill-height ma-0"
          align="center"
          justify="center"
        >
          <v-progress-circular
            indeterminate
            color="#1690D3"
          ></v-progress-circular>
        </v-row>
      </template>
    </v-img>
  </v-sheet>
</template>

<script>
export default {
  props: {
    image: {
      type: String,
      required: true
    },
    alt: {
      type: String,
      required: true
    }
  }
}
</script>

<style lang="sass">
.service-img
  overflow: hidden
  border-radius: 18px
</style>
