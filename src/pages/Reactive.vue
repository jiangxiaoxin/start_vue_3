<template>
  <md>reactive处理的对象，返回的就是个proxy</md>
  <!-- <div>obj1.count: {{obj1.count}}</div>
  <button @click="changeCount1">change count1</button> -->
  <br />
  <!-- <p>--{{count}}</p> -->
  <br />
  <button @click="show1">show1</button>
  <button @click="show2">show 2</button>
</template>
<script lang="ts" setup>
import { onMounted, reactive, onRenderTriggered, ref, toRaw, readonly, watchEffect, effect } from 'vue';


  // let obj1 = reactive({
  //   count: 10
  // });

  // const changeCount1 = () => {
  //   obj1.count++;
  // }

  // // reactive 传入的必须是 <T extends object>
  // //@ts-ignore
  // let obj2 = reactive(10);

  // onMounted(() => {
  //   console.log(obj1);
  // })

  // onRenderTriggered((event) => {
  //   console.log(event);
    
  //   // debugger
  // })


  // debugger
  // const count = ref({
  //   name: '11',
  //   age: 22,
  //   foo: {
  //     bar: 'foo-bar'
  //   }
  // })

  // // debugger
  // console.log(count.value);
  
  // const show1 = () => {
  //   console.log(count.value.foo);
  // }

  // const show2 = () => {
  //   console.log(count.value);
  // }
  
  
  // 的确会有用
  //@ts-ignore
  // console.log('11', count['__v_isReactive'], count.__v_isReactive, count.value.__v_isReactive, count.value['__v_isReactive']);
  
  // console.log(count == toRaw(count));

  // const handlers: ProxyHandler<any> = {
  //   get(target, property, receiver) {
  //     console.log('handlers.get');
  //     // Reflect没啥特殊的，就是属性的访问
  //     return Reflect.get(target, property, receiver)
      
  //   },
  //   set(target, key, value, receiver) {
  //     console.log('handlers.set');
  //     return Reflect.set(target, key, value, receiver)
  //   }
  // }

  // let a = {
  //   msg: 'hello'
  // }

  // let b = {
  //   name: 'mike'
  // }

  // let pa = new Proxy(a, handlers);
  // let pb = new Proxy(b, handlers);

  // pa.msg ='aaa';
  // console.log(pa.msg);
  // console.log(pa);
  // console.log(a.msg);
  
  

    // const count = ref({
    //   v: 111
    // })

    

    // const show1 = () => {
    //   count.value = {
    //     v: Math.random(),
    //     //@ts-ignore
    //     b: Math.random()
    //   }
    // }


    
    // const count = ref(1)

    // const show1 = () => {
    //   count.value = Math.random();
    // }

    // const show2 = () => {
    //   console.log(count.value);
      
    // }


    const count = ref(1);


    /**
     * 经过readonly包装之后，对象依然是响应式变化的，但只能是响应式的get，不能set
     */
    const readonlyCount = readonly(count);

    const show1 = () => {
      readonlyCount.value++; // 再去设置就会报错
    }

    const show2 = () => {
      count.value++;
    }

    watchEffect(() => {
      console.log('count', count.value);
      console.log('readonly', readonlyCount.value);
      
    })


    // onMounted(() => {
    //   console.log('effect', effect);
      
    // })
  
  


</script>