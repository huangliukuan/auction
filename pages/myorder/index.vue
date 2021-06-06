<template>
	<view class="myorder">
		<view class="tabTop">
			<view class="actTab">全部</view>
			<view class="">待审核</view>
			<view class="">拍牌中</view>
			<view class="">待付款</view>
			<view class="">已完成</view>
		</view>


		<view class="p20">
			<view class="orderBox box">
				<view class="orderTop">
					<view class="orderTit">5800套餐</view>
					<view class="">2021-01-25 12:00</view>
				</view>
				<view class="orderInfo">超值5800元套餐，6次不中赔付1000元</view>
				<view class="orderInfo">团队：官方优选</view>
				<view class="orderInfo">标书号：31234234242423423</view>
				<view class="orderBtn">
					<view class="btn qx">取消订单</view>
					<view class="btn zf">立即支付</view>
					<view class="btn pj" @click="toPath" data-url='../assess/index'>立即评价</view>
				</view>
			</view>
		</view>

		<view class="nodata">
			<image src="../../static/nodata.png" mode=""></image>
			<view class="">暂无订单</view>
		</view>


	</view>
</template>

<script>
	export default {
		data() {
			return {

			}
		},
		methods: {
			toPath(e){
				uni.navigateTo({
					url:e.currentTarget.dataset.url
				})
			}
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
			
			.orderTop{
				height: 64rpx;
				line-height: 64rpx;
				display: flex;
				justify-content: space-between;
				font-size: 26rpx;
				color: #999;
			}
			.orderTit{
				font-size: 36rpx;
				color: #333;
				font-weight: bold;
			}
			.orderInfo{
				font-size: 28rpx;
				color: #666;
			}
			.orderBtn{
				height: 86rpx;
				display: flex;
				justify-content: flex-end;
				align-items: center;
			}
			.btn{
				height: 54rpx;
				line-height: 54rpx;
				border-radius: 50rpx;
				padding: 0 20rpx;
				font-size: 28rpx;
				color: #fff;
			}
			.qx{
				background-color: #69db7c;
			}
			.zf{
				background-color: #4dabf7;
			}
			.pj{
				background-color: #ff922b;
			}
		}
	}
</style>
