<template>
	<view class="commentBox box mb20">
		<view class="moreBox">
			<view class="moreItem">
				<view class="iconfont news"></view>
				<view>用户评价</view>
			</view>
		</view>

		<view class="commentList"  v-for="(item,index) in comment" :key="index">
			<view class="avatarBox">
				<image class="avatar" :src="url + item.avatar" mode=""></image>
			</view>
			<view class="commentInfo">
				<view class="commentTop">
					<view class="username">{{item.username}}</view>
					<view class="time">{{item.addtime}}</view>
				</view>
				<view class="starBox">
					<text class="iconfont" :class="item.star>0  ? 'star' : '' " ></text>
					<text class="iconfont" :class="item.star>1 ? 'star' : '' " ></text>
					<text class="iconfont" :class="item.star>2  ? 'star' : '' " ></text>
					<text class="iconfont" :class="item.star>3  ? 'star' : '' " ></text>
					<text class="iconfont" :class="item.star>4  ? 'star' : '' " ></text>
					
				</view>
				<view class="commentTxt">{{item.content}}</view>
				<view class="imgBox">
					<image @click="showBigImg" :src="url + item.img" :data-src="url + item.img" mode="aspectFill"></image>
				</view>
			</view>
		</view>
		
		<view class="mask p20" v-if="show" @click="hideImg">
			<image class="bigImg" :src="bigImg" mode="aspectFit"></image>
		</view>
		
	</view>
</template>

<script>
	export default{
		data(){
			return {
				show:false,
				bigImg:'',
				url:this.$utils.url,
			}
		},
		props:{
			comment:{
				type:Array,
				default:()=>[]
			}
		},
		methods:{
			showBigImg(e){
				this.bigImg = e.currentTarget.dataset.src;
				this.show = true;
			},
			hideImg(){
				this.show = false;
			}
		}
	}
</script>

<style scoped lang="scss">
	.commentBox {
		padding: 0;
		margin-top: 20rpx;
	}

	.moreBox {
		height: 88rpx;
		padding: 20rpx;
		display: flex;
		justify-content: space-between;
		font-size: 36rpx;
		font-weight: bold;
		vertical-align: middle;
		border-bottom: 1rpx solid #f1f1f1;
	}

	.moreItem {
		display: flex;
	}

	.news {
		line-height: 58rpx;
		font-size: 36rpx;
		margin-right: 10rpx;
	}

	.commentList {
		width: 100%;
		padding: 20rpx;
		display: flex;
		justify-content: flex-start;
		border-bottom: 1rpx solid #f1f1f1;
	}

	.avatarBox {
		width: 84rpx;
		margin-right: 10rpx;
		.avatar {
			width: 84rpx;
			height: 84rpx;
			border-radius: 50%;
			overflow: hidden;
		}
	}
	.commentInfo{
		flex: 1;
		font-size: 28rpx;
		color: #333;
	}
	.commentTop{
		width: 100%;
		display: flex;
		justify-content: space-between;
		
	}
	.username{
		font-size: 32rpx;
	}
	.time{
		color: #666;
		font-size: 26rpx;
	}
	.starBox{
		margin-top: 10rpx;
		text{
			margin-right: 6rpx;
			color:#fd7e14;
		}
	}
	.commentTxt{
		margin-top: 20rpx;
		line-height: 46rpx;
	}
	.imgBox{
		width: 100%;
		height: 400rpx;
		margin-top: 10rpx;
		image{
			width: 100%;
			height: 100%;
		}
	}
		
	.bigImg{
		width: 100%;
		height: 100%;
	}
	
</style>
