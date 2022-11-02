<template>
  <div class="advanced-search-item">
    <el-row :gutter="20">
      <el-col :span="10">
        <el-select
          @change="typeChange"
          :model-value="type"
          placeholder="请选择"
        >
          <el-option
            v-for="option in config"
            :key="option.id"
            :label="option.title"
            :value="option.id"
          ></el-option>
        </el-select>
      </el-col>
      <el-col :span="3">
        <el-select
          @change="relationChange"
          :model-value="relation"
          placeholder="请选择"
        >
          <el-option
            v-for="relation in relations"
            :key="relation"
            :label="getRelationLabel(relation)"
            :value="relation"
          ></el-option>
        </el-select>
      </el-col>
      <el-col :span="10">
        <template v-if="componentIs(SearchComponents.Input)">
          <el-input v-model="result" :placeholder="placeholder"></el-input>
        </template>
        <template v-else-if="componentIs(SearchComponents.InputNumber)">
          <el-input-number
            v-model="result"
            :placeholder="placeholder"
          ></el-input-number>
        </template>
        <template v-else-if="componentIs(SearchComponents.DatePicker)">
          <el-date-picker
            v-model="result"
            type="date"
            :placeholder="placeholder"
          />
        </template>
        <template v-else-if="componentIs(SearchComponents.Select)">
          <el-select
            @change="selectResultChange"
            :model-value="result"
            placeholder="请选择"
          >
            <el-option
              v-for="relation in lastOptions"
              :key="relation"
              :label="relation.label"
              :value="relation.value"
            ></el-option>
          </el-select>
        </template>
        <template v-else-if="componentIs(SearchComponents.Checkbox)">
          <el-checkbox-group v-model="checkResult">
            <el-checkbox
              v-for="option in lastOptions"
              :key="option.value"
              :label="option.label"
            />
          </el-checkbox-group>
        </template>
        <template v-else>
          <el-input v-model="result" :placeholder="placeholder"></el-input>
        </template>
      </el-col>
      <el-col :span="1">
        <el-button type="danger" size="small" @click="removeItem"
          >删除</el-button
        >
      </el-col>
    </el-row>
  </div>
</template>
<script lang="ts">
import { defineComponent, onMounted, ref, watch } from "vue";
import { getRelationLabel, SearchComponents } from "./config";

export default defineComponent({
  name: "AdvancedSearchItem",
  props: ["config", "uuid"],
  expose: ["getSearchResult"],
  data() {
    return {
      SearchComponents,
    };
  },
  setup(props, { emit }) {
    const type = ref(null);
    const relation = ref(null);
    const result = ref(null);

    const relations = ref([]);

    const placeholder = ref("请输入");

    const component = ref(null);

    const lastOptions = ref([]);

    const checkResult = ref([]);

    const typeChange = (val: any) => {
      console.log("第1列换了", val);

      type.value = val;
    };

    watch(type, (newType) => {
      console.log("检测到type变了", newType);

      // 选定的类型变了，要清空一下数据
      relation.value = null;
      result.value = null;

      // @ts-ignore
      let target = props.config.find((item) => item.id == type.value);
      if (target) {
        relations.value = target.relations;
        placeholder.value = target.placeholder;
        component.value = target.component;
        lastOptions.value = target.props ? target.props.options : [];
      } else {
        relations.value = [];
        placeholder.value = "";
        component.value = null;
        lastOptions.value = [];
      }
    });

    const selectResultChange = (val: any) => {
      console.log("select的选中发生变化", val);

      result.value = val;
    };

    const relationChange = (val: any) => {
      console.log("选择的关系", val);
      relation.value = val;
    };

    const componentIs = (value) => {
      return component.value == value;
    };

    const getSearchResult = () => {
      if (componentIs(SearchComponents.Checkbox)) {
        return [props.uuid, type.value, relation.value, checkResult.value];
      }
      return [props.uuid, type.value, relation.value, result.value];
    };

    const removeItem = () => {
      emit("remove-search", props.uuid);
    };

    const itemCreated = () => {
      emit("add-search", {
        uuid: props.uuid,
        getSearchResult,
      });
    };

    onMounted(() => {
      itemCreated();
    });

    return {
      typeChange,
      type,
      relation,
      relationChange,
      result,
      placeholder,
      getSearchResult,
      removeItem,
      relations,
      component,
      lastOptions,
      selectResultChange,
      checkResult,
      componentIs,
    };
  },
  methods: {
    getRelationLabel,
  },
});
</script>

<style lang="less" scoped>
:deep(.el-select) {
  width: 100%;
}

:deep(.el-input-number) {
  width: 100%;
}

:deep(.el-date-editor.el-input) {
  width: 100%;
}

.advanced-search-item {
  margin-bottom: 20px;
}
</style>
