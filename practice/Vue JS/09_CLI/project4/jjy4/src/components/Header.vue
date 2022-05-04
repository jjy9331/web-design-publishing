<template>
  <div id="header">
    <h1>로고</h1>
    <button v-on:click="AA">홈</button>
    <button v-on:click="AA">제품</button>
    <button v-on:click="AA" >연락처</button>
  </div>
</template>

<script>

let num;

export default {
  mounted:function(){
    //created : 시작했을 때(뷰 인스턴스 생성되었을 때)
    //mounted : 시작했을 때(뷰 인스턴스 생성되어 마운트되었을 때)
    //Vue js 생명 주기 검색하면 시작 시점 여러가지가 있다.

    num = document.getElementsByClassName("con").length;
    alert(num);

    for( let i=0; i<num; i++){
      document.getElementsByClassName("con")[i].style.display="none";
    }
    document.getElementsByClassName("con")[0].style.display="block";
  },

  methods: {
    AA:function(){
      for( let i=0; i<num; i++){
        document.getElementsByClassName("con")[i].style.display="none";
      }
      document.getElementsByClassName("con")[2].style.display="block";
    },
  },
}
</script>

<style>
#header { border:20px solid hotpink; margin-bottom:30px;}
</style>
