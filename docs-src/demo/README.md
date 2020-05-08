---
prev: /config/
---

# 案例

:::tip
该页面已使用浏览器版本的 Area.js，在 demo 代码中没有再使用 `import` 导入。
:::

## 单线条

::: run { title: '单线条' }
```vue
<template>
  <div>
    <div id="chart" class="chart"></div>
  </div>
</template>

<script>
export default {
  methods: {
    run () {
      const xAxisData = [ '1', '2', '3', '4', '5', '6' ];
      const yAxisData = [ [ 7, 10, 6, 8, 12, 7 ] ];
      const config = {
        title: '单线条',
        titleBarHeight: 50,
        canvasBg: '#f1f2f6',
        canvasPadding: [30],
        chartPadding: [10],
        axisStyle: {
          size: 14,
          lineColor: '#a4b0be'
        },
        xAxisHeight: 50,
        yAxisWidth: 50,
        yAxisFormat: (val) => {
          return val.toFixed(2);
        },
        xAxisData,
        yAxisData,
        areaStartColor: ['rgba(0,0,0,0)'],
        areaEndColor: ['rgba(0,0,0,0)']
      };

      const lineChart = new Area(document.querySelector('#chart'), config);
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


## 单线条 (控制坐标标注)

::: run { title: '单线条 (控制坐标标注)' }
```vue
<template>
  <div>
    <div id="chart" class="chart"></div>
  </div>
</template>

<script>
export default {
  methods: {
    run () {
      const xAxisData = [ '1', '2', '3', '4', '5', '6' ];
      const yAxisData = [ [ 7, 10, 6, 8, 12, 7 ] ];
      const config = {
        title: '单线条 (控制坐标标注)',
        titleBarHeight: 50,
        canvasBg: '#f1f2f6',
        canvasPadding: [30],
        chartPadding: [10],
        axisStyle: {
          size: 14,
          lineColor: '#a4b0be'
        },
        xAxisHeight: 50,
        yAxisWidth: 50,

        xAxisLength: 3,
        yAxisLength: 5,

        yAxisFormat: (val) => {
          return val.toFixed(2);
        },
        xAxisData,
        yAxisData,
        areaStartColor: ['rgba(0,0,0,0)'],
        areaEndColor: ['rgba(0,0,0,0)']
      };

      const lineChart = new Area(document.querySelector('#chart'), config);
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


```ts
xAxisLength: 3,
yAxisLength: 5,
```


## 单线条（无指示点）

::: run { title: '单线条（无指示点）' }
```vue
<template>
  <div>
    <div id="chart" class="chart"></div>
  </div>
</template>

<script>
export default {
  methods: {
    run () {
      const xAxisData = [ '1', '2', '3', '4', '5', '6' ];
      const yAxisData = [ [ 7, 10, 6, 8, 12, 7 ] ];
      const config = {
        title: '单线条（无指示点）',
        titleBarHeight: 50,
        canvasBg: '#f1f2f6',
        canvasPadding: [30],
        chartPadding: [10],
        axisStyle: {
          size: 14,
          lineColor: '#a4b0be'
        },
        xAxisHeight: 50,
        yAxisWidth: 50,
        yAxisFormat: (val) => {
          return val.toFixed(2);
        },

        areaShowDot: false,

        areaStartColor: ['rgba(0,0,0,0)'],
        areaEndColor: ['rgba(0,0,0,0)'],
      };

      const lineChart = new Area(document.querySelector('#chart'), config);
      lineChart.updateData(xAxisData, yAxisData);
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

```ts
areaShowDot: false
```

## 单线条（无动画）

::: run { title: '单线条（无动画）' }
```vue
<template>
  <div>
    <div id="chart" class="chart"></div>
  </div>
</template>

<script>
export default {
  methods: {
    run () {
      const xAxisData = [ '1', '2', '3', '4', '5', '6' ];
      const yAxisData = [ [ 7, 10, 6, 8, 12, 7 ] ];
      const config = {
        title: '单线条（无动画）',
        titleBarHeight: 50,
        canvasBg: '#f1f2f6',
        canvasPadding: [30],
        chartPadding: [10],
        axisStyle: {
          size: 14,
          lineColor: '#a4b0be'
        },
        xAxisHeight: 50,
        yAxisWidth: 50,
        yAxisFormat: (val) => {
          return val.toFixed(2);
        },

        showAnimation: false,

        areaStartColor: ['rgba(0,0,0,0)'],
        areaEndColor: ['rgba(0,0,0,0)'],
      };

      const lineChart = new Area(document.querySelector('#chart'), config);
      lineChart.updateData(xAxisData, yAxisData);
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

```ts
showAnimation: false
```

## 单线条（修改颜色）

::: run  { title: '单线条（修改颜色）' }
```vue
<template>
  <div>
    <div id="chart" class="chart"></div>
  </div>
</template>

<script>
export default {
  methods: {
    run () {
      const xAxisData = [ '1', '2', '3', '4', '5', '6' ];
      const yAxisData = [ [ 7, 10, 6, 8, 12, 7 ] ];
      const config = {
        title: '单线条（修改颜色）',
        titleBarHeight: 50,
        canvasBg: '#f1f2f6',
        canvasPadding: [30],
        chartPadding: [10],
        axisStyle: {
          size: 14,
          lineColor: '#a4b0be'
        },
        xAxisHeight: 50,
        yAxisWidth: 50,
        yAxisFormat: (val) => {
          return val.toFixed(2);
        },

        areaLineColor: ['rgba(46, 213, 115,1.0)'],
        areaDotStorkColor: ['rgba(46, 213, 115,1.0)'],
        areaActiveDotFillColor: ['rgba(46, 213, 115,0.3)'],

        areaStartColor: ['rgba(0,0,0,0)'],
        areaEndColor: ['rgba(0,0,0,0)'],
      };

      const lineChart = new Area(document.querySelector('#chart'), config);
      lineChart.updateData(xAxisData, yAxisData);
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

```ts
  areaLineColor: ['rgba(46, 213, 115,1.0)'],
  areaDotStorkColor: ['rgba(46, 213, 115,1.0)'],
  areaActiveDotFillColor: ['rgba(46, 213, 115,0.3)']
```

## 多线条

::: run { title: '多线条' }
```vue
<template>
  <div>
    <div id="chart" class="chart"></div>
  </div>
</template>

<script>
export default {
  methods: {
    run () {
      const xAxisData = [ '1', '2', '3', '4', '5', '6' ];
      const yAxisData = [ [ 7, 10, 6, 8, 12, 7 ], [ 2, 5, 3, 6, 8, 5 ] ];
      const config = {
        title: '多线条',
        titleBarHeight: 50,
        canvasBg: '#f1f2f6',
        canvasPadding: [30],
        chartPadding: [10],
        axisStyle: {
          size: 14,
          lineColor: '#a4b0be'
        },
        xAxisHeight: 50,
        yAxisWidth: 50,
        yAxisFormat: (val) => {
          return val.toFixed(2);
        },
        xAxisData,
        yAxisData,

        areaLineColor: ['rgba(255, 71, 87,1.0)', 'rgba(46, 213, 115,1.0)'],
        areaDotStorkColor: ['rgba(255, 71, 87,1.0)', 'rgba(46, 213, 115,1.0)'],
        areaActiveDotFillColor: ['rgba(255, 71, 87,0.3)', 'rgba(46, 213, 115,0.3)'],

        areaStartColor: ['rgba(0,0,0,0)'],
        areaEndColor: ['rgba(0,0,0,0)']
      };

      const lineChart = new Area(document.querySelector('#chart'), config);
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

```ts
const yAxisData = [ [ 7, 10, 6, 8, 12, 7 ], [ 2, 5, 3, 6, 8, 5 ] ];

areaLineColor: ['rgba(255, 71, 87,1.0)', 'rgba(46, 213, 115,1.0)'],
areaDotStorkColor: ['rgba(255, 71, 87,1.0)', 'rgba(46, 213, 115,1.0)'],
areaActiveDotFillColor: ['rgba(255, 71, 87,0.3)', 'rgba(46, 213, 115,0.3)']
```


## 渐变区域

::: run { title: '渐变区域' }
```vue
<template>
  <div>
    <div id="chart" class="chart"></div>
  </div>
</template>

<script>
export default {
  methods: {
    run () {
      const xAxisData = [ '1', '2', '3', '4', '5', '6' ];
      const yAxisData = [ [ 7, 10, 6, 8, 12, 7 ] ];
      const config = {
        title: '渐变区域',
        titleBarHeight: 50,
        canvasBg: '#f1f2f6',
        canvasPadding: [30],
        chartPadding: [10],
        axisStyle: {
          size: 14,
          lineColor: '#a4b0be'
        },
        xAxisHeight: 50,
        yAxisWidth: 50,
        yAxisFormat: (val) => {
          return val.toFixed(2);
        },
        xAxisData,
        yAxisData,
        areaStartColor: ['rgba(255, 71, 87,1.0)'],
        areaEndColor: ['rgba(255, 71, 87,0.1)']
      };

      const lineChart = new Area(document.querySelector('#chart'), config);
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

```ts
areaStartColor: ['rgba(255, 71, 87,1.0)'],
areaEndColor: ['rgba(255, 71, 87,0.1)']
```

## 区域叠加

::: run { title: '区域叠加' }
```vue
<template>
  <div>
    <div id="chart" class="chart"></div>
  </div>
</template>

<script>
export default {
  methods: {
    run () {
      const xAxisData = [ '1', '2', '3', '4', '5', '6' ];
      const yAxisData = [ [ 7, 10, 6, 8, 12, 7 ], [ 2, 5, 3, 6, 8, 5 ] ];
      const config = {
        title: '区域叠加',
        titleBarHeight: 50,
        canvasBg: '#f1f2f6',
        canvasPadding: [30],
        chartPadding: [10],
        axisStyle: {
          size: 14,
          lineColor: '#a4b0be'
        },
        xAxisHeight: 50,
        yAxisWidth: 50,
        yAxisFormat: (val) => {
          return val.toFixed(2);
        },
        xAxisData,
        yAxisData,
        areaLineColor: ['rgba(255, 107, 129,1.0)', 'rgba(236, 204, 104,1.0)'],
        areaDotStorkColor: ['rgba(255, 107, 129,1.0)', 'rgba(236, 204, 104,1.0)'],
        areaActiveDotFillColor: ['rgba(255, 107, 129,0.3)', 'rgba(236, 204, 104,0.3)'],
        areaStartColor: ['rgba(255, 107, 129,1.0)', 'rgba(236, 204, 104,1.0)'],
        areaEndColor: ['rgba(255, 107, 129,1.0)', 'rgba(236, 204, 104,1.0)']
      };

      const lineChart = new Area(document.querySelector('#chart'), config);
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

```ts
const yAxisData = [ [ 7, 10, 6, 8, 12, 7 ], [ 2, 5, 3, 6, 8, 5 ] ];

areaLineColor: ['rgba(255, 107, 129,1.0)', 'rgba(236, 204, 104,1.0)'],
areaDotStorkColor: ['rgba(255, 107, 129,1.0)', 'rgba(236, 204, 104,1.0)'],
areaActiveDotFillColor: ['rgba(255, 107, 129,0.3)', 'rgba(236, 204, 104,0.3)'],
areaStartColor: ['rgba(255, 107, 129,1.0)', 'rgba(236, 204, 104,1.0)'],
areaEndColor: ['rgba(255, 107, 129,1.0)', 'rgba(236, 204, 104,1.0)']
```


## 自定义 result

::: run { title: '自定义 result' }
```vue
<template>
  <div>
    <div id="chart" class="chart"></div>
  </div>
</template>

<script>
export default {
  methods: {
    run () {
      const xAxisData = [ '1', '2', '3', '4', '5', '6' ];
      const yAxisData = [ [ 7, 10, 6, 8, 12, 7 ] ];
      const config = {
        title: '自定义 result',
        titleBarHeight: 50,
        canvasBg: '#f1f2f6',
        canvasPadding: [30],
        chartPadding: [10],
        axisStyle: {
          size: 14,
          lineColor: '#a4b0be'
        },
        xAxisHeight: 50,
        yAxisWidth: 50,
        yAxisFormat: (val) => {
          return val.toFixed(2);
        },
        xAxisData,
        yAxisData,
        areaStartColor: ['rgba(0,0,0,0)'],
        areaEndColor: ['rgba(0,0,0,0)'],

        drawResult: function (ctx, data) {
          const { group, xAxisVal, yAxisVal } = data;
          const text = `第${group + 1}组数据: ${xAxisVal}-${yAxisVal}`;
          // this 为 Area 实例
          const size = 14 * this.dpi;
          const weight = 600;
          const font = 'PingFangSC-Semibold PingFang SC';
          const color = '#333';
          const x = 400 * this.dpi;
          const y = 30 * this.dpi;
          const maxWidth = 120 * this.dpi;
          ctx.save();
          ctx.textBaseline = 'top';
          ctx.textAlign = 'end';
          ctx.font = `${weight} ${size}px ${font}`;
          ctx.fillStyle = color;
          ctx.fillText(text, x, y, maxWidth);
          ctx.restore();
        }
      };

      const lineChart = new Area(document.querySelector('#chart'), config);
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


```ts
drawResult: function (ctx, data) {
  const { group, xAxisVal, yAxisVal } = data;
  const text = `第${group + 1}组数据: ${xAxisVal}-${yAxisVal}`;
  // this 为 Area 实例
  const size = 14 * this.dpi;
  const weight = 600;
  const font = 'PingFangSC-Semibold PingFang SC';
  const color = '#333';
  const x = 400 * this.dpi;
  const y = 30 * this.dpi;
  const maxWidth = 120 * this.dpi;
  ctx.save();
  ctx.textBaseline = 'top';
  ctx.textAlign = 'end';
  ctx.font = `${weight} ${size}px ${font}`;
  ctx.fillStyle = color;
  ctx.fillText(text, x, y, maxWidth);
  ctx.restore();
}
```