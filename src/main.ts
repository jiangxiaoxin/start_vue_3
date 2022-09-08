import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import "normalize.css"
import "@/assets/main.less"

import HelloWorld from "@/components/HelloWorld";

const app = createApp(App)

app.use(router)

app.use(HelloWorld)

app.mount('#app')
