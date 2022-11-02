<template>
  <p>
    增加不同类型的筛选条件
  </p>
  <p>
    可以单独出一个状态管理，由这个状态去管理中间的选择，输入，清空等操作和数据
  </p>
  <AdvancedSearchPane :config="config" @add-search="addSearch" @remove-search="removeSearch" ref="searchRef"/>
</template>

<script setup lang="ts">
import {ref, reactive} from "vue"
import AdvancedSearchPane from "./index.vue"
import { defaultConfig } from "./config"

const config = ref(defaultConfig)
const searchRef = ref(null)

const addSearch = () => {
  console.log('+++ 新加一条');
  
}

const removeSearch = () => {
  console.log('--- 删除一条')
}

</script>