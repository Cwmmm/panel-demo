<template>
  <div class="panel_container">
    <el-form v-model="formData">
      <el-row v-for="(rows, index1) in panelData" :key="index1">
        <el-col
          v-for="(cols, index2) in rows"
          :key="index2"
          :span="cols.span || 24"
        >
          <template v-if="cols.type === 'input'">
            <cus-input
              v-bind="cols.attrs"
              :key="index2"
              @updateFormItem="updateFormItem"
            >
            </cus-input>
          </template>
          <template v-if="cols.type === 'select'">
            <cus-select v-bind="cols.attrs" :key="index2"> </cus-select>
          </template>
          <template v-if="cols.type === 'radio'">
            <cus-radio v-bind="cols.attrs" :key="index2"> </cus-radio>
          </template>
          <template v-if="cols.type === 'checkbox'">
            <cus-checkbox v-bind="cols.attrs" :key="index2"> </cus-checkbox>
          </template>
          <template v-if="cols.type === 'switcher'">
            <cus-switcher v-bind="cols.attrs" :key="index2"> </cus-switcher>
          </template>
        </el-col>
      </el-row>
    </el-form>
  </div>
</template>

<script>
import input from "./input.vue";
import select from "./select.vue";
import radio from "./radio.vue";
import checkbox from "./checkbox.vue";
import switcher from "./switch.vue";

export default {
  components: {
    "cus-input": input,
    "cus-select": select,
    "cus-radio": radio,
    "cus-checkbox": checkbox,
    "cus-switch": switcher,
  },
  props: {
    panelData: {
      type: Array,
      default: () => {},
    },
  },
  data() {
    return {
      formData: {},
    };
  },
  methods: {
    updateFormItem(item) {
      console.log(item);
    },
  },
};
</script>

<style lang="less" scoped></style>
