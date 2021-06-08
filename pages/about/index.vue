<template>
	<view class="about">
		<image class="logo" :src="url + about.logo" mode=""></image>
		<view class="name">{{about.sitename}}</view>
		<view class="">v1.0.1版本</view>
		<view class="box">
			<rich-text :nodes="about.protocol"></rich-text>
		</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				about:{},
				url:this.$utils.url
			}
		},
		onShow() {
			this.about = uni.getStorageSync("sys");
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

		.about {
			width: 100%;
			line-height: 56rpx;
			min-height: 100%;
			background-color: #fff;
			padding: 100rpx 20rpx;
			text-align: center;
		}

		.logo {
			width: 260rpx;
			height: 260rpx;
			border-radius: 50rpx;
			overflow: hidden;
		}

		.name {
			height: 64rpx;
			line-height: 64rpx;
			font-size: 36rpx;
			color: #74c0fc;
		}
	}
</style>
