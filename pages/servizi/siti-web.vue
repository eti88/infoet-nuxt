<template>
  <div>
    <v-row>
      <v-col cols="12">
        <v-col cols="12">
          <h1 class="mt-10 text-h4">{{ title }}</h1>
        </v-col>
      </v-col>
    </v-row>
    <v-row>
      <v-col cols="12" sm="7">
        <v-sheet color="transparent" class="pa-5">
          <p class="text--secondary">
            <!-- desc -->
          </p>
        </v-sheet>
      </v-col>
      <v-col cols="12" sm="5">
        <service-image-hero
          image="/services/mobile-app.jpg"
          alt="App Mobile"
        />
      </v-col>
    </v-row>
    <v-row>
      <v-col cols="12">
        <v-sheet color="transparent" class="pa-5">
          <p class="text--secondary">
            <!-- desc -->
          </p>
        </v-sheet>
      </v-col>
    </v-row>
    <tech-showcase
      :items="showcaseElements"
      class="mb-5"
    />
    <v-row>
      <v-col cols="12">
        <v-sheet color="transparent" class="pa-5">
          <p class="text--secondary">
            <!-- desc -->
          </p>
        </v-sheet>
      </v-col>
    </v-row>
  </div>
</template>

<script>
import ServiceImageHero from '~/components/ServiceImageHero.vue'
export default {
  components: { ServiceImageHero },
  data () {
    return {
      title: 'Siti Web',
      showcaseElements: [
        // TODO: change
        { img: '/showcase/csharp.png', title: 'C#', href: 'https://docs.microsoft.com/it-it/dotnet/csharp/' },
        { img: '/showcase/flutter.png', title: 'Flutter', href: 'https://flutter.dev' }
      ]
    }
  }
}
</script>

<style lang="sass">

</style>
