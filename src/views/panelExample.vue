<template>
  <div class="demo">
    <panel :panelData="formData" :rules="rules"></panel>
  </div>
</template>

<script>
import panel from "../components/panel";
export default {
  components: {
    panel,
  },
  data() {
    return {
      rules: {
        activityName: [
          { required: true, message: "请输入活动名称", trigger: "blur" },
          { min: 3, max: 5, message: "长度在 3 到 5 个字符", trigger: "blur" },
        ],
        activityArea: [
          { required: true, message: "请选择活动区域", trigger: "change" },
        ],
        activeTime: [
          { required: true, message: "请选择活动时间", trigger: "change" },
        ],
        activityType: [
          {
            required: true,
            message: "请至少选择一个活动性质",
            trigger: "change",
          },
        ],
        speResource: [
          { required: true, message: "请活动性质", trigger: "change" },
        ],
        activityForm: [
          {
            required: true,
            message: "请输入活动形式",
            trigger: "blur",
          },
          {
            min: 50,
            max: 150,
            message: "请输入50-150字之间的活动形式",
            trigger: "blur",
          },
        ],
      },
      //element栅格布局
      //行数据
      formData: [
        //列数据
        [
          {
            //表单对应的keyname
            key: "activityName",
            //组件类型:input select datePicker radio单选 swith开关 checkbox多选
            type: "input",
            //栅格栏数:总数24
            span: 12,
            //子组件prop
            attrs: {
              //类型
              type: "text",
              //表单对应的value
              value: "",
              label: "活动名称",
            },
          },
          {
            key: "activityArea",
            type: "select",
            span: 12,
            attrs: {
              type: "text",
              value: "1",
              label: "活动区域",
              opts: [
                {
                  areaId: "1",
                  label: "区域一",
                },
                {
                  areaId: "2",
                  label: "区域二",
                },
              ],
            },
          },
        ],
        [
          {
            type: "dataPicker",
            key: "activeTime",
            attrs: {
              value: [],
              label: "活动时间",
            },
          },
        ],
        [
          {
            type: "switch",
            key: "sendNow",
            attrs: {
              label: "即时配送",
            },
          },
        ],
        [
          {
            type: "checkbox",
            key: "activityType",
            attrs: {
              label: "活动性质",
              value: ["1", "2"],
              opts: [
                {
                  id: "1",
                  label: "美食/餐厅线上活动",
                },
                {
                  id: "2",
                  label: "地推活动",
                },
                {
                  id: "3",
                  label: "线下主题活动",
                },
                {
                  id: "4",
                  label: "单纯品牌曝光",
                },
              ],
            },
          },
        ],
        [
          {
            type: "radio",
            key: "speResource",
            attrs: {
              label: "特殊资源",
              value: "2",
              opts: [
                {
                  id: "1",
                  label: "线上品牌赞助商",
                },
                {
                  id: "2",
                  label: "线下场地免费",
                },
              ],
            },
          },
        ],
        [
          {
            type: "input",
            key: "activityForm",
            attrs: {
              type: "textarea",
              value: "",
              label: "活动形式",
            },
          },
        ],
      ],
    };
  },
};
</script>
<style lang="less" scoped>
.demo {
  width: 600px;
  height: 400px;
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  border: 1px solid #ebebeb;
  border-radius: 3px;
  padding: 20px 40px;
}
</style>
