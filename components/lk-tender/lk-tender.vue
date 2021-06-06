<template>
	<view class="tenders">
		<view class="mask">
			<view class="tender">
				<view class="tenderTit">选择标书</view>
				<scroll-view scroll-y class="p20 tItemBox" v-if="list.length>0">
					<view class="box tItems" :class="actItem == index ? 'act':''" @click="confirm" :data-index="index" v-for="(item,index) in list" :key='index'>
						<view class="tItem"> <text>姓名：</text> {{item.real_name}} </view>
						<view class="tItem"> <text>手机号：</text> {{item.mobile}} </view>
						<view class="tItem"> <text>投标账号：</text> {{item.tbcard}} </view>
					</view>
				</scroll-view>



				<view class="nodata" v-else>暂无标书</view>




				<view class="fixedBtm">
					<view class="btn cancel" @click="cancel">取消</view>
					<view class="btn" @click="submitTender">确定</view>
				</view>
			</view>
		</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				actItem:-1,
			}
		},
		props: {
			list: {
				type: Array,
				default: () => []
			}
		},
		methods: {
			cancel() {
				this.$emit("cancel", false)
			},
			confirm(e){
				this.actItem = e.currentTarget.dataset.index;
			},
			submitTender(){
				this.$emit("submitTender",this.actItem);
			}
		}
	}
</script>

<style scoped lang="scss">
	.tender {
		width: 70%;
		height: 100vh;
		background-color: #fff;
		position: absolute;
		top: 0;
		right: 0;
		transform: translate(100%, 0);
		animation: move 0.5s linear forwards;
		overflow: hidden;
	}

	.tenderTit {
		width: 100%;
		height: 120rpx;
		line-height: 120rpx;
		padding: 0 20rpx;
		font-size: 36rpx;
		box-shadow: 0 4rpx 6rpx 6rpx #e1e1e1;
	}

	.fixedBtm .btn.cancel {
		background: #ccc;
	}

	.tItemBox {
		height: calc(100vh - 250rpx) ;
		box-sizing: border-box;
	}
	
	.tItems {
		position: relative;
		margin-bottom: 20rpx;
	}

	.tItem {
		line-height: 54rpx;
		letter-spacing: 2rpx;

		text {
			font-size: 28rpx;
			font-weight: bold;
		}
	}
	
	.act{
		background-color: #00BFFF;
		color: #fff;
	}


	@keyframes move {
		0% {
			transform: translate(100%, 0);
		}

		100% {
			transform: translate(0, 0);
		}
	}
</style>
