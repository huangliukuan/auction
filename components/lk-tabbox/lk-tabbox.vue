<template>
	<view class="tabbox box p0">
		<view class="tabs">
			<view class="tebItem" :class="acttab==index ? 'actTab' :'' " v-for="(item,index) in tablist" :key="index"
				:data-index="index" :data-type="item.type" @click="changTab">{{item.text}}</view>
		</view>
		<view class="tabTxt p20" v-if=" type == 'text' ">
			<rich-text :nodes="richText"></rich-text>
		</view>


		<view class="tabImg" v-if=" type == 'img' ">
			<view class="tabImgLeft">
				<view class="tabNum">0</view>
				<view class="tabNum">10</view>
				<view class="tabNum">20</view>
				<view class="tabNum">30</view>
				<view class="tabNum">40</view>
			</view>
			<view class="tabImgRight">
				<image :src="trend" mode="scaleToFill"></image>
				<view class="tabImgMonth">
					<view class="tabMonth">4月</view>
					<view class="tabMonth">5月</view>
					<view class="tabMonth">6月</view>
					<view class="tabMonth">7月</view>
					<view class="tabMonth">8月</view>
					<view class="tabMonth">9月</view>
				</view>
			</view>
		</view>


		<view class="tabSel" v-if=" type == 'sel' ">
			<view class="tabSelItem">
				<view class="label">团队</view>
				<view class="tabSeltxt flex">
					<picker mode="selector" :range="teamArr" @change="teamChange">
						<view>{{teamArr[teami]}}</view>
					</picker>
					<view class="iconfont arrow"></view>
				</view>
			</view>
			<view class="tabSelItem">
				<view class="label">标书</view>
				<view class="tabSeltxt flex">
					<view class="" @click="show">{{tenderCode == ''? '选择标书' : tenderCode}}</view>
					<view class="iconfont arrow"></view>
				</view>
			</view>
			<view class="tabSelItem">
				<view class="label">赔付说明</view>
				<view class="tabSeltxt flex">
					<view class="">{{payoutTxt}}</view>
				</view>
			</view>
			<view class="tabSelItem">
				<view class="label">开发票</view>
				<view class="tabSeltxt flex">
					<switch class="switch" :checked="invoice" @change="openInvoice"></switch>
				</view>
			</view>
			<view class="tabSelItem">
				<view class="label">合同协议</view>
				<view class="tabSeltxt flex">
					<view class="" @click="toPath" >下单标书已阅读并同意《代拍委托协议》</view>
					<view class="iconfont arrow"></view>
				</view>
			</view>
		</view>

		<lk-tender v-on:cancel='cancel' v-on:submitTender="submitTender" v-if="showTender" :list="tenderList">
		</lk-tender>

	</view>
</template>

<script>
	import lkTender from "../lk-tender/lk-tender.vue"

	export default {
		data() {
			return {
				url: this.$utils.url,
				acttab: 0,
				type: "",
				teamArr: [],
				teams: [],
				teami: 0,
				tenderList: [],
				tenderi: -1,
				tenderCode: '',
				invoice: false,
				showTender: false,
				trend: '',
				richText: ""
			}
		},
		props: {
			tablist: {
				type: Array,
				default: () => []
			},
			richTexts: {
				type: String,
				default: ''
			},
			tid:{
				type:String,
				default:""
			},
			payoutTxt:{
				type:String,
				default:""
			}
		},
		watch: {
			richTexts(e) {
				this.richText = e;
			},
			tid(e){
				
			}
		},
		created() {
			this.type = this.tablist[0].type
		},
		mounted() {
			// 获取团队
			this.$Bus.$on('teams', (e) => {
				e.forEach((item,index) => {
					if(this.tid != '' && this.tid == item.id){
						console.log(12132);
						this.teami  = index;
					}
					this.teamArr.push(item.team_name);
					this.teams.push(item);
				})
			});
			this.$Bus.$on("tender", (e) => {
				this.tenderList = e
			});
		},
		methods: {
			changTab(e) {
				this.acttab = e.currentTarget.dataset.index;
				this.type = e.currentTarget.dataset.type;
				if (this.type == 'text') {
					this.richText = this.tablist[this.acttab].content;
				} else if (this.type == 'img') {
					this.trend = this.url + this.tablist[this.acttab].img;
				}
			},
			// 选择团队
			teamChange(e) {
				this.teami = e.detail.value;
				this.orderData();
			},
			// 显示标书
			show() {
				this.showTender = true;
			},

			// 标书确认
			submitTender(e) {
				this.tenderi = e;
				this.tenderCode = this.tenderList[e].tbcard;
				this.showTender = false;
				this.orderData();
			},
			// 标书添加取消
			cancel(e) {
				this.showTender = e;
			},
			// 开发票
			openInvoice(e) {
				this.invoice = e.detail.value;
				this.orderData();
			},

			orderData() {
				let teami = this.teami,
					tenderi = this.tenderi,
					invoice = this.invoice ;
					this.$emit('orderData', {teami,tenderi,invoice})
			},
			toPath(){
				uni.navigateTo({
					url:"/pages/rich/index?t=3"
				})
			},
		},

		components: {
			lkTender
		}
	}
</script>

<style scoped lang="scss">
	.tabs {
		width: 100%;
		height: 108rpx;
		line-height: 108rpx;
		display: flex;
		justify-content: space-around;
		font-size: 36rpx;
		color: #666;
		border-bottom: 1rpx solid #f1f1f1;
	}

	.actTab {
		color: #74c0fc;
	}

	.tabTxt {
		width: 100%;
		padding: 40rpx;
		font-size: 20rpx 30rpx;
		color: #333;
		line-height: 56rpx;
	}

	.tabImg {
		width: 100%;
		height: auto;
		padding: 30rpx 20rpx;
		display: flex;
		font-size: 28rpx;
		color: #666;
	}

	.tabImgLeft {
		width: 56rpx;
		height: 360rpx;
		display: flex;
		flex-direction: column-reverse;
		justify-content: space-between;
		align-items: flex-end;
		margin-right: 10rpx;
	}

	.tabImgRight {
		flex: 1;

		image {
			width: 100%;
			height: 360rpx;
		}
	}

	.tabImgMonth {
		display: flex;
		justify-content: space-between;
	}

	.tabSelItem {
		height: 96rpx;
		line-height: 96rpx;
		padding: 0 20rpx;
		display: flex;
		justify-content: space-between;
		border-bottom: 1px solid #F1F1F1;
	}

	.tabSeltxt {
		font-size: 28rpx;
		color: #666;
	}

	.switch {
		transform: scale(0.6);
	}
</style>
