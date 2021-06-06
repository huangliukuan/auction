<template>
	<view class="coupon">
		<view class="couponSeach">
			<input type="text" value="" placeholder="请输入优惠券兑换码" />
			<view class="couponBtn">兑换</view>
		</view>

		<view class="p20">
			<view class="couponItem">
				<view class="couponTop flex">
					<view class="couponLeft">
						<view class="tit">代金券</view>
						<view class="cPrice">1000元</view>
					</view>
					<view class="couponRight">
						<view class="">满5000减1000元</view>
						<view class="">兑换码：SDEDF7SD8</view>
					</view>
				</view>
				<view class="lines">
					<view class="round first"></view>
					<view class="round last"></view>
				</view>
				<view class="times">有效期：2020-01-01至2022-12-31</view>
			</view>
		</view>




		<view class="nodata">
			<image src="../../static/nodata.png" mode=""></image>
			<view class="">暂无优惠券,赶紧参加活动领取吧</view>
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
	uni-page-body {
		height: 100%;
		.coupon {
			width: 100%;
			min-height: 100%;
			background-color: #fff;
			.couponSeach {
				width: 100%;
				height: 120rpx;
				display: flex;
				justify-content: space-between;
				padding: 20rpx;
				box-shadow: 0 3rpx 6rpx 6rpx #f1f1f1;

				input {
					flex: 1;
					height: 80rpx;
					border: 1rpx solid #ccc;
					border-radius: 10rpx;
					padding: 0 20rpx;
				}

				.couponBtn {
					width: 126rpx;
					height: 80rpx;
					line-height: 80rpx;
					text-align: center;
					background-color: #1EBEEF;
					color: #fff;
					margin-left: 20rpx;
					border-radius: 10rpx;
				}
			}

			.couponItem {
				border-radius: 10rpx;
				padding: 20rpx;
				color: #fff;
				background: -webkit-linear-gradient(bottom, #d1913c, #ffd194);
				background: linear-gradient(0deg, #d1913c, #ffd194);
			}

			.couponLeft {
				width: 160rpx;
				text-align: center;
			}

			.tit {
				height: 44rpx;
				line-height: 44rpx;
				font-size: 26rpx;
			}

			.cPrice {
				height: 64rpx;
				line-height: 64rpx;
				font-size: 36rpx;
				font-weight: bold;
				color: #e8590c;
			}

			.couponRight {
				height: 56rpx;
				line-height: 56rpx;
				margin-left: 10rpx;
			}

			.lines {
				margin: 10rpx 0;
				border-top: 1rpx dotted #fff;
				position: relative;
			}

			.round {
				display: block;
				content: "";
				width: 30rpx;
				height: 30rpx;
				background-color: #fff;
				position: absolute;
				top: 0;
				-webkit-transform: translateY(-50%);
				transform: translateY(-50%);
				z-index: 1;
				border-radius: 50%;
			}

			.first {
				left: -30rpx;
			}

			.last {
				right: -30rpx
			}

			.times {
				font-size: 13px;
				margin-left: 10px;
			}
		}
	}
</style>
