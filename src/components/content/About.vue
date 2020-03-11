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
              font-weight: bold;"> 
            Nguyễn Đức
          </p>
          <p
            style="
              letter-spacing: 0.3em;
              font-weight: bold;">  
            Nam
          </p>
          <p
            style="width: 100%; max-width: 500px">
            Sinh ra và lớn lên ở Sài Gòn, sau khi ăn bám gia đình 22 năm, tôi đã tìm được công việc ở công ty TMA Solution với vị trí kỹ 
            sư lập trình web. 
            <br>
            Ngay từ khi tìm hiểu về lập trình, tôi đã định hướng ngay web là hướng phát triển của mình.
            <br>
            Website này lấy ý tưởng thiết kế từ 
            <a 
              href="https://kuon.space/" 
              target="_blank">Kuon Yagi
            </a>, một nhà thiết kế và lập trình
            website đến từ Nhật Bản.
            <br>  
          </p>
          <img
            src="@/assets/image/image-1.png"
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
          Education and Certifications
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
              <section class="wow slideInRight" data-wow-duration="2s" data-wow-delay="0s">
                <div style="background: red; width: 200px; height: 200px; border-radius: 50%"> </div>
              </section>
            </b-col>
            <b-col
              lg="4"
              md="12"
            > 
              <section class="wow slideInRight" data-wow-duration="2s" data-wow-delay="0s">
                <div style="background: red; width: 200px; height: 200px; border-radius: 50%"> </div>
              </section>
            </b-col>
            <b-col
              lg="4"
              md="12"
            > 
              <section class="wow slideInRight" data-wow-duration="2s" data-wow-delay="0s">
                <div style="background: red; width: 200px; height: 200px; border-radius: 50%"> </div>
              </section>
            </b-col>
          </b-row>
        </b-container>
      </b-col>
    </b-row>
  </div>
</template>

<script>
import WOW from 'wow.js'

/* eslint-disable */
export default {
  name: "About",
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
  letter-spacing: 0.2em;

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

@media only screen and (max-width: 500px) {
  .section {
    padding-top: 3em;
  }

  .title {
    font-size: 1.5em;
    margin-bottom: 1em;
  }
}
</style>
