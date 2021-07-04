<template>
	<view class="baledetail p20">
		<view class="bannerBox">
			<lk-banner :autoplay="autoplay" :circular='circular' :indicatorDots="true"></lk-banner>
		</view>

		<view class="baledetailBox box">
			<view class="hort">热销</view>
			<view class="baledetailTit">{{detail.tc_title}} </view>
			<view class="baledetailInfo">{{detail.tc_desc}}</view>
		</view>
		
		
		<lk-tabbox v-if="type == 'one'" :tablist="tablist" :richTexts="richText" ></lk-tabbox>
		
		<view class="box p0" v-else>
			<view class="tit fb">
				<view class="">选择套餐</view>
				<view class="">累计186人委托</view>
			</view>
			<view class="p20">
				<view class="item fb actItm">
					<view class="">双标书8800元套餐</view>
					<view class="f28">每次赔付您 2 x 200 元 </view>
				</view>
				<view class="item fb">
					<view class="">双标书8800元套餐</view>
					<view class="f28">每次赔付您 2 x 200 元 </view>
				</view>
				<view class="item fb">
					<view class="">双标书8800元套餐</view>
					<view class="f28">每次赔付您 2 x 200 元 </view>
				</view>
			</view>
		</view>
		
		<lk-comment :comment="comment"></lk-comment>

		<view class="box moreBox">
			<view class="flex">
				<view class="iconfont news"></view>
				<view>常见问题</view>
			</view>
		</view>
		<lk-question :question="question"></lk-question>


		<view class="fixedBtm">
			<view class="">拍中后您需要支付 <text class="price">￥{{detail.tc_price}}</text></view>
			<view class="btn" @click="toPath" :data-id="detail.id">立即下单</view>
		</view>
	</view>
</template>

<script>
	import lkBanner from "../../components/lk-banner/lk-banner.vue"
	import lkTabbox from "../../components/lk-tabbox/lk-tabbox.vue"
	import lkComment from "../../components/lk-comment/lk-comment.vue"
	import lkQuestion from "../../components/lk-question/lk-question.vue"
	import lkBalelist from "../../components/lk-balelist/lk-balelist.vue"

	export default {
		data() {
			return {
				uid:uni.getStorageSync("user").id,
				type:'',
				autoplay: true,
				circular: true,
				tablist: [{
					text: "套餐介绍",
					type: "text",
					content:'',
				}, {
					text: "中标走势",
					type: "img",
					img:''
				},{
					text: "注意事项",
					type: "text",
					content:'',
				}],
				detail:{},
				comment:[],
				question:[],
				richText:''
			}
		},
		onLoad(o) {
			this.type = o.type;
			this.getData(o.id);
		},
		methods: {
			async getData(id){
				await this.$utils.request({
					url:"tcDetail.html",
					data:{
						id,
					}
				}).then((res)=>{
					this.detail = res.detail;
					this.tablist[0].content = res.detail.tc_content;
					this.richText = res.detail.tc_content;
					this.tablist[1].img = res.detail.trend;
					this.tablist[2].content = res.detail.tc_note;
					this.comment = res.comment;
					this.question = res.problem;
				})
			},
			toPath(e){
				uni.navigateTo({
					url:"pages/ordersubmit/index?id="+e.currentTarget.dataset.id+"&type="+this.type
				})
			},
		},
		components: {
			lkBanner,
			lkTabbox,
			lkComment,
			lkQuestion,
			lkBalelist
		}
	}
</script>

<style scoped lang="scss">
	uni-page-body {
		height: 100%;

		.baledetail {
			width: 100%;
			line-height: 100%;
			padding-bottom: 140rpx;
			background-color: #fff;
		}

		.bannerBox {
			border-radius: 10rpx;
			overflow: hidden;
			margin-bottom: 20rpx;
		}

		.baledetailBox {
			position: relative;
			overflow: hidden;
			margin-bottom: 20rpx;
		}

		.hort {
			position: absolute;
			top: 8rpx;
			right: -38rpx;
			z-index: 1;
			transform: rotate(45deg);
			font-size: 30rpx;
			background-color: #f76707;
			color: #fff;
			padding: 8rpx 40rpx;
		}

		.baledetailTit {
			line-height: 56rpx;
			font-size: 36rpx;
			font-weight: bold;
			color: #e8590c;
		}

		.baledetailInfo {
			font-size: 26rpx;
			color: #666;
			margin-top:20rpx;
		}

		.moreBox {
			margin-bottom: 20rpx;
			height: 108rpx;
			line-height: 68rpx;
			display: flex;
			justify-content: space-between;
			font-size: 36rpx;
		}

		.news {
			line-height: 68rpx;
			font-size: 36rpx;
			margin-right: 10rpx;
		}
		.price{
			font-size: 42rpx;
			font-weight: bold;
			color: #e8590c;
		}
		.item,.tit{
			height: 86rpx;
			line-height: 86rpx;
			color: #666;
			border-bottom: 1rpx solid #f1f1f1;
			padding: 0 20rpx;
		}
		.item{
			border: 1rpx solid ;
			border-color: #F1F1F1;
			margin-bottom: 20rpx;
			border-radius: 10rpx;
		}
		
		.actItm{
			color: #4dabf7;
			border-color: #74c0fc;
			background-color: #d0ebff;
		}
		
		
		.fb{
			display: flex;
			justify-content: space-between;
		}
	}
</style>
