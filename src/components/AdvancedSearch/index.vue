<template>
  <div class="advanced-search-pane">
    <div class="search-items">
      <AdvancedSearchItem v-for="(item, index) in itemList" :key="item.uuid" @add-search="searchItemAdded" @remove-search="searchItemRemoved" :uuid="item.uuid" :config="config"/>
    </div>
    <div class="action-area">
      <el-button type="primary" @click.stop="addNewSearchItem"
        >添加筛选条件</el-button
      >
      <el-button type="success" @click.stop="logSearch">打印筛选条件</el-button>
    </div>
  </div>
</template>
<script lang="ts">
import { defineComponent, ref } from "vue";
import AdvancedSearchItem from "./item.vue"
// @ts-ignore
import { v4 as uuidv4 } from "uuid";
export default defineComponent({
  name: "AdvancedSearchPane",
  props: ["config"],
  emits: ['add-search', 'remove-search'],
  components: {
    AdvancedSearchItem
  },
  setup(props, {emit}) {
    const itemList = ref([{
      uuid: uuidv4(),
      getSearchResult: null
    }]);

    // @ts-ignore
    const searchItemAdded = ({uuid, getSearchResult}) => {
      let target = itemList.value.find(item => item.uuid == uuid)
      if(target) {
        target.getSearchResult = getSearchResult
        emit("add-search")
      }
    }

    const searchItemRemoved = (uuid: any) => {
      let index = itemList.value.findIndex(item => item.uuid == uuid)
      if(index >= 0) {
        itemList.value.splice(index, 1)
        emit("remove-search")
      }
    }

    const addNewSearchItem = () => {
      let uuid = uuidv4()
      itemList.value.push({uuid: uuid, getSearchResult: null})
    }

    const logSearch = () => {
      let result = itemList.value.map(item => {
        console.log('---item', item);
        
        return {
          uuid: item.uuid,
          // @ts-ignore
          value: item.getSearchResult ? item.getSearchResult() : null
        }
      })
      console.log('最后的结果', result);
      
    }

    return {
      itemList,
      searchItemAdded,
      addNewSearchItem,
      logSearch,
      searchItemRemoved
    }
  },
});
</script>
