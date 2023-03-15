import { defineStore } from "pinia";
import {
  getInputFieldConfig,
  getSelectFieldConfig,
} from "@/components/form-designer/widget-panel/attrFieldConfig";

export const useAttrFieldsStore = defineStore("attrFields", {
  state: () => ({
    attrFieldList: [],
  }),
  actions: {
    initAttrFieldList(list) {
      this.attrFieldList = [];
      list.map((item) => {
        let temp = null;
        switch (item.valueType) {
          case "描述型":
            temp = getInputFieldConfig(item.name);
            break;
          case "选择型":
            temp = getSelectFieldConfig(item.name);
            break;
          default:
            temp = getInputFieldConfig(item.name);
        }

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
