<template>
  <h1>define-props</h1>
  <DefineProps1Vue :time="currTime" :age="age" ref="prop1"/>
  <p ref="fTime">father time: {{currTimeStr}}</p>
  <p>fater age: {{age}}</p>
  <button @click="change1Time">change 1 time from father</button>
  <button @click="change1Age">change 1 age from father</button>
</template>
<script lang="ts" setup>
import DefineProps1Vue from "./DefineProps1.vue";
import { ref, computed, nextTick, onMounted } from "vue";
import dayjs from "dayjs";
const currTime = ref(Date.now());
const change1Time = () => {
  currTime.value = Date.now();
};
const age = ref(Math.ceil(Math.random() * 100))
const change1Age = () => {
  age.value = Math.ceil(Math.random() * 100)
}
const currTimeStr = computed(() => {
  return dayjs(currTime.value).format("YYYY:MM:DD hh-mm:ss");
});
const prop1 = ref(null);
const fTime = ref(null);

</script>
