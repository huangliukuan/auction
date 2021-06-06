<template>
	<view class="feedback">
		<view class="box">
			<textarea class="textArea" value="" maxlength="500" placeholder="请输入您要反馈的问题(5-500字以内)" />
		</view>
		<view class="box feedImg">
			<view class="feedbackTit">请提供问题的截图或照片（选填）</view>
			<view class="feedImgBox">
				<view class="imgItem">
					<image class="close" src="../../static/close1.png" mode=""></image>
					<image src="../../static/logo.png" mode=""></image>
				</view>
				<view class="addImg">
					<view class="iconfont camera"></view>
					<view class="">添加图片</view>
				</view>
			</view>
		</view>
		
		<view class="submit">提交 </view>
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

		.feedback {
			width: 100%;
			min-height: 100%;
			background-color: #fff;
			padding: 20rpx;

			.textArea {
				width: 100%;
				font-size: 28rpx;
				padding: 5rpx;
			}

			.feedImg {
				margin-top: 20rpx;
				color: #333;
			}

			.feedImgBox {
				display: flex;
				flex-wrap: wrap;
			}
			.addImg,
			.imgItem {
				width: 22%;
				height: 160rpx;
				position: relative;
				
				margin-top: 20rpx;
				margin-right: 20rpx;
				
				&:nth-child(4n){
					margin-right: 0;
				}
				
				image {
					width: 100%;
					height: 100%;
					border-radius: 10rpx;
					overflow: hidden;
				}
				
				.close {
					width: 46rpx;
					height: 46rpx;
					position: absolute;
					z-index: 1;
					top: 0;
					right: 0;
					transform: translate(40%,-40%);
				}
			}
			.addImg{
				line-height: 54rpx;
				text-align: center;
				margin-right: 0;
				border-radius: 10rpx;
				overflow: hidden;
				background-color: #f1f1f1;
				color: #999;
				padding: 20rpx 0;
			}
			.submit{
				width: 60%;
				height: 64rpx;
				line-height: 64rpx;
				margin: 0 auto;
				border-radius: 50rpx;
				background-color:#4dabf7 ;
				color: #fff;
				text-align: center;
				margin-top: 120rpx;
			}
		}
	}
</style>
