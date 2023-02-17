export const cardSchema = {
  type: "card",
  category: "container",
  icon: "card",
  widgetList: [],
  options: {
    name: "",
    label: "card",
    hidden: false,
    folded: false,
    showFold: true,
    cardWidth: "100%",
    shadow: "never",
    customClass: "",
  },
};

export const alertSchema = {
  type: "alert",
  icon: "alert",
  formItemFlag: false,
  options: {
    name: "",
    title: "Good things are coming...",
    type: "info",
    description: "",
    closable: true,
    closeText: "",
    center: true,
    showIcon: false,
    effect: "light",
    hidden: false,
    onClose: "",
    customClass: "",
  },
};
// TODO: 动态创建处理
export const cusinputSchema1 = {
  type: "cusinput",
  icon: "text-field",
  formItemFlag: true,
  options: {
    name: "",
    label: "test1",
    labelAlign: "",
    type: "text",
    defaultValue: "",
    placeholder: "",
    columnWidth: "200px",
    size: "",
    labelWidth: null,
    labelHidden: false,
    // readonly: false,
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

export const cusinputSchema2 = {
  type: "cusinput",
  icon: "text-field",
  formItemFlag: true,
  options: {
    name: "",
    label: "test2",
    labelAlign: "",
    type: "text",
    defaultValue: "",
    placeholder: "",
    columnWidth: "200px",
    size: "",
    labelWidth: null,
    labelHidden: false,
    // readonly: false,
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
