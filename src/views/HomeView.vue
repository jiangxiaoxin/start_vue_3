<template>
  <h1>home</h1>
  <h2>
    {{ count }}
  </h2>
  <h2>
    {{ userStore.time }}
  </h2>
  <button @click="increment">increment</button>
</template>
<script lang="ts" setup>
import useUserStore from "@/store/user";
import { storeToRefs } from "pinia";

const userStore = useUserStore();
const { count } = storeToRefs(userStore);

const increment = () => {
  userStore.increment();
};
</script>
