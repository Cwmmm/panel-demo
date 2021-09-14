<template>
  <el-form-item :label="label" label-width="80px">
    <el-date-picker
      :value="oValue"
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
import { panel_mixins } from "./common";
export default {
  mixins: [panel_mixins],
  props: {},
  data() {
    return {};
  },
  methods: {},
  created() {},
};
</script>

<style></style>
