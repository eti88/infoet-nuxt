<template>
  <div>
    <v-row>
      <v-col cols="12">
        <v-col cols="12">
          <h1 class="mt-10 text-h4">
            {{ filteredProject.title }} - {{ filteredProject.year }}
          </h1>
        </v-col>
      </v-col>
    </v-row>
    <v-row>
      <v-col cols="12" sm="7">
        <v-sheet color="transparent" class="pa-5">
          <p class="text--secondary">
            {{ filteredProject.caseStudy }}
          </p>
          <v-btn
            :disabled="filteredProject.url === '#' || filteredProject.url === null"
            :href="filteredProject.url"
            color="#74BCEC"
          >
            Vai al sito
          </v-btn>
        </v-sheet>
        <v-chip-group class="ml-5" show-arrows>
          <v-chip
            v-for="(tag, k) in filteredProject.tags"
            :key="k"
            color="#1690D3"
            text-color="#fff"
            ripple
            pill
          >
            {{ tag }}
          </v-chip>
        </v-chip-group>
      </v-col>
      <v-col cols="12" sm="5">
        <service-image-hero
          :image="filteredProject.image"
          :alt="filteredProject.title"
        />
      </v-col>
    </v-row>
    <v-row v-if="filteredProject.hasOwnProperty('description')">
      <v-col cols="12">
        <v-sheet color="transparent" class="pa-5">
          <p class="text--secondary">
            {{ filteredProject.description }}
          </p>
        </v-sheet>
      </v-col>
    </v-row>
    <v-row v-if="filteredProject.hasOwnProperty('feedback')">
      <v-col cols="12">
        <v-sheet color="transparent" class="pa-5">
          <p class="text--secondary">
            {{ filteredProject.feedback }}
          </p>
        </v-sheet>
      </v-col>
    </v-row>
  </div>
</template>

<script>
import ServiceImageHero from '~/components/ServiceImageHero.vue'
import { projects } from '~/helpers/portfolio-items.js'

export default {
  components: { ServiceImageHero },
  transition: 'intro',
  asyncData ({ params, error, payload }) {
    if (payload) {
      return { filteredProject: payload }
    } else {
      const filteredProject = projects.find(el => el.slug === params.slug)
      if (filteredProject) {
        return { filteredProject }
      } else {
        redirect('/')
      }
    }
  },
  head () {
    const project = this.filteredProject

    return {
      title: `${project.title} @(${project.year}) - Infoet`,
      meta: [
        {
          hid: 'description',
          name: 'description',
          content: (project.description !== null && project.description.length > 156) ? project.description.substring(0, 156) : (project.description !== null) ? project.description : ''
        }
      ]
    }
  }
}
</script>
