<template>
	<view class="box notict">
		<view class="iconfont trumpet" ></view>
		<swiper class="swiper" autoplay circular vertical interval="1500">
			<swiper-item class="swiperItem" v-for="(item,index) in notice" :key='index'>{{item}}</swiper-item>
		</swiper>
	</view>
</template>

<script>
	export default{
		data(){
			return{
				
			}
		},
		props:{
			notice:{
				type:Array,
				default:[]
			}
		},
		methods:{
			
		}
	}
</script>

<style scoped lang="scss">
	.notict{
		height: 86rpx;
		line-height: 46rpx;
		display: flex;
		margin: 20rpx 0;
	}
	.trumpet{
		color: $theme-color;
		margin-right: 10rpx;
	}
	.swiper{
		flex: 1;
		height: 66rpx;
		font-size: 28rpx;
	}
</style>
