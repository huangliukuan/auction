<template>
	<view class="home">
		<lk-logo ></lk-logo>
		<view class="p20">
			<view class="bannerBox">
				<lk-banner :autoplay="autoplay" :circular='circular' :indicatorDots="true"></lk-banner>
			</view>
			<lk-notice :notice="notice"></lk-notice>
			<view class="box moreBox">
				<view class="moreItem">
					<view class="iconfont bale"></view>
					<view>精选套餐</view>
				</view>
				<view class="moreItem" @click="toTab" data-url="/pages/bale/index" >
					<view class="">更多</view>
					<view class="iconfont arrow"></view>
				</view>
			</view>
			
			<!-- <image  class="twoTender" src="https://i.loli.net/2021/06/01/fKOCzEVwL7vXHdP.jpg" mode="widthFix" @click="toPath" ></image> -->

			<lk-bale :bale="bale"></lk-bale>

			<view class="box moreBox">
				<view class="moreItem">
					<view class="iconfont team"></view>
					<view>优选团队</view>
				</view>
				<view class="moreItem" @click="toTab" data-url="/pages/team/index">
					<view class="">更多</view>
					<view class="iconfont arrow"></view>
				</view>
			</view>
			<lk-team :teamList='teamList'></lk-team>
			
			<lk-comment :comment="comment"></lk-comment>
			
			
			<lk-customer></lk-customer>
		</view>
	</view>
</template>

<script>
	import lkLogo from "../../components/lk-logo/lk-logo.vue"
	import lkBanner from "../../components/lk-banner/lk-banner.vue"
	import lkNotice from "../../components/lk-notice/lk-notice.vue"
	import lkBale from "../../components/lk-bale/lk-bale.vue"
	import lkTeam from "../../components/lk-team/lk-team.vue"
	import lkComment from "../../components/lk-comment/lk-comment.vue"
	import lkCustomer from "../../components/lk-customer/lk-customer.vue"

	export default {
		data() {
			return {
				autoplay: true,
				circular: true,
				notice:[],
				bale:[],
				teamList:[],
				comment:[],
			}
		},
		onShow() {
			this.getData()
		},
		methods: {
			async getData(){
				 await this.$utils.request({
					url:'getIndexData.html',
					method:"GET",
					data:{},
				}).then((res)=>{
					uni.setNavigationBarTitle({
						title:res.sys.sitename,
					})
					this.notice = res.notice;
					this.bale = res.product;
					this.teamList = res.team;
					this.comment = res.comment;
				})
			},
			toTab(e){
				uni.switchTab({
					url:e.currentTarget.dataset.url
				})
			},
			toPath(){
				uni.navigateTo({
					url:"/pages/baledetail/index?type=two"
				})
			}
		},
		components: {
			lkLogo,
			lkBanner,
			lkBale,
			lkTeam,
			lkComment,
			lkCustomer,
			lkNotice
		}
	}
</script>

<style scoped lang="scss">
	.home {
		width: 100%;
		height: auto;
	}

	.bannerBox {
		border-radius: 10rpx;
		overflow: hidden;
		margin-bottom: 20rpx;
	}

	.moreBox {
		margin-bottom: 20rpx;
		height: 108rpx;
		line-height: 68rpx;
		display: flex;
		justify-content: space-between;
		font-size: 36rpx;
		font-weight: bold;
		vertical-align: middle;
	}

	.bale,
	.team {
		line-height: 68rpx;
		color: #3bc9db;
		font-size: 36rpx;
		margin-right: 10rpx;
	}

	.team {
		color: #38d9a9;
	}

	.moreItem {
		display: flex;
	}

	.moreItem:last-child {
		color: #999;
		font-size: 32rpx;
		font-weight: normal;
	}
	
	.twoTender{
		width: 100%;
		margin-bottom: 20rpx;
		border-radius: 10rpx;
		overflow: hidden;
		box-shadow: 0 4rpx 6rpx 6rpx #e1e1e1;
	}
	
</style>
