<template>
  <div class="hero-title-container">
    <h2 class="text-uppercase text-h5 text-sm-h4 text-md-h3">{{ text }}</h2>
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

  h2
    color: mix(#fff, #241C2C, 85%)
    font-weight: 900
    line-height: initial
    text-shadow: -0.0075em 0.0075em 0 mix(#fff, #241C2C, 14%), 0.005em 0.005em 0 mix(#fff, #241C2C, 70%), 0.01em 0.01em 0 mix(#fff, #241C2C, 32%), 0.015em 0.015em mix(#fff, #241C2C, 64%), 0.02em 0.02em 0 mix(#fff, #241C2C, 46%), 0.025em 0.025em 0 mix(#fff, #241C2C, 98%), 0.03em 0.03em 0 mix(#fff, #241C2C, 80%), 0.035em 0.035em 0 mix(#fff, #241C2C, 72%)
</style>
