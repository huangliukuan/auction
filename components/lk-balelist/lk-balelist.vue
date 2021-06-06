<template>
	<view class="mask p20 balelist">
		<view class="baleBox">
			<view class="baleTitBox">
				<view class="baleTit">选择套餐</view>
				<image class="close" @click="close" src="../../static/close1.png" mode=""></image>
			</view>
			<view class="baleListBox">
				<view class="baleItem actBaleItem">
					<view class="baleItemTit">4800元低价套餐</view>
					<view class="baleItemInfo">超值4800元套餐，6次不中赔付1000元</view>
				</view>
				<view class="baleItem">
					<view class="baleItemTit">4800元低价套餐</view>
					<view class="baleItemInfo">超值4800元套餐，6次不中赔付1000元</view>
				</view>
				<view class="baleItem">
					<view class="baleItemTit">4800元低价套餐</view>
					<view class="baleItemInfo">超值4800元套餐，6次不中赔付1000元</view>
				</view>
				<view class="baleItem">
					<view class="baleItemTit">4800元低价套餐</view>
					<view class="baleItemInfo">超值4800元套餐，6次不中赔付1000元</view>
				</view>
				<view class="baleItem">
					<view class="baleItemTit">4800元低价套餐</view>
					<view class="baleItemInfo">超值4800元套餐，6次不中赔付1000元</view>
				</view>
				<view class="baleItem">
					<view class="baleItemTit">4800元低价套餐</view>
					<view class="baleItemInfo">超值4800元套餐，6次不中赔付1000元</view>
				</view>
				
			</view>

			<view class="btn">立即下单</view>


		</view>
	</view>
</template>

<script>
	export default{
		data(){
			return{
				
			}
		},
		methods:{
			close(){
				this.$emit('close', false)
			}
		}
	}
</script>

<style scoped lang="scss">
	.baleBox {
		width: 95%;
		height: auto;
		position: absolute;
		top: 50%;
		left: 50%;
		transform: translate(-50%,-50%);
		background-color: #f1f1f1;
		border-radius: 20rpx;
		padding: 0 30rpx 30rpx;
	}
	.baleTitBox{
		height: 88rpx;
		line-height: 88rpx;
		text-align: center;
		font-size: 36rpx;
		position: relative;
	}
	.close{
		width: 56rpx;
		height: 56rpx;
		position: absolute;
		top: 15rpx;
		right: 0;
	}
	
	.baleListBox{
		max-height: 70vh;
		overflow-y: auto;
	}
	.baleItem{
		background-color: #fff;
		border-radius: 10rpx;
		padding: 20rpx;
		margin-bottom: 20rpx;
	}
	
	
	.baleItemTit{
		color: #d9480f;
	}
	.baleItemInfo{
		margin-top: 20rpx;
		font-size: 26rpx;
		color: #999;
	}
		
	.actBaleItem{
		background-color:#a5d8ff ;
		color: #FFFFFF;
	}
	
	 .actBaleItem .baleItemTit,
	 .actBaleItem .baleItemInfo{
		color: #FFFFFF;
	}
	
	.btn{
		width: 60%;
		height: 86rpx;
		line-height: 86rpx;
		margin: 20rpx auto;
		text-align: center;
		border-radius: 50rpx;
		color: #fff;
		background: linear-gradient(to right, #66d9e8, #4dabf7);
	}
</style>
