<template>
  <div id="wrap">
    <Header></Header>
    <Home class="con"></Home>
    <Products class="con"></Products>
    <Contact class="con"></Contact>
    <Footer></Footer>
  </div>
</template>

<script>
import Header from "./components/Header.vue"
import Footer from "./components/Footer.vue"
import Home from "./components/Home.vue"
import Products from "./components/Products.vue"
import Contact from "./components/Contact.vue"
export default {
  components: {
    "Header": Header,
    "Footer": Footer,
    "Home": Home,
    "Products": Products,
    "Contact": Contact,
  },
}
</script>

<style>
/* reset */
html,body {height:100%;}
* {margin:0; padding:0;}
ul { list-style: none;}
</style>
