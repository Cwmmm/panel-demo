<template>
  <el-form-item :label="label" label-width="80px">
    <el-checkbox-group :value="oValue" @input="updateValue">
      <template v-for="(item, index) in opts">
        <el-checkbox :key="index" :label="item.id">{{
          item.label
        }}</el-checkbox>
      </template>
    </el-checkbox-group>
  </el-form-item>
</template>

<script>
import { panel_mixins } from "./common";
export default {
  mixins: [panel_mixins],
  props: {
    value: {
      type: Array,
      default: () => [],
    },
    opts: {
      type: Array,
      default: () => [],
    },
  },
  data() {
    return {
      oValue: [],
    };
  },
  methods: {},
  created() {
    console.log(this.value);
  },
};
</script>

<style></style>
