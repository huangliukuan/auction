<template>
	<view class="customer">
		<view class="fixedImg">
			<image @click="ctmShow" src="../../static/weixin.png" mode=""></image>
		</view>
		
		<view class="mask" v-if="ctmIsShow">
			<view class="cBox">
				<view class="tit">专属客服</view>
				<view class="c6">长按扫码添加</view>
				<image class="code" :src="url + sys.kefu_code" mode=""></image>
				<view class="c6">微信号：{{sys.kefu_wx}}</view>
			</view>
			<image @click="ctmclose" class="ctmClose" src="../../static/close.png" mode=""></image>
		</view>
	</view>
</template>

<script>
	export default{
		data(){
			return{
				ctmIsShow:false,
				url:this.$utils.url,
				sys:{},
			}
		},
		created() {
			this.sys = uni.getStorageSync('sys')
		},
		methods:{
			ctmclose(){
				this.ctmIsShow =false;
			},
			ctmShow(){
				this.ctmIsShow =true;
			}
		},
		components:{
			
		}
	}
</script>

<style scoped lang="scss">
	.fixedImg{
		width: 100rpx;
		height: 100rpx;
		border-radius: 50%;
		background-color: #fff;
		position: fixed;
		top: 80%;
		right: 20rpx;
		overflow: hidden;
		
		
	}
	image{
		width: 100%;
		height: 100%;
	}
	.cBox{
		width: 600rpx;
		height:600rpx;
		line-height: 64rpx;
		padding: 20rpx;
		background-color: #fff;
		position: absolute;
		top: 45%;
		left: 50%;
		transform: translate(-50%,-50%);
		text-align: center;
		border-radius: 14rpx;
	}
	.c6{
		color: #666;
	}
	.code{
		width: 360rpx;
		height: 360rpx;
	}
	.ctmClose{
		display: block;
		width: 64rpx;
		height: 64rpx;
		position: absolute;
		top: calc(50% + 300rpx);
		left: calc(50% - 32rpx);
	}
</style>
