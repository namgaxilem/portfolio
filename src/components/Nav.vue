<template>
  <div class="nav">
    <span
      class="nav-item"
      :class="{ 
        'nav-item-active': currentPage === 1,
        'display-nav': display,
        'hide-nav': hide
      }"
      @click="$router.push({ name: 'main', params: { id: '' }})"
    />
    <span
      class="nav-item"
      :class="{ 
        'nav-item-active': currentPage === 2,
        'display-nav': display,
        'hide-nav': hide
      }"
      @click="$router.push({ name: 'main', params: { id: 'about' }})"
    />
    <span
      class="nav-item"
      :class="{ 
        'nav-item-active': currentPage === 3,
        'display-nav': display,
        'hide-nav': hide
      }"
      @click="$router.push({ name: 'main', params: { id: 'projects' }})"
    />
    <span
      class="nav-item"
      :class="{ 
        'nav-item-active': currentPage === 4,
        'display-nav': display,
        'hide-nav': hide
      }"
      @click="$router.push({ name: 'main', params: { id: 'friends' }})"
    />
  </div>
</template>

<script>
/* eslint-disable */
export default {
  name: "Nav",
  props: {
    msg: String,
    currentPage: Number
  },
  data() {
    return {
      display: false,
      hide: false
    };
  },
  methods: {
    onWheel(e) {
      if (e.deltaY < 0 && this.currentPage > 1) {
        this.$emit("changeNav", this.currentPage - 1);
      } else if (e.deltaY > 0 && this.currentPage < 4) {
        this.$emit("changeNav", this.currentPage + 1);
      }
    },
    hideNav() {
      this.hide = true;
    }
  },
  mounted() {
    window.addEventListener("wheel", this.onWheel);
    this.display = true;
  },
  beforeDestroy() {
    window.removeEventListener("wheel", this.onWheel);
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss" scoped>
.nav {
  width: 30px;
  left: 2em;
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
  display: flex;
  flex-direction: column;
  z-index: 99;
  overflow: hidden;
}

.nav-item {
  display: inline-block;
  width: 70%;
  height: 3px;
  margin: 1em 2em 1em 0;
  background: #fff;
  transition: width 0.4s;
  transform: translateX(-100%);

  &:hover {
    cursor: pointer;
  }
}

.nav-item.nav-item-active {
  width: 30px;
}

.display-nav {
  animation: displayNav 0.6s;
  animation-fill-mode: both;
}

.hide-nav {
  transform: translateX(0);
  animation: hideNav 0.6s;
  animation-fill-mode: both;
}

@keyframes displayNav {
  100% {
    transform: translateX(0);
  }
}

@keyframes hideNav {
  100% {
    transform: translateX(-100%);
  }
}

@media only screen and (max-width: 775px) {
  .nav {
    top: auto;
    bottom: 0;
    left: 50%;
    transform: rotate(-90deg) translateX(-50%); 
  }
}
</style>
