<template>
  <div>
    <client-only placeholder="Loading...">
      <v-carousel
        style="box-shadow: 0px 0px"
        continuous
        cycle
      >
        <v-carousel-item v-for="(group, g) in groupedItems" :key="g">
          <v-row align="center" align-content="space-between">
            <v-col
              v-for="(item, i) in group"
              :key="i"
              cols="12"
              md="6"
              class="pl-2 pr-2"
            >
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
          </v-row>
        </v-carousel-item>
      </v-carousel>
    </client-only>
  </div>
</template>

<script>
import PortfolioCard from '~/components/PortfolioCard.vue'
import { projects } from '~/helpers/portfolio-items.js'
import { groupArrayByNumberOfItems, getRandomItems } from '~/helpers/array-utils.js'
export default {
  components: { PortfolioCard },
  data () {
    return {
      number: 2,
      items: getRandomItems(projects, 7)
    }
  },
  computed: {
    groupedItems () {
      this.$forceUpdate()
      return groupArrayByNumberOfItems(this.items, this.$vuetify.breakpoint.smAndDown ? 1 : this.number)
    }
  }
}
</script>

<style lang="sass">
.v-carousel__controls
  background: transparent !important
</style>
