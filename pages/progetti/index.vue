<template>
  <div>
    <v-row>
      <v-col cols="12" sm="7">
        <v-sheet color="transparent" class="pa-5">
          <h3 class="mt-10 mb-5 text-h4">Alcuni dei nostri progetti</h3>
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
                <portfolio-card
                  :image="item.image"
                  :title="item.title"
                  :tags="item.tags"
                  :link="item.url"
                  :year="item.year"
                  :case-study="item.caseStudy"
                  :description="item.description"
                  :url="item.link"
                  :feedback="item.feedback"
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
import PortfolioCard from '~/components/PortfolioCard.vue'
import { projects } from '~/helpers/portfolio-items.js'
export default {
  components: { PortfolioCard },
  transition: 'intro',
  data () {
    return {
      items: projects
    }
  }
}
</script>

<style lang="sass">
.hero-img
  height: 500px
</style>
