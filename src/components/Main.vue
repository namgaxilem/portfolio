<template>
  <div>
    <Header />
    <Nav
      v-if="!isViewDetail && $route.name !== 'detail'"
      ref="nav"
      :current-page="state.currentPage"
      :initial-pos="initialPos"
      @changeSlide="changeSlide"
      @changeNav="changeNav"
    />
    <PageOne
      v-if="!isViewDetail"
      :transform="state.transformPage1"
      :fade-in="page1FadeIn"
      :fade-out="page1FadeOut"
      :initial-pos="initialPos"
    />
    <PageTwo
      v-if="!isViewDetail || state.currentPage === 2"
      ref="pageTwo"
      :transform="state.transformPage2"
      :fade-in="page2FadeIn"
      :fade-out="page2FadeOut"
      :initial-pos="initialPos"
      @viewContent="viewContent"
    />
    <PageThree
      v-if="!isViewDetail"
      :transform="state.transformPage3"
      :fade-in="page3FadeIn"
      :fade-out="page3FadeOut"
      :initial-pos="initialPos"
    />
    <PageFour
      v-if="!isViewDetail || state.currentPage === 4"
      ref="pageFour"
      :transform="state.transformPage4"
      :fade-in="page4FadeIn"
      :fade-out="page4FadeOut"
      :initial-pos="initialPos"
      @viewContent="viewContent"
    />
    <BackButton
      v-if="isViewDetail || $route.name === 'detail'"
      @backToMainPage="backToMainPage"
    />
    <router-view />
  </div>
</template>

<script>
import Header from "./Header.vue";
import Nav from "./Nav.vue";
import PageOne from "./PageOne.vue";
import PageTwo from "./PageTwo.vue";
import PageThree from "./PageThree.vue";
import PageFour from "./PageFour.vue";
import BackButton from "./BackButton.vue";

export default {
  name: "Main",
  components: {
    Header,
    Nav,
    PageOne,
    PageTwo,
    PageThree,
    PageFour,
    BackButton
  },
  data() {
    return {
      isReload: false,
      isViewDetail: false,
      initialPos: 0,
      state: {
        nextPage: 1,
        oldPage: 1,
        currentPage: 1,
        transformPage1: 0,
        transformPage2: 0,
        transformPage3: 0,
        transformPage4: 0
      }
    };
  },
  computed: {
    page1FadeIn() {
      if (this.state.nextPage === 1) return true;
      else return false;
    },
    page1FadeOut() {
      if (this.state.oldPage === 1) return true;
      else return false;
    },
    page2FadeIn() {
      if (this.state.nextPage === 2) return true;
      else return false;
    },
    page2FadeOut() {
      if (this.state.oldPage === 2) return true;
      else return false;
    },
    page3FadeIn() {
      if (this.state.nextPage === 3) return true;
      else return false;
    },
    page3FadeOut() {
      if (this.state.oldPage === 3) return true;
      else return false;
    },
    page4FadeIn() {
      if (this.state.nextPage === 4) return true;
      else return false;
    },
    page4FadeOut() {
      if (this.state.oldPage === 4) return true;
      else return false;
    }
  },
  watch: {
    $route(to, from) {
      if (from.name !== 'detail') {
        if (to.params.id === "about") {
          this.changeSlide(2, this.state.currentPage);
        } else if (to.params.id === "projects") {
          this.changeSlide(3, this.state.currentPage);
        } else if (to.params.id === "friends") {
          this.changeSlide(4, this.state.currentPage);
        } else {
          this.changeSlide(1, this.state.currentPage);
        }
      }
    }
  },
  created() {
    this.isReload = true;

    if (this.$route.params.id === "about") {
      this.state.nextPage = 2;
      this.initialPos = 2;
    } else if (this.$route.params.id === "projects") {
      this.state.nextPage = 3;
      this.initialPos = 3;
    } else if (this.$route.params.id === "friends") {
      this.state.nextPage = 4;
      this.initialPos = 4;
    } else {
      this.state.nextPage = 1;
      this.initialPos = 1;
    }

    if (this.$route.name === 'detail') {
      this.isViewDetail = true;
    }

    this.state.currentPage = this.initialPos;
  },
  methods: {
    changeSlide(nextPage, oldPage) {
      this.state.currentPage = nextPage;
      if (nextPage > oldPage) {
        const rangePage = nextPage - oldPage;
        switch (rangePage) {
          case 1:
            this.state.transformPage1 -= 100;
            this.state.transformPage2 -= 100;
            this.state.transformPage3 -= 100;
            this.state.transformPage4 -= 100;
            break;
          case 2:
            this.state.transformPage1 -= 200;
            this.state.transformPage2 -= 200;
            this.state.transformPage3 -= 200;
            this.state.transformPage4 -= 200;
            break;
          case 3:
            this.state.transformPage1 -= 300;
            this.state.transformPage2 -= 300;
            this.state.transformPage3 -= 300;
            this.state.transformPage4 -= 300;
            break;
        }
      } else if (nextPage < oldPage) {
        const rangePage = oldPage - nextPage;
        switch (rangePage) {
          case 1:
            this.state.transformPage1 += 100;
            this.state.transformPage2 += 100;
            this.state.transformPage3 += 100;
            this.state.transformPage4 += 100;
            break;
          case 2:
            this.state.transformPage1 += 200;
            this.state.transformPage2 += 200;
            this.state.transformPage3 += 200;
            this.state.transformPage4 += 200;
            break;
          case 3:
            this.state.transformPage1 += 300;
            this.state.transformPage2 += 300;
            this.state.transformPage3 += 300;
            this.state.transformPage4 += 300;
            break;
        }
      }

      this.state.nextPage = nextPage;
      this.state.oldPage = oldPage;
    },
    changeNav(nextPage) {
      if (nextPage === 1) {
        this.$router.push({ name: "main", params: { id: "" } });
      }
      if (nextPage === 2) {
        this.$router.push({ name: "main", params: { id: "about" } });
      }
      if (nextPage === 3) {
        this.$router.push({ name: "main", params: { id: "projects" } });
      } else if (nextPage === 4) {
        this.$router.push({ name: "main", params: { id: "friends" } });
      }
    },
    viewContent() {
      let currentPage = this.state.currentPage;
      if (currentPage === 2) {
        this.$refs.pageTwo.viewDetail();
        this.$refs.pageTwo.removeAnimation();
      } else if (currentPage === 4) {
        this.$refs.pageFour.removeAnimation();
      }

      this.$refs.nav.hideNav();
      setTimeout(() => {
        this.isViewDetail = true;
        this.$router.push({ path: this.$route.path + '/detail' });
      }, 600);
    },
    backToMainPage() {
      setTimeout(async () => {
        this.isViewDetail = false;
        this.initialPos = this.state.currentPage;
        this.state.transformPage1 = 0;
        this.state.transformPage2 = 0;
        this.state.transformPage3 = 0;
        this.state.transformPage4 = 0;
        if (this.state.currentPage === 2) {
          await this.$router.push({ name: "main", params: { id: "about" } });
          this.$refs.pageTwo.setIsTransforming(true);
        } else if (this.state.currentPage === 4) {
          this.$router.push({ name: "main", params: { id: "friends" } });
        }
      }, 600);
      if (this.state.currentPage === 2) {
        this.$refs.pageTwo.backToMainPage();
      } else if (this.state.currentPage === 4) {
        this.$refs.pageFour.backToMainPage();
      }
      
    }
  }
};
</script>

<style lang="scss">
</style>
