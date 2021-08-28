<template>
  <div class="demo">
    <div id="chart1" style="width: 600px; height: 400px">4</div>
  </div>
</template>

<script>
export default {
  methods: {
    init() {
      const chart1 = this.$echarts.init(document.querySelector("#chart1"));
      let option = {
        title: {
          text: "ECharts 入门示例",
        },
        tooltip: {},
        legend: {
          data: ["销量"],
        },
        xAxis: {
          data: ["衬衫", "羊毛衫", "雪纺衫", "裤子", "高跟鞋", "袜子"],
        },
        yAxis: {},
        series: [
          {
            name: "销量",
            type: "bar",
            data: [5, 20, 36, 10, 10, 20],
          },
        ],
      };
      chart1.setOption(option);
    },
  },
  mounted() {
    this.init();
  },
};
</script>

<style></style>
