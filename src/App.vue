<template>
  <hello-world />
  <div class="wrapper">
    <RouterLink to="/">Home</RouterLink>
    <RouterLink to="/about">About</RouterLink>
    <RouterLink to="/component">Components</RouterLink>
  </div>

  <RouterView />
</template>

<style scoped lang="less">
.wrapper {
  background: @bg-red;
  a + a {
    margin-left: 8px;
  }
}
</style>
