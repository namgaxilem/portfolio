<template>
  <div class="moon">
    <svg 
      xmlns="http://www.w3.org/2000/svg"
      :viewBox="viewBox" 
    >
      <circle cx="50" cy="50" r="60" fill="#142A47" />
      <circle cx="50" cy="50" r="55" fill="#1F3550" />
      <circle cx="50" cy="50" r="50" fill="#2B405A" />
      <circle cx="50" cy="50" r="45" fill="#354962" />
      <circle cx="50" cy="50" r="40" fill="#3F5268" />

      <circle :cx="Math.random() * 100" :cy="Math.random() * 100" r="0.3" fill="white" />
      <circle :cx="Math.random() * 100" :cy="Math.random() * 100" r="0.3" fill="white" />
      <circle :cx="Math.random() * 100" :cy="Math.random() * 100" r="0.3" fill="white" />
      <circle :cx="Math.random() * 100" :cy="Math.random() * 100" r="0.3" fill="white" />
      <circle :cx="Math.random() * 100" :cy="Math.random() * 100" r="0.3" fill="white" />
    </svg>
  </div>
</template>

<script>
export default {
  name: 'Footer',
  components: {},
  data() {
    return {
      window: {
        width: 0,
        height: 0
      },
      screenPC: false
    };
  },
  computed: {
    viewBox() {
      if (this.window.width <= 500) {
        return '15 50 70 70';
      } else {
        return '-25 10 100 100'; 
      }
    }
  },
  methods: {
    handleResize() {
      this.window.width = window.innerWidth;
      this.window.height = window.innerHeight;
    }
  },
  created() {
    window.addEventListener('resize', this.handleResize);
    this.handleResize();
  },
  destroyed() {
    window.removeEventListener('resize', this.handleResize);
  },
  watch: {
    'window.width'(widthScreen) {
      if (widthScreen > 767) {
        this.screenPC = true;
      } else {
        this.screenPC = false;
      }
    }
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss" scoped>
.moon {
  position: absolute;
  height: 100%;
  width: 100%;
  right: 0;
  opacity: 0.6;
}

@media only screen and (max-width: 500px) {
  .moon {
  }
}
</style>
