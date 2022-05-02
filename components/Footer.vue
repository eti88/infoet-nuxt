<template>
  <v-footer class="footer">
    <v-container fluid>
      <v-row align="center">
        <v-col
          cols="12"
          xs="12"
          sm="4"
          md="4"
          lg="4"
        >
          <img height="60" src="/logo2.svg" alt="infoet">
        </v-col>
        <v-spacer />
      </v-row>
      <v-row align="start">
        <v-col
          order="1"
          order-sm="1"
          cols="12"
          xs="12"
          sm="4"
          md="4"
          lg="4"
        >
          <div class="font-weight-black text-h5 mb-5">
            SVILUPPO DIGITALE E AUTOMAZIONE PER FARE CRESCERE IL TUO BUSINESS
          </div>
          <v-btn href="https://www.facebook.com/infoet.tn" icon text>
            <v-icon x-large>
              mdi-facebook
            </v-icon>
          </v-btn>
        </v-col>
        <v-col
          order="3"
          order-sm="2"
          cols="12"
          xs="12"
          sm="4"
          md="4"
          lg="4"
        >
          <footer-menu class="mx-auto" />
        </v-col>
        <v-col
          order="2"
          order-sm="3"
          cols="12"
          xs="12"
          sm="4"
          md="4"
          lg="4"
        >
          <h6 class="title grey--text text--lighten-2 text-uppercase font-weight-bold text-body-1">
            Informazioni
          </h6>
          <dl class="text-subtitle-1">
            <dt>
              Via XX Settembre 82
            </dt>
            <dt>Borgo Valsugana 38051 (TN)</dt>
            <dt>Tel. +39 346 3770323</dt>
            <dt>
              Email.
              <a
                ref="footerEmail"
                href="#"
                class="encryptedmail"
                data-name="info"
                data-domain="infoet"
                data-tld="it"
                @click="getEmail"
              />
            </dt>
          </dl>
        </v-col>
      </v-row>
      <v-row align="end" class="mt-5">
        <v-col cols="12">
          <div class="tertiary--text mb-2">
            Copyright &copy; 2017 - {{ new Date().getFullYear() }} Infoet di Etienne Tomaselli - P.iva 02493940221 -
            <a href="/privacy" class="tertiary--text links">privacy policy</a> - <a href="/cookie" class="tertiary--text links">cookie policy</a>
          </div>
        </v-col>
      </v-row>
    </v-container>
  </v-footer>
</template>

<script>
import FooterMenu from './FooterMenu.vue'
export default {
  components: { FooterMenu },
  methods: {
    getEmail () {
      const div = this.$refs.footerEmail
      const url = `mailto:${div.dataset.name}@${div.dataset.domain}.${div.dataset.ltd}`
      window.location.href = url
    }
  }
}
</script>

<style lang="sass">
.footer
  font-size: 0.87em
  padding: 10px, 0
  background: transparent !important

.encryptedmail
  text-decoration: none

  &:after
    content: attr(data-name) "@" attr(data-domain) "." attr(data-tld)
    color: #fff

.links
    text-decoration: none
    color: #fff !important

    &:hover
      color: #C6E6F7 !important
</style>
