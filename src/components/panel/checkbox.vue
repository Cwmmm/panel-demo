<template>
  <el-form-item :label="label" label-width="80px">
    <el-checkbox-group v-model="checkList">
      <el-checkbox label="复选框 A"></el-checkbox>
      <el-checkbox label="复选框 B"></el-checkbox>
      <el-checkbox label="复选框 C"></el-checkbox>
      <el-checkbox label="禁用" disabled></el-checkbox>
      <el-checkbox label="选中且禁用" disabled></el-checkbox>
    </el-checkbox-group>
  </el-form-item>
</template>

<script>
export default {
  props: {
    label: {
      type: String,
      default: "复选框标题",
    },
    value: {
      type: Array,
      default: () => [],
    },
  },
};
</script>

<style></style>
