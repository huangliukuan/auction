<template>
	<view class="about">
		<image class="logo" src="../../static/logo.png" mode=""></image>
		<view class="name">车牌代拍</view>
		<view class="">v1.0.1版本</view>
		<view class="box">很开心，这么快就帮我拍到了，非常的神速呀，已经强烈推荐给同事了，希望他们也能在这里早点拍中</view>
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
