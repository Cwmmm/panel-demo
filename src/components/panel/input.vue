<template>
  <el-form-item label="输入框" size="normal" label-width="80px">
    <el-input :value="oValue" @input="updateValue" :type="type"> </el-input>
  </el-form-item>
</template>

<script>
export default {
  props: {
    type: {
      type: String,
      default: "text",
    },
    value: {
      type: String,
      default: "",
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
      this.$emit("updateFormItem", val);
    },
  },
  created() {
    this.oValue =
      typeof this.value == "object"
        ? JSON.parse(JSON.stringify(this.value))
        : this.value;
  },
};
</script>

<style></style>
