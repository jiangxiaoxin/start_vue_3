import { createApp } from 'vue'
import ElementPlus from 'element-plus'
import 'element-plus/dist/index.css'
import App from './App.vue'
import router from './router'
import { createPinia } from 'pinia'
import "normalize.css"
import "@/assets/main.less"

import HelloWorld from "@/components/HelloWorld";

const app = createApp(App)

app.use(ElementPlus)

const pinia = createPinia();

app.use(router)

app.use(pinia);

app.use(HelloWorld)

app.mount('#app')
