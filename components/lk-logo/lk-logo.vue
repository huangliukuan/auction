<template>
	<view class="logo">
		<view class="logoImg">
			<image :src="url + logo" mode="scaleToFill"></image>
		</view>
		<view class="telBox" @click="toCall" :data-tel='tel'>
			<view class="iconfont tel tels"></view>
			<view  >{{tel}}</view>
		</view>
	</view>
</template>

<script>
	export default{
		data(){
			return{
				url:this.$utils.url,
				logo:'',
				tel:''
			}
		},
		mounted() {
			this.$Bus.$on('sys',(e)=>{
				this.logo = e.logo;
				this.tel = e.kefu_tel;
			})
			let sys =  uni.getStorageSync('sys');
			this.logo = sys.logo;
			this.tel = sys.kefu_tel;
		},
		methods:{
			toCall(e){
				uni.makePhoneCall({
					phoneNumber:e.currentTarget.dataset.tel
				})
			}
		}
	}
</script>

<style scoped lang="scss">
	.logo {
		width: 100%;
		height: 120rpx;
		line-height: 80rpx;
		padding: 20rpx;
		display: flex;
		justify-content: space-between;
	}

	.logoImg {
		width: 160rpx;
		height: 74rpx;
	}

	.logoImg image {
		width: 100%;
		height: 100%;
	}

	.telBox {
		display: flex;
		font-size: 36rpx;
		font-weight: bold;
		color: #fd7e14;
	}

	.tels {
		margin-right: 10rpx;
		animation: shake 2s ease-in-out infinite;
	}

	@keyframes shake {
		0% {
			transform: rotate(10deg);
		}
		25% {
			transform: rotate(25deg);
		}
		50% {
			transform: rotate(-10deg);
		}
		75% {
			transform: rotate(25deg);
		}
		0% {
			transform: rotate(10deg);
		}
	}
</style>
