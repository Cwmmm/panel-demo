<template>
  <div class="panel_container">
    <el-form v-model="formData">
      <el-row v-for="(rows, index) in panelData" :key="index">
        <el-col v-for="cols in rows" :key="cols.key" :span="cols.span || 24">
          <template v-if="cols.type === 'input'">
            <cus-input
              v-bind="cols.attrs"
              :formKey="cols.key"
              @updateFormItem="updateFormItem"
            >
            </cus-input>
          </template>
          <template v-if="cols.type === 'select'">
            <cus-select
              v-bind="cols.attrs"
              :formKey="cols.key"
              @updateFormItem="updateFormItem"
            >
            </cus-select>
          </template>
          <template v-if="cols.type === 'radio'">
            <cus-radio
              v-bind="cols.attrs"
              :formKey="cols.key"
              @updateFormItem="updateFormItem"
            >
            </cus-radio>
          </template>
          <template v-if="cols.type === 'checkbox'">
            <cus-checkbox
              v-bind="cols.attrs"
              :formKey="cols.key"
              @updateFormItem="updateFormItem"
            >
            </cus-checkbox>
          </template>
          <template v-if="cols.type === 'switcher'">
            <cus-switcher
              v-bind="cols.attrs"
              :formKey="cols.key"
              @updateFormItem="updateFormItem"
            >
            </cus-switcher>
          </template>
          <template v-if="cols.type === 'dataPicker'">
            <cus-dataPicker
              v-bind="cols.attrs"
              :formKey="cols.key"
              @updateFormItem="updateFormItem"
            >
            </cus-dataPicker>
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
import dataPicker from "./dataPicker.vue";
export default {
  components: {
    "cus-input": input,
    "cus-select": select,
    "cus-radio": radio,
    "cus-checkbox": checkbox,
    "cus-switch": switcher,
    "cus-dataPicker": dataPicker,
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
      this.formData[item.key] = item.value;
    },
    updateValue(val) {
      console.log(this);
      this.oValue = val;
      this.$emit("updateFormItem", {
        key: this.formKey,
        value: val,
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
