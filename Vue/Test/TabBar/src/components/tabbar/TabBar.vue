<template>
  <div id="tab-bar">
    <slot></slot>
  </div>
</template>

<script>1
export default {
  name: "TabBar"
};
</script>

<style scoped>
#tab-bar {
  display: flex;
  position: fixed;
  left: 0;
  bottom: 0;
  right: 0;
  background-color: #f6f6f6;
  box-shadow: 0px -2px 10px rgba(0, 0, 0, 0.1);
}
</style>
