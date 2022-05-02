<template>
  <div>
    <client-only placeholder="Loading...">
      <v-carousel
        style="box-shadow: 0px 0px"
        height="540px"
        interval="10000"
        continuous
        show-arrows-on-hover
        cycle
      >
        <v-carousel-item v-for="(group, g) in groupedItems" :key="g">
          <v-row align="center" align-content="space-between">
            <v-col
              v-for="(item, i) in group"
              :key="i"
              cols="12"
              md="4"
              class="pl-2 pr-2"
            >
              <service-card
                :image="item.icon"
                :title="item.title"
                :description="item.description"
                :url="item.link"
              />
            </v-col>
          </v-row>
        </v-carousel-item>
      </v-carousel>
    </client-only>
  </div>
</template>

<script>
import ServiceCard from '~/components/ServiceCard.vue'
import { services } from '~/helpers/service-items.js'
import { groupArrayByNumberOfItems } from '~/helpers/array-utils.js'
export default {
  components: { ServiceCard },
  data () {
    return {
      number: 3,
      items: services
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
