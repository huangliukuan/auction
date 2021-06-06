<template>
	<view class="banner">
		<swiper class="swiper" 
		indicator-color="rgba(255, 255, 255, .3)"
		indicator-active-color="#ffffff"
		:autoplay="autoplay" 
		:indicator-dots="indicatorDots" 
		:circular="circular"  :style="{height:height+'rpx'}">
			<swiper-item class="swiperItem" v-for="(item,index) in swipers" :key="index">
				<image :src="url + item.img" mode=""></image>
			</swiper-item>
		</swiper>
	</view>
</template>

<script>
	export default {
		data(){
			return{
				swipers:[],
				url:this.$utils.url,
			}
		},
		props: {
			autoplay: {
				type: Boolean,
				default: false
			},
			circular:{
				type: Boolean,
				default: false
			},
			height:{
				type:Number,
				default:280
			},
			indicatorDots: {
				type: Boolean,
				default: false
			}
		},
		mounted() {
			this.$Bus.$on('swiper',(e)=>{
				this.swipers = e;
			})
			this.swipers = uni.getStorageSync('swiper');
		}
	}
</script>

<style scoped lang="scss">
	.banner{
		width: 100%;
		.swiperItem{
			width: 100%;
			height: 100%;
			image{
				width: 100%;
				height: 100%;
			}
		}
	}
</style>
