<template>
	<view class="guide">
		<lk-logo></lk-logo>
		<view class="p20">
			<view class="box guideBox">
				<view class="guideItem fw">常见问题</view>
				<view class="guideItem" v-for="(item,index) in proList" :key="index" @click="toPath" :data-url="'/pages/question/index?id='+item.id">
					<view class="">{{item.type_name}}</view>
					<view class="iconfont arrow"></view>
				</view>
			</view>
			<view class="box guideBox">
				<view class="guideItem fw">购买标书及平台操作指南</view>
				<view class="guideItem"  v-for="(item,index) in czList" :key="index" @click="toPath"  :data-url="'/pages/rich/index?t=1&id='+item.id">
					<view class="">{{item.cont_title}}</view>
					<view class="iconfont arrow"></view>
				</view>
			</view>
			<view class="box guideBox">
				<view class="guideItem" @click="toPath" :data-url="'/pages/rich/index?t=1&id='+pai.id">
					<view class="">{{pai.cont_title}}</view>
					<view class="iconfont arrow"></view>
				</view>
			</view>
		</view>
	
	</view>
</template>

<script>
	import lkLogo from "../../components/lk-logo/lk-logo.vue"
	
	export default{
		data(){
			return {
				proList:[],
				czList:[],
				pai:[],
			}
		},
		onShow() {
			this.getData()
		},
		methods:{
		 async getData(){
				await this.$utils.request({
					url:'guideList.html',
				}).then((res)=>{
					this.proList = res.proList;
					this.czList = res.czList;
					this.pai = res.pai;
				})
			},
			toPath(e){
				uni.navigateTo({
					url:e.currentTarget.dataset.url
				})
			}
		},
		components:{
			lkLogo
		}
	}
	
</script>

<style scoped lang="scss">
	.guide{
		width: 100%;
	}
	.guideBox{
		padding: 0;
		margin-top: 20rpx;
	}
	.guideItem{
		width: 100%;
		height: 96rpx;
		line-height: 96rpx;
		padding: 0 20rpx;
		display: flex;
		justify-content: space-between;
		border-bottom: 1rpx solid #ddd;
		color: #333;
	}
</style>
