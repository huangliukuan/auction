<template>
	<view class="message">
		<view class="msgItem">
			比如导航栏navbar组件，会自动处理不同端的状态栏；比如swiperaction组件，在app和微信小程序上会使用交互体验更好的wxs技术，但在不支持wxs的其他小程序端会使用js模拟类似效果。
		</view>
		<view class="msgItem all">
			比如导航栏navbar组件，会自动处理不同端的状态栏；比如swiperaction组件，在app和微信小程序上会使用交互体验更好的wxs技术，但在不支持wxs的其他小程序端会使用js模拟类似效果。
		</view>
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

		.message {
			width: 100%;
			min-height: 100%;
			background-color: #f1f1f1;
			padding: 20rpx;

			.msgItem {
				width: 100%;
				height: auto;
				line-height: 50rpx;
				background-color: #fff;
				border-radius: 10rpx;
				margin-bottom: 20rpx;
				padding: 10rpx 20rpx;
				font-size: 28rpx;
				color: #555;
			}

			.all {
				overflow: hidden;
				-webkit-line-clamp: 2;
				text-overflow: ellipsis;
				display: -webkit-box;
				-webkit-box-orient: vertical;
			}
		}
	}
</style>
