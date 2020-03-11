<template>
  <div
    id="back-button"
    :class="{'is-viewing-detail': isViewingDetail}"
  >
    <span
      ref="backButton"
      class="back-button"
      @click="backToMainPage" 
    >
      &#8592;
    </span>
  </div>
</template>

<script>
export default {
  name: "BackButton",
  data() {
    return {
      window: {
        scrollY: 0,
        innerHeight: 0,
        pageYOffset: 0
      },
      backButtonViewportOffset: 0,
      isBackingToMainPage: false
    };
  },
  computed: {
    isViewingDetail() {
      return this.window.innerHeight < (this.window.pageYOffset + this.backButtonViewportOffset);
    }
  },
  watch: {
    'window.scrollY'(val) {
      if (this.isBackingToMainPage && val === 0) {
        this.$emit("backToMainPage");
        this.$refs.backButton.classList.add('hide-back-button');
      }
    }
  },
  mounted() {
    this.$refs.backButton.classList.add('display-back-button');
    this.resize();
  },
  created() {
    window.addEventListener('scroll', this.handleScroll);
    window.addEventListener('scroll', this.scroll);
    window.addEventListener('resize', this.resize);
    this.scroll();
    this.handleScroll();
  },
  beforeDestroy() {
    window.removeEventListener('scroll', this.handleScroll);
    window.removeEventListener('scroll', this.scroll);
    window.removeEventListener('resize', this.resize);
  },
  methods: {
    backToMainPage() {
      if (this.window.scrollY !== 0) {
        window.scroll({
          top: 0, 
          left: 0, 
          behavior: 'smooth'
        });
        this.isBackingToMainPage = true;
      } else {
        this.$emit("backToMainPage");
        this.$refs.backButton.classList.add('hide-back-button');
      }
    },
    handleScroll() {
      this.window.scrollY = window.scrollY;
    },
    scroll() { 
      this.window.innerHeight = window.innerHeight;
      this.window.pageYOffset = window.pageYOffset;
    },
    resize() {
      let viewportOffset = this.$refs.backButton.getBoundingClientRect();
      this.backButtonViewportOffset = viewportOffset.top;
    }
  }
};
</script>

<style lang="scss" scoped>
#back-button {
  position: fixed;
  top: 5.6em;
  left: 1.6em;
  color: #fff;
  cursor: pointer;
  overflow: hidden;
  z-index: 98;
  transition: color 0.4s;
}

.back-button {
  display: block;
  font-size: 100px;
  color: #fff;
  transform: translateX(100%);
}

.display-back-button {
  animation: displayBackButtonAnimation 0.6s ease;
  animation-fill-mode: both;
}

.hide-back-button {
  transform: translateX(0);
  animation: hideBackButtonAnimation 0.6s ease;
  animation-fill-mode: both;
}

@media only screen and (max-width: 500px) { 
  #back-button {
    top: 2em;
    left: 1em;
  }

  .back-button {
    font-size: 60px;
  }
}

@keyframes displayBackButtonAnimation {
  100% {
    transform: translateX(0);
  }
}

@keyframes hideBackButtonAnimation {
  100% {
    transform: translateX(-100%);
  }
}

#back-button.is-viewing-detail .back-button {
  color: black;
}
</style>