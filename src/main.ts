import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import { createPinia } from 'pinia'
import "normalize.css"
import "@/assets/main.less"

import HelloWorld from "@/components/HelloWorld";

const app = createApp(App)

const pinia = createPinia();

app.use(router)

app.use(pinia);

app.use(HelloWorld)

app.mount('#app')
