<template>
  <div id="app">
<!--    <transition     name="fade"
                    enter-class="fade-in-enter"
                    enter-active-class="fade-in-active"
                    leave-class="fade-out-enter"
                    leave-active-class="fade-out-active"
    >
      <keep-alive>

      </keep-alive>
    </transition>-->
    <router-view></router-view>
  </div>
</template>

<script>
  import Tab from './components/Tab.vue'
  export default {
    name: 'app',
    data(){
      return {}
    },
    methods: {

    },
    computed: {

    },
    components:{
      Tab
    }
  }
</script>

<style lang="scss">
@import "assets/font/fontcss.css";
.fade-in-active,.fade-out-active{
  transition: all 0.5s ease
}
.fade-in-enter,.fade-out-active{
  opacity: 0
}


</style>
