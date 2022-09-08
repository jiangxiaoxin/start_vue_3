<template>
  <div class="avatar-group">
    <AvatarVue
      v-for="(item, index) in displayData"
      :key="index"
      :src="item.src"
      :name="item.name"
      :size="size"
      :shape="shape"
      :bg="bg"
      :color="color"
      :class="spaceCls"
    />
  </div>
</template>
<script lang="ts">
import { defineComponent } from "vue";
import AvatarVue from "./Avatar.vue";
import type { AvatarGroupData, AvatarShape } from "./interface";
import type { PropType } from "vue";
export default defineComponent({
  components: {
    AvatarVue,
  },
  setup() {},
  props: {
    data: {
      type: Array as PropType<AvatarGroupData>,
    },
    size: Number,
    shape: {
      type: String as PropType<AvatarShape>,
      default: 'circle', // group的形状circle更好看一些
    },
    // 这里用String就不报错，用string就报错。但ts官网又说常用string来定义类型
    bg: String,
    color: String,
    space: {
      type: String as PropType<"compact" | "loose">,
      default: "compact",
    },
    limit: {
      type: Number,
      default: 0,
    },
  },
  computed: {
    spaceCls() {
      if (this.shape == "rect") {
        // rect类型时不管时紧凑compact还是宽松loose的，都显示成宽松的
        return "avatar-loose";
      } else if (this.space == "compact") {
        return "avatar-compact";
      } else {
        return "avatar-loose";
      }
    },
    displayData() {
      if(this.limit == 0) {
        // 0是不限制
        return this.data;
      }
      if(this.data!.length > this.limit) {
        let showData = this.data!.slice(0, this.limit);
        showData.push({
          name: `+${this.data!.length-this.limit}`
        })
        return showData
      }
      return this.data;
    }
  },
});
</script>
<style lang="less" scoped>
.avatar-group {
  display: inline-flex;

  .avatar {
    border: 2px solid rgba(255, 255, 255, 0.8);
  }
  .avatar-compact + .avatar-compact {
    margin-left: -10px;
  }
}
</style>
