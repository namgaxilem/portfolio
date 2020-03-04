<template>
  <div
    ref="pageThree"
    class="page-three page-wraper"
    :class="{ 'top-200': initialPos === 1, 'top-100': initialPos === 2, 'top-0': initialPos === 3, 'top--100': initialPos === 4 }"
  >
    <div class="title-1">
      <h1 ref="title-text">My projects</h1>
      <div class="underline">
        <div ref="underline-above"></div>
        <div ref="underline-below"></div>
      </div>
      <p ref="sub-text">
        I love Design, Technology,
        <br />and Story.
      </p>
    </div>
    <div ref="title-2-img" class="title-2-img">
      <img src="@/assets/image/image-3.png" alt="image" />
      <div ref="preload-image" class="preload-image">
        <div ref="column-preload-image" class="column-preload-image"></div>
      </div>
    </div>
    <router-view></router-view>
  </div>
</template>

<script>
import animation from "@/assets/common/animation.js";

/* eslint-disable */
export default {
  props: ["transform", "fadeIn", "fadeOut", "initialPos"],
  name: "PageThree",
  data() {
    return {};
  },
  methods: {},
  watch: {
    transform(val) {
      this.$refs["pageThree"].style.transform = "translateY(value%)".replace(
        "value",
        val.toString()
      );

      let remove = animation.removeAnimation.bind(this);
      remove();

      if (this.fadeIn === true) {
        let fadein = animation.addFadeIn.bind(this);
        fadein();
      } else if (this.fadeOut === true) {
        let fadeout = animation.addFadeOut.bind(this);
        fadeout();
      }
    }
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss" scoped>
</style>
