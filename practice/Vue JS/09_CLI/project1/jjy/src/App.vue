<template>
  <div id="home">
    <h1>홈</h1>
    <p>{{ c }}</p>
    <button v-on:click="AA">버튼</button>
    <button v-on:click="BB">버튼</button>
    <button v-on:click="CC">버튼</button>
  </div>
</template>

<script>
export default {
  data:{ a:1, b:2 },
  created:function(){},//시작했을 때 실행
  methods:{},
    AA:function(){
      alert("안녕하세요");
    },
    BB:function(){
      alert("반갑습니다");
    },
    CC:function(){
      alert(this.b);
    },
}
</script>

<style>
h1 {border:5px dashed orange;}
</style>
