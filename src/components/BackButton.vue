<template>
  <div id="back-button">
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
        scrollY: 0
      },
      isBackingToMainPage: false
    };
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
  },
  created() {
    window.addEventListener('scroll', this.handleScroll);
    this.handleScroll();
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
  z-index: 100;
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

@media only screen and (max-width: 400px) { 
  #back-button {
    top: 3.6em;
  }

  .back-button {
    font-size: 70px;
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
</style>