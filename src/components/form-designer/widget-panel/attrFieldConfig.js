export const getInputFieldConfig = (name) => {
  return {
    type: "input",
    icon: "text-field",
    formItemFlag: true,
    options: {
      fromAttr: true, // 判断特性标签
      name: "",
      label: name,
      labelAlign: "",
      type: "text",
      defaultValue: "",
      placeholder: "",
      columnWidth: "200px",
      size: "",
      labelWidth: null,
      labelHidden: false,
      readonly: false,
      disabled: false,
      hidden: false,
      clearable: true,
      showPassword: false,
      required: false,
      requiredHint: "",
      validation: "",
      validationHint: "",
      //-------------------
      customClass: "", //自定义css类名
      labelIconClass: null,
      labelIconPosition: "rear",
      labelTooltip: null,
      minLength: null,
      maxLength: null,
      showWordLimit: false,
      prefixIcon: "",
      suffixIcon: "",
      appendButton: false,
      appendButtonDisabled: false,
      buttonIcon: "custom-search",
      //-------------------
      onCreated: "",
      onMounted: "",
      onInput: "",
      onChange: "",
      onFocus: "",
      onBlur: "",
      onValidate: "",
      onAppendButtonClick: "",
    },
  };
};

export const widgetsOpts = [
  {
    label: "文本",
    value: "input",
  },
  {
    label: "多行文本",
    value: "textarea",
  },
  {
    label: "数字",
    value: "number",
  },
  {
    label: "日期",
    value: "date",
  },
  {
    label: "日期时间",
    value: "datetime",
  },
  {
    label: "日期范围",
    value: "dateRange",
  },
  {
    label: "时间范围",
    value: "timeRange",
  },
  {
    label: "颜色选择",
    value: "color",
  },
  {
    label: "下拉单选",
    value: "select",
  },
  {
    label: "下拉多选",
    value: "multiSelect",
  },
  {
    label: "树型选择",
    value: "treeSelect",
  },
  {
    label: "单选",
    value: "radio",
  },
  {
    label: "勾选",
    value: "checkbox",
  },
  {
    label: "开关",
    value: "switch",
  },
  {
    label: "文件",
    value: "upload",
  },
  {
    label: "金额",
    value: "money",
  },
  {
    label: "字典",
    value: "dict",
  },
  {
    label: "人员",
    value: "person",
  },
  {
    label: "部门",
    value: "dept",
  },
  {
    label: "集团",
    value: "group",
  },
];
