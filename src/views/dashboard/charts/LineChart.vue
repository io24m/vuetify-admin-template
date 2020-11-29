<template>
  <v-card>
    <div
      ref="chart"
      :class="className"
      :style="{ height: height, width: width }"
    >
      line
    </div>
  </v-card>
</template>
<script>
import echarts from "echarts";
// import "echarts/theme/dark";
require("echarts/theme/macarons");
import resize from "./mixins/resize.js";
export default {
  mixins: [resize],
  props: {
    className: {
      type: String,
      default: "",
    },
    width: {
      type: String,
      default: "100%",
    },
    height: {
      type: String,
      default: "350px",
    },
  },
  data() {
    return {
      chart: null,
    };
  },
  mounted() {
    this.$nextTick(() => {
      this.initChart();
    });
  },
  beforeDestroy() {
    if (!this.chart) {
      return;
    }
    this.chart.dispose();
    this.chart = null;
  },
  methods: {
    initChart() {
      this.chart = echarts.init(this.$refs.chart, "macarons");
      this.chart.setOption({
        xAxis: {
          data: ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"],
          boundaryGap: false,
          axisTick: {
            show: false,
          },
        },
        grid: {
          left: 10,
          right: 10,
          bottom: 20,
          top: 30,
          containLabel: true,
        },
        tooltip: {
          trigger: "axis",
          axisPointer: {
            type: "cross",
          },
          padding: [5, 10],
        },
        yAxis: {
          axisTick: {
            show: false,
          },
        },
        legend: {
          data: ["expected", "actual"],
        },
        series: [
          {
            name: "expected",
            itemStyle: {
              normal: {
                color: "#FF005A",
                lineStyle: {
                  color: "#FF005A",
                  width: 2,
                },
              },
            },
            smooth: true,
            type: "line",
            data: [100, 120, 161, 134, 105, 160, 165],
            animationDuration: 2800,
            animationEasing: "cubicInOut",
          },
          {
            name: "actual",
            smooth: true,
            type: "line",
            itemStyle: {
              normal: {
                color: "#3888fa",
                lineStyle: {
                  color: "#3888fa",
                  width: 2,
                },
                areaStyle: {
                  color: "#f3f8ff",
                },
              },
            },
            data: [120, 82, 91, 154, 162, 140, 145],
            animationDuration: 2800,
            animationEasing: "quadraticOut",
          },
        ],
      });
    },
  },
};
</script>