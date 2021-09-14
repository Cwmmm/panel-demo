<template>
  <el-form-item :label="label" size="normal" label-width="80px">
    <template v-for="(item, index) in opts">
      <el-radio
        :key="index"
        :value="oValue"
        @input="updateValue"
        :label="item.id"
        >{{ item.label }}</el-radio
      >
    </template>
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
