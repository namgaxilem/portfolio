<template>
  <div
    id="app"
    ref="app"
    :class="{ 'view-detail': $route.name === 'detail' }"
  >
    <router-view />
    <div class="pre-load" />
  </div>
</template>

<script>
export default {
  name: "App",
  components: {},
  watch: {
    $route(to) {
      if (to.name === "detail") {
        this.$refs.app.style.overflow = "visible";
        document.getElementsByTagName("BODY")[0].style.overflowX = "hidden";
      } else {
        this.$refs.app.style.overflow = "hidden";
      }
    }
  },
  mounted() {
    if (this.$route.name === "detail") {
      this.$refs.app.style.overflow = "visible";
      document.getElementsByTagName("BODY")[0].style.overflowX = "hidden";
    } else {
      this.$refs.app.style.overflow = "hidden";
    }
  }
};
</script>

<style lang="scss">
* {
  box-sizing: border-box;
}

html {
  width: 100vw;
  height: 100vh;
  scroll-behavior: smooth;
}

body {
  margin: 0;
  width: 100%;
  height: 100%;
}

#app {
  font-family: Arial, "Palatino Linotype", "Avenir", Helvetica, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
  width: 100%;
  height: 100%;
  position: relative;
  background-image: linear-gradient(to right, rgb(8, 1, 32), rgb(10, 2, 56));
  transition: background-image 0.6s;

  &.view-detail {
    background-image: linear-gradient(to right, black, black);
  }
}

.pre-load {
  position: absolute;
  width: 100%;
  height: 100%;
  z-index: 1000;
  background: black;
  animation: preload 1.2s;
  animation-fill-mode: forwards;
  animation-timing-function: cubic-bezier(0.645, 0.045, 0.355, 1);
}

@keyframes preload {
  from {
    transform: translateY(0);
  }

  to {
    transform: translateY(-100%);
  }
}
</style>
