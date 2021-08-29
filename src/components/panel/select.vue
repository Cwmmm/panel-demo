<template>
  <el-form-item :label="label" label-width="80px">
    <el-select
      :value="oValue"
      @input="updateValue"
      placeholder="请选择下拉选项"
      clearable
      filterable
      @change="change"
    >
      <el-option
        v-for="item in opts"
        :key="item.areaId"
        :label="item.label"
        :value="item.areaId"
      >
      </el-option>
    </el-select>
  </el-form-item>
</template>

<script>
export default {
  props: {
    formKey: {
      type: String,
    },
    label: {
      type: String,
      default: "下拉框标题",
    },
    value: {
      type: String,
      default: "",
    },
    opts: {
      type: Array,
      default: () => [],
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
    change(newVal) {},
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
