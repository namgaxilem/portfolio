<template>
  <div>
    <b-row class="section">
      <b-col
        lg="5"
        md="12"
      >
        <div class="title">
          <span class="number">
            01
          </span>
          WHO AM I
        </div>
      </b-col>
      <b-col
        lg="7"
        md="12"
      >
        <b-container>
          <p
            class="m-0"
            style="
              letter-spacing: 0.3em;
              font-weight: bold;"
          > 
            Nguyễn Đức
          </p>
          <p
            style="
              letter-spacing: 0.3em;
              font-weight: bold;"
          >  
            Nam
          </p>
          <p
            class="description"
            style="width: 100%; max-width: 500px">
            Born and raised in Saigon, after gradute from University, 
            I got a job at TMA Solution as a web programming engineer. 
            <br>
            <br>
            This portfolio is mainly ideally from
            <a 
              href="https://kuon.space/" 
              target="_blank"
            >
              Kuon Yagi
            </a>, a web designers, providing one-stop support for photography, design, and coding.
            <br>  
          </p>
          <img
            src="@/assets/image/image-about-1.png"
            alt="image"
            style="
              width: 100%; 
              max-width: 500px; 
              box-shadow: 0px 50px 90px -20px rgba(7, 33, 66, 0.5);
              margin-bottom: 2em;
            "
          >
        </b-container>
      </b-col>
    </b-row>
    <b-row class="section">
      <b-col
        cols="12"
      >
        <div class="title">
          <span class="number">
            02
          </span>
          EDUCATION / CERTIFICATIONS
        </div>
      </b-col>
      <b-col
        cols="12"
      >
        <b-container>
          <b-row class="section">
            <b-col
              lg="4"
              md="12"
            > 
              <section>
                <div 
                  class="logo-img wow rollIn" 
                  data-wow-duration="1s"
                  data-wow-delay="0.5s"
                > 
                  <img 
                    src="@/assets/image/logo-ufm.png"
                    alt="image" 
                  >
                </div>
                <p 
                  class="description text-center mt-5 wow rollIn"
                  data-wow-duration="1s"
                  data-wow-delay="1.2s"
                >
                  Graduated from the University of Finance - Marketing majoring in Management Information Systems,
                  GPA 2.8.
                </p>
              </section>
            </b-col>
            <b-col
              lg="4"
              md="12"
            > 
              <section>
                <div 
                  class="logo-img wow bounceInDown" 
                  data-wow-duration="1s"
                  data-wow-delay="0.5s"
                > 
                  <img
                    src="@/assets/image/logo-isc.png"
                    alt="image" 
                  >
                </div>
                <p 
                  class="description text-center mt-5 wow bounceInUp"
                  data-wow-duration="1s"
                  data-wow-delay="1.2s"
                >
                  Attend ISC Quang Trung for an internship. 
                  Building a School Management Project using Java Spring Boot and AngularJS.
                </p>
              </section>
            </b-col>
            <b-col
              lg="4"
              md="12"
            > 
              <section>
                <div 
                  class="logo-img wow lightSpeedIn" 
                  data-wow-duration="1s"
                  data-wow-delay="0.5s" 
                > 
                  <img 
                    src="@/assets/image/logo-toeic.png"
                    alt="image" 
                  >
                </div>
                <p 
                  class="description text-center mt-5 wow bounceInRight"
                  data-wow-duration="1s"
                  data-wow-delay="1s"
                >
                  580 TOEIC score, certified by IIG Viet Nam from September 2019.
                </p>
              </section>
            </b-col>
          </b-row>
        </b-container>
      </b-col>
    </b-row>
    <b-row class="section">
      <b-col
        cols="12"
      >
        <div class="title">
          <span class="number">
            03
          </span>
          SKILLS
        </div>
      </b-col>
      <b-col
        cols="12"
      >
        <b-container class="mt-5 mb-5">
          <div class="skill-item-container"> 
            <div class="skill-img">
              <img 
                src="@/assets/image/logo-html_css.png"
                alt="image"
              > 
            </div>
            <div class="skill-content">
              <div class="skill-title">
                <span class="skill-title-name">HTML / CSS</span>
                <span class="skill-title-level">90%</span>
              </div>
              <div class="skill-bar">
                <div class="process wow width-90" />
              </div>  
            </div>
          </div>

          <div class="skill-item-container"> 
            <div class="skill-img">
              <img 
                src="@/assets/image/logo-bootstrap.png"
                alt="image"
              > 
            </div>
            <div class="skill-content">
              <div class="skill-title">
                <span class="skill-title-name">Bootstrap</span>
                <span class="skill-title-level">90%</span>
              </div>
              <div class="skill-bar">
                <div class="process wow width-90" />
              </div>  
            </div>
          </div>

          <div class="skill-item-container"> 
            <div class="skill-img">
              <img 
                src="@/assets/image/logo-js.png"
                alt="image"
              > 
            </div>
            <div class="skill-content">
              <div class="skill-title">
                <span class="skill-title-name">Javascript</span>
                <span class="skill-title-level">70%</span>
              </div>
              <div class="skill-bar">
                <div class="process wow width-70" />
              </div>  
            </div>
          </div>

          <div class="skill-item-container"> 
            <div class="skill-img">
              <img 
                src="@/assets/image/logo-vue.png"
                alt="image"
              > 
            </div>
            <div class="skill-content">
              <div class="skill-title">
                <span class="skill-title-name">Vue</span>
                <span class="skill-title-level">80%</span>
              </div>
              <div class="skill-bar">
                <div class="process wow width-80" />
              </div>  
            </div>
          </div>

          <div class="skill-item-container"> 
            <div class="skill-img">
              <img 
                src="@/assets/image/logo-react.png"
                alt="image"
              > 
            </div>
            <div class="skill-content">
              <div class="skill-title">
                <span class="skill-title-name">React</span>
                <span class="skill-title-level">60%</span>
              </div>
              <div class="skill-bar">
                <div class="process wow width-60" />
              </div>  
            </div>
          </div>

          <div class="skill-item-container"> 
            <div class="skill-img">
              <img 
                src="@/assets/image/logo-angularjs.png"
                alt="image"
              > 
            </div>
            <div class="skill-content">
              <div class="skill-title">
                <span class="skill-title-name">AngularJS</span>
                <span class="skill-title-level">50%</span>
              </div>
              <div class="skill-bar">
                <div class="process wow width-50" />
              </div>  
            </div>
          </div>
        </b-container>
      </b-col>
    </b-row>
    <Footer />
  </div>
</template>

<script>
import WOW from 'wow.js'
import Footer from "../Footer.vue";

/* eslint-disable */
export default {
  name: "About",
  components: {
    Footer
  },
  data() {
    return {
      state: {}
    };
  },
  created() {
    new WOW().init();
  }
};
</script>

<style lang="scss" scoped>
.section {
  padding-top: 6em;
}

.title {
  font-size: 2.5em;
  padding-left: 3em;
  display: flex;
  align-content: center;
  align-items: center;
  position: relative;
  color: #072142;
  letter-spacing: 1.2px;

  &::after {
    content: "";
    display: inline-block;
    width: 2em;
    height: 2px;
    background: black;
    position: absolute;
    left: 0;
    top: 50%;
    transform: translateY(-50%);
  }

  &>.number {
    color: red;
    padding-right: 1em;
  }
}

.logo-img {
  width: 200px;
  height: 200px;
  border-radius: 50%;
  margin: auto;
  box-shadow: 2px 20px 30px 0px grey;
  overflow: hidden;

  &>img {
    width: 100%;
    height: 100%;
    object-fit: contain;
  }
}

.skill-item-container {
  height: 5em;
  display: flex;
  margin: 2.5em 0;
}

.skill-img {
  flex-grow: 1;
  max-width: 100px;
  height: 100%;
  display: inline-block;
  padding: 1em;

  img {
    width: 100%;
    height: 100%;
  }
}

.skill-content {
  flex-grow: 1;
  height: 100%;
  padding: 0 1.2em;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  place-content: center;

  .skill-title {
    width: 100%;
    height: 50%;
    font-weight: bold;
    display: flex;
    height: 35%;
    margin-bottom: 0.5em;

    .skill-title-name {
      font-size: 1.5em;
      color: #072142;
      letter-spacing: 0.2em;
      line-height: 1.2;
    }

    .skill-title-level {
      font-size: 1.5em;
      color: #072142;
      letter-spacing: 0.2em;
      line-height: 1.2;
      margin-left: auto;
      position: relative;
    }
  }

  .skill-bar {
    width: 100%;
    height: 20%;
    border-radius: 10px;
    box-shadow: 5px 5px 10px 0px grey;

    .process {
      height: 100%;
      border-radius: 10px;
      background-image: linear-gradient(101deg, #072142, #8c2b7a 52%, #ff4d5a);
    }
  }
}


@media only screen and (max-width: 500px) {
  .section {
    padding-top: 3em;
  }

  .title {
    font-size: 1.5em;
    margin-bottom: 1em;
  }

  .skill-img {
    max-width: 80px;
  }

  .skill-content {
    .skill-title {
      margin-bottom: 0.2em;

      .skill-title-name, .skill-title-level {
        font-size: 1em;
      }
    }
  }
}

.width-50 {
  animation-name: width50;
  animation-fill-mode: both;
}

.width-60 {
  animation-name: width60;
  animation-fill-mode: both;
}

.width-70 {
  animation-name: width70;
  animation-fill-mode: both;
}

.width-80 {
  animation-name: width80;
  animation-fill-mode: both;
}

.width-90 {
  animation-name: width90;
  animation-fill-mode: both;
}

@keyframes width50 {
  0% {
    width: 0%;
  }
  100% {
    width: 50%;
  }
}

@keyframes width60 {
  0% {
    width: 0%;
  }
  to {
    width: 60%;
  }
}

@keyframes width70 {
  0% {
    width: 0%;
  }
  to {
    width: 70%;
  }
}

@keyframes width80 {
  0% {
    width: 0%;
  }
  to {
    width: 80%;
  }
}

@keyframes width90 {
  0% {
    width: 0%;
  }
   to {
     width: 90%;
   }
}

.description {
  color:#828c96;
  word-spacing: 1.5px;
  letter-spacing: 0.5px;
}

section {
  overflow: hidden;
}
</style>
