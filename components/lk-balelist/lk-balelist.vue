<template>
	<view class="mask p20 balelist">
		<view class="baleBox">
			<view class="baleTitBox">
				<view class="baleTit">选择套餐</view>
				<image class="close" @click="close" src="../../static/close1.png" mode=""></image>
			</view>
			<view class="baleListBox">
				<view class="baleItem" :class="selID == item.id ? 'actBaleItem':'' "  @click="selBale" :data-id="item.id" v-for="(item,index) in list" :key="index">
					<view class="baleItemTit">{{item.tc_title}}</view>
					<view class="baleItemInfo">{{item.tc_desc}}</view>
				</view>
			</view>

			<view class="btn" @click="toPath" >立即下单</view>


		</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				list:[],
				selID:0,
			}
		},
		props:{
			tid:{
				type:String,
				default:0
			}
		},
		mounted() {
			this.getData()
		},
		methods: {
			async getData() {
				let _this = this;
				await _this.$utils.request({
					url: 'tcList.html'
				}).then((res)=>{
					_this.list =res;
				})
			},
			
			selBale(e){
				this.selID  = e.currentTarget.dataset.id;
			},
			
			toPath(){
				if(this.selID == 0){
					uni.showToast({
						title:"请选择套餐",
						icon:"none"
					})
					return false;
				}
				uni.navigateTo({
					url:`/pages/ordersubmit/index?id=${this.selID}&tid=${this.tid}&type=one`
				})
			},
			
			close() {
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
		transform: translate(-50%, -50%);
		background-color: #f1f1f1;
		border-radius: 20rpx;
		padding: 0 30rpx 30rpx;
	}

	.baleTitBox {
		height: 88rpx;
		line-height: 88rpx;
		text-align: center;
		font-size: 36rpx;
		position: relative;
	}

	.close {
		width: 56rpx;
		height: 56rpx;
		position: absolute;
		top: 15rpx;
		right: 0;
	}

	.baleListBox {
		max-height: 70vh;
		overflow-y: auto;
	}

	.baleItem {
		background-color: #fff;
		border-radius: 10rpx;
		padding: 20rpx;
		margin-bottom: 20rpx;
	}


	.baleItemTit {
		color: #d9480f;
	}

	.baleItemInfo {
		margin-top: 20rpx;
		font-size: 26rpx;
		color: #999;
	}

	.actBaleItem {
		background-color: #a5d8ff;
		color: #FFFFFF;
	}

	.actBaleItem .baleItemTit,
	.actBaleItem .baleItemInfo {
		color: #FFFFFF;
	}

	.btn {
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
