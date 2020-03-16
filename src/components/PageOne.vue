<template>
  <div
    ref="pageOne"
    class="page-one page-wraper"
    :class="{ 
      'top-0': initialPos === 1, 
      'top--100': initialPos === 2, 
      'top--200': initialPos === 3, 
      'top--300': initialPos === 4,
      'position-relative': $route.name === 'detail',
      'position-absolute': $route.name !== 'detail'
    }"
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
    <div class="title-2-cloud">
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="100 0 200 220"
        preserveAspectRatio="none"
        opacity="0.7"
      >
        <defs>
          <filter id="filter" x="0" y="0">
            <feGaussianBlur stdDeviation=".4" />
          </filter>
        </defs>

        <circle cx="200" cy="80" r="50" fill="#fff" filter="url(#filter)" />
        <circle cx="180" cy="120" r="40" fill="#fff" filter="url(#filter)" />
        <circle cx="140" cy="100" r="40" fill="#fff" filter="url(#filter)" />
        <circle cx="230" cy="125" r="30" fill="#fff" filter="url(#filter)" />
        <circle cx="260" cy="115" r="35" fill="#fff" filter="url(#filter)" />
        <circle cx="255" cy="65" r="25" fill="#fff" filter="url(#filter)" />
      </svg>
      <div class="bird-container">
        <div class="bird"></div>
      </div>
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
.bird {
	background-image: url(https://s3-us-west-2.amazonaws.com/s.cdpn.io/174479/bird-cells-new.svg);
	background-size: auto 100%;
	width: 352px;
	height: 500px;
	will-change: background-position;
	
	animation-name: fly-cycle;
	animation-duration: 1s;
	animation-delay: -0.5s;
	animation-timing-function: steps(10);
	animation-iteration-count: infinite;
}

.bird-container {
	position: absolute;
	top: 50%;
	left: 50%;
	transform: translate(-50%,-50%);
	will-change: transform;
}

@keyframes fly-cycle {
	
	100% {
		background-position: -3600px 0;
	}
	
}
</style>
