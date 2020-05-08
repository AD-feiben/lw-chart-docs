---
next: /config/
---

# 快速上手


## 介绍

lw-chart 使用 TypeScript 编写，npm 包中提供了 d.ts 的声明文件，对 TS 项目支持更加友好。

当然了，lw-chart 不受限于前端框架，对任意前端项目均可支持。

```

npm 包的目录结构如下如下：

```bash
lw-chart
├── LICENSE
├── README.md
├── dist
│   ├── Area.js
│   ├── Axis.js
│   ├── LWChart.js
│   └── index.js
├── package.json
├── src
│   ├── area.ts
│   ├── axis.ts
│   ├── index.ts
│   ├── lw-chart.ts
│   └── utils
│       ├── index.ts
│       └── interfaces.ts
└── types
    ├── area.d.ts
    ├── axis.d.ts
    ├── index.d.ts
    ├── lw-chart.d.ts
    └── utils
        ├── index.d.ts
        └── interfaces.d.ts
```

LWChart 为基类，主要用于创建 canvas 标签、获取 dpi、提供基本的绘制方法等。

Axis 为坐标轴类，通过配置参数初始化 canvas 以及 chart 的尺寸、初始化图表数据、 实现坐标轴的绘制等。

Area 为实现类，将 Axis 类处理后的数据换算为坐标进行绘制。

::: tip

Area 类不满足需求时，可继承 LWChart 或 Axis 开发新的图表。

其中 index.js 中包含 LWChart、Axis、Area 类，体积相对较大，尽量避免直接使用 index.js。

:::

## 安装

```bash
yarn add lw-chart

# npm install lw-chart --save
```

## 在 webpack 项目使用

```ts
import Area from 'lw-chart/dist/Area.js';

new Area(el, config);
```


lw-chart 目前没有 CDN 版本，对于 script 标签引用，需要从 npm 下载后导入。

```html
<script src="lw-chart/dist/Area.js"></script>
<script>
  new Area(el, config);
</script>
```