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
    data(){
        return { a:1, b:2, c:"행복하세요" }
    },
    created:function(){//시작했을때 실행
        //alert(777);
    },
    methods:{//클릭 등 이벤트 발생시 실행할 함수
        AA:function(){
            alert("안녕하세요");
        },
        BB:function(){
            alert("반갑습니다");
        },  
        CC:function(){
            alert(this.b);
        },         
    },
}
</script>

<style>
h1 { border:5px dashed orange; }
</style>







