<template>
  <footer class="footer mt-5">
    <p>
      ducnam11081997@gmail.com
    </p>
  </footer>
</template>

<script>
export default {
  name: "Footer"
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss" scoped>
.footer {
  width: 100%;
  height: 20em;
  max-height: 350px;
  background-image: linear-gradient(101deg, #072142, #8c2b7a 52%, #ff4d5a);
  font-size: 2em;
  color: white;
  display: flex;
  align-items: center;
  justify-content: center;
  letter-spacing: 0.2em;
  transition: .3s;
}

@media only screen and (max-width: 500px) { 
  .footer {
    font-size: 1em;
  }
}
</style>
