<template>
	<view class="compensation p20 ">
		<view class="comTop box mb20 tc">
			<view class="comTit">总金额 <text class="comPrice">{{all_money}}元</text> </view>
			<view class="conInfo">
				<view class="infoItem">
					<view class="">已提现</view>
					<view class="alPrice">{{draw_money}}元</view>
				</view>
				<view class="line"></view>
				<view class="infoItem">
					<view class="">待赔付</view>
					<view class="arPrice">{{wait_money}}元</view>
				</view>
			</view>
		</view>


		<view class="box">
			<view class="record">赔付记录</view>
			<block v-if="list.length > 0">
				<view class="recordItem"  v-for="(item,index) in list" :key="index">
					<view class="">
						<view class="">{{item.tc_title}}</view>
						<view class="times">{{item.pftime}}</view>
					</view>
					<view class="rPrice">{{item.out_total}}元</view>
				</view>
			</block>
			
			<view v-else class="norecord">暂无记录</view>
		</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				uid:uni.getStorageSync("user").id,
				all_money:0,
				draw_money:0,
				wait_money:0,
				list:[],
			}
		},
		onShow() {
			this.getData();
		},
		methods: {
			async getData(){
				let _this = this;
			  await	_this.$utils.request({
					url:'compensation.html',
					data:{
						uid:_this.uid,
					}
				}).then((res)=>{
					_this.all_money = res.all_money;
					_this.draw_money = res.draw_money;
					_this.wait_money = res.wait_money;
					_this.list = res.list;
				})
			}
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
