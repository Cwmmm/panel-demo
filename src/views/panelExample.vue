<template>
  <div class="demo">
    <panel :panelData="formData"></panel>
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
      formData: [
        [
          {
            key: "activityName",
            type: "input",
            span: 12,
            attrs: {
              type: "text",
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
