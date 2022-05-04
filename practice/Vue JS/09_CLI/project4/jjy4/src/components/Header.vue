<template>
  <div id="header">
    <h1>로고</h1>
    <button>홈</button>
    <button>제품</button>
    <button>연락처</button>
  </div>
</template>

<script>
export default {
  created:function(){

    let num = document.getElementsByClassName("con").length;
    alert(num);

    for( let i=0; i<3; i++){
      document.getElementsByClassName("con")[i].style.display="none";
    }
    document.getElementsByClassName("con")[0].style.display="display";
  },
}
</script>

<style>
#header { border:20px solid hotpink; margin-bottom:30px;}
</style>
