<template>
  <div class="bg-[#F7F7F7]">
    <router-view />
  </div>
</template>
<script setup lang="ts">
import { GetRoute } from "@/service";
import dynamicRouting from "@/assets/menu";
import router from "@/router";
GetRoute().then((data) => {
  dynamicRouting(data);
  router.push("/index");
});
</script>
<style lang="scss"></style>
