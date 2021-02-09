<template>
  <div class="hello">
    {{ msg }}
    <div></div>
    {{ $store.state.count }}
    <button @click="up">+</button>
    <button @click="down">-</button>
  </div>
</template>

<script>
export default {
  name: "HelloWorld",
  data() {
    return {
      msg: "Welcome to Your Vue.js App",
    };
  },
  methods: {
    up() {
      this.$store.commit("increment");
    },
    down() {
      this.$store.commit("decrement");
    },
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped></style>
