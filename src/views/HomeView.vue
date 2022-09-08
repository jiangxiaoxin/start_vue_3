<template>
  <h1>
    home
  </h1>
  <h2>
    {{count}}
  </h2>
  <button @click="increment">increment</button>
</template>
<script lang="ts" setup>
import Log from '@/utils/Log';
import {ref} from 'vue'

const count = ref(0)

const increment = () => {
  count.value++;
  Log.log(count.value)
  Log.error(count.value);
  Log.warn(count.value);
}

</script>

