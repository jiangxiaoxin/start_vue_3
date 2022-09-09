<template>
  <h1>define-props</h1>
  <DefineProps1Vue :time="currTime" :age="age" ref="prop1" :color="color" />
  <p ref="fTime">father time: {{ currTimeStr }}</p>
  <p>fater age: {{ age }}</p>
  <button @click="change1Time">change 1 time from father</button>
  <button @click="change1Age">change 1 age from father</button>
  <button @click="showRef1">show props1 ref</button>
  <button @click="changeColor">change prop1 color</button>
  <br />
  <DefineProps2Vue msg="msg from father" :cbk="cbkFor2" :age="100" />
</template>
<script lang="ts" setup>
import DefineProps1Vue from "./DefineProps1.vue";
import DefineProps2Vue from "./DefineProps2.vue";
import { ref, computed, nextTick, onMounted, type Ref } from "vue";
import dayjs from "dayjs";
import type { AgeType } from "./interface";

function randomColor() {
  let r = Math.floor(Math.random() * 256);
  let g = Math.floor(Math.random() * 256);
  let b = Math.floor(Math.random() * 256);
  let rgb = "rgb(" + r + "," + g + "," + b + ")";
  return rgb;
}

const color = ref(randomColor());
const changeColor = () => {
  color.value = randomColor();
};

const currTime = ref(Date.now());
const change1Time = () => {
  currTime.value = Date.now();
};
const age = ref(Math.ceil(Math.random() * 100));
const change1Age = () => {
  age.value = Math.ceil(Math.random() * 100);
};
const currTimeStr = computed(() => {
  return dayjs(currTime.value).format("YYYY:MM:DD hh-mm:ss");
});
const prop1 = ref<InstanceType<typeof DefineProps1Vue> | null>(null);
const fTime = ref<HTMLParagraphElement|null>(null);

const showRef1 = () => {
  /**
   * 采用<script setup>方式写的组件，默认是对外封闭的，ref会显示个空空的对象。需要在子组件里用 defineExpose 明确写明要暴露啥出去.
   * 暴露的不光是属性，还可以暴露内部的方法。这样父组件可以访问子组件属性，调用子组件方法
   */
  console.log("ref", prop1?.value);
  prop1.value?.updateBoth();
  console.log(prop1.value?.ageFromSon, prop1.value?._time);
};

const cbkFor2 = (value: AgeType) => {
  console.log("callback for props 2 from father", value);
};
</script>
