# LWChart 类

`LWChart` 作为一个基类，主要实现了公共参数的合并、实现了绘制文本、线条等公共方法。使子类能更方便绘制图表。

## LWChart 类的配置参数

**`interface LWChartOptions`**


|      参数      |                                  描述                                  |       类型       |      默认值       |
| :------------- | :--------------------------------------------------------------------- | :--------------- | :---------------- |
| canvasPadding  | 用于设置 <font color=red>canvas</font> 内边距，类似于 css 中的 padding | number[]         | [0]               |
| canvasBg       | 用于设置 <font color=red>canvas</font> 背景                            | string           | #fff              |
| chartPadding   | 用于设置 <font color=red>chart</font> 内边距                           | number[]         | [0]               |
| chartBg        | 用于设置 <font color=red>chart</font> 背景                             | string           | #fff              |
| chartCursor    | 鼠标在 <font color=red>chart</font> 范围内的样式                       | string           | pointer           |
| title          | 图表标题                                                               | string           | --                |
| titleBarHeight | 标题栏高度, title 不为空时生效                                         | number           | 30                |
| titleStyle     | 标题样式                                                               | LWChartTextStyle | defaultTitleStyle |





**`LWChartTextStyle` 有以下字段，以默认标题样式 `defaultTitleStyle` 为例**

|  参数  |   描述   |       类型        |             默认值              |
| :----- | :------- | :---------------: | ------------------------------: |
| size   | 字体大小 |      number       |                              18 |
| font   | 字体     |      string       | PingFangSC-Semibold PingFang SC |
| weight | 字体加粗 | LWChartTextWeight |                            bold |
| x      | x轴坐标  |      number       |                canvasPadding[3] |
| y      | y轴坐标  |      number       |                canvasPadding[0] |
| color  | 字体颜色 |      string       |                            #333 |




LWChartTextWeight 可选值如下：

```ts
type LWChartTextWeight = 'normal' | 'bold' | 'bolder' | 'lighter' | '100' | '200' | '300' | '400' | '500' | '600' | '700' | '800' | '900';
```


title 绘制的对齐方式如下：

```ts
ctx.textBaseline = 'top';

ctx.textAlign = 'start';
```




::: tip
chart 宽高受 canvasPadding、titleBarHeight 影响，对于不同类型的图表，影响 chart 尺寸的参数还不止这两个。

例如 demo 中还有 x 轴高度，y 轴宽度影响了 chart 的宽高。这两个参数不属于 `LWChart` 类，所以留在 `Axis` 类中说明。
:::




## LWChart 类的公共属性及方法

### 公共属性

| 属性 |                     描述                     |  类型  |
| ---- | -------------------------------------------- | ------ |
| dpi  | 在自定义绘制时，需要将宽高位置等参数乘以 dpi | number |

### 公共方法

| 方法名  |           描述           | 入参 | 返回值 |
| ------- | ------------------------ | ---- | ------ |
| destroy | 方便使用者对图表进行销毁 | --   | --     |