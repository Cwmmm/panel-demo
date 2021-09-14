<template>
  <el-form-item :label="label" label-width="80px" :prop="formKey">
    <el-input :value="oValue" @input="updateValue" :type="type"> </el-input>
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
  mounted() {},
};
</script>

<style></style>
