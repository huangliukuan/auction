<template>
	<view class="tenders">
		<view class="tabTop">
			<view :class="ai == 0 && 'actTab'" @click="changeTab" data-status="0">审核中</view>
			<view :class="ai == 1 && 'actTab'" @click="changeTab" data-status="1">有效</view>
			<view :class="ai == 2 && 'actTab'" @click="changeTab" data-status="2">失效</view>
		</view>

		<view class="p20" v-if="list.length>0">
			<view class="box tItems" v-for="(item,index) in list" :key='index'>
				<view class="icon" v-if="item.status == 0">审核中</view>
				<view class="icon" :class="item.status == 1 ? 'green' : ''" v-if="item.status == 1">有效</view>
				<view class="icon" :class="item.status == 2 ? 'gray' : ''" v-if="item.status == 2">失效</view>
				<view class="tItem"> <text>姓名：</text> {{item.real_name}} </view>
				<view class="tItem"> <text>手机号：</text> {{item.mobile}} </view>
				<view class="tItem"> <text>投标账号：</text> {{item.tbcard}} </view>
			</view>
		</view>


		<view class="nodata" v-else>
			<image src="../../static/nodata.png" mode=""></image>
			<view class="">暂无标书</view>
		</view>

		<view class="fixedBtm">
			<view class="btn addT" @click="add">添加标书</view>
		</view>


		<lk-addtender v-on:close='close' v-if="isAdd"></lk-addtender>

	</view>
</template>

<script>
	import lkAddtender from "../../components/lk-addtender/lk-addtender.vue"

	export default {
		data() {
			return {
				isAdd: false,
				ai: 0,
				uid: uni.getStorageSync("user").id,
				list: []
			}
		},
		created() {
			this.getData();
		},
		methods: {
			async getData() {
				uni.showLoading({
					title:"加载中..."
				})
				await this.$utils.request({
					url: 'tenderList.html',
					data: {
						uid: this.uid,
						status: this.ai,
					}
				}).then((res) => {
					this.list = res;
					uni.hideLoading()
				})
			},
			changeTab(e) {
				this.ai = e.currentTarget.dataset.status;
				this.getData()
			},
			close(e) {
				this.isAdd = e;
				this.getData()
			},
			add() {
				this.isAdd = true;
			}
		},
		components: {
			lkAddtender
		}
	}
</script>

<style scoped lang="scss">
	uni-page-body {
		height: 100%;

		.tenders {
			width: 100%;
			min-height: 100%;
			background-color: #f1f1f1;
			padding-bottom: 140rpx;

			.tabTop {
				height: 96rpx;
				line-height: 96rpx;
				display: flex;
				justify-content: space-around;
				align-items: center;
				background-color: #fff;
			}

			.actTab {
				color: #007AFF;
				border-bottom: 4rpx solid #007AFF;
			}

			.tItems {
				position: relative;
				margin-bottom: 20rpx;

				.icon {
					position: absolute;
					top: 0;
					right: 0;
					padding: 10rpx 16rpx;
					border-bottom-left-radius: 20rpx;
					background-color: #f76707;
					color: #fff;
					font-size: 28rpx;
				}
				.green{
					background-color: #69db7c;
				}
				.gray{
					background-color: #ccc;
				}
			}

			.tItem {
				line-height: 54rpx;
				letter-spacing: 2rpx;

				text {
					font-size: 28rpx;
					font-weight: bold;
				}
			}

			.addT {
				width: 80%;
				margin: 0 auto;
				text-align: center;
			}

		}
	}
</style>
