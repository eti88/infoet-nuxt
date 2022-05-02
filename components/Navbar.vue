<template>
  <v-app-bar
    color="transparent"
    dark
    flat
  >
    <v-toolbar-title @click="$route.path !== '/' ? $router.replace('/') : false">
      <img src="/logo.svg" height="30" alt="Infoet">
    </v-toolbar-title>

    <v-spacer />
    <v-flex
      v-if="$vuetify.breakpoint.mdAndUp"
      shrink
    >
      <v-btn
        v-for="(link, i) in links"
        :key="i"
        :href="link.href"
        nuxt
        class="font-weight-medium"
        text
      >
        {{ link.name }}
      </v-btn>
    </v-flex>
    <v-menu
      v-else
      :close-on-click="closeOnClick"
      :nudge-bottom="10"
      content-class="custom-menu"
      origin="top center"
      min-width="150"
      rounded
      offset-y
      eager
    >
      <template #activator="{ on, attrs }">
        <v-app-bar-nav-icon v-bind="attrs" v-on="on" />
      </template>
      <v-list>
        <v-list-item
          v-for="(link, i) in links"
          :key="i"
        >
          <v-list-item-title>
            <v-btn
              :href="link.href"
              nuxt
              class="font-weight-medium"
              text
            >
              {{ link.name }}
            </v-btn>
          </v-list-item-title>
        </v-list-item>
      </v-list>
    </v-menu>
  </v-app-bar>
</template>

<script>
import { siteLinks } from '~/helpers/menu-links.js'

export default {
  data () {
    return {
      closeOnClick: true,
      links: siteLinks
    }
  }
}
</script>

<style lang="sass">
.custom-menu > .v-list
  background: #241C2C !important
.custom-menu .v-list-item__title a
  text-decoration: none
  color: #fff

  &:hover
    color: #74BCEC
</style>
