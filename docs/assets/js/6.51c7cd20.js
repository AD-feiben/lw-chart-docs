(window.webpackJsonp=window.webpackJsonp||[]).push([[6],{340:function(t,v,_){"use strict";_.r(v);var a=_(18),s=Object(a.a)({},(function(){var t=this,v=t.$createElement,_=t._self._c||v;return _("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[_("h1",{attrs:{id:"area-类"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#area-类"}},[t._v("#")]),t._v(" Area 类")]),t._v(" "),_("p",[_("code",[t._v("Area")]),t._v(" 继承于 "),_("code",[t._v("Axis")]),t._v(" 类，主要实现图标的绘制，更新及销毁。")]),t._v(" "),_("h2",{attrs:{id:"area-类的配置参数"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#area-类的配置参数"}},[t._v("#")]),t._v(" Area 类的配置参数")]),t._v(" "),_("p",[_("strong",[_("code",[t._v("interface AreaOptions extends AxisOptions")])])]),t._v(" "),_("table",[_("thead",[_("tr",[_("th",[t._v("参数")]),t._v(" "),_("th",[t._v("描述")]),t._v(" "),_("th",[t._v("类型")]),t._v(" "),_("th",[t._v("默认值")])])]),t._v(" "),_("tbody",[_("tr",[_("td",[t._v("areaLineColor")]),t._v(" "),_("td",[t._v("线条颜色")]),t._v(" "),_("td",[t._v("string[]")]),t._v(" "),_("td",[t._v("['rgba(233, 28, 65, 1)']")])]),t._v(" "),_("tr",[_("td",[t._v("areaLineWidth")]),t._v(" "),_("td",[t._v("线条宽度")]),t._v(" "),_("td",[t._v("number")]),t._v(" "),_("td",[t._v("2")])]),t._v(" "),_("tr",[_("td",[t._v("areaStartColor")]),t._v(" "),_("td",[t._v("绘制区域的起始颜色")]),t._v(" "),_("td",[t._v("string[]")]),t._v(" "),_("td",[t._v("['rgba(233, 28, 65, 1)']")])]),t._v(" "),_("tr",[_("td",[t._v("areaEndColor")]),t._v(" "),_("td",[t._v("绘制区域的结束颜色")]),t._v(" "),_("td",[t._v("string")]),t._v(" "),_("td",[t._v("['rgba(246, 60, 118, 0)']")])]),t._v(" "),_("tr",[_("td",[t._v("areaShowDot")]),t._v(" "),_("td",[t._v("是否显示指示点")]),t._v(" "),_("td",[t._v("boolean")]),t._v(" "),_("td",[t._v("true")])]),t._v(" "),_("tr",[_("td",[t._v("areaDotRadius")]),t._v(" "),_("td",[t._v("指示点半径")]),t._v(" "),_("td",[t._v("number")]),t._v(" "),_("td",[t._v("2.5")])]),t._v(" "),_("tr",[_("td",[t._v("areaDotFillColor")]),t._v(" "),_("td",[t._v("指示点填充颜色")]),t._v(" "),_("td",[t._v("string[]")]),t._v(" "),_("td",[t._v("['#fff']")])]),t._v(" "),_("tr",[_("td",[t._v("areaDotStorkColor")]),t._v(" "),_("td",[t._v("指示点描边颜色")]),t._v(" "),_("td",[t._v("string[]")]),t._v(" "),_("td",[t._v("['rgba(233, 28, 65, 1)']")])]),t._v(" "),_("tr",[_("td",[t._v("areaDotLineWidth")]),t._v(" "),_("td",[t._v("指示点描边线宽")]),t._v(" "),_("td",[t._v("number")]),t._v(" "),_("td",[t._v("2")])]),t._v(" "),_("tr",[_("td",[t._v("areaActiveDotRadius")]),t._v(" "),_("td",[t._v("激活指示点半径，在原指示点上叠加")]),t._v(" "),_("td",[t._v("number")]),t._v(" "),_("td",[t._v("8")])]),t._v(" "),_("tr",[_("td",[t._v("areaActiveDotFillColor")]),t._v(" "),_("td",[t._v("激活指示点颜色")]),t._v(" "),_("td",[t._v("string[]")]),t._v(" "),_("td",[t._v("['rgba(233, 28, 65, 0.3)']")])]),t._v(" "),_("tr",[_("td",[t._v("showResult")]),t._v(" "),_("td",[t._v("是否显示选中的数据信息")]),t._v(" "),_("td",[t._v("boolean")]),t._v(" "),_("td",[t._v("true")])]),t._v(" "),_("tr",[_("td",[t._v("drawResult")]),t._v(" "),_("td",[t._v("自定义绘制选中的数据信息")]),t._v(" "),_("td",[t._v("(ctx: CanvasRenderingContext2D, data: IData) => void;")]),t._v(" "),_("td",[t._v("--")])]),t._v(" "),_("tr",[_("td",[t._v("resultFormat")]),t._v(" "),_("td",[t._v("选中数据格式化后绘制")]),t._v(" "),_("td",[t._v("(data: IData) => string;")]),t._v(" "),_("td",[t._v("--")])]),t._v(" "),_("tr",[_("td",[t._v("resultStyle")]),t._v(" "),_("td",[t._v("绘制选中信息的样式")]),t._v(" "),_("td",[t._v("LWChartTextStyle")]),t._v(" "),_("td",[t._v("defaultResultStyle")])]),t._v(" "),_("tr",[_("td",[t._v("showAnimation")]),t._v(" "),_("td",[t._v("是否显示动画")]),t._v(" "),_("td",[t._v("boolean")]),t._v(" "),_("td",[t._v("true")])]),t._v(" "),_("tr",[_("td",[t._v("animationDuration")]),t._v(" "),_("td",[t._v("动画时长，单位 ms")]),t._v(" "),_("td",[t._v("number")]),t._v(" "),_("td",[t._v("1000")])])])]),t._v(" "),_("p",[t._v("通过继承 "),_("code",[t._v("Axis")]),t._v(" 类，我们在使用 "),_("code",[t._v("Area")]),t._v(" 实例化时，不仅可以使用 "),_("code",[t._v("Area")]),t._v(" 该类自身的配置参数，还可以使用其父类 "),_("code",[t._v("Axis")]),t._v(" 及 "),_("code",[t._v("LWChart")]),t._v(" 的配置参数，对图表进行配置。")]),t._v(" "),_("p",[_("code",[t._v("areaStartColor")]),t._v(" 和 "),_("code",[t._v("areaEndColor")]),t._v(" 可用于区域填充颜色，颜色从上到下渐变。")]),t._v(" "),_("p",[_("code",[t._v("IData")]),t._v(" 类型定义如下")]),t._v(" "),_("table",[_("thead",[_("tr",[_("th",[t._v("参数")]),t._v(" "),_("th",[t._v("描述")]),t._v(" "),_("th",[t._v("类型")])])]),t._v(" "),_("tbody",[_("tr",[_("td",[t._v("group")]),t._v(" "),_("td",[t._v("选中的数据在 yAxisData 的索引")]),t._v(" "),_("td",[t._v("number")])]),t._v(" "),_("tr",[_("td",[t._v("xAxisVal")]),t._v(" "),_("td",[t._v("x 坐标值")]),t._v(" "),_("td",[t._v("string")])]),t._v(" "),_("tr",[_("td",[t._v("yAxisVal")]),t._v(" "),_("td",[t._v("y 坐标值")]),t._v(" "),_("td",[t._v("number")])])])]),t._v(" "),_("p",[_("code",[t._v("resultStyle")]),t._v(" 默认值 "),_("code",[t._v("defaultResultStyle")]),t._v(" 如下")]),t._v(" "),_("table",[_("thead",[_("tr",[_("th",[t._v("参数")]),t._v(" "),_("th",[t._v("描述")]),t._v(" "),_("th",[t._v("类型")]),t._v(" "),_("th",[t._v("默认值")])])]),t._v(" "),_("tbody",[_("tr",[_("td",[t._v("size")]),t._v(" "),_("td",[t._v("字体大小")]),t._v(" "),_("td",[t._v("number")]),t._v(" "),_("td",[t._v("12")])]),t._v(" "),_("tr",[_("td",[t._v("font")]),t._v(" "),_("td",[t._v("字体")]),t._v(" "),_("td",[t._v("string")]),t._v(" "),_("td",[t._v("PingFangSC-Semibold PingFang SC")])]),t._v(" "),_("tr",[_("td",[t._v("weight")]),t._v(" "),_("td",[t._v("字体加粗")]),t._v(" "),_("td",[t._v("string")]),t._v(" "),_("td",[t._v("normal")])]),t._v(" "),_("tr",[_("td",[t._v("color")]),t._v(" "),_("td",[t._v("字体颜色")]),t._v(" "),_("td",[t._v("string")]),t._v(" "),_("td",[t._v("#666")])]),t._v(" "),_("tr",[_("td",[t._v("x")]),t._v(" "),_("td",[t._v("x 坐标")]),t._v(" "),_("td",[t._v("number")]),t._v(" "),_("td",[_("code",[t._v("(el.offsetWidth || 30) - 30")])])]),t._v(" "),_("tr",[_("td",[t._v("y")]),t._v(" "),_("td",[t._v("y 坐标")]),t._v(" "),_("td",[t._v("number")]),t._v(" "),_("td",[_("code",[t._v("titleStyle.y || 20")])])])])]),t._v(" "),_("p",[_("code",[t._v("Area")]),t._v(" 类在绘制 result 时的对齐方式如下：")]),t._v(" "),_("div",{staticClass:"language-ts extra-class"},[_("pre",{pre:!0,attrs:{class:"language-ts"}},[_("code",[_("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("this")]),_("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("ctx"),_("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("textBaseline "),_("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),_("span",{pre:!0,attrs:{class:"token string"}},[t._v("'top'")]),_("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),_("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("this")]),_("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("ctx"),_("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("textAlign "),_("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),_("span",{pre:!0,attrs:{class:"token string"}},[t._v("'end'")]),_("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n")])])]),_("div",{staticClass:"custom-block tip"},[_("p",{staticClass:"custom-block-title"},[t._v("drawResult 使用方法")]),t._v(" "),_("p",[t._v("drawResult 为自定义绘制选中数据样式。 "),_("strong",[t._v("drawResult 应避免使用箭头函数，因为无法使用 "),_("code",[t._v("this")]),t._v(" 获取不了 Area 实例。")]),t._v(" 使用方法如下：")]),t._v(" "),_("div",{staticClass:"language-ts extra-class"},[_("pre",{pre:!0,attrs:{class:"language-ts"}},[_("code",[_("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("new")]),t._v(" "),_("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("Area")]),_("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("el"),_("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),_("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  title"),_("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),_("span",{pre:!0,attrs:{class:"token string"}},[t._v("''")]),_("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n  "),_("span",{pre:!0,attrs:{class:"token function-variable function"}},[t._v("drawResult")]),_("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),_("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("function")]),t._v(" "),_("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),_("span",{pre:!0,attrs:{class:"token parameter"}},[t._v("ctx"),_("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" data")]),_("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),_("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    "),_("span",{pre:!0,attrs:{class:"token comment"}},[t._v("/**\n     * this 为 Area 实例，可以获取公共属性\n     * 位置及尺寸参数需要乘以 this.dpi\n     */")]),t._v("\n    ctx"),_("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),_("span",{pre:!0,attrs:{class:"token function"}},[t._v("save")]),_("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),_("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),_("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n    "),_("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// do something")]),t._v("\n    ctx"),_("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),_("span",{pre:!0,attrs:{class:"token function"}},[t._v("restore")]),_("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),_("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),_("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n  "),_("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n"),_("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),_("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),_("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n")])])])]),t._v(" "),_("div",{staticClass:"custom-block tip"},[_("p",{staticClass:"custom-block-title"},[t._v("TIP")]),t._v(" "),_("p",[t._v("颜色参数可配置多个颜色，与 yAxisData 中的每一组数据对应, 如果不匹配将会取对应颜色数组的最后一个值")])]),t._v(" "),_("h2",{attrs:{id:"area-类的公共方法"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#area-类的公共方法"}},[t._v("#")]),t._v(" Area 类的公共方法")]),t._v(" "),_("table",[_("thead",[_("tr",[_("th",[t._v("方法名")]),t._v(" "),_("th",[t._v("描述")]),t._v(" "),_("th",[t._v("入参")]),t._v(" "),_("th",[t._v("返回值")])])]),t._v(" "),_("tbody",[_("tr",[_("td",[t._v("forceUpdate")]),t._v(" "),_("td",[t._v("强制刷新canvas")]),t._v(" "),_("td",[t._v("config:AreaOptions (可选)")]),t._v(" "),_("td",[t._v("--")])]),t._v(" "),_("tr",[_("td",[t._v("updateData")]),t._v(" "),_("td",[t._v("用于更新数据")]),t._v(" "),_("td",[t._v("xAxisData:string[] (可选)"),_("br"),t._v("yAxisData:number[][] (可选)")]),t._v(" "),_("td",[t._v("--")])])])]),t._v(" "),_("p",[_("code",[t._v("forceUpdate")]),t._v(" 方法可在容器尺寸发生变化时调用，该方法将会重新计算尺寸、初始化数据等重新绘制。")]),t._v(" "),_("p",[_("code",[t._v("updateData")]),t._v(" 方法可在异步请求获取到数据后调用，该方法会重新初始化数据后进行绘制。")])])}),[],!1,null,null,null);v.default=s.exports}}]);