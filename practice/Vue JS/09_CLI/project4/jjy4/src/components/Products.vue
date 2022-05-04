<template>
  <div id="products">
    <h2>제품</h2>
    <ul>
      <li class="main" v-on:click="menuOpen(0);">
        <strong>제품이름1</strong>
        <ul class="sub">
          <li><img src="./images/img1.jpg" alt=""></li>
          <li>제품1설명입니다</li>
          <li>20,000원</li>
        </ul>
      </li>

      <li class="main" v-on:click="menuOpen(1);">
        <strong>제품이름2</strong>
        <ul class="sub">
          <li><img src="./images/img1.jpg" alt=""></li>
          <li>제품2설명입니다</li>
          <li>20,000원</li>
        </ul>
      </li>
      <li class="main" v-on:click="menuOpen(2);">
        <strong>제품이름3</strong>
        <ul class="sub">
          <li><img src="./images/img1.jpg" alt=""></li>
          <li>제품3설명입니다</li>
          <li>20,000원</li>
        </ul>
      </li>
      <li class="main" v-on:click="menuOpen(3);">
        <strong>제품이름4</strong>
        <ul class="sub">
          <li><img src="./images/img1.jpg" alt=""></li>
          <li>제품4설명입니다</li>
          <li>20,000원</li>
        </ul>
      </li>
      <li class="main" v-on:click="menuOpen(4);">
        <strong>제품이름5</strong>
        <ul class="sub">
          <li><img src="./images/img1.jpg" alt=""></li>
          <li>제품5설명입니다</li>
          <li>20,000원</li>
        </ul>
      </li>
    </ul>
  </div>
</template>

<script>
let toggle = [];

// toggle.push(0);
// toggle.push(0);
// toggle.push(0);
// array add
// let toggle = [0,0,0];
// toggle[0]=0;
// toggle[1]=0;
// toggle[2]=0;

export default {
  mounted:function(){
    let p_num = document.getElementsByClassName("sub").length;
    for( let i=1; i<=p_num; i++){
     toggle.push(0);
    }
  },
 

  methods:{
    menuOpen:function(i){
      if(toggle[i] == 0){
        document.getElementsByClassName("sub")[i].style.display="block"
        toggle[i] = 1;
        }
      else{
        document.getElementsByClassName("sub")[i].style.display="none"
        toggle[i] = 0;
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
