<template>
  <div id="wrap">
    <Header></Header>
    <Contents></Contents>
    <Footer></Footer>
  </div>
</template>

<script>
import Contents from "./components/Contents.vue"
import Header from "./components/Header.vue"
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
/* reset */
html,body { height:100%; }
* { margin:0; padding:0; }
ul { list-style:none;}

</style>








