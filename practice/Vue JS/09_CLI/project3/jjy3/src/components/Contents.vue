<template>
  <div id="contents">
    
    <h2>메뉴 카테고리</h2>
    
    <ul>
        <li class="main" v-on:click="menuOpen">
            메인메뉴
            <ul class="sub">
                <li>서브메뉴</li>
                <li>서브메뉴</li>
                <li>서브메뉴</li>
            </ul>
        </li>
    </ul>
    
    
  </div>
</template>

<script>
export default {
    methods:{
        menuOpen:function(){
            document.getElementsByClassName("sub")[0].style.display="block";
        },
    }
}
</script>

<style>
.sub { display:none; }
</style>












