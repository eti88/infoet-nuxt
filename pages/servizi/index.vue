<template>
  <div>
    <div v-show="false">
      <h1>I nostri servizi</h1>
    </div>
    <v-row>
      <v-col cols="12" sm="7">
        <v-sheet color="transparent" class="pa-5">
          <h3 class="mt-10 mb-5 text-h4">Servizi</h3>
          <p class="text--secondary text-h4">
            Ogni giorno ci impegniamo ad offrire <b>servizi professionali per i nostri clienti.</b>
          </p>
        </v-sheet>
      </v-col>
      <v-col cols="12" sm="5">
        <img class="hero-img" src="/servizi.svg" />
      </v-col>
    </v-row>
    <v-row>
      <v-col cols="12">
        <v-item-group mandatory>
          <v-row>
            <v-item v-for="(item, k) in items" :key="k">
              <v-col cols="12" sm="6">
                <service-card
                  :image="item.icon"
                  :title="item.title"
                  :description="item.description"
                  :url="item.link"
                />
              </v-col>
            </v-item>
          </v-row>
        </v-item-group>
      </v-col>
    </v-row>
  </div>
</template>

<script>
import ServiceCard from '~/components/ServiceCard.vue'
import { services } from '~/helpers/service-items.js'
export default {
  components: { ServiceCard },
  transition: 'intro',
  data () {
    return {
      items: services
    }
  }
}
</script>

<style lang="sass">
.hero-img
  height: 500px
</style>
