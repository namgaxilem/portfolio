<template>
  <div id="detail">
    <About v-if="route === 'about'" />
    <Friends v-if="route === 'friends'" />
  </div>
</template>

<script>
import About from '@/components/content/About.vue';
import Friends from '@/components/content/Friends.vue';

export default {
  name: 'Detail',
  components: { About, Friends },
  computed: {
    route() {
      return this.$route.params.id;
    }
  }
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
