(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["pages-mine-index"],{"0322":function(t,e,i){t.exports=i.p+"static/img/coupon.af16986d.png"},"0a3a":function(t,e,i){var n=i("24fb");e=n(!1),e.push([t.i,'@charset "UTF-8";\r\n/**\r\n * 这里是uni-app内置的常用样式变量\r\n *\r\n * uni-app 官方扩展插件及插件市场（https://ext.dcloud.net.cn）上很多三方插件均使用了这些样式变量\r\n * 如果你是插件开发者，建议你使用scss预处理，并在插件代码中直接使用这些变量（无需 import 这个文件），方便用户通过搭积木的方式开发整体风格一致的App\r\n *\r\n */\r\n/**\r\n * 如果你是App开发者（插件使用者），你可以通过修改这些变量来定制自己的插件主题，实现自定义主题功能\r\n *\r\n * 如果你的项目同样使用了scss预处理，你也可以直接在你的 scss 代码中使用如下变量，同时无需 import 这个文件\r\n */\r\n/* 颜色变量 */\r\n/* 行为相关颜色 */\r\n/* 文字基本颜色 */\r\n/* 背景颜色 */\r\n/* 边框颜色 */\r\n/* 尺寸变量 */\r\n/* 文字尺寸 */\r\n/* 图片尺寸 */\r\n/* Border Radius */\r\n/* 水平间距 */\r\n/* 垂直间距 */\r\n/* 透明度 */\r\n/* 文章场景相关 */body[data-v-abee8e14]{height:auto!important}.userinfo[data-v-abee8e14]{display:-webkit-box;display:-webkit-flex;display:flex;padding:%?20?%}.avatar[data-v-abee8e14]{width:%?108?%;height:%?108?%;border-radius:50%;overflow:hidden;margin-right:%?20?%}.user[data-v-abee8e14]{color:#fff;line-height:%?56?%}.info[data-v-abee8e14]{font-size:%?26?%;color:bbb}.iconTit[data-v-abee8e14]{height:%?64?%;line-height:%?64?%;font-size:%?36?%;color:#333}.iconBox[data-v-abee8e14]{width:100%;height:auto;display:-webkit-box;display:-webkit-flex;display:flex;-webkit-flex-wrap:wrap;flex-wrap:wrap}.iconItem[data-v-abee8e14]{width:25%;margin-top:%?20?%;text-align:center;font-size:%?28?%;color:#333}.iconItem uni-image[data-v-abee8e14]{width:%?90?%;height:%?90?%}',""]),t.exports=e},"15db":function(t,e,i){t.exports=i.p+"static/img/notice.a32336e8.png"},"21ae":function(t,e,i){t.exports=i.p+"static/img/tel.2f1e78d4.png"},3055:function(t,e,i){"use strict";var n;i.d(e,"b",(function(){return a})),i.d(e,"c",(function(){return o})),i.d(e,"a",(function(){return n}));var a=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("v-uni-view",{staticClass:"mine p20"},[n("v-uni-view",{staticClass:"userinfo"},[n("v-uni-image",{staticClass:"avatar",attrs:{src:t.user.avatar,mode:""}}),n("v-uni-view",{staticClass:"user"},[n("v-uni-view",{staticClass:"name",on:{click:function(e){arguments[0]=e=t.$handleEvent(e),t.getWeChatCode.apply(void 0,arguments)}}},[t._v(t._s(t.user.wx_nickname))]),n("v-uni-view",{staticClass:"info"},[t._v("这个人很懒什么也没有留下")])],1)],1),n("v-uni-view",{staticClass:"box mt20"},[n("v-uni-view",{staticClass:"iconBox"},[n("v-uni-view",{staticClass:"iconItem",attrs:{"data-url":"../myorder/index"},on:{click:function(e){arguments[0]=e=t.$handleEvent(e),t.toPath.apply(void 0,arguments)}}},[n("v-uni-image",{attrs:{src:i("c214"),mode:""}}),n("v-uni-view",{},[t._v("我的订单")])],1),n("v-uni-view",{staticClass:"iconItem",attrs:{"data-url":"../tender/index"},on:{click:function(e){arguments[0]=e=t.$handleEvent(e),t.toPath.apply(void 0,arguments)}}},[n("v-uni-image",{attrs:{src:i("6201"),mode:""}}),n("v-uni-view",{},[t._v("我的标书")])],1),n("v-uni-view",{staticClass:"iconItem",attrs:{"data-url":"../account/index"},on:{click:function(e){arguments[0]=e=t.$handleEvent(e),t.toPath.apply(void 0,arguments)}}},[n("v-uni-image",{attrs:{src:i("3996"),mode:""}}),n("v-uni-view",{},[t._v("收款账户")])],1),n("v-uni-view",{staticClass:"iconItem",attrs:{"data-url":"../compensation/index"},on:{click:function(e){arguments[0]=e=t.$handleEvent(e),t.toPath.apply(void 0,arguments)}}},[n("v-uni-image",{attrs:{src:i("afea"),mode:""}}),n("v-uni-view",{},[t._v("赔付金")])],1)],1)],1),n("v-uni-view",{staticClass:"box mt20"},[n("v-uni-view",{staticClass:"iconTit fw"},[t._v("我的服务")]),n("v-uni-view",{staticClass:"iconBox"},[n("v-uni-view",{staticClass:"iconItem",attrs:{"data-url":"../message/index"},on:{click:function(e){arguments[0]=e=t.$handleEvent(e),t.toPath.apply(void 0,arguments)}}},[n("v-uni-image",{attrs:{src:i("15db"),mode:""}}),n("v-uni-view",{},[t._v("通知消息")])],1),n("v-uni-view",{staticClass:"iconItem",attrs:{"data-url":"../coupon/index"},on:{click:function(e){arguments[0]=e=t.$handleEvent(e),t.toPath.apply(void 0,arguments)}}},[n("v-uni-image",{attrs:{src:i("0322"),mode:""}}),n("v-uni-view",{},[t._v("优惠券")])],1),n("v-uni-view",{staticClass:"iconItem"},[n("v-uni-image",{attrs:{src:i("21ae"),mode:""}}),n("v-uni-view",{},[t._v("客服电话")])],1),n("v-uni-view",{staticClass:"iconItem",attrs:{"data-url":"../about/index"},on:{click:function(e){arguments[0]=e=t.$handleEvent(e),t.toPath.apply(void 0,arguments)}}},[n("v-uni-image",{attrs:{src:i("cf26"),mode:""}}),n("v-uni-view",{},[t._v("关于我们")])],1),n("v-uni-view",{staticClass:"iconItem",attrs:{"data-url":"../feedback/index"},on:{click:function(e){arguments[0]=e=t.$handleEvent(e),t.toPath.apply(void 0,arguments)}}},[n("v-uni-image",{attrs:{src:i("c16c"),mode:""}}),n("v-uni-view",{},[t._v("意见反馈")])],1)],1)],1)],1)},o=[]},3996:function(t,e,i){t.exports=i.p+"static/img/money.c0b6a422.png"},6008:function(t,e,i){"use strict";var n=i("b78f"),a=i.n(n);a.a},6201:function(t,e,i){t.exports=i.p+"static/img/tender.b21b7e42.png"},"7d1a":function(t,e,i){"use strict";i.r(e);var n=i("e2fd"),a=i.n(n);for(var o in n)"default"!==o&&function(t){i.d(e,t,(function(){return n[t]}))}(o);e["default"]=a.a},afea:function(t,e,i){t.exports=i.p+"static/img/pay.18e0a7a0.png"},b78f:function(t,e,i){var n=i("0a3a");"string"===typeof n&&(n=[[t.i,n,""]]),n.locals&&(t.exports=n.locals);var a=i("4f06").default;a("244caea7",n,!0,{sourceMap:!1,shadowMode:!1})},c16c:function(t,e,i){t.exports=i.p+"static/img/opinion.fa25c844.png"},c214:function(t,e){t.exports="data:image/png;base64,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"},cf26:function(t,e,i){t.exports=i.p+"static/img/about.78f56e00.png"},e2fd:function(t,e,i){"use strict";var n=i("4ea4");i("4d63"),i("ac1f"),i("25f0"),i("466d"),i("5319"),Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0,i("96cf");var a=n(i("1da1")),o={data:function(){return{user:{}}},onLoad:function(){this.isWeixin=this.isWechat(),this.isWeixin&&this.checkWeChatCode()},onShow:function(){},methods:{toPath:function(t){uni.navigateTo({url:t.currentTarget.dataset.url})},isWechat:function(){return"micromessenger"===String(navigator.userAgent.toLowerCase().match(/MicroMessenger/i))},getUrlCode:function(t){return decodeURIComponent((new RegExp("[?|&]"+t+"=([^&;]+?)(&|#|;|$)").exec(location.href)||[,""])[1].replace(/\+/g,"%20"))||null},checkWeChatCode:function(){var t=this.getUrlCode("code");t?this.getOpenidAndUserinfo(t):this.getWeChatCode()},getWeChatCode:function(){var t=encodeURIComponent(window.location.href),e="wx0c64197f049f6d05";window.location.href="https://open.weixin.qq.com/connect/oauth2/authorize?appid="+e+"&redirect_uri="+t+"&response_type=code&scope=snsapi_userinfo&state=1#wechat_redirect"},getOpenidAndUserinfo:function(t){var e=this;return(0,a.default)(regeneratorRuntime.mark((function i(){return regeneratorRuntime.wrap((function(i){while(1)switch(i.prev=i.next){case 0:return i.next=2,e.$utils.request({url:"login.html",data:{code:t}}).then((function(t){e.user=t,uni.setStorageSync("user",t)}));case 2:case"end":return i.stop()}}),i)})))()}}};e.default=o},e86e:function(t,e,i){"use strict";i.r(e);var n=i("3055"),a=i("7d1a");for(var o in a)"default"!==o&&function(t){i.d(e,t,(function(){return a[t]}))}(o);i("6008");var r,c=i("f0c5"),s=Object(c["a"])(a["default"],n["b"],n["c"],!1,null,"abee8e14",null,!1,n["a"],r);e["default"]=s.exports}}]);