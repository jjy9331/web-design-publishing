<template>
  <div id="home">
    
    <Room></Room>
    <Kitchen></Kitchen>
    <Living></Living>
    
  </div>
</template>

<script>
import Room from "./components/Room.vue";
import Kitchen from "./components/Kitchen.vue";
import Living from "./components/Living.vue";

export default {
    data(){
        return{a:1, b:2}
    },
    created:function(){},
    methods:{
        AA:function(){},
        BB:function(){},
    },
    components:{
        "Room":Room,
        "Kitchen":Kitchen,
        "Living":Living,
    },
    
}
</script>

<style>
#home { border: 10px dashed yellow; }
</style>






