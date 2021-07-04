<template>
  <div class="footer-menu">
    <h6
      class="title grey--text text--lighten-2 text-uppercase font-weight-bold text-body-1 ml-0 ml-sm-5"
    >
      Menu
    </h6>
    <ul class="d-inline-flex d-sm-block px-0 px-sm-5">
      <li
        v-for="(link, i) in links"
        :key="i"
        class="mr-3"
      >
        <a
          :href="link.href"
          class="links"
        >
          {{ link.name }}
        </a>
      </li>
    </ul>
  </div>
</template>

<script>
import { siteLinks } from '~/helpers/menu-links.js'
export default {
  data () {
    return {
      links: siteLinks
    }
  }
}
</script>

<style lang="sass">
.footer-menu
  .title
    display: block
    width: 100%
  ul
    list-style: none

  .links
    text-decoration: none
    color: #fff

    &:hover
      color: #E0E0E0
</style>
