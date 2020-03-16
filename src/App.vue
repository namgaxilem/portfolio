<template>
  <div
    id="app"
    ref="app"
    :class="{ 
      'view-detail': $route.name === 'detail',
      'height-100vh': $route.name !== 'detail',
    }"
  >
    <Moon v-if="$route.name !== 'detail'" />
    <router-view />
    <div class="pre-load" />
  </div>
</template>

<script>
import Moon from './components/Moon.vue';

export default {
  name: "App",
  components: {
    Moon
  },
  watch: {
    $route(to) {
      if (to.name === "detail") {
        this.$refs.app.style.overflow = "hidden visible";
      } else {
        this.$refs.app.style.overflow = "hidden";
      }
    }
  },
  mounted() {
    if (this.$route.name === "detail") {
      this.$refs.app.style.overflow = "hidden visible";
    } else {
      this.$refs.app.style.overflow = "hidden";
    }
  }
};
</script>

<style lang="scss">
@import url('https://fonts.googleapis.com/css?family=Arima+Madurai:300');

* {
  box-sizing: border-box;
}

body {
  margin: 0;
  width: 100%;
  height: auto;
}

#app {
  font-family: 'Arima Madurai', Arial, cursive;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
  width: 100%;
  position: relative;
  background-image: linear-gradient(to bottom, rgb(6,32,63), rgb(3,12,23));
  transition: background-image 0.6s;
  overflow: hidden;

  &.view-detail {
    background-image: linear-gradient(to right, black, black);
  }
}

.pre-load {
  position: absolute;
  width: 100vw;
  height: 100vh;
  top: 0;
  z-index: 1000;
  background: black;
  animation: preload 1.2s;
  animation-fill-mode: both;
  animation-timing-function: cubic-bezier(0.645, 0.045, 0.355, 1);
}

@keyframes preload {
  to {
    transform: translateY(-100%);
  }
}
</style>
