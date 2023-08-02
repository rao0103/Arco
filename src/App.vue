<template>
  <headView v-if="showHeader()" />
  <router-view />
</template>
<script setup lang="ts">
import headView from "@/views/head/headView.vue";
const route = useRoute();
const showHeader = () => {
  if (route.path === "/" || route.path === "/LoginView") {
    return false;
  } else {
    return true;
  }
};
</script>
<style lang="scss">
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}
</style>
