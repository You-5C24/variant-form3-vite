<template>
  <el-tabs v-model="editableTabsValue" type="card">
    <el-tab-pane
      v-for="item in props.childTableData"
      :key="item.code"
      :label="item.name"
      :name="item.code"
    >
      {{ item.speciesIds }}
    </el-tab-pane>
  </el-tabs>
</template>

<script lang="ts">
export default {
  name: "ChildTableView",
};
</script>

<script setup lang="ts">
import { ref } from "vue";
const props = defineProps<{
  childTableData: any[];
}>();

const editableTabsValue = ref("");
editableTabsValue.value = props.childTableData[0].code;
</script>

<style lang="scss" scoped></style>
