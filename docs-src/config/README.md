---
prev:  /guide/
---


# 名词定义及配置

## 了解 Canvas 布局

::: run { title: 'Canvas 布局' }
```vue
<template>
  <div>
    <div id="chart" class="chart"></div>
  </div>
</template>

<script>
// 已使用浏览器版本，无需导入 Area
// import Area from 'lw-chart/dist/Area.js';
export default {
  methods: {
    run () {
      const xAxisData = [ '1', '2', '3' ];
      const yAxisData = [ [ 7, 10, 6 ] ];
      const baseConfig = {
        title: 'Canvas 布局',
        titleBarHeight: 50,
        titleStyle: {
          color: '#fff'
        },
        canvasPadding: [30],
        canvasBg: '#000',
        chartPadding: [30],
        chartBg: '#fff',
        axisStyle: {
          color: '#fff',
          size: 14,
          lineColor: '#f2f2f2'
        },
        xAxisHeight: 50,
        yAxisWidth: 50,
        yAxisLength: 5,
        yAxisFormat: (val) => {
          return val.toFixed(2);
          // return 'Y Axis Label';
        },
        xAxisData,
        yAxisData
      };

      const lineChart = new Area(document.querySelector('#chart'), baseConfig);
    }
  },
  mounted () {
    this.$nextTick(() => {
      this.run();
    });
  }
}
</script>
<style>
  .chart {
    width: 500px;
    height: 500px;
  }
</style>
```
:::

其中黑色部分定义为 <font color=red>canvas</font>

白色部分定义为 <font color=red>chart</font>

左上角的 `Canvas 布局` 称为 <font color=red>title</font>

