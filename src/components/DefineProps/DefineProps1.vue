<template>
  <div style="border: 1px solid red;" class="color-text">
    <h1>Define-props-1</h1>
    <h2>name:{{ name }}</h2>
    <h2>age: {{ _age }}</h2>
    <h2>address: {{ address }}</h2>
    <h2>time: {{ timeStr }}</h2>
    <h2>color: {{color}}</h2>
    <button @click="updateTime">update time in son</button>
    <button @click="updateAge">update age in son</button>
  </div>
</template>
<script lang="ts" setup>
/**
 * 定义各种props类型
 * https://cn.vuejs.org/guide/typescript/composition-api.html#typing-component-props
 * 官方也推荐用 <script setup> 这种方式来写
 */
import { computed, onUpdated, ref, watch } from "vue";
import dayjs from "dayjs";
// 传给defineProps 的参数是原来标准的props写法，defineProps会根据这个props对象做自动的类型推导
const props = defineProps({
  name: {
    /**
     * name属性的类型，必须是 String才对。string则会报错。
     * 因为在这里，type是name这个对象的一个键，它需要一个对应的值。而string是用来说明类型的，不能当作值在这里使用。
     */
    type: String,
    default: "define-props",
  },
  age: {
    type: Number,
    default: 18,
  },
  address: {
    type: String,
    default: "Earth",
  },
  time: Number,
  color: Number
});

/**
 * 从props里的属性获取初值，声明成本地响应式变量.
 * 简单的这样处理之后，虽然后续子组件里可以继续修改_time的值，并且显示上一定会跟着一起更新的。但如果父组件通过props重新传递新值进来，子组件里其实是完全脱钩的，_time值并不会重新赋值了。
 */
const _time = ref(props.time);
const _age = ref(props.age);
/**
 * 可以通过watch监听住props里的属性，在发生变化时去更新本地的值
 */
watch(
  () => props.time,
  (newT, oldT) => {
    // console.log("time changed", newT, oldT);
    _time.value = props.time;
  }
);

watch(
  () => props.age,
  (newA, oldA) => {
    // console.log("age changed", newA, oldA);
    _age.value = props.age;
  }
);

const updateTime = () => {
  _time.value = Date.now();
};

const updateAge = () => {
  _age.value += 100;
}

const timeStr = computed(() => {
  return dayjs(_time.value).format("YYYY-MM-DD hh:mm:ss");
});

defineExpose({
  _time,
  ageFromSon: _age,
  updateBoth: () => {
    updateTime();
    updateAge();
  }
})
</script>
<style scoped>
  .color-text {
    color: v-bind(color);
  }
</style>