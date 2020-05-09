---
next:  /demo/
---

# Area 类

`Area` 继承于 `Axis` 类，主要实现图标的绘制，更新及销毁。

## Area 类的配置参数

**`interface AreaOptions extends AxisOptions`**

|          参数          |               描述               |                                          类型                                           |           默认值           |
| ---------------------- | -------------------------------- | --------------------------------------------------------------------------------------- | -------------------------- |
| areaLineColor          | 线条颜色                         | string[]                                                                                | ['rgba(233, 28, 65, 1)']   |
| areaLineWidth          | 线条宽度                         | number                                                                                  | 2                          |
| areaStartColor         | 绘制区域的起始颜色               | string[]                                                                                | ['rgba(233, 28, 65, 1)']   |
| areaEndColor           | 绘制区域的结束颜色               | string                                                                                  | ['rgba(246, 60, 118, 0)']  |
| areaShowDot            | 是否显示指示点                   | boolean                                                                                 | true                       |
| areaDotRadius          | 指示点半径                       | number                                                                                  | 2.5                        |
| areaDotFillColor       | 指示点填充颜色                   | string[]                                                                                | ['#fff']                   |
| areaDotStorkColor      | 指示点描边颜色                   | string[]                                                                                | ['rgba(233, 28, 65, 1)']   |
| areaDotLineWidth       | 指示点描边线宽                   | number                                                                                  | 2                          |
| areaActiveDotRadius    | 激活指示点半径，在原指示点上叠加 | number                                                                                  | 8                          |
| areaActiveDotFillColor | 激活指示点颜色                   | string[]                                                                                | ['rgba(233, 28, 65, 0.3)'] |
| showResult             | 是否显示选中的数据信息           | boolean                                                                                 | true                       |
| drawResult             | 自定义绘制选中的数据信息         | (ctx: CanvasRenderingContext2D, data: IData, chartParameter: LWChartParameter) => void; | --                         |
| resultFormat           | 选中数据格式化后绘制             | (data: IData) => string;                                                                | --                         |
| resultStyle            | 绘制选中信息的样式               | LWChartTextStyle                                                                        | defaultResultStyle         |
| showAnimation          | 是否显示动画                     | boolean                                                                                 | true                       |
| animationDuration      | 动画时长，单位 ms                | number                                                                                  | 1000                       |


通过继承 `Axis` 类，我们在使用 `Area` 实例化时，不仅可以使用 `Area` 该类自身的配置参数，还可以使用其父类 `Axis` 及 `LWChart` 的配置参数，对图表进行配置。


`areaStartColor` 和 `areaEndColor` 可用于区域填充颜色，颜色从上到下渐变。


`IData` 类型定义如下

|   参数   |             描述              |  类型  |
| -------- | ----------------------------- | ------ |
| group    | 选中的数据在 yAxisData 的索引 | number |
| xAxisVal | x 坐标值                      | string |
| yAxisVal | y 坐标值                      | number |
| x | x 坐标, 已乘以 dpi                      | number |
| y | y 坐标, 已乘以 dpi                       | number |





`resultStyle` 默认值 `defaultResultStyle` 如下

|  参数  |   描述   |  类型  |             默认值           |
| ------ | -------- | ------ | --------- |
| size   | 字体大小 | number | 12                           |
| font   | 字体     | string | PingFangSC-Semibold PingFang SC |
| weight | 字体加粗 | string | normal                       |
| color  | 字体颜色 | string | #666                         |
| x      | x 坐标   | number | `(el.offsetWidth || 30) - 30` |
| y      | y 坐标   | number | `titleStyle.y || 20`       |


`Area` 类在绘制 result 时的对齐方式如下：

```ts
this.ctx.textBaseline = 'top';
this.ctx.textAlign = 'end';
```


`LWChartParameter` 类型定义如下：

|     参数      |                   描述                   |             类型             |
| ------------- | ---------------------------------------- | ---------------------------- |
| dpi           | -                                        | number                       |
| mousePosition | 鼠标距离 canvas 左上角的位置, 已乘以 dpi | IPos: {x: number; y: number} |
| canvasRect | canvas 的宽高及坐标，已乘以 dpi | LWChartRect |
| chartRect | chart 的宽高及坐标，已乘以 dpi | LWChartRect |


`LWChartRect` 类型定义如下：

|   参数    |    描述   | 类型      |
|  ---  |  ---  |  ---  |
| startX      |  起始位置x轴坐标     |   number    |
| startY      |  起始位置y轴坐标     |   number    |
| endX      |  结束位置x轴坐标     |   number    |
| endY      |  结束位置y轴坐标     |   number    |
| width      |    宽   |   number    |
| height      |  高     |   number    |





:::tip drawResult 使用方法

drawResult 为自定义绘制选中数据样式。使用方法如下：

```ts
new Area(el, {
  title: '',
  drawResult: function (ctx, data, chartParameter) {
    const { dpi } = chartParameter;
    // 位置及尺寸参数需要乘以 dpi
    ctx.save();
    // do something
    ctx.restore();
  }
});
```
:::




:::tip
颜色参数可配置多个颜色，与 yAxisData 中的每一组数据对应, 如果不匹配将会取对应颜色数组的最后一个值
:::


## Area 类的公共方法

|   方法名    |      描述      |                           入参                           | 返回值 |
| ----------- | -------------- | -------------------------------------------------------- | ------ |
| forceUpdate | 强制刷新canvas | config:AreaOptions (可选)                                | --     |
| updateData  | 用于更新数据   | xAxisData:string[] (可选)<br>yAxisData:number[][] (可选) | --     |


`forceUpdate` 方法可在容器尺寸发生变化时调用，该方法将会重新计算尺寸、初始化数据等重新绘制。

`updateData` 方法可在异步请求获取到数据后调用，该方法会重新初始化数据后进行绘制。
