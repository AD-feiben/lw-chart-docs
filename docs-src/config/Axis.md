# Axis 类

`Axis` (坐标轴类)继承于 `LWChart` 类，主要用于初始化数据，初始化 <font color=red>canvas</font>、<font color=red>chart</font> 尺寸，实现 x 轴、y 轴的绘制。

通过已知参数，在 `Axis` 类中可以计算出 <font color=red>chart</font> 的位置及大小。

```ts
chartWidth = canvasWidth - canvasPaddingLeft - canvasPaddingRight - yAxisWidth;

chartHeight = canvasHeight - canvasPaddingTop - canvasPaddingBottom - titleBarHeight - xAxisHeight;
```


:::tip 为什么不在 LWChart 类中初始化尺寸？

因为不同类型的图表样式不一致，例如一个饼图中，不需要绘制坐标轴，那么初始化尺寸的工作则需要交给 `Pie` 类来完成。
:::


## Axis 类的配置参数

**`interface AxisOptions extends LWChartOptions`**


|      参数      |                              描述                              |           类型           |      默认值      |
| :------------- | :------------------------------------------------------------- | :----------------------- | :--------------- |
| drawDataLength | 用于控制渲染图表的数据量                                       | number                   | 7                |
| xAxisHeight    | x轴高度                                                        | number                   | 30               |
| xAxisData      | x轴坐标数据                                                    | string[]                 | []               |
| xAxisLength    | x轴坐标标注个数 xAxisData.length / xAxisLength >= 2 时有效 | number                   | 10               |
| xAxisFormat    | x轴坐标标注格式化函数                                          | (val: string) => string; | --               |
| yAxisWidth     | y轴宽度                                                        | number                   | 30               |
| yAxisData      | y轴坐标数据(允许传入多组数据绘制)                              | number[][]               | []               |
| yAxisLength    | y轴坐标标注个数                                                | number                   | 10               |
| yAxisFormat    | y轴坐标标注格式化函数                                          | (val: number) => string; | --               |
| axisStyle      | 坐标轴、标注样式                                               | LWChartAxisStyle         | defaultAxisStyle |




axisStyle 的默认值 defaultAxisStyle 如下:

|   参数    |          描述          |  类型  |             默认值              |
| --------- | ---------------------- | ------ | ------------------------------- |
| lineColor | 坐标轴及坐标辅助线颜色 | string | #666                            |
| lineWidth | 坐标轴及坐标辅助线线宽 | number | 1                               |
| font      | 坐标标注字体           | string | PingFangSC-Semibold PingFang SC |
| size      | 坐标标注字体大小       | number | 10                              |
| color     | 坐标标注字体颜色       | string | #333                            |


