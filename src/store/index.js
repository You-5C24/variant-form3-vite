import { defineStore } from "pinia";
import { getInputFieldConfig } from "@/components/form-designer/widget-panel/attrFieldConfig";
import { ref } from "vue";

export const useAttrFieldsStore = defineStore("attrFields", () => {
  const attrFieldList = ref([]);

  const initAttrFieldList = (list) => {
    attrFieldList.value = [];
    list.map((item) => {
      const temp = getInputFieldConfig(item.name);
      temp.basic = item;
      attrFieldList.value.push(temp);
    });
  };

  const delAttrFieldList = (fieldName) => {
    attrFieldList.value = attrFieldList.value.filter(
      (item) => item.options.label !== fieldName
    );
  };

  const addAttrFieldList = (field) => {
    attrFieldList.value.push(field);
  };

  return {
    attrFieldList,
    initAttrFieldList,
    delAttrFieldList,
    addAttrFieldList,
  };
});
