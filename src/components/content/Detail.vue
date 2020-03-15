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
  position: relative;
  top: 100%;
  width: 100%;
  background: #fff;
  z-index: 97;
}
</style>
