<template>
  <header 
    :style="{ color: isViewingDetail ? 'black': 'white' }"
    class="header" 
    :class="{ 'is-viewing-detail': isViewingDetail }"
  >
    <a class="brand">Nam Nguyen</a>
    <div 
      class="logo"
      :class="{ 'is-viewing-detail': isViewingDetail }"
    >
      <div
        class="button-open-menu"
        :class="isOpenMenu ? 'open-menu' : ''"
        @click="openMenu"
      />
      <a 
        class=""
        href="https://www.instagram.com/nam_ndn97/"
        target="_blank"
      >
        <font-awesome-icon :icon="{ prefix: 'fab', iconName: 'instagram' }" />
      </a>
      <a
        class=""
        href="https://facebook.com/namgaxilem"
        target="_blank"
      >
        <font-awesome-icon :icon="{ prefix: 'fab', iconName: 'facebook' }" />
      </a>
    </div>
    <div
      class="header-slide"
      :class="isOpenMenu ? 'active' : ''"
    >
      <div href="#">
        <a href="#">
          home
          <div class="line-hover" />
        </a>
      </div>
      <div href="#">
        <a href="#">
          about me
          <div class="line-hover" />
        </a>
      </div>
      <div href="#">
        <a href="#">
          my projects
          <div class="line-hover" />
        </a>
      </div>
      <div href="#">
        <a href="#">
          my friends
          <div class="line-hover" />
        </a>
      </div>
    </div>
  </header>
</template>

<script>
export default {
  name: "Header",
  data() {
    return {
      isOpenMenu: false,
      window: {
        innerHeight: 0,
        pageYOffset: 0
      }
    };
  },
  computed: {
    isViewingDetail() {
      return this.window.innerHeight < this.window.pageYOffset;
    }
  },
  created() {
    window.addEventListener('scroll', this.scroll);
  },
  beforeDestroy() {
    window.removeEventListener('scroll', this.scroll);
  },
  methods: {
    openMenu() {
      this.isOpenMenu = !this.isOpenMenu;
    },
    scroll() {
      this.window.innerHeight = window.innerHeight;
      this.window.pageYOffset = window.pageYOffset;
    }
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss" scoped>
.header {
  padding: 2em 1em 0 1em;
  display: flex;
  position: fixed;
  width: 100%;
  font-size: 1.6rem;
  color: #fff;
  z-index: 100;
  transition: color 0.4s;
}

.brand {
  letter-spacing: 0.1em;
  z-index: 100;
}

.logo {
  flex-grow: 1;
  text-align: right;
  display: flex;
  flex-direction: row-reverse;
  z-index: 100;

  * {
    margin-left: 0.5em;
    align-content: center;
    color: #fff;
    z-index: 100;
    transition: color 0.4s;
  }

  .button-open-menu {
    display: inline-block;
    position: relative;
    width: 50px;
    height: 100%;
    cursor: pointer;
    z-index: 100;

    &:before {
      content: "";
      width: 100%;
      height: 3px;
      background: #fff;
      position: absolute;
      top: 0;
      right: 0;
      transition: 0.4s cubic-bezier(0.785, 0.135, 0.15, 0.86);
    }

    &:after {
      content: "";
      width: 100%;
      height: 3px;
      background: #fff;
      position: absolute;
      bottom: 0;
      right: 0;
      transition: 0.4s cubic-bezier(0.785, 0.135, 0.15, 0.86);
    }

    &.open-menu {
      &:before {
        top: 50%;
        transform: rotate(45deg) translate3d(0, -50%, 0);
      }
      &:after {
        bottom: 50%;
        transform: rotate(-45deg) translate3d(0, 50%, 0);
      }
    }
  }
}

.header-slide {
  position: absolute;
  top: 0;
  left: 0;
  transform: translateY(-100%);
  width: 100vw;
  height: 100vh;
  background-image: linear-gradient(to right, purple, pink);
  transition: transform 0.5s;
  display: flex;
  flex-direction: column;
  justify-content: center;

  &.active {
    z-index: 99;
    transform: translateY(0);

    a {
      height: 90px;
      transform: translateY(0);
    }
  }

  div {
    text-align: center;
    overflow: hidden;
    position: relative;
  }

  a {
    color: #fff;
    text-decoration: none;
    text-transform: uppercase;
    font-size: 5rem;
    display: inline-block;
    transition: transform 0.5s;
    transition-delay: 0.35s;
    transform: translateY(100%);

    &:hover .line-hover {
      width: 100%;
    }
  }

  .line-hover {
    height: 5px;
    width: 0;
    position: absolute;
    top: 50%;
    transform: translateY(-50%);
    background: #fff;
    transition: width 0.3s;
  }
}

@media only screen and (max-width: 570px) { 
 .header-slide {
    a {
      font-size: 3.5rem;
      &:hover .line-hover {
        width: 100%;
      }
    }
  }
}

@media only screen and (max-width: 414px) {
  .header {
    padding: 1em 1em 0 1em;
    font-size: 1rem;

    .logo a {
      display: none;
    }
  }

  .header-slide {
    a {
      font-size: 2rem;
      &:hover .line-hover {
        width: 100%;
      }
    }
  }
}

header.is-viewing-detail {
  color: black;

  .logo {
    * {
      color: black;
    }

    .button-open-menu {
      &::after {
        background: black;
      }

      &::before {
        background: black;
      }
    }
  }
}
</style>
