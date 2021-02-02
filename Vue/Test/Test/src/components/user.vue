<template>
  <div>
    <h2>User</h2>
    <h2>当前用户：{{userId}}</h2>
  </div>
</template>

<script>
export default {
  name:'User',
  computed:{
    userId(){
      return this.$route.params.userId
    }
  }
}
</script>

<style>

</style>
