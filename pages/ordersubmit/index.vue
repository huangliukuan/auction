<template>
	<view class="ordersubmit p20">
		<view class="orderTop box">
			<view class="orderTit">{{detail.tc_title}}</view>
			<view class="orderDetail">{{detail.tc_desc}}</view>
			<view class="priceBox">
				<view class="priceItem ">
					<view class="">代拍价格</view>
					<view class="price">￥{{detail.tc_price}}</view>
				</view>
				<view class="line"></view>
				<view class="priceItem">
					<view class="">赔付金额</view>
					<view class="price">{{detail.tc_num_desc}}</view>
				</view>
			</view>
		</view>

		<lk-tabbox :tablist='tablist' v-on:orderData="orderData"></lk-tabbox>

		<view class="fixedBtm">
			<view class="">拍中后您需要支付 <text class="allprice">￥{{detail.tc_price}}</text></view>
			<view class="btn" @click="orderSubmit" :data-id="detail.id">立即下单</view>
		</view>

	</view>
</template>

<script>
	import lkTabbox from "../../components/lk-tabbox/lk-tabbox.vue"

	export default {
		data() {
			return {
				detail: {},
				tablist: [{
					text: "订单信息",
					type: "sel"
				}, {
					text: "套餐介绍",
					type: "text"
				}, {
					text: "注意事项",
					type: "text"
				}],
				type: 'one',
				uid: uni.getStorageSync("user").id,
				team: [],
				tender: [],
				orderDatas: {
					teami: 0,
					tenderi: -1,
					invoice: false
				},
			}
		},
		onLoad(e) {
			this.type = e.type;
			this.getData(e.id);
		},
		methods: {
			async getData(id) {
				let t = this;
				await t.$utils.request({
					url: 'proDetail.html',
					data: {
						id,
						uid: t.uid
					}
				}).then((res) => {
					this.detail = res.detail;
					this.tablist[1].content = res.detail.tc_content;
					this.tablist[2].content = res.detail.tc_note;
					this.team = res.team;
					this.tender = res.tender;
					this.$Bus.$emit("teams", res.team)
					this.$Bus.$emit("tender", res.tender)
				})
			},
			orderData(e) {
				this.orderDatas = e;
			},
			async orderSubmit(e) {
				let t = this,
					d = t.orderDatas,
					pid = e.currentTarget.dataset.id;
					if ( !t.uid ) {
						uni.showToast({
							title: "请先登录",
							icon: 'none'
						})
						return false;
					}
				if (d.tenderi == -1) {
					uni.showToast({
						title: "请选择标书",
						icon: 'none'
					})
					return false;
				}
				
				uni.showModal({
					title: "提示",
					content: "确定下单？",
					async success(res) {
						if (res.confirm) {
							await t.$utils.request({
								url: 'makeOrder.html',
								method: "POST",
								data: {
									uid: t.uid,
									pid,
									teamid: t.team[d.teami].id,
									tenid: t.tender[d.tenderi].id,
									invoice: d.invoice ? "1" : "0"
								}
							}).then((res) => {
								uni.showToast({
									title: "下单成功！"
								})
								setTimeout(() => {
									uni.reLaunch({
										url: 'pages/myorder/index'
									})
								}, 2000)
							})
						}
					}
				})
			}
		},
		components: {
			lkTabbox
		}
	}
</script>

<style scoped lang="scss">
	.ordersubmit {
		padding-bottom: 140rpx;
	}

	.orderTop {
		line-height: 64rpx;
		text-align: center;
		font-size: 28rpx;
		color: #666;
		margin-bottom: 20rpx;
	}

	.orderTit {
		height: 64rpx;
		line-height: 64rpx;
		font-size: 36rpx;
		font-weight: bold;
		color: #e8590c;
		margin-bottom: 20rpx;
	}

	.priceBox {
		width: 100%;
		height: auto;
		display: flex;
		justify-content: space-between;
		margin-top: 20rpx;
		align-items: center;
	}

	.priceItem {
		width: 45%;
	}

	.line {
		width: 2rpx;
		height: 84rpx;
		margin: 0 4%;
		background-color: #ccc;
	}

	.price {
		font-size: 32rpx;
		font-weight: bold;
		color: #f76707;
	}

	.allprice {
		font-size: 42rpx;
		font-weight: bold;
		color: #e8590c;
	}
</style>
