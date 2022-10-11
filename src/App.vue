<template>
  <hello-world />
  <div class="wrapper">
    <RouterLink v-for="item in routes" :key="item.name" :to="item.path">{{item.name}}</RouterLink>
  </div>

  <RouterView />
</template>
<script lang="ts" setup>
  import {routes} from "@/router/index"
</script>

<style scoped lang="less">
.wrapper {
  background: @bg-red;
  a + a {
    margin-left: 8px;
  }
}
</style>
