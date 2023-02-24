import { defineStore } from "pinia";
import { getInputFieldConfig } from "@/components/form-designer/widget-panel/attrFieldConfig";
import { ref } from "vue";

// export const useAttrFieldsStore = defineStore("attrFields", () => {
//   const attrFieldList = ref([]);

//   const initAttrFieldList = (list) => {
//     attrFieldList.value = [];
//     list.map((item) => {
//       const temp = getInputFieldConfig(item.name);
//       temp.basic = item;
//       attrFieldList.value.push(temp);
//     });
//   };

//   const delAttrFieldList = (fieldName) => {
//     attrFieldList.value = attrFieldList.value.filter(
//       (item) => item.options.label !== fieldName
//     );
//   };

//   const addAttrFieldList = (field) => {
//     attrFieldList.value.push(field);
//   };

//   return {
//     attrFieldList,
//     initAttrFieldList,
//     delAttrFieldList,
//     addAttrFieldList,
//   };
// });

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
