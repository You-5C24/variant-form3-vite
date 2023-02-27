import { defineStore } from "pinia";
import { getInputFieldConfig } from "@/components/form-designer/widget-panel/attrFieldConfig";

export const useAttrFieldsStore = defineStore("attrFields", {
  state: () => ({
    attrFieldList: [],
  }),
  actions: {
    initAttrFieldList(list) {
      this.attrFieldList = [];
      list.map((item) => {
        const temp = getInputFieldConfig(item.name);
        temp.basic = item;
        this.attrFieldList.push(temp);
      });
    },

    delAttrFieldList(fieldName) {
      this.attrFieldList = this.attrFieldList.filter(
        (item) => item.options.label !== fieldName
      );
    },

    addAttrFieldList(field) {
      this.attrFieldList.push(field);
    },
  },
});
