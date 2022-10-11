import ReactiveVue from '@/pages/Reactive.vue'
import RefVue from '@/pages/Ref.vue'
import type { RouteRecordRaw } from 'vue-router'

const components: RouteRecordRaw[] = [
  {
    path: "/tests/ref",
    name: "ref",
    component: RefVue,
  },
  {
    path: "/tests/reactive",
    name: "reactive",
    component: ReactiveVue,
  }
]

export default components