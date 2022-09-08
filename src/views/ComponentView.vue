<template>
  <div class="component-page">
    <div class="left-c">
      <ul>
        <li v-for="item in pages" :key="item.title">
          <RouterLink :to="'/component' + item.route">{{item.title}}</RouterLink>
        </li>
      </ul>
    </div>
    <div class="right-c">
      <RouterView />
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import { RouterLink, RouterView} from 'vue-router'

export default defineComponent({
  components: {
    RouterLink,
    RouterView
  },
  data() {
    return {
      pages: [
        {
          title: 'avatar',
          route: '/avatar'
        }
      ]
    }
  }
})
</script>
<style lang="less" scoped>
.component-page {
  display: flex;
  justify-content: flex-start;
  align-items: flex-start;
  width: 100%;
  height: 100%;
}

.left-c {
  width: 200px;
  height: 100%;
  border-right: 1px solid #ccc;

}

.right-c {
  flex: 1;
  width: 100%;
  background: #aaa;
}
</style>

