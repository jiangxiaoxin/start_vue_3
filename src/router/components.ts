import type { RouteRecordRaw } from 'vue-router'
import AvatarPageVue from "@/components/Avatar/AvatarPage.vue";
import DefinePropsPageVue from "@/components/DefineProps/DefinePropsPage.vue";
import HelloVuePage from '@/components/HelloVue/HelloVuePage';
import AdvancedSearchPage from "@/components/AdvancedSearch/page.vue"

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
  {
    path: "/component/hello-vue",
    name: "hello-vue",
    component: HelloVuePage,
  },
  {
    path: "/component/advanced-search",
    name: "advanced-search-page",
    component: AdvancedSearchPage,
  }
]

export default components