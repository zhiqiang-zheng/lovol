(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-f6179fe2"],{"021d":function(e,a,t){"use strict";t.r(a);var n=function(){var e=this,a=e.$createElement,t=e._self._c||a;return t("div",{staticClass:"page page-vis"},[t("visualizationMapInfo",{attrs:{type:"serviceCar",visInfo:e.visInfo,geoCoordMapData:e.geoCoordMapData,currentMarker:e.currentMarker},on:{onChangeSelect:e.onChangeSelect}}),t("div",{staticClass:"echarts-container"},[t("lineChart")],1)],1)},r=[],u=(t("d81d"),t("a9e3"),t("9e25")),c=t("3f66"),i=t("9bb4"),o={name:"serviceCarVisualization",data:function(){return{visInfo:{cardInfo:{name:"服务车数量",number:2409},select:{name:"服务车",options:[]},baseInfo:[{name:"服务车编号",value:"SVJ087080"},{name:"服务车型号",value:"宝马X6"},{name:"服务车车牌",value:"粤G·480888"},{name:"服务商名称",value:"厘米那那中欧集团股份有限公司"},{name:"所属市场部",value:"海上市场部"},{name:"技能等级",value:"3",type:"rate"},{name:"服务车数量",value:"123"}]},geoCoordMapData:[],currentMarker:[]}},created:function(){var e=this;Object(i["f"])().then((function(a){"true"===a.code&&(a.data.map((function(a){e.visInfo.select.options.push({value:a.id,label:a.serviceLicensePlate}),e.geoCoordMapData.push({name:a.city,value:[a.longitude,a.latitude,Number(a.serviceNumber)||0]})})),e.visInfo.baseInfo=[{name:"服务车编号",value:a.data[0].serviceId},{name:"服务车型号",value:a.data[0].serviceType},{name:"服务车车牌",value:a.data[0].serviceLicensePlate},{name:"服务商名称",value:a.data[0].serviceCompanyName},{name:"所属市场部",value:a.data[0].belongMarket},{name:"技能等级",value:a.data[0].skillLevels||0,type:"rate"},{name:"服务车数量",value:a.data[0].serviceNumber}],e.currentMarker=[a.data[0].longitude,a.data[0].latitude])}))},components:{visualizationMapInfo:u["a"],lineChart:c["a"]},methods:{onChangeSelect:function(e){var a=this;Object(i["e"])({id:e}).then((function(e){"true"===e.code&&(a.visInfo.baseInfo=[{name:"服务车编号",value:e.data.serviceId},{name:"服务车型号",value:e.data.serviceType},{name:"服务车车牌",value:e.data.serviceLicensePlate},{name:"服务商名称",value:e.data.serviceCompanyName},{name:"所属市场部",value:e.data.belongMarket},{name:"技能等级",value:e.data.skillLevels||0,type:"rate"},{name:"服务车数量",value:e.data.serviceNumber}],a.currentMarker=[e.data.longitude,e.data.latitude])}))}}},s=o,l=t("2877"),d=Object(l["a"])(s,n,r,!1,null,"31286826",null);a["default"]=d.exports},"9bb4":function(e,a,t){"use strict";t.d(a,"c",(function(){return r})),t.d(a,"d",(function(){return u})),t.d(a,"h",(function(){return c})),t.d(a,"b",(function(){return i})),t.d(a,"a",(function(){return o})),t.d(a,"f",(function(){return s})),t.d(a,"e",(function(){return l})),t.d(a,"g",(function(){return d}));var n=t("b775");function r(e){return Object(n["a"])({url:"/service-car/select-page",method:"get",params:e})}function u(e){return Object(n["a"])({url:"/service-car/select-like-page",method:"post",params:e})}function c(e){return Object(n["a"])({url:"/service-car/insert",method:"post",data:[e]})}function i(e){return Object(n["a"])({url:"/service-car/update",method:"post",data:e})}function o(e){return Object(n["a"])({url:"/service-car/delete",method:"post",data:[e]})}function s(e){return Object(n["a"])({url:"/service-car/select-list",method:"get",params:e})}function l(e){return Object(n["a"])({url:"/service-car/select",method:"get",params:e})}function d(e){return Object(n["a"])({url:"/service-car/select-like-v2",method:"get",params:e})}}}]);