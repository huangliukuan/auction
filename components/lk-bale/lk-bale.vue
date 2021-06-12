<template>
	<view class="bales ">
		<view class="box baleItem mb20" v-for="(item,index) in bale" :key="index"  @click="toPath" :data-url="'/pages/baledetail/index?type=one&id='+item.id">
			<view class="baleTop">
				<view class="baleLeft">
					<view class="baleTit">{{item.tc_title}}</view>
					<view class="">{{item.tc_desc}}</view>
				</view>
				<view class="baleBtn" @click.stop="toPath" :data-url="'/pages/ordersubmit/index?id='+item.id+'&type=one'" >立即下单</view>
			</view>
			<view class="baleBottom">
				<view class="baleBtmItem">
					<view class="">代拍套餐价格</view>
					<view class="price">￥{{item.tc_price}}</view>
				</view>
				<view class="line"></view>
				<view class="baleBtmItem">
					<view class="">总赔付金额</view>
					<view class="price">￥{{item.tc_out_price}}</view>
				</view>
			</view>
		</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {

			}
		},
		props:{
			bale:{
				type:Array,
				default:()=>[],
			}
		},
		methods:{
			toPath(e){
				
				let user = uni.getStorageSync("user");
				if(user){
					uni.navigateTo({
						url:e.currentTarget.dataset.url
					})
				}else{
					uni.showToast({
						title:"请先登录",
						icon:"none"
					})
				}
			}
		}
	}
</script>

<style scoped lang="scss">
	.baleTop {
		display: flex;
		justify-content: space-between;
		align-items: center;
	}

	.baleLeft {
		line-height: 56rpx;
		color: #666;
		font-size: 26rpx;
	}

	.baleTit {
		font-size: 36rpx;
		color: #333;
	}

	.baleBtn {
		font-size: 28rpx;
		border-radius: 50rpx;
		color: #fff;
		padding: 6rpx 16rpx;
		background: linear-gradient(to right,#66d9e8, #4dabf7);
	}
	.baleBottom{
		margin: 20rpx 0;
		display: flex;
		align-items: center;
	}
	.baleBtmItem{
		width: 45%;
		font-size: 28rpx;
		color: #666;
	}
	.line{
		width: 2rpx;
		height: 84rpx;
		margin:0 4%;
		background-color: #ccc;
	}
	.price{
		margin-top: 20rpx;
		font-size: 38rpx;
		font-weight: bold;
		color: #f76707;
	}
</style>
