<template>
  <div>
    <h2>Home</h2>
    <router-link to="/home/news">News</router-link>
    <router-link to="/home/message">Message</router-link>
      <router-view></router-view>
  </div>
</template>

<script>
export default {
  name: "Home",
  data() {
    return {
      path: '/home/news'
    }
  },
  created() {
    console.log('Home组件被创建了')
    this.$router.push(this.path)
  },
  destroyed() {
    console.log('Home组件被销毁了')
  },
  activated(){
    console.log('调用actived')
    this.$router.push(this.path)
  },
  // deactivated(){
  //   console.log('调用actived')
  //   console.log(this.$route.path)
  //   this.path = this.$route.path
  // },
  beforeRouteLeave(to, from, next) {
    console.log(this.$route.path)
    this.path = this.$route.path
    next()
  }
};
</script>

<style></style>
