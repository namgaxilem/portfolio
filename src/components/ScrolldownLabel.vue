<template>
  <div class="scrolldown-label" :class="{ 'active': display }">SCROLLDOWN</div>
</template>

<script>
/* eslint-disable */
export default {
  name: "ScolldownLabel",
  props: {
    display: Boolean
  },
  data() {
    return {};
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss" scoped>
.scrolldown-label {
  position: fixed;
  bottom: 0;
  left: 2em;
  overflow: hidden;
  color: #fff;
  font-size: 0.8em;
  letter-spacing: 0.2em;
  writing-mode: vertical-rl;
  transition: 0.4s;
  transform: translateY(100%);
  z-index: 96;

  &::after {
    content: "";
    width: 2px;
    height: 6em;
    margin-top: 1em;
    background-color: #fff;
    display: inline-block;
  }

  &.active {
    transform: translateY(0);
  }
}

@media only screen and (max-width: 500px) {
  .scrolldown-label {
    right: 2em;
    font-size: 0.6em;

    &::after {
      content: "";
      width: 2px;
      height: 4em;
      margin-top: 1em;
    }
  }
}
</style>
