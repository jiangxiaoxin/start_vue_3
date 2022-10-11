<template>
  <MD>
    shallowRef之后，对象的第一层属性并不是响应式变化的，但这不影响更深层次的属性的响应式。
    <br />
    shallowRef之后，打印对象的value，输出的是个普通的object，它的第一层属性就直直的挂在这个object身上，所以它不会响应式。其他深层次的属性会转成proxy，从而响应式。
    <br />
    只有对shallowRef的value的访问才是响应式的。整体替换，重新设置value。
    shallowRef也不是不能触发浅层属性，它需要手动触发，triggerRef
  </MD>
  <h1>ref</h1>
  <p>time:{{ data.time }}</p>
  <p>age: {{ data.count }}</p>
  <button @click="changeTime">change time</button>
  <button @click="changeCount">change count</button>
  <p>name: {{ data.person.name }}</p>
  <p>age: {{ data.person.age }}</p>
  <button @click="changeAge">change age</button>
  <br />
  <button @click="showData">show data</button>
  <h1>shallowRef</h1>
  <p>count: {{shallowData.count}}</p>
  <p>age: {{shallowData.person.value.age}}</p>
  <button @click="changeShallowCount">change count</button>
  <button @click="changeShallowAge">change age</button>
  <button @click="resetShallow">reset shallow</button>
  <button @click="showShallowData">show shallowData</button>
</template>
<script lang="ts" setup>
import { ref, shallowRef } from "vue";
const template = () => {
  return {
    time: new Date(),
    count: Math.ceil(Math.random() * 100),
    person: ref({
      name: "mike",
      age: Math.ceil(Math.random() * 100),
    }),
  };
};
const data = ref(template());

const shallowData = shallowRef(template())

type ChangeTimeFunc = () => void;

const changeTime: ChangeTimeFunc = () => {
  data.value.time = new Date();
};

const changeCount = () => {
  data.value.count++;
};

const changeAge = () => {
  data.value.person.age++;
};

const showData = () => {
  console.log("data", data);
};

const changeShallowCount = () => {
  // 单独增加count，并不会响应式的更新界面
  shallowData.value.count++;
}

const changeShallowAge = () => {
  // age可以正常的响应式变化
  shallowData.value.person.value.age++;
}

const showShallowData = () => {
  console.log('shallow', shallowData);
}

const resetShallow = () => {
  // 整体替换shallow的数据可以让里面的各项都是响应式的
  shallowData.value = template();
}
</script>

