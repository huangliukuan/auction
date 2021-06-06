<template>
	<view class="home">
		<lk-logo></lk-logo>
		<view class="p20">
			<view class="bannerBox">
				<lk-banner :autoplay="autoplay" :circular='circular' :indicatorDots="true"></lk-banner>
			</view>

			<lk-team :teamList="team"></lk-team>

		</view>
		<lk-customer></lk-customer>
	</view>
</template>

<script>
	import lkLogo from "../../components/lk-logo/lk-logo.vue"
	import lkBanner from "../../components/lk-banner/lk-banner.vue"
	import lkTeam from "../../components/lk-team/lk-team.vue"
	import lkCustomer from "../../components/lk-customer/lk-customer.vue"
	export default {
		data() {
			return {
				autoplay: true,
				circular: true,
				team:[],
			}
		},
		onShow() {
			this.getData();
		},
		methods: {
			async getData(){
				this.$utils.request({
					url:"getTeamList.html",
				}).then((res)=>{
					console.log(res);
					this.team = res.team;
				})
			} 
		},
		components: {
			lkLogo,
			lkBanner,
			lkTeam,
			lkCustomer
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
</style>
