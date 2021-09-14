export const panel_mixins = {
  props: {
    label: {
      type: String,
      default: "输入框标题",
    },
    type: {
      type: String,
      default: "text",
    },
    value: {
      type: String,
      default: "",
    },
    formKey: {
      type: String,
      required: true,
    },
  },
  data() {
    return {
      oValue: null,
    };
  },
  methods: {
    updateValue(val) {
      this.oValue = val;
      this.$emit("updateFormItem", {
        key: this.formKey,
        value: val,
      });
    },
  },
  created() {
    this.oValue =
      typeof this.value == "object"
        ? JSON.parse(JSON.stringify(this.value))
        : this.value;
  },
};
