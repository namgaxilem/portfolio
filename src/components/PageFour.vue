<template>
  <div
    ref="pageFour"
    class="page-four page-wraper"
    :class="{ 
      'top-300': initialPos === 1, 
      'top-200': initialPos === 2, 
      'top-100': initialPos === 3, 
      'top-0': initialPos === 4,
      'position-relative': $route.name === 'detail',
      'position-absolute': $route.name !== 'detail'
    }"
  >
    <div class="title-1">
      <h1 ref="title-text">
        About my
        <br />friends
      </h1>
      <div class="underline">
        <div ref="underline-above"></div>
        <div ref="underline-below"></div>
      </div>
      <p ref="sub-text">
        kuon609@gmail.com
        <br />Wantedly
      </p>
    </div>
    <div ref="title-2-img" class="title-2-img" @click="viewContent">
      <img src="@/assets/image/image-2.png" alt="image" />
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
  name: "PageFour",
  data() {
    return {};
  },
  methods: {
    viewContent() {
      this.$emit('viewContent');
    },
    transforms(val) {
      this.$refs["pageFour"].style.transform = "translateY(value%)".replace(
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
    },
    removeAnimation() {
      let remove = animation.removeAnimation.bind(this);
      remove();
    }
  },
  watch: {
    transform(val) {
      this.transforms(val);
    }
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss" scoped>
</style>
