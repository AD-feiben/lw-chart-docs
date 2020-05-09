---
prev:  /guide/
---


# 名词定义及配置


## 了解布局结构

![lw-chart](https://imgkr.cn-bj.ufileos.com/0db9e3f4-704a-4f2d-ab52-d6a603546b63.png)

图中的布局主要由两个类来实现，一个是基类 `LWChart`，定义了 `canvas`，`titleBar`，`chart`。

而 x坐标 和 y坐标 则定义在 `Axis` 坐标轴类中，因为有些图表可能不需要坐标轴，所以通过 `Axis` 继承 `LWChart` 达到更灵活的配置。


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

