<template>
	<view class="questions">
		<view class="box p0 mb20" v-for="(item,index) of question" :key="index">
			<view class="flex p20 bb1">
				<view class="iconQ">Q</view>
				<view class="txtQ">{{item.title}}</view>
			</view>
			<view class="flex p20">
				<view class="iconA">A</view>
				<view class="txtA">{{item.desc}}</view>
			</view>
		</view>
	</view>
</template>

<script>
	export default{
		data(){
			return{
				
			}
		},
		props:{
			question:{
				type:Array,
				default:()=>[]
			}
		},
		methods:{
			
		}
	}
</script>

<style scoped lang="scss">
	.questions{
		min-height: 100%;
	}
	.iconQ,.iconA{
		width: 46rpx;
		height: 46rpx;
		line-height: 46rpx;
		text-align: center;
		background-color: #fd7e14;
		color: #fff;
		border-radius: 10rpx;
		margin-right: 10rpx;
	}
	.iconA{
		background-color: #ccc;
	}
	.txtA,.txtQ{
		flex: 1;
		font-size: 36rpx;
	}
	.txtA{
		line-height: 46rpx;
		font-size: 30rpx;
		color: #666;
	}
</style>
