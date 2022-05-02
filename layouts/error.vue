<template>
  <v-app class="no-overflow" dark>
    <div>
      <v-img
        src="/error.svg"
        height="500"
        alt="Error"
        contain
      >
        <template v-slot:placeholder>
          <v-row
            class="fill-height ma-0"
            align="center"
            justify="center"
          >
            <v-progress-circular
              indeterminate
              color="grey lighten-5"
            ></v-progress-circular>
          </v-row>
        </template>
      </v-img>
    </div>
    <h1 v-if="error.statusCode === 404" class="text-h2 text-center mt-5 font-weight-black">
      {{ pageNotFound }}
    </h1>
    <h1 v-else class="text-h2 text-center mt-16 font-weight-black">
      {{ otherError }}
    </h1>
    <div class="mx-auto mt-14">
      <v-btn
        color="#1690D3"
        href="/"
        nuxt
      >
        Home page
      </v-btn>
    </div>
  </v-app>
</template>

<script>
export default {
  layout: 'empty',
  props: {
    error: {
      type: Object,
      default: null
    }
  },
  data () {
    return {
      pageNotFound: '404 Pagina non trovata',
      otherError: 'Wops! errore imprevisto'
    }
  },
  head () {
    const title =
      this.error.statusCode === 404 ? this.pageNotFound : this.otherError
    return {
      title
    }
  }
}
</script>

<style scoped>
h1 {
  font-size: 20px;
}
.theme--dark.v-application {
  background: transparent;
}
.no-overflow {
  overflow: hidden;
}
</style>
