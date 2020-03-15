<template>
  <header 
    :style="{ color: isOpenMenu ? 'white' : isScrollingToDetail ? 'black': 'white' }"
    class="header" 
    :class="{ 'is-viewing-detail': isOpenMenu ? false : isScrollingToDetail }"
  >
    <a class="brand">Nam Nguyen</a>
    <div 
      class="logo"
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
      <div @click="linkTo('home')">
        <a>
          <div>home</div>
          <div class="line-hover" />
        </a>
      </div>
      <div @click="linkTo('about')">
        <a>
          about me
          <div class="line-hover" />
        </a>
      </div>
      <div @click="linkTo('projects')">
        <a>
          my projects
          <div class="line-hover" />
        </a>
      </div>
      <div @click="linkTo('friends')">
        <a>
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
    isScrollingToDetail() {
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
    },
    linkTo(val) {
      if (val === 'home') {
        this.$router.push({ name: "main", params: { id: "" } });
      }
      else if (val === 'about') {
        this.$router.push({ name: "main", params: { id: "about" } });
      }
      else if (val === 'friends') {
        this.$router.push({ name: "main", params: { id: "friends" } });
      }
      else if (val === 'projects') {
        this.$router.push({ name: "main", params: { id: "projects" } });
      }
      this.openMenu();
    }
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss" scoped>
.header {
  padding: 1.5em 1em 0 1em;
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
  cursor: pointer;

  &:hover {
    color: grey;
  }
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

    &:hover * {
      color: grey;
    }
  }

  .button-open-menu {
    display: inline-block;
    position: relative;
    width: 50px;
    height: 100%;
    cursor: pointer;
    z-index: 100;
    margin-left: 25px;

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
  background-image: linear-gradient(to right, #072142, #8c2b7a 42%, #ff4d5a);
  transition: transform 0.5s;
  display: flex;
  flex-direction: column;
  justify-content: center;

  &.active {
    z-index: 99;
    transform: translateY(0);

    a {
      height: 100%;
      transform: translateY(0);

      &>div {
        display: flex;
      }
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
    font-size: 4.5rem;
    letter-spacing: 0.2em;
    display: inline-block;
    transition: transform 0.5s;
    transition-delay: 0.35s;
    transform: translateY(100%);
    cursor: pointer;

    &:hover .line-hover {
      width: 100%;
    }
  }

  .line-hover {
    height: 5px;
    width: 0%;
    position: absolute;
    top: 50%;
    background: #fff;
    transition: width 0.3s;
    transform: translateY(-50%);
  }
}
@media only screen and (max-width: 680px) { 
 .header-slide {
    a {
      font-size: 2rem;
    }
  }
}

@media only screen and (max-width: 500px) {
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

      &:hover {
        color: grey;
      }
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
