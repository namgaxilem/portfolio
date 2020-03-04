<template>
  <div
    ref="pageOne"
    class="page-one page-wraper"
    :class="{ 'top-0': initialPos === 1, 'top--100': initialPos === 2, 'top--200': initialPos === 3, 'top--300': initialPos === 4 }"
  >
    <div class="title-1">
      <h1 ref="title-text">
        NAM
        <br />NGUYEN
      </h1>
      <div class="underline">
        <div ref="underline-above"></div>
        <div ref="underline-below"></div>
      </div>
      <p ref="sub-text">
        Web developer /
        <br />Frontend engineer
      </p>
    </div>
    <div ref="title-2" class="title-2">
      <h1>PORTFOLIO</h1>
    </div>
  </div>
</template>

<script>
import animation from "@/assets/common/animation.js";

/* eslint-disable */
export default {
  props: ["transform", "fadeIn", "fadeOut", "initialPos"],
  name: "PageOne",
  data() {
    return {
      state: {}
    };
  },
  methods: {
    transforms(val) {
      this.$refs["pageOne"].style.transform = "translateY(value%)".replace(
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
  },
  mounted() {
    let fadein = animation.addFadeIn.bind(this);
    fadein();
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
