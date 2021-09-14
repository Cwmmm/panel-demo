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
    return {};
  },
  computed: {
    oValue() {
      return this.value || "";
    },
  },
  methods: {
    updateValue(val) {
      this.$emit("updateFormItem", {
        key: this.formKey,
        value: val,
      });
    },
  },
  created() {},
};
