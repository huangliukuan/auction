let wx = require('jweixin-module')  

function wxPayInvoke(payRes) {
  return new Promise((resolve,reject)=>{
		let url = window.location.href, _this = this;
		wx.config({
			debug:false, //开启调试模式，调用的所有api的返回值会在客户端alert出现，若要查看传入的参数，可以在pc端打开，参数信息会通过log打出，仅在pc端时才会打印
			appId:payRes.appId,
			timestamp:payRes.timeStamp,
			nonceStr:payRes.nonceStr,
			signature:payRes.paySign,
			jsApiList:["chooseWxPay"],
			openId:payRes.openid
		})
		wx.ready(function() {
			wx.chooseWXPay({
				appId: payRes.appId,
				timestamp: payRes.timeStamp, // 支付签名时间戳，注意微信jssdk中的所有使用timestamp字段均为小写。但最新版的支付后台生成签名使用的timeStamp字段名需大写其中的S字符
				nonceStr: payRes.nonceStr, // 支付签名随机串，不长于 32
				package: payRes.package, // 统一支付接口返回的prepay_id参数值，提交格式如：prepay_id=\*\*\*）
				signType: payRes.signType, // 签名方式，默认为'SHA1'，使用新版支付需传入'MD5'
				paySign: payRes.paySign, // 支付签名
				success: function(res) {
					return resolve(res);
				},
				cancel: function(res) {
					//提示引用的是mint-UI里toast
					setTimeout(() => {
						uni.showToast({
							icon: 'none',
							title: '已取消支付'
						})
						
					}, 2000)
				},
				fail: function(res) {						
					setTimeout(() => {
						uni.showToast({
							icon: 'none',
							title: '支付失败，请重试'
						})
					}, 2000)
				}
			});
		});
	})
}

export default wxPayInvoke