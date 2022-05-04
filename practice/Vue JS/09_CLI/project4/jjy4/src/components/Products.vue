<template>
  <div id="products">
    <h2>제품</h2>
    <ul>
      <li class="main" v-on:click="menuOpen">
        <strong>제품이름1</strong>
        <ul class="sub">
          <li><img src="./images/img1.jpg" alt=""></li>
          <li>제품1설명입니다</li>
          <li>20,000원</li>
        </ul>
      </li>

      <li class="main" v-on:click="menuOpen">
        <strong>제품이름2</strong>
        <ul class="sub">
          <li><img src="./images/img1.jpg" alt=""></li>
          <li>제품2설명입니다</li>
          <li>20,000원</li>
        </ul>
      </li>
    </ul>
  </div>
</template>

<script>
let toggle = 0;
export default {
  methods:{
    menuOpen:function(){
      if(toggle == 0){
        document.getElementsByClassName("sub")[0].style.display="block"
        toggle = 1;
        }
      else{
        document.getElementsByClassName("sub")[0].style.display="none"
        toggle = 0;
      }
      
    },
  },
}
</script>

<style>
#products { border:20px solid blue; margin-bottom: 30px;}

#products h2 { margin-bottom: 30px;}

#products .main { border: 5px dashed skyblue; margin: 20px;}

#products .sub {display: none;}
</style>
