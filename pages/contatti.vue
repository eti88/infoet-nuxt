<template>
  <div>
    <v-row>
      <v-col cols="12">
        <v-col cols="12">
          <h3 class="mt-10 text-h4">Contatti</h3>
        </v-col>
      </v-col>
    </v-row>
    <v-row>
      <v-col cols="12" sm="7">
        <v-sheet color="transparent" class="pa-5">
          <div>
            <h4 class="text-h5">Infoet di Etienne Tomaselli</h4>
            <h5 class="text-h6">Sede legale</h5>
            <p class="text--secondary text-body-1">
              Via XX Settembre 82 - Borgo Valsugana - 38051 - TN
            </p>
          </div>
          <div>
            <h5 class="text-h6">Email</h5>
            <a
              href="#"
              ref="footerEmail"
              class="encryptedmail text--secondary text-body-1"
              data-name="info"
              data-domain="infoet"
              data-tld="it"
              @click="getEmail"
            >
            </a>
          </div>
          <div class="mt-5">
            <h5 class="text-h6">Telefono</h5>
            <p class="text--secondary text-body-1">
              +39 3463770323
            </p>
          </div>
          <div class="mt-5">
            <h5 class="text-h6">Social</h5>
            <v-btn href="https://www.facebook.com/infoet.tn" icon text>
              <v-icon x-large>
                mdi-facebook
              </v-icon>
            </v-btn>
          </div>
        </v-sheet>
      </v-col>
      <v-col cols="12" sm="5">
        <img class="hero-img mt-1" src="/contatti.svg" />
      </v-col>
    </v-row>
  </div>
</template>

<script>
export default {
  transition: 'intro'
}
</script>

<style lang="sass">
.hero-img
  height: 500px
.glass-container
  background: rgba( 255, 255, 255, 0.10 ) !important
  box-shadow: 0 8px 32px 0 rgba( 31, 38, 135, 0.37 ) !important
  backdrop-filter: blur( 6.5px ) !important
  -webkit-backdrop-filter: blur( 6.5px ) !important
  border-radius: 10px !important
  transition: transform 0.2s ease-out
.encryptedmail
  text-decoration: none

  &:after
    content: attr(data-name) "@" attr(data-domain) "." attr(data-tld)
    color: #fff
</style>
