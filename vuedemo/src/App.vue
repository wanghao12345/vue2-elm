<template>
    <div class="box"> 
        <transition name="router-fade">
            <router-view></router-view>
        </transition>
    </div>
</template>

<script>
export default {
    name: 'app'
  }
</script>

<style lang="scss">
  .router-fade-enter-active, .router-fade-leave-active {
      transition: opacity .3s;
  }
  .router-fade-enter, .router-fade-leave-active {
      opacity: 0;
  }
  .box{
    width:100%;
    height:100%;
  }
</style>
