<template>
  <div class="d-flex flex-column justify-center align-center">
    <h6 class="text-h6">{{ name }}</h6>
    <v-avatar size="140" class="my-4">
      <v-img
        :src="img"
        :alt="name"
      />
    </v-avatar>
    <p class="text-body-1 font-weight-light max-w-220">
      {{ description }}
    </p>
    <div v-if="getAge > 0" class="mt-n4 text-body-2 font-weight-light text-center max-w-220">
     Età {{ getAge }}
    </div>
  </div>
</template>

<script>
export default {
  props: {
    name: {
      type: String,
      required: true
    },
    img: {
      type: String,
      required: true
    },
    description: {
      type: String,
      required: true
    },
    bornYear: {
      type: Number,
      required: false
    },
    bornMonth: {
      type: Number,
      required: false
    }
  },
  computed: {
    getAge () {
      if (this.bornYear === null) {
        return 0
      } else if (this.bornMonth === null) {
        return 0
      }
      const today = new Date()
      const birthDate = new Date(this.bornYear, this.bornMonth, 1)
      let age = today.getFullYear() - birthDate.getFullYear()
      const m = today.getMonth() - birthDate.getMonth()
      if (m < 0 || (m === 0 && today.getDate() < birthDate.getDate())) {
        age--
      }
      return age
    }
  }
}
</script>

<style lang="sass">
.max-w-220
  max-width: 220px
  text-align: center
</style>
