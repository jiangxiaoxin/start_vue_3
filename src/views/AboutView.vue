<template>
  <div class="about">
    <h1>This is an about page</h1>
    <h2>count:{{userStore.count}}</h2>
    <h2>time:{{userStore.lastTime}}</h2>
  </div>
</template>
<script lang="ts">
import { defineComponent } from 'vue'
import useUserStore from '@/store/user'
export default defineComponent({
  setup() {
    const userStore = useUserStore();
    return {
      userStore
    }
  }
})
</script>


<style lang="less" scoped>
.about {
  background: @bg-blue;
}
</style>
