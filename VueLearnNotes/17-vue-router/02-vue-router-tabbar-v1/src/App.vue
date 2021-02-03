<template>
  <div id="app">
    <router-view></router-view>
    <main-tab-bar></main-tab-bar>
  </div>
</template>

<script>
import MainTabBar from './components/MainTabBar.vue'
  export default {
    name: 'App',
    components: {
      MainTabBar
    }
  }
</script>

<style>
    /* style中引用使用@import */
  @import url('./assets/css/base.css');

</style>
