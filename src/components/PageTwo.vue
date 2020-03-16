<template>
  <div
    ref="pageTwo"
    class="page-two page-wraper"
    :class="{ 
      'top-100': initialPos === 1, 
      'top-0': initialPos === 2, 
      'top--100': initialPos === 3,
      'top--200': initialPos === 4,
      'position-relative': $route.name === 'detail',
      'position-absolute': $route.name !== 'detail',
      'height-100vh': $route.name === 'detail'
    }"
  >
    <div class="title-1">
      <h1 ref="title-text">
        About me
      </h1>
      <div class="underline">
        <div ref="underline-above" />
        <div ref="underline-below" />
      </div>
      <p ref="sub-text">
        ducnam11081997@gmail.com
        <br>Wantedly
      </p>
    </div>
    <div
      ref="title-2-img"
      class="title-2-img"
      :class="{ 'title-2-img-view-detail': $route.name === 'detail' }"
      @click="viewContent"
    >
      <img
        src="@/assets/image/image-1.png"
        alt="image"
      >
      <div
        ref="preload-image"
        class="preload-image"
      >
        <div
          ref="column-preload-image"
          class="column-preload-image"
        />
      </div>
    </div>
  </div>
</template>

<script>
import animation from "@/assets/common/animation.js";

/* eslint-disable */
export default {
  props: ["transform", "fadeIn", "fadeOut", "initialPos"],
  name: "PageTwo",
  data() {
    return {
      isTransforming: true
    };
  },
  methods: {
    viewContent() {
      this.$emit('viewContent');
    },
    transforms(val) {
      this.setTransform(val);

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
    setTransform (val) {
      this.$refs["pageTwo"].style.transform = "translateY(value%)".replace(
        "value",
        val.toString()
      );
    },
    setIsTransforming (val) {
      this.isTransforming = val;
    },
    removeAnimation() {
      let remove = animation.removeAnimation.bind(this);
      remove();
    },
    viewDetail() {
      this.setIsTransforming(false);
      setTimeout(() => {
        this.setTransform(0);
        this.$refs["pageTwo"].classList.remove('top-100');
        this.$refs["pageTwo"].classList.remove('top-0');
        this.$refs["pageTwo"].classList.remove('top--100');
        this.$refs["pageTwo"].classList.remove('top--200');
      }, 600);
    },
    backToMainPage() {
      this.$refs["title-2-img"].classList.add('title-2-img-leave-view-detail');
    }
  },
  mounted() {
    let fadein = animation.addFadeIn.bind(this);
    fadein();
  },
  watch: {
    transform(val) {
      if (this.isTransforming) {
        this.transforms(val);
      }
    }
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss" scoped>
.title-2-img-view-detail {
  animation: viewImgDetail 0.6s;
  animation-fill-mode: both;

  @media screen and (max-width: 414px) {
    animation: viewImgDetail-mobile 0.6s;
    animation-fill-mode: both;
  }
}

.title-2-img-leave-view-detail {
  animation: leaveImgViewDetail 0.6s;
  animation-fill-mode: both;

  @media screen and (max-width: 414px) {
    animation: leaveImgViewDetail-mobile 0.6s;
    animation-fill-mode: both;
  }
}

@keyframes viewImgDetail {
  to {
    height: 100%;
    width: 60%;
    right: 0;
  }
}

@keyframes viewImgDetail-mobile {
  to {
    height: 100%;
    width: 100%;
    right: 0;
  }
}

@keyframes leaveImgViewDetail {
  from {
    height: 100%;
    width: 60%;
    right: 0;
  }
  to {
    height: 70%;
    right: 10%;
    width: 50%;
  }
}

@keyframes leaveImgViewDetail-mobile {
  from {
    height: 100%;
    width: 100%;
    right: 0;
  }
  to {
    width: 80%;
    height: 50%;
    right: 10%;
    top: 40%;
  }
}
</style>
