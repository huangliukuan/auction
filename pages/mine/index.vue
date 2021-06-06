<template>
	<view class="mine p20">
		<view class="userinfo">
			<image class='avatar' :src="user.avatar" mode=""></image>
			<view class="user">
				<view class="name" @click="getWeChatCode">{{user.wx_nickname}}</view>
				<view class="info">这个人很懒什么也没有留下</view>
			</view>
		</view>

		<view class="box mt20">

			<view class="iconBox">
				<view class="iconItem" @click="toPath" data-url='../myorder/index'>
					<image src="../../static/order.png" mode=""></image>
					<view class="">我的订单</view>
				</view>
				<view class="iconItem" @click="toPath" data-url='../tender/index'>
					<image src="../../static/tender.png" mode=""></image>
					<view class="">我的标书</view>
				</view>
				<view class="iconItem" @click="toPath" data-url='../account/index'>
					<image src="../../static/money.png" mode=""></image>
					<view class="">收款账户</view>
				</view>
				<view class="iconItem" @click="toPath" data-url='../compensation/index'>
					<image src="../../static/pay.png" mode=""></image>
					<view class="">赔付金</view>
				</view>
			</view>
		</view>

		<view class="box mt20">
			<view class="iconTit fw"> 我的服务</view>
			<view class="iconBox">
				<view class="iconItem" @click="toPath" data-url='../message/index'>
					<image src="../../static/notice.png" mode=""></image>
					<view class="">通知消息</view>
				</view>
				<view class="iconItem" @click="toPath" data-url='../coupon/index'>
					<image src="../../static/coupon.png" mode=""></image>
					<view class="">优惠券</view>
				</view>
				<view class="iconItem">
					<image src="../../static/tel.png" mode=""></image>
					<view class="">客服电话</view>
				</view>
				<view class="iconItem" @click="toPath" data-url='../about/index'>
					<image src="../../static/about.png" mode=""></image>
					<view class="">关于我们</view>
				</view>
				<view class="iconItem" @click="toPath" data-url='../feedback/index'>
					<image src="../../static/opinion.png" mode=""></image>
					<view class="">意见反馈</view>
				</view>
			</view>
		</view>

	</view>
</template>

<script>
	export default {
		data() {
			return {
				user: {}
			}
		},
		onLoad() {
			uni.setStorageSync("user",{id:3})
			// this.isWeixin = this.isWechat()
			// if (this.isWeixin) {
			// 	this.checkWeChatCode() //通过微信官方接口获取code之后，会重新刷新设置的回调地址【redirect_uri】
			// }

		},
		onShow() {
			// this.getUser();
		},
		methods: {
			toPath(e) {
				uni.navigateTo({
					url: e.currentTarget.dataset.url
				})
			},
			/*微信登录相关  start*/
			//方法：用来判断是否是微信内置的浏览器
			isWechat() {
				return String(navigator.userAgent.toLowerCase().match(/MicroMessenger/i)) === "micromessenger";
			},
			//方法:用来提取code
			getUrlCode(name) {
				return decodeURIComponent((new RegExp('[?|&]' + name + '=' + '([^&;]+?)(&|#|;|$)').exec(location.href) ||
				[, ''
				])[1].replace(/\+/g, '%20')) || null
			},
			//检查浏览器地址栏中微信接口返回的code
			checkWeChatCode() {
				let code = this.getUrlCode('code');
				if (code) {
					this.getOpenidAndUserinfo(code)
				} else {
					this.getWeChatCode();
				}
			},
			//请求微信接口，用来获取code
			getWeChatCode() {

				let local = encodeURIComponent(window.location.href); //获取当前页面地址作为回调地址
				let appid = 'wx0c64197f049f6d05';
				window.location.href = 'https://open.weixin.qq.com/connect/oauth2/authorize?appid='+appid+'&redirect_uri=' + local + '&response_type=code&scope=snsapi_userinfo&state=1#wechat_redirect'
			},
			//把code传递给后台接口，静默登录
			async getOpenidAndUserinfo(code) {
				await this.$utils.request({
					url: 'login.html',
					data: {
						code
					},
				}).then((res) => {
					this.user = res;
					uni.setStorageSync("user",res)
				})

			},
			/*微信登录相关  end*/

		}
	}
</script>

<style scoped lang="scss">
	.userinfo {
		display: flex;
		padding: 20rpx;
	}

	.avatar {
		width: 108rpx;
		height: 108rpx;
		border-radius: 50%;
		overflow: hidden;
		margin-right: 20rpx;
	}

	.user {
		color: #fff;
		line-height: 56rpx;
	}

	.info {
		font-size: 26rpx;
		color: bbb;
	}

	.iconTit {
		height: 64rpx;
		line-height: 64rpx;
		font-size: 36rpx;
		color: #333;
	}

	.iconBox {
		width: 100%;
		height: auto;
		display: flex;
		flex-wrap: wrap;
	}

	.iconItem {
		width: 25%;
		margin-top: 20rpx;
		text-align: center;
		font-size: 28rpx;
		color: #333;

		image {
			width: 90rpx;
			height: 90rpx;
		}
	}
</style>
