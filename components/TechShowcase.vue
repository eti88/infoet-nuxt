<template>
  <section class="tech-container w-full">
    <div v-if="title !== null">
      <h3 class="text-center mb-10 text-h5">{{ title }}</h3>
    </div>
    <div class="d-inline-flex flex-wrap align-center justify-space-around w-full">
      <template v-for="(item, k) in items">
        <div :key="k" class="showcase-item d-flex flex-column align-center justify-center my-5">
          <a :href="item.href">
            <img :src="item.img" />
          </a>
          <div
            v-if="item.title !== null"
            class="showcase-item-title"
          >
            {{ item.title }}
          </div>
        </div>
      </template>
    </div>
  </section>
</template>

<script>
export default {
  props: {
    title: {
      type: String,
      required: false
    },
    items: {
      type: Array,
      required: true,
      default: () => []
    }
  }
}
</script>

<style lang="sass">
.w-full
  width: 100% !important

.tech-container
    padding-top: 20px
    padding-bottom: 20px

    .showcase-item
      width: 80px

      .showcase-item-title
        opacity: 30%
        font-size: 0.8em

      a
        filter: grayscale(100%)
        --webkit-filter: greyscale(100%)

        &:hover
          filter: none
          --webkit-filter: greyscale(0)

        img
          height: 33px
          width: auto
</style>
