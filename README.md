# start_vue_3

vue3 的一些记录 

## Project Setup

```sh
npm install
```

### Compile and Hot-Reload for Development

```sh
npm run dev
```

### Type-Check, Compile and Minify for Production

```sh
npm run build
```

## List

[x] Avatar 和 AvatarGroup 组件

[x] 添加pinia状态管理

[x] DefineProps几个组件测试如何定义props类型

[x] HelloWorld 全局注册组件

[x] HelloVue 纯tsx写的组件。【一定要添加`@vitejs/plugin-vue-jsx`】

[x] [ReactiveEffect 怎么用的呀？](#effect)


<a id="effect">effect & activeEffect</a>

通过切换 activeEffect来记录所有依赖 target下key的 “依赖者”。在不同的切换过程中，代码是同步顺序执行的（这是最重要的前提），所以总是能保证记录下准确的“依赖者”

针对 target.key 的依赖者，总是通过先访问一次 target.key 然后再收集到这些依赖。”依赖“就是我们真实写的访问 target.key 的那些方法

target 里的每一个属性 key 都有一个跟自己对应的 dep，dep 就是为了能保存访问 target[key] 的方法，所以哪里调用了 target[key]，也就是“这里”的方法就会被存在 key 对应的 dep 实例中。

[x] 高级筛选。每次添加一条，选各种条件。条件提前配置好。

