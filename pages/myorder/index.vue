<template>
	<view class="myorder">
		<view class="tabTop">
			<view :class="ai == 0 && 'actTab'" @click="changeTab" data-status="0">全部</view>
			<view :class="ai == 1 && 'actTab'" @click="changeTab" data-status="1">待审核</view>
			<view :class="ai == 2 && 'actTab'" @click="changeTab" data-status="2">拍牌中</view>
			<view :class="ai == 3 && 'actTab'" @click="changeTab" data-status="3">待付款</view>
			<view :class="ai == 4 && 'actTab'" @click="changeTab" data-status="4">已完成</view>
		</view>


		<view class="nodata"v-if="list.length<1">
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
					<view class="btn zf" v-if="item.status == 2">立即支付</view>
					<view class="btn pj" v-if="item.status == 3" @click="toPath" data-url='../assess/index'>立即评价</view>
				</view>
			</view>
		</view>


	</view>
</template>

<script>
	export default {
		data() {
			return {
				ai: 0,
				uid: uni.getStorageSync("user").id,
				list: [],
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
			// 取消订单
			cancelOrder(e){
				let _this = this;
				
				uni.showModal({
					title:"提示",
					content:"确实取消？",
					async success(res) {
						if(res.confirm){
							await _this.$utils.request({
								url:'cancelOrder.html',
								method:"POST",
								data:{
									id:e.currentTarget.dataset.id
								}
							}).then((res)=>{
								uni.showToast({
									title:"取消成功"
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

			.pj {
				background-color: #ff922b;
			}
		}
	}
</style>
