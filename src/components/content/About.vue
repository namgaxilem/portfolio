<template>
  <div>
    <b-row class="section">
      <b-col
        lg="5"
        md="12"
        class="title"
      >
        <span class="number">
          01
        </span>
        WHO AM I
      </b-col>
      <b-col
        lg="7"
        md="12"
      >
        <b-container>
          <p>
            1992年、沖縄県生まれ。大学を卒業後、県内の制作会社でDTPオペレーターとして就職後、
            大手紳士服量販店を中心に十数社のコーポレートサイトの運用業務を担当しました。
            2017年より、個人でもWebデザイナーとしての活動を開始し、写真撮影・デザイン・
            コーディングまでワンストップで対応しています。
          </p>
          <img
            src="@/assets/image/image-1.png"
            alt="image"
            style="width: 100%; max-width: 500px"
          >
        </b-container>
      </b-col>
    </b-row>
    <b-row class="section">
      <b-col
        lg="5"
        md="12"
        class="title"
      >
        <span class="number">
          01
        </span>
        WHO AM I
      </b-col>
      <b-col
        lg="7"
        md="12"
      >
        <b-container>
          1992年、沖縄県生まれ。大学を卒業後、県内の制作会社でDTPオペレーターとして就職後、
          大手紳士服量販店を中心に十数社のコーポレートサイトの運用業務を担当しました。
          2017年より、個人でもWebデザイナーとしての活動を開始し、写真撮影・デザイン・
          コーディングまでワンストップで対応しています。
        </b-container>
      </b-col>
    </b-row>
    <b-row class="section">
      <b-col
        lg="5"
        md="12"
        class="title"
      >
        <span class="number">
          01
        </span>
        WHO AM I
      </b-col>
      <b-col
        lg="7"
        md="12"
      >
        <b-container>
          1992年、沖縄県生まれ。大学を卒業後、県内の制作会社でDTPオペレーターとして就職後、
          大手紳士服量販店を中心に十数社のコーポレートサイトの運用業務を担当しました。
          2017年より、個人でもWebデザイナーとしての活動を開始し、写真撮影・デザイン・
          コーディングまでワンストップで対応しています。
        </b-container>
      </b-col>
    </b-row>
    <b-row class="section">
      <b-col
        lg="5"
        md="12"
        class="title"
      >
        <span class="number">
          01
        </span>
        WHO AM I
      </b-col>
      <b-col
        lg="7"
        md="12"
      >
        <b-container>
          1992年、沖縄県生まれ。大学を卒業後、県内の制作会社でDTPオペレーターとして就職後、
          大手紳士服量販店を中心に十数社のコーポレートサイトの運用業務を担当しました。
          2017年より、個人でもWebデザイナーとしての活動を開始し、写真撮影・デザイン・
          コーディングまでワンストップで対応しています。
        </b-container>
      </b-col>
    </b-row>
    <b-row class="section">
      <b-col
        lg="5"
        md="12"
        class="title"
      >
        <span class="number">
          01
        </span>
        WHO AM I
      </b-col>
      <b-col
        lg="7"
        md="12"
      >
        <b-container>
          1992年、沖縄県生まれ。大学を卒業後、県内の制作会社でDTPオペレーターとして就職後、
          大手紳士服量販店を中心に十数社のコーポレートサイトの運用業務を担当しました。
          2017年より、個人でもWebデザイナーとしての活動を開始し、写真撮影・デザイン・
          コーディングまでワンストップで対応しています。
        </b-container>
      </b-col>
    </b-row>
  </div>
</template>

<script>
/* eslint-disable */
export default {
  name: "About",
  data() {
    return {
      state: {}
    };
  },
  method: {},
  mounted() {}
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

@media only screen and (max-width: 400px) {
  .section {
    padding-top: 3em;
  }

  .title {
    font-size: 1.5em; 
  }
}
</style>
