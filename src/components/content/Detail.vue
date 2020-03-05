<template>
  <div id="detail">
    <About />
  </div>
</template>

<script>
import About from '@/components/content/About.vue';

export default {
  name: 'Detail',
  components: { About }
}
</script>

<style lang="scss">
#detail {
  position: absolute;
  top: 100%;
  width: 100%;
}
</style>
