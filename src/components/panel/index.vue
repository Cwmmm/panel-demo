<template>
  <div class="panel_container">
    <el-form :model="formData" :rules="rules" ref="panelForm">
      <el-row v-for="(rows, index) in panelData" :key="index">
        <el-col v-for="cols in rows" :key="cols.key" :span="cols.span || 24">
          <template v-if="cols.type === 'input'">
            <cus-input
              v-bind="cols.attrs"
              :formKey="cols.key"
              :ref="'co' + cols.key"
              @updateFormItem="updateFormItem"
            >
            </cus-input>
          </template>
          <template v-if="cols.type === 'select'">
            <cus-select
              v-bind="cols.attrs"
              :formKey="cols.key"
              :ref="'co' + cols.key"
              @updateFormItem="updateFormItem"
            >
            </cus-select>
          </template>
          <template v-if="cols.type === 'radio'">
            <cus-radio
              v-bind="cols.attrs"
              :formKey="cols.key"
              :ref="'co' + cols.key"
              @updateFormItem="updateFormItem"
            >
            </cus-radio>
          </template>
          <template v-if="cols.type === 'checkbox'">
            <cus-checkbox
              v-bind="cols.attrs"
              :formKey="cols.key"
              :ref="'co' + cols.key"
              @updateFormItem="updateFormItem"
            >
            </cus-checkbox>
          </template>
          <template v-if="cols.type === 'switc  h'">
            <cus-switch
              v-bind="cols.attrs"
              :formKey="cols.key"
              :ref="'co' + cols.key"
              @updateFormItem="updateFormItem"
            >
            </cus-switch>
          </template>
          <template v-if="cols.type === 'datePicker'">
            <cus-datePicker
              v-bind="cols.attrs"
              :formKey="cols.key"
              :ref="'co' + cols.key"
              @updateFormItem="updateFormItem"
            >
            </cus-datePicker>
          </template>
        </el-col>
      </el-row>
    </el-form>
    <el-row :gutter="20">
      <el-col :span="12" :offset="0">
        <el-button @click="submitForm" type="primary">提交</el-button>
      </el-col>

      <el-col :span="12" :offset="0">
        <el-button @click="resetForm">重置</el-button>
      </el-col>
    </el-row>
  </div>
</template>

<script>
import input from "./input.vue";
import select from "./select.vue";
import radio from "./radio.vue";
import checkbox from "./checkbox.vue";
import switcher from "./switch.vue";
import datePicker from "./datePicker.vue";
export default {
  components: {
    "cus-input": input,
    "cus-select": select,
    "cus-radio": radio,
    "cus-checkbox": checkbox,
    "cus-switch": switcher,
    "cus-datePicker": datePicker,
  },
  props: {
    panelData: {
      type: Array,
      default: () => {},
    },
    rules: {
      type: Object,
      default: () => {},
    },
  },
  watch: {
    formData(obj) {
      console.log(obj);
    },
  },
  data() {
    return {
      formData: {},
    };
  },
  methods: {
    //收集所有子组件的表单变化
    updateFormItem(item) {
      this.panelData.flat().find((ele) => {
        if (ele.key == item.key) {
          ele.attrs.value = item.value;
          return;
        }
      });
      this.formData[item.key] = item.value;
      console.log(this.formData[item.key]);
    },
    //验证提交
    submitForm() {
      this.$refs.panelForm.validate((valid) => {
        if (valid) {
          alert("submit!");
        } else {
          return false;
        }
      });
    },
    //重置数据
    resetForm() {
      this.$refs.panelForm.resetFields();
      Object.keys(this.formData).forEach((key) => {
        console.log(this.$refs["co" + key][0].updateValue(this.formData[key]));
      });
    },
  },
  created() {
    let formArr = this.panelData.flat();
    formArr.forEach((item) => {
      this.formData = Object.assign({}, this.formData, {
        [item.key]: item.attrs.value,
      });
    });
  },
};
</script>

<style lang="less" scoped></style>
