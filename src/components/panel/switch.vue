<template>
  <el-form-item :label="label" size="normal" label-width="80px" :prop="formKey">
    <el-switch :value="oValue" @input="updateValue"> </el-switch>
  </el-form-item>
</template>

<script>
import { panel_mixins } from "./common";
export default {
  mixins: [panel_mixins],
  props: {},
  methods: {
    change() {},
  },
};
</script>

<style></style>
