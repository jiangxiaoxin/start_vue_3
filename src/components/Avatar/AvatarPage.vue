<template>
  <div>
    <AvatarVue name="hi" color="red" />
    <AvatarVue name="hello" :size="80" shape="circle" />
    <AvatarVue :name="name" :size="100" shape="circle" bg="red" />
    <AvatarVue name="js" :size="100" shape="circle" />
    <AvatarVue :src="img" :size="60" />
    <AvatarVue :src="img" :size="60" shape="circle" />
    <br />
    <br />
    <AvatarGroup :data="groupData" :size="48" :limit="3"/>
    <br />
    <br />
    <AvatarGroup :data="groupData" />
    <br />
    <br />
    <AvatarGroup :data="groupData" shape="rect"/>
    <br />
    <br />
    <AvatarGroup :data="groupData" shape="circle" space="loose" ref="groupRef"/>
  </div>
</template>

<script lang="ts">
import { defineComponent, ref } from "vue";
import AvatarVue from "@/components/Avatar/Avatar.vue";
import AvatarGroup from "./AvatarGroup.vue";
import type { AvatarItemData } from "./interface";

export default defineComponent({
  components: {
    AvatarVue,
    AvatarGroup,
  },
  setup() {
    const groupData = ref<AvatarItemData[]>([
      {
        name: "hi",
        src: "https://images.unsplash.com/photo-1661956602116-aa6865609028?ixlib=rb-1.2.1&ixid=MnwxMjA3fDF8MHxlZGl0b3JpYWwtZmVlZHwxNnx8fGVufDB8fHx8&auto=format&fit=crop&w=500&q=60",
      },
      {
        name: "ada",
        src: "https://images.unsplash.com/photo-1661956602116-aa6865609028?ixlib=rb-1.2.1&ixid=MnwxMjA3fDF8MHxlZGl0b3JpYWwtZmVlZHwxNnx8fGVufDB8fHx8&auto=format&fit=crop&w=500&q=60",
      },
      {
        name: "beka",
        src: "https://images.unsplash.com/photo-1662529785350-78ccca5012cf?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHwxNHx8fGVufDB8fHx8&auto=format&fit=crop&w=500&q=60",
      },
      {
        name: 'cici',
        src: "https://images.unsplash.com/photo-1662436267861-784747134719?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHwxNXx8fGVufDB8fHx8&auto=format&fit=crop&w=500&q=60",
      },
      {
        name: 'dogi',
        src: "https://images.unsplash.com/photo-1662529785350-78ccca5012cf?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHwxNHx8fGVufDB8fHx8&auto=format&fit=crop&w=500&q=60",
      },
    ]);

    const groupRef = ref(null)

    return {
      groupData,
      groupRef
    }
  },
  data() {
    return {
      name: "jsdkuiwv",
      img: "https://images.unsplash.com/photo-1662529739712-930d83814dac?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHwxM3x8fGVufDB8fHx8&w=1000&q=80",
    };
  },

  mounted() {
    console.log(this.groupRef);
    
  }
});
</script>
<style lang="less" scoped></style>
