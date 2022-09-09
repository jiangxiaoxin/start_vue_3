<template>
  <h1>Define-props-2</h1>
  <h2>msg:{{ msg }}</h2>
  <h2>add:{{ address }}</h2>
  <h2>age:{{ age }}</h2>
  <button @click="callCBK">call cbk</button>
</template>

<script setup lang="ts">
import type { AgeType } from "./interface";
/**
 * 通过泛型来定义props，msg就是默认必填的，选填需要明确用?标识出来。
 * 不光可以声明属性，还可以声明方法，从父组件向子组件传递方法
 * type default required
 */
interface Props {
  msg: string;
  address?: string;
  age?: AgeType;
  cbk?: (value: AgeType) => void;
}

//TODO:又必填，又提供default好像会报警告
const props = withDefaults(defineProps<Props>(), {
  address: "default add in son",
});

const callCBK = () => {
  if (props.cbk) {
    props.cbk(props.age);
  } else {
    console.log("props has no cbk.");
  }
};
</script>
