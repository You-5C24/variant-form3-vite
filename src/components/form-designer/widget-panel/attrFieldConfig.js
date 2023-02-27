export const getInputFieldConfig = (name) => {
  return {
    type: "input",
    adaptType: "input",
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

export const getFieldType = (adaptType) => {
  const typeMap = {
    input: "input",
    textarea: "textarea",
    number: "number",
    date: "date",
    dateRange: "date-range",
  };

  return typeMap[adaptType];
};

export const getFieldOptions = (adaptType, label, name) => {
  switch (adaptType) {
    case "input": {
      return {
        fromAttr: true, // 判断特性标签
        name,
        label,
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
      };
    }
    case "textarea": {
      return {
        fromAttr: true, // 判断特性标签
        name,
        label,
        labelAlign: "",
        rows: 3,
        defaultValue: "",
        placeholder: "",
        columnWidth: "200px",
        size: "",
        labelWidth: null,
        labelHidden: false,
        readonly: false,
        disabled: false,
        hidden: false,
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
        //-------------------
        onCreated: "",
        onMounted: "",
        onInput: "",
        onChange: "",
        onFocus: "",
        onBlur: "",
        onValidate: "",
      };
    }
    case "number": {
      return {
        fromAttr: true, // 判断特性标签
        name,
        label,
        labelAlign: "",
        defaultValue: 0,
        placeholder: "",
        columnWidth: "200px",
        size: "",
        labelWidth: null,
        labelHidden: false,
        disabled: false,
        hidden: false,
        required: false,
        requiredHint: "",
        validation: "",
        validationHint: "",
        //-------------------
        customClass: "", //自定义css类名
        labelIconClass: null,
        labelIconPosition: "rear",
        labelTooltip: null,
        min: -100000000000,
        max: 100000000000,
        precision: 0,
        step: 1,
        controlsPosition: "right",
        //-------------------
        onCreated: "",
        onMounted: "",
        onChange: "",
        onFocus: "",
        onBlur: "",
        onValidate: "",
      };
    }
    case "date": {
      return {
        fromAttr: true, // 判断特性标签
        name,
        label,
        labelAlign: "",
        type: "date",
        defaultValue: null,
        placeholder: "",
        columnWidth: "200px",
        size: "",
        autoFullWidth: true,
        labelWidth: null,
        labelHidden: false,
        readonly: false,
        disabled: false,
        hidden: false,
        clearable: true,
        editable: false,
        format: "YYYY-MM-DD", //日期显示格式
        valueFormat: "YYYY-MM-DD", //日期对象格式
        required: false,
        requiredHint: "",
        validation: "",
        validationHint: "",
        //-------------------
        customClass: "", //自定义css类名
        labelIconClass: null,
        labelIconPosition: "rear",
        labelTooltip: null,
        //-------------------
        onCreated: "",
        onMounted: "",
        onChange: "",
        onFocus: "",
        onBlur: "",
        onValidate: "",
      };
    }
    case "dateRange": {
      return {
        fromAttr: true, // 判断特性标签
        name,
        label,
        labelAlign: "",
        type: "daterange",
        defaultValue: null,
        startPlaceholder: "",
        endPlaceholder: "",
        columnWidth: "200px",
        size: "",
        autoFullWidth: true,
        labelWidth: null,
        labelHidden: false,
        readonly: false,
        disabled: false,
        hidden: false,
        clearable: true,
        editable: false,
        format: "YYYY-MM-DD", //日期显示格式
        valueFormat: "YYYY-MM-DD", //日期对象格式
        required: false,
        requiredHint: "",
        validation: "",
        validationHint: "",
        //-------------------
        customClass: "", //自定义css类名
        labelIconClass: null,
        labelIconPosition: "rear",
        labelTooltip: null,
        //-------------------
        onCreated: "",
        onMounted: "",
        onChange: "",
        onFocus: "",
        onBlur: "",
        onValidate: "",
      };
    }
    default:
      break;
  }
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
    label: "日期范围",
    value: "dateRange",
  },
  // {
  //   label: "颜色选择",
  //   value: "color",
  // },
  // {
  //   label: "下拉单选",
  //   value: "select",
  // },
  // {
  //   label: "树型选择",
  //   value: "treeSelect",
  // },
  // {
  //   label: "单选",
  //   value: "radio",
  // },
  // {
  //   label: "勾选",
  //   value: "checkbox",
  // },
  // {
  //   label: "开关",
  //   value: "switch",
  // },
  // {
  //   label: "文件",
  //   value: "upload",
  // },
  // {
  //   label: "金额",
  //   value: "money",
  // },
  // {
  //   label: "字典",
  //   value: "dict",
  // },
  // {
  //   label: "人员",
  //   value: "person",
  // },
  // {
  //   label: "部门",
  //   value: "dept",
  // },
  // {
  //   label: "集团",
  //   value: "group",
  // },
];
