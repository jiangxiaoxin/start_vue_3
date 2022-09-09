import type { RouteRecordRaw } from 'vue-router'
import AvatarPageVue from "@/components/Avatar/AvatarPage.vue";
import DefinePropsPageVue from "@/components/DefineProps/DefinePropsPage.vue";

const components: RouteRecordRaw[] = [
  {
    path: "/component/avatar",
    name: "avatar",
    component: AvatarPageVue,
  },
  {
    path: "/component/define-props",
    name: "define-props",
    component: DefinePropsPageVue,
  },
]

export default components