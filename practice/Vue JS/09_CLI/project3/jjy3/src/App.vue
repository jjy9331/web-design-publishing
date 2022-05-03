<template>
  <div id="wrap">
    <Header></Header>
    <Contents></Contents>
    <Footer></Footer>
  </div>
</template>

<script>
import Header from "./components/Header.vue"
import Contents from "./components/Contents.vue"
import Footer from "./components/Footer.vue"
export default {
  components:{
    "Contents":Contents,
    "Header":Header,
    "Footer":Footer,
  }
}
</script>

<style>

</style>
