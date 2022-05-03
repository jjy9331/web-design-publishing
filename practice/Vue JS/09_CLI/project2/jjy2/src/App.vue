<template>
  <div id="home">
    <Room></Room>
  </div>
</template>

<script>
import Room from "./components/Room.vue"

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
  },

}
</script>

<style>

</style>
