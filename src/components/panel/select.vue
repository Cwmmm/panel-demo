<template>
  <el-form-item :label="label" label-width="80px" :prop="formKey">
    <el-select
      :value="oValue"
      @input="updateValue"
      placeholder="请选择下拉选项"
      clearable
      filterable
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
import { panel_mixins } from "./common";
export default {
  mixins: [panel_mixins],
  props: {
    opts: {
      type: Array,
      default: () => [],
    },
  },
  data() {
    return {};
  },
  methods: {},
  created() {},
};
</script>

<style></style>
