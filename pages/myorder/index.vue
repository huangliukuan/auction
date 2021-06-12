<template>
	<view class="myorder">
		<view class="tabTop">
			<view :class="ai == 0 && 'actTab'" @click="changeTab" data-status="0">全部</view>
			<view :class="ai == 1 && 'actTab'" @click="changeTab" data-status="1">待审核</view>
			<view :class="ai == 2 && 'actTab'" @click="changeTab" data-status="2">拍牌中</view>
			<view :class="ai == 3 && 'actTab'" @click="changeTab" data-status="3">待付款</view>
			<view :class="ai == 4 && 'actTab'" @click="changeTab" data-status="4">已完成</view>
		</view>


		<view class="nodata" v-if="list.length<1">
			<image src="../../static/nodata.png" mode=""></image>
			<view class="">暂无订单</view>
		</view>

		<view class="p20" v-else>
			<view class="orderBox mb20 box" v-for="(item,index) in list" :key="index">
				<view class="orderTop">
					<view class="orderTit">{{item.tc_title}}</view>
					<view class="">{{item.addtime}}</view>
				</view>
				<view class="orderInfo">{{item.tc_desc}}</view>
				<view class="orderInfo">团队：{{item.team_name}}</view>
				<view class="orderInfo">标书号：{{item.tbcard}}</view>
				<view class="orderInfo">发票：{{item.invoice == 0 ? "不开发票":"开发票" }}</view>
				<view class="orderBtn">
					<view class="btn qx" v-if="item.status == 0" @click="cancelOrder" :data-id="item.id">取消订单</view>
					<view class="btn zf" v-if="item.status == 2" @click="toPaySubmit" :data-id="item.id"
						:data-money="item.total">立即支付</view>
					<view class="btn pj" v-if="item.status == 3 && item.is_comment != 1" @click="toPath"
						:data-url="'../assess/index?id='+item.id">立即评价</view>
				</view>
			</view>
		</view>

		<view class="payBox" v-if="showPay">
			<view class="payTit">订单确认</view>
			<view class="dfjb payItem">
				<view class="f28">总金额</view>
				<view class="f28">{{allMoney}}元</view>
			</view>
			<picker mode="selector" :range="couponList" @change="selectorCoupon">
				<view class="dfjb payItem">
					<view class="f28">优惠券</view>

					<view class="uni-input f28"> {{moneyList[cpi] ? `-${moneyList[cpi]}元` : noCoupon ? noCoupon :'请选择' }} </view>

				</view>
			</picker>
			<view class="dfjb payItem">
				<view class="">需支付</view>
				<view class="">{{payMoney}}元</view>
			</view>
			<view class="dfjb payBtn">
				<view class="w50 br1" @click="cancelPay">取消</view>
				<view class="w50 fblue" @click="toPay">支付</view>
			</view>
		</view>

	</view>
</template>

<script>
	import wxPayInvoke from "../../core/jwx.js"

	export default {
		data() {
			return {
				ai: 0,
				uid: uni.getStorageSync("user").id,
				list: [],
				showPay: false,
				noCoupon:'',
				couponArr:[],
				couponList: [],
				moneyList: [],
				cpi: -1,
				allMoney: 0,
				payMoney: 0,
				pid:0,
			}
		},
		onShow() {
			this.getData()
		},
		methods: {
			async getData() {
				uni.showLoading({
					title: "加载中..."
				})
				let _this = this;
				await _this.$utils.request({
					url: 'orderList.html',
					method: "POST",
					data: {
						uid: _this.uid,
						status: _this.ai,
					}
				}).then((res) => {
					_this.list = res;
					uni.hideLoading()
				})
			},
			
			cancelPay(){
				this.showPay = false;
				this.cpi = -1;
			},
			
			// 订单确认

			toPaySubmit(e) {
				this.getCoupon(e.currentTarget.dataset.id);
				this.pid = e.currentTarget.dataset.id;
				this.allMoney = e.currentTarget.dataset.money;
				this.payMoney = e.currentTarget.dataset.money;
				this.showPay = true;
			},

			async getCoupon(id) {
				let _this = this;
				await _this.$utils.request({
					url: 'paySelCoupon.html',
					data: {
						id,
					}
				}).then((res) => {
					if (res.length > 0) {
						let couponList = [] , moneyList=[];
						_this.couponArr = res;
						res.forEach((item, index) => {
							couponList.push(`满${item.order_money}减${item.money}`);
							moneyList.push( Number(item.money).toFixed(2))
							_this.couponList = couponList;
							_this.moneyList = moneyList;
						})
					}else{
						_this.noCoupon = "无优惠券";
					}
				})
			},

			// 使用优惠券
			selectorCoupon(e) {
				this.cpi = e.detail.value;
				this.payMoney = (this.allMoney - this.moneyList[e.detail.value]).toFixed(2);
			},

			// 下单
			async toPay(e) {
				let _this = this, coupon_id;
				if(_this.cpi == -1){
					coupon_id = ""
				}else{
					coupon_id = _this.couponArr[_this.cpi].id;
				}
				await _this.$utils.request({
					url: 'getPrepayId.html',
					method: "GET",
					data: {
						uid: _this.uid,
						oid: _this.pid,
						coupon_id,
						amount:_this.payMoney
					}
				}).then((res) => {
					return wxPayInvoke(res)
				}).then((res) => {
					this.showPay = false;
					uni.showToast({
						title: "支付成功",
						icon: 'none'
					})
					setTimeout(() => {
						this.getData()
					}, 2000)
				})
			},

			// 取消订单
			cancelOrder(e) {
				let _this = this;

				uni.showModal({
					title: "提示",
					content: "确实取消？",
					async success(res) {
						if (res.confirm) {
							await _this.$utils.request({
								url: 'cancelOrder.html',
								method: "POST",
								data: {
									id: e.currentTarget.dataset.id
								}
							}).then((res) => {
								uni.showToast({
									title: "取消成功"
								})
								_this.getData()
							})
						}
					}
				})


			},

			toPath(e) {
				uni.navigateTo({
					url: e.currentTarget.dataset.url
				})
			},
			changeTab(e) {
				this.ai = e.currentTarget.dataset.status;
				this.getData()
			},
		},
		components: {

		}
	}
</script>

<style scoped lang="scss">
	uni-page-body {
		height: 100%;

		.myorder {
			width: 100%;
			min-height: 100%;
			background-color: #f1f1f1;

			.tabTop {
				height: 96rpx;
				line-height: 96rpx;
				display: flex;
				justify-content: space-around;
				align-items: center;
				background-color: #fff;
			}

			.actTab {
				color: #007AFF;
				border-bottom: 4rpx solid #007AFF;
			}

			.orderTop {
				height: 64rpx;
				line-height: 64rpx;
				display: flex;
				justify-content: space-between;
				font-size: 26rpx;
				color: #999;
			}

			.orderTit {
				font-size: 36rpx;
				color: #333;
				font-weight: bold;
			}

			.orderInfo {
				font-size: 28rpx;
				color: #666;
			}

			.orderBtn {
				height: 86rpx;
				display: flex;
				justify-content: flex-end;
				align-items: center;
			}

			.btn {
				height: 54rpx;
				line-height: 54rpx;
				border-radius: 50rpx;
				padding: 0 20rpx;
				font-size: 28rpx;
				color: #fff;
			}

			.qx {
				background-color: #69db7c;
			}

			.zf {
				background-color: #4dabf7;
			}

			.zf {
				background-color: #ff922b;
			}

			.payBox {
				width: 70%;
				height: auto;
				background-color: #fff;
				box-shadow: 0 0 6rpx 6rpx #ccc;
				border-radius: 20rpx;
				position: fixed;
				top: 50%;
				left: 50%;
				transform: translate(-50%, -50%);
			}

			.payTit {
				height: 84rpx;
				line-height: 84rpx;
				text-align: center;
				font-weight: bold;
			}

			.dfjb {
				display: flex;
				justify-content: space-between;
			}

			.payItem {
				height: 84rpx;
				line-height: 84rpx;
				border-bottom: 1rpx solid #f1f1f1;
				padding: 0 20rpx;
			}

			.payBtn {
				height: 96rpx;
				line-height: 96rpx;
				text-align: center;
				color: #333;
			}


			.fblue {
				color: #4dabf7;
			}


		}
	}
</style>
