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
            key: "userName",
            type: "input",
            span: 12,
            attrs: {
              type: "text",
              value: "",
            },
          },
          {
            key: "password",
            type: "input",
            span: 12,
            attrs: {
              type: "text",
              value: "",
            },
          },
        ],
        // {
        //   type: "switch",
        // },
        // {
        //   type: "select",
        // },
        // {
        //   type: "radio",
        // },
        // {
        //   type: "checkbox",
        // },
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
  background-color: #eee;
}
</style>
