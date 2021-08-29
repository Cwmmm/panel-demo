<template>
  <el-form-item :label="label" label-width="80px">
    <el-date-picker
      v-model="oValue"
      :valuu="ovalue"
      @input="updateValue"
      type="daterange"
      range-separator="至"
      start-placeholder="开始日期"
      end-placeholder="结束日期"
    >
    </el-date-picker>
  </el-form-item>
</template>

<script>
export default {
  props: {
    value: {
      type: String,
    },
    label: {
      type: String,
      default: "日期选择",
    },
  },
  data() {
    return {
      oValue: "",
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
    this.oValue = this.value;
  },
};
</script>

<style></style>
