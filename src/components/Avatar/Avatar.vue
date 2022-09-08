<template>
  <div class="avatar" :title="title" :style="containerStyle">
    <img class="avatar-img" v-if="src" :src="src" :alt="title" />
    <span class="avatar-name" v-else :style="nameStyle">{{ name }}</span>
  </div>
</template>
<script lang="ts">
import { defineComponent } from "vue";
// PropType 要单独引进来才不会报错
import type { PropType } from "vue";
import type { AvatarShape } from "./interface";

export default defineComponent({
  props: {
    src: {
      type: String,
    },
    size: {
      type: Number,
      default: 34,
    },
    shape: {
      // 两种写法
      // type: String,
      // validator: (_shape: String) => {
      //   return (["rect", "circle"] as String[]).indexOf(_shape) != -1;
      // },
      type: String as PropType<AvatarShape>,
      default: "rect",
    },
    name: {
      type: String,
    },
    bg: {
      type: String,
      default: "#ccc", // 设置默认背景色。如果有图片，图片会覆盖掉背景的显示
    },
    color: {
      type: String,
      default: "white",
    },
  },
  setup() {},
  computed: {
    title() {
      return this.name;
    },
    containerStyle() {
      return {
        width: this.size + "px",
        height: this.size + "px",
        borderRadius: this.shape == "rect" ? "4px" : "100%",
        backgroundColor: this.bg,
      };
    },
    nameStyle() {
      return {
        color: this.color,
      };
    },
  },
});
</script>
<style lang="less" scoped>
.avatar {
  cursor: pointer;
  box-sizing: border-box;
  overflow: hidden;
  display: inline-flex;
  justify-content: center;
  align-items: center;
}

.avatar + .avatar {
  margin-left: 8px;
}

img.avatar-img {
  display: block;
  width: 100%;
  height: 100%;
  max-width: 100%;
  max-height: 100%;
  object-fit: cover;
}

span.avatar-name {
  display: block;
  font-size: 14px;
  white-space: nowrap;
  user-select: none;
  font-family: "Segoe UI", "sans-serif", "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol";
}
</style>
