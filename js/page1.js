/**
 * Created by Lee on 2019/7/17.
 */
import "../css/page1.css"
import "../css/page1.less"
import {baseUrl} from '../base/config/index.js'
import Common from '../base/common/index.js'
import "./head.js"
// import {Device,Request,Native,Other,Str,Time,Url} from '../base/utils/index.js'
import echarts from "echarts/lib/echarts"
import "echarts/lib/chart/bar"
import 'echarts/lib/component/tooltip'
import 'echarts/lib/component/title'
console.log(baseUrl)

$(".testless").css("backgroundColor","green");

var echart1 = echarts.init(document.getElementById("aa"));
echart1.setOption({
    title: {
        text: 'ECharts 入门示例'
    },
    tooltip: {},
    xAxis: {
        data: ['衬衫', '羊毛衫', '雪纺衫', '裤子', '高跟鞋', '袜子']
    },
    yAxis: {},
    series: [{
        name: '销量',
        type: 'bar',
        data: [5, 20, 36, 10, 10, 20]
    }]
});
console.log(echart1);