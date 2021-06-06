<template>
	<view class="home">
		<lk-logo></lk-logo>
		<view class="p20">
			<view class="bannerBox">
				<lk-banner :autoplay="autoplay" :circular='circular' :indicatorDots="true"></lk-banner>
			</view>
			<lk-bale :bale="product"></lk-bale>
		</view>
		<lk-customer></lk-customer>
	</view>
</template>

<script>
	import lkLogo from "../../components/lk-logo/lk-logo.vue"
	import lkBanner from "../../components/lk-banner/lk-banner.vue"
	import lkBale from "../../components/lk-bale/lk-bale.vue"
	import lkCustomer from "../../components/lk-customer/lk-customer.vue"
	export default {
		data() {
			return {
				autoplay: true,
				circular: true,
				product:[],
			}
		},
		created() {
			this.getData();
		},
		methods: {
			async getData(){
				await this.$utils.request({
					url:"getProList.html"
				}).then((res)=>{
					this.product = res.product;
				})
			}
		},
		components: {
			lkLogo,
			lkBanner,
			lkBale,
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
