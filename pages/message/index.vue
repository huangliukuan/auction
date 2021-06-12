<template>
	<view class="message">
		<view class="nodata"v-if="list.length<1">
			<image src="../../static/nodata.png" mode=""></image>
			<view class="">暂无消息</view>
		</view>
		<view class="msgItem all" v-for="(item,index) in list" :key="index">
			<view class="times">{{item.addtime}}</view>
			<view class="">{{item.content}}</view>
		</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				list:[]
			}
		},
		onShow() {
			this.getData()
		},
		methods: {
			async getData(){
				let _this = this;
				await _this.$utils.request({
					url:"notice.html"
				}).then((res)=>{
					_this.list = res;
				})
			}
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
			.times{
				text-align: right;
			}
		}
	}
</style>
