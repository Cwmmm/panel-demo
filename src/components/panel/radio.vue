<template>
  <el-form-item :label="label" size="normal" label-width="80px">
    <el-radio v-model="oValue" label="1234"></el-radio>
  </el-form-item>
</template>

<script>
export default {
  props: {
    label: {
      type: String,
      default: "单选框标题",
    },
  },
};
</script>

<style></style>
