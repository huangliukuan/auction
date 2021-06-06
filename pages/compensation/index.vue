<template>
	<view class="compensation p20 ">
		<view class="comTop box mb20 tc">
			<view class="comTit">总金额 <text class="comPrice">0元</text> </view>
			<view class="conInfo">
				<view class="infoItem">
					<view class="">已提现</view>
					<view class="alPrice">0元</view>
				</view>
				<view class="line"></view>
				<view class="infoItem">
					<view class="">待赔付</view>
					<view class="arPrice">0元</view>
				</view>
			</view>
		</view>


		<view class="box">
			<view class="record">赔付记录</view>
			<view class="recordItem">
				<view class="">
					<view class="">官方优选</view>
					<view class="times">2020-02-02 12:00</view>
				</view>
				<view class="rPrice">400元</view>
			</view>
			<view class="recordItem">
				<view class="">
					<view class="">官方优选</view>
					<view class="times">2020-02-02 12:00</view>
				</view>
				<view class="rPrice">400元</view>
			</view>
			<view class="norecord">暂无记录</view>
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

		},
		components: {

		}
	}
</script>

<style scoped lang="scss">
	.comTit {
		height: 96rpx;
		line-height: 96rpx;
		font-size: 36rpx;
		color: #333;
		font-weight: bold;
	}

	.comPrice {
		color: #f76707;
	}

	.conInfo {
		line-height: 64rpx;
		font-size: 26rpx;
		color: #777;
		display: flex;
		justify-content: space-between;
		align-items: center;
	}

	.infoItem {
		width: 49%;
	}

	.line {
		width: 1px;
		height: 50px;
		background-color: #ccc;
		margin-top: 10px;
	}

	.alPrice {
		font-size: 32rpx;
		color: #51cf66;
	}

	.arPrice {
		font-size: 32rpx;
		color: #f06595;
	}

	.recordItem {
		height: 108rpx;
		line-height: 56rpx;
		display: flex;
		justify-content: space-between;
		align-items: center;
		border-bottom: 1px solid #ccc;
		margin-top: 20rpx;
	}
	.times{
		font-size: 28rpx;
		color: #888;
	}
	.rPrice{
		font-weight: bold;
		color: #f76707;
	}
	.norecord{
		height: 96rpx;
		line-height: 96rpx;
		text-align: center;
		color: #666;
	}
</style>
