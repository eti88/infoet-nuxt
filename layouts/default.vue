<template>
  <v-app class="page-background" dark>
    <v-container>
      <v-row justify="center">
        <v-col cols="12" md="11" lg="10">
          <navbar class="mt-5" />
        </v-col>
      </v-row>

      <v-main>
        <Nuxt />
      </v-main>

      <client-only>
        <cookie-banner />
      </client-only>
    </v-container>
    <v-container>
      <v-row justify="center">
        <v-col cols="12" md="11" lg="10">
          <e-footer />
        </v-col>
      </v-row>
    </v-container>
  </v-app>
</template>

<script>
import CookieBanner from '~/components/CookieBanner.vue'
import Footer from '~/components/Footer.vue'
import Navbar from '~/components/Navbar.vue'
export default {
  components: { Navbar, 'e-footer': Footer, CookieBanner }
}
</script>

<style>
.page-background {
  background-image: linear-gradient(to left bottom, #0f6594, #2c507a, #323d5f, #2e2b44, #241c2c) !important;
}
</style>
