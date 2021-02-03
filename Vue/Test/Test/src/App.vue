<template>
  <div id="app">
    <router-link to="/home">Home</router-link>
    <!-- <router-link to="/about">About</router-link> -->
    <button @click="about()">About</button>
    <router-link :to="'/user/' + userId">User</router-link>
    <button @click="profile()">Profile</button>

    <keep-alive exclude="Profile,User">
      <router-view></router-view>
    </keep-alive>
  </div>
</template>

<script>
export default {
  name: "App",
  data(){
    return {userId:'lisi'}
  },
  methods:{
    about(){
      this.$router.push('/about')
    },
    profile(){
      this.$router.push({
        path:"/profile",
        query:{
        name:"wu",
        age:20
      }
      })
    }
  }
};
</script>

<style></style>
