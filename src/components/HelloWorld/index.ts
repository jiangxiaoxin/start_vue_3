import HelloWorldVue from "./HelloWorld.vue";
import type { App } from 'vue'
// 组件库式的通过注入到vue里，从而可以全局使用的组件
export default {
  install: (app: App) => {
    app.component(HelloWorldVue.name, HelloWorldVue);
  }
};