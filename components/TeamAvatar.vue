<template>
  <div class="d-flex flex-column justify-center align-center">
    <h6 class="text-h6">{{ name }}</h6>
    <v-avatar size="110" class="my-4">
      <v-img
        :src="img"
        :alt="name"
      />
    </v-avatar>
    <p class="text-body-1 font-weight-light max-w-220">
      {{ description }}
    </p>
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
    }
  }
}
</script>

<style lang="sass">
.max-w-220
  max-width: 220px
  text-align: center
</style>
