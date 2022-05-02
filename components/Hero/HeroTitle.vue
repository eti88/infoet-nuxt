<template>
  <div class="hero-title-container">
    <h2 class="text-uppercase font-weight-black text-h5 text-sm-h4 text-md-h3">
      {{ text }}
    </h2>
  </div>
</template>

<script>
export default {
  props: {
    text: {
      type: String,
      require: true
    }
  }
}
</script>

<style lang="sass">
.hero-title-container
  width: 100%
  display: flex
  align-items: center
  justify-content: center
</style>
